import MATERIALS from '@/data/ac/materials.data'
import CATEGORY from '@/data/ac/category.data'
import SERIES from '@/data/ac/series.data'

export default [
    {
        name: 'Pila de Lingotes de Oro',
        image: 'FtrGoldbar.png',
        height: 1,
        width: 1,
        category: [],
        serie: SERIES.GOLD,
        materials: [{
            ...MATERIALS.GOLD_NUGGET,
            quantity: 1
        }]
    }, {
        name: 'Banco de Oro',
        image: 'FtrGoldbench.png',
        height: 1,
        width: 1,
        category: [],
        serie: SERIES.GOLD,
        materials: []
    }, {
        name: 'Candelabro de Oro',
        image: 'FtrGoldCandlestand.png',
        height: 1,
        width: 1,
        category: [],
        serie: SERIES.GOLD,
        materials: [{
            ...MATERIALS.GOLD_NUGGET,
            quantity: 2
        }]
    }, {
        name: 'Tumba dorada',
        image: 'FtrGoldCoffin.png',
        height: 1,
        width: 1,
        category: [],
        serie: SERIES.GOLD,
        materials: []
    }, {
        name: 'Cubertería de Oro',
        image: 'FtrGoldDishes.png',
        height: 1,
        width: 1,
        category: [],
        serie: SERIES.GOLD,
        materials: []
    }, {
        name: 'Lavabo Dorado',
        image: 'FtrGoldWC.png',
        height: 1,
        width: 1,
        category: [],
        serie: SERIES.GOLD,
        materials: []
    }, {
        name: 'Escarabajo de Oro',
        image: 'FtrInsectKabutomushiGold.png',
        height: 1,
        width: 1,
        category: [],
        serie: SERIES.GOLD,
        materials: [{
            ...MATERIALS.GOLD_NUGGET,
            quantity: 3
        }]
    }, {
        name: 'Manekineko',
        image: 'FtrManekinekoGold.png',
        height: 1,
        width: 1,
        category: [],
        serie: SERIES.GOLD,
        materials: []
    }, {
        name: 'Botas de Oro',
        image: 'ShoesKneeKnightGold.png',
        height: 1,
        width: 1,
        category: [],
        serie: SERIES.GOLD,
        materials: []
    }, {
        name: 'Armadura de Oro',
        image: 'TopsTexOnepieceOverallLPlatearmorGold.png',
        height: 1,
        width: 1,
        category: [],
        serie: SERIES.GOLD,
        materials: []
    }, {
        name: 'Casco de Oro',
        image: 'CapFullfaceKnightGold.png',
        height: 1,
        width: 1,
        category: [CATEGORY.CLOTH],
        serie: SERIES.GOLD,
        materials: []
    }, {
        name: 'Trofeo Arowana de Oro',
        image: 'FtrFishArowanaGold.png',
        height: 1,
        width: 1,
        category: [],
        serie: SERIES.GOLD,
        materials: [{
            ...MATERIALS.GOLD_NUGGET,
            quantity: 3
        }]
    }, {
        name: 'Engranaje de Oro',
        image: 'FtrGearWallGold.png',
        height: 1,
        width: 1,
        category: [],
        serie: SERIES.GOLD,
        materials: [{
            ...MATERIALS.GOLD_NUGGET,
            quantity: 1
        }, {
            ...MATERIALS.IRON_NUGGET,
            quantity: 3
        }]
    }
]
