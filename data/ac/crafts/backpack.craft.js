import MATERIALS from '@/data/ac/materials.data'
import CATEGORY from '@/data/ac/category.data'
import SERIES from '@/data/ac/series.data'

const BACKPACK_GRASS = {
    name: 'Mochila de Mimbre',
    image: 'BagBackpackGrass0.png',
    height: 1,
    width: 1,
    category: [CATEGORY.CLOTH],
    serie: 'grass',
    materials: [{
        ...MATERIALS.HERB,
        quantity: 20
    }]
}

const BACKPACK_WOOD = {
    name: 'BACKPACK_WOOD',
    image: 'BagBackpackWood0.png',
    height: 1,
    width: 1,
    category: [CATEGORY.CLOTH],
    serie: 'wood',
    materials: []
}

const BACKPACK_ACORN = {
    name: 'BACKPACK_ACORN',
    image: 'BagShoulderAcorn0.png',
    height: 1,
    width: 1,
    category: [CATEGORY.CLOTH],
    serie: 'acorn',
    materials: []
}

const BACKPACK_MAPLE = {
    name: 'BACKPACK_MAPLE',
    image: 'BagShoulderMaple0.png',
    height: 1,
    width: 1,
    category: [CATEGORY.CLOTH],
    serie: SERIES.MAPLE,
    materials: []
}

const BACKPACK_SHELL = {
    name: 'BACKPACK_SHELL',
    image: 'BagShoulderShell0.png',
    height: 1,
    width: 1,
    category: [CATEGORY.CLOTH, CATEGORY.SHELL],
    serie: SERIES.SHELL,
    materials: []
}

const BACKPACK_SNOW = {
    name: 'BACKPACK_SHELL',
    image: 'BagShoulderSnow0.png',
    height: 1,
    width: 1,
    category: [CATEGORY.CLOTH],
    serie: SERIES.ICE,
    materials: []
}

const BACKPACK_STAR = {
    name: 'BACKPACK_STAR',
    image: 'BagShoulderStar0.png',
    height: 1,
    width: 1,
    category: [CATEGORY.CLOTH],
    serie: SERIES.STAR,
    materials: []
}

export default [
    BACKPACK_ACORN,
    BACKPACK_MAPLE,
    BACKPACK_STAR,
    BACKPACK_WOOD,
    BACKPACK_SNOW,
    BACKPACK_SHELL,
    BACKPACK_GRASS
]
