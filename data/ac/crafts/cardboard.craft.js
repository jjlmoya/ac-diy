import MATERIALS from '@/data/ac/materials.data'
import SERIES from '@/data/ac/series.data'

export default [
    {
        name: 'Cama de Cartón',
        image: 'FtrCardboardBedS.png',
        height: 1,
        width: 1,
        category: [],
        serie: SERIES.CARDBOARD,
        materials: []
    }, {
        name: 'Silla de Cartón',
        image: 'FtrCardboardChairS.png',
        height: 1,
        width: 1,
        category: [],
        serie: SERIES.CARDBOARD,
        materials: []
    }, {
        name: 'Sofa de Cartón',
        image: 'FtrCardboardSofaL.png',
        height: 1,
        width: 1,
        category: [],
        serie: SERIES.CARDBOARD,
        materials: []
    }, {
        name: 'Mesa de Cartón',
        image: 'FtrCardboardTableL.png',
        height: 1,
        width: 1,
        category: [],
        serie: SERIES.CARDBOARD,
        materials: [{
            ...MATERIALS.FURNITURE('Caja de cartón'),
            quantity: 4
        }]
    }
]
