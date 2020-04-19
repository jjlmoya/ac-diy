import MATERIALS from '@/data/ac/materials.data'
import CATEGORY from '@/data/ac/category.data'
import SERIES from '@/data/ac/series.data'

const MOUTH_LEFT_GREEN = {
    name: 'Hoja de Boca Verde',
    image: 'AccessoryMouthLeafGreen.png',
    height: 1,
    width: 1,
    category: [CATEGORY.CLOTH],
    serie: SERIES.GRASS,
    materials: [{
        ...MATERIALS.HERB,
        quantity: '?'
    }]
}

export default [
    MOUTH_LEFT_GREEN
]
