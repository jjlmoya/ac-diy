import MATERIALS from '@/data/ac/materials.data'
import SERIES from '@/data/ac/series.data'

export default [
    {
        name: 'FtrStandflower',
        image: 'FtrStandflower.png',
        height: 1,
        width: 1,
        category: [],
        serie: SERIES.FLOWER,
        materials: []
    }, {
        name: 'Cama Rosa',
        image: 'FtrFlowerBedW.png',
        height: 1,
        width: 1,
        category: [],
        serie: SERIES.FLOWER,
        materials: []
    }, {
        name: 'Ventilador Anémona',
        image: 'FtrFlowerFan.png',
        height: 1,
        width: 1,
        category: [],
        serie: SERIES.FLOWER,
        materials: []
    }, {
        name: 'Lámpara de Jacinto',
        image: 'FtrFlowerLamp.png',
        height: 1,
        width: 1,
        category: [],
        serie: SERIES.FLOWER,
        materials: []
    }, {
        name: 'Gramófono Lirio',
        image: 'FtrFlowerRecordplayer.png',
        height: 1,
        width: 1,
        category: [],
        serie: SERIES.FLOWER,
        materials: [{
            ...MATERIALS.LILY_WHITE,
            quantity: 5
        }, {
            ...MATERIALS.IRON_NUGGET,
            quantity: 3
        }, {
            ...MATERIALS.WOOD,
            quantity: 5
        }]
    }, {
        name: 'Ducha Cosmos',
        image: 'FtrFlowerShower.png',
        height: 1,
        width: 1,
        category: [],
        serie: SERIES.FLOWER,
        materials: []
    }, {
        name: 'FtrFlowerStoolS',
        image: 'FtrFlowerStoolS.png',
        height: 1,
        width: 1,
        category: [],
        serie: SERIES.FLOWER,
        materials: []
    }, {
        name: 'Caja sorpresa Tulipán',
        image: 'FtrFlowerSurprisedbox.png',
        height: 1,
        width: 1,
        category: [],
        serie: SERIES.FLOWER,
        materials: [{
            ...MATERIALS.TULIP_RED,
            quantity: 5
        }, {
            ...MATERIALS.FLEXIBLE_WOOD,
            quantity: 3
        }]
    }, {
        name: 'FtrFlowerSwag',
        image: 'FtrFlowerSwag.png',
        height: 1,
        width: 1,
        category: [],
        serie: SERIES.FLOWER,
        materials: []
    }, {
        name: 'Mesa Viola',
        image: 'FtrFlowerTableS.png',
        height: 1,
        width: 1,
        category: [],
        serie: SERIES.FLOWER,
        materials: []
    }
]
