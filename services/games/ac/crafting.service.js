import CRAFTS from '@/data/ac/craft.data'

export default class CraftingService {
    constructor ({ category, serie }) {
        this.crafts = CRAFTS
        this.category = category
        this.serie = serie
    }

    getCrafts () {
        if (this.serie) {
            console.log(this.crafts)
            this.crafts = this.crafts.filter(craft => craft.serie && craft.serie.id === this.serie)
        }
        return this.crafts
    }
}
