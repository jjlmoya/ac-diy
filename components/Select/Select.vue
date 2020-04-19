<template>
    <div class="filter-select">
        <select v-model="selected" class="filter-select__serie" @change="onChangeSeries($event)">
            <option :if="!selected" value="">
                ---------
            </option>
            <option v-for="serie in series" :key="serie.id" :value="serie.id" :selected="selected === serie.id">
                {{ serie.name }}
            </option>
        </select>
    </div>
</template>

<style lang="scss">
  @import 'select.scss';
</style>
<script>
    import SeriesService from '@/services/games/ac/series.service'

    export default {
        name: 'SelectFilter',
        components: {},
        props: {
            selected: {
                type: String,
                default: ''
            }
        },
        data () {
            return {
                series: this.getSeries()
            }
        },
        methods: {
            getSeries () {
                return new SeriesService().getSeries()
            },
            onChangeSeries (event) {
                window.location.href = '/serie/' + event.target.value
            }
        }
    }
</script>
