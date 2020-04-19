<template>
    <div class="p-ac p-ac--crafting">
        <Layout>
            <div class="crafting-result">
                <CraftCard
                    v-for="craft in crafts"
                    :key="craft.name"
                    :image="craft.image"
                    :name="craft.name"
                    :materials="craft.materials"
                />
            </div>
        </layout>
    </div>
</template>

<style lang="scss">
  @import 'crafting.scss';
</style>

<script async src="https://www.googletagmanager.com/gtag/js?id=G-LV32JQMCF3"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-LV32JQMCF3');
</script>

<script>
    import Layout from '@/layouts/Default.vue'
    import CraftCard from '@/components/Card/CraftCard.vue'

    import SeoService from '@/services/seoService'
    import CraftingService from '@/services/games/ac/crafting.service'
    const SEO_PAGE_DATA = new SeoService({
        title: 'Recetas DIY - Nook Inc',
        description: 'Listado de recetas del juego Animal Crossing New Horizons Interactivo'
    })

    export default {
        name: 'Home',
        components: {
            Layout,
            CraftCard
        },
        data () {
            return {
                crafts: this.getCrafts()
            }
        },
        methods: {
            getCrafts () {
                return new CraftingService({}).getCrafts()
            }
        },
        head () {
            return SEO_PAGE_DATA.getMetas()
        }
    }
</script>
