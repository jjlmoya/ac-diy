import MATERIALS from '@/data/ac/materials.data'
import CATEGORY from '@/data/ac/category.data'
import SERIES from '@/data/ac/series.data'

console.log(SERIES)
console.log(SERIES.ACORN)

const BACKPACK_GRASS = {
    name: 'Mochila de Mimbre',
    image: 'BagBackpackGrass0.png',
    height: 1,
    width: 1,
    category: [CATEGORY.CLOTH],
    serie: SERIES.GRASS,
    materials: [{
        ...MATERIALS.HERB,
        quantity: 20
    }]
}

const BACKPACK_WOOD = {
    name: 'Bolsito Madera',
    image: 'BagBackpackWood0.png',
    height: 1,
    width: 1,
    category: [CATEGORY.CLOTH],
    serie: SERIES.WOODEN,
    materials: []
}

const BACKPACK_ACORN = {
    name: 'Bolsito Bellota',
    image: 'BagShoulderAcorn0.png',
    height: 1,
    width: 1,
    category: [CATEGORY.CLOTH],
    serie: SERIES.ACORN,
    materials: [{
        ...MATERIALS.ACORN,
        quantity: 6
    }]
}

const BACKPACK_MAPLE = {
    name: 'Bolsito Arce',
    image: 'BagShoulderMaple0.png',
    height: 1,
    width: 1,
    category: [CATEGORY.CLOTH],
    serie: SERIES.MAPLE,
    materials: [{
        ...MATERIALS.MAPLE,
        quantity: 6
    }]
}

const BACKPACK_SHELL = {
    name: 'Bolsito Conchas Marinas',
    image: 'BagShoulderShell0.png',
    height: 1,
    width: 1,
    category: [CATEGORY.CLOTH, CATEGORY.SHELL],
    serie: SERIES.SHELL,
    materials: []
}

const BACKPACK_SNOW = {
    name: 'Bolsito de Hielo',
    image: 'BagShoulderSnow0.png',
    height: 1,
    width: 1,
    category: [CATEGORY.CLOTH],
    serie: SERIES.ICE,
    materials: [{
        ...MATERIALS.ICE,
        quantity: 6
    }]
}

const BACKPACK_STAR = {
    name: 'Bolsito Estrella',
    image: 'BagShoulderStar0.png',
    height: 1,
    width: 1,
    category: [CATEGORY.CLOTH],
    serie: SERIES.STAR,
    materials: [{
        ...MATERIALS.STAR_FRAGMENT,
        quantity: 6
    }]
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
