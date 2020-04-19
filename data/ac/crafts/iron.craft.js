import MATERIALS from '@/data/ac/materials.data'

export default [
    {
        name: 'Armario de Hierro',
        image: 'FtrIronClosetLR.png',
        height: 1,
        width: 1,
        category: [],
        serie: 'nook',
        materials: []
    }, {
        name: 'Torre de Vigas',
        image: 'FtrIronframe.png',
        height: 1,
        width: 1,
        category: [],
        serie: 'nook',
        materials: [{
            ...MATERIALS.IRON_NUGGET,
            quantity: 20
        }]
    }, {
        name: 'Banco de Jardín',
        image: 'FtrIrongardenBench.png',
        height: 1,
        width: 1,
        category: [],
        serie: 'nook',
        materials: []
    }, {
        name: 'Silla de Jardín',
        image: 'FtrIrongardenChair.png',
        height: 1,
        width: 1,
        category: [],
        serie: 'nook',
        materials: []
    }, {
        name: 'Mesa de Jardín',
        image: 'FtrIrongardenTable.png',
        height: 1,
        width: 1,
        category: [],
        serie: 'nook',
        materials: []
    }, {
        name: 'Perchero de Hierro',
        image: 'FtrIronHanger.png',
        height: 1,
        width: 1,
        category: [],
        serie: 'nook',
        materials: []
    }, {
        name: 'Aplique de Hierro',
        image: 'FtrIronLampW.png',
        height: 1,
        width: 1,
        category: [],
        serie: 'nook',
        materials: [{
            ...MATERIALS.IRON_NUGGET,
            quantity: 4
        }, {
            ...MATERIALS.CLAY,
            quantity: 2
        }]
    }, {
        name: 'Estantería de Hierro',
        image: 'FtrIronShelf.png',
        height: 1,
        width: 1,
        category: [],
        serie: 'nook',
        materials: []
    }, {
        name: 'Estante de Hierro',
        image: 'FtrIronShelfW.png',
        height: 1,
        width: 1,
        category: [],
        serie: 'nook',
        materials: []
    }, {
        name: 'Mesa de Hierro',
        image: 'FtrIronTableM.png',
        height: 1,
        width: 1,
        category: [],
        serie: 'nook',
        materials: []
    }, {
        name: 'Cama de Hierro',
        image: 'FtrIronwoodBedS.png',
        height: 1,
        width: 1,
        category: [],
        serie: 'nook',
        materials: []
    }, {
        name: 'Taburete Universidad',
        image: 'FtrIronwoodChairS.png',
        height: 1,
        width: 1,
        category: [],
        serie: 'nook',
        materials: []
    }, {
        name: 'Tocador de Universidad',
        image: 'FtrIronwoodChest.png',
        height: 1,
        width: 1,
        category: [],
        serie: 'nook',
        materials: []
    }, {
        name: 'Reloj de Universidad',
        image: 'FtrIronwoodClockW.png',
        height: 1,
        width: 1,
        category: [],
        serie: 'nook',
        materials: []
    }, {
        name: 'FtrIronwoodCupboard',
        image: 'FtrIronwoodCupboard.png',
        height: 1,
        width: 1,
        category: [],
        serie: 'nook',
        materials: []
    }, {
        name: 'Fregadero Universidad',
        image: 'FtrIronwoodKitchen.png',
        height: 1,
        width: 1,
        category: [],
        serie: 'nook',
        materials: [{
            ...MATERIALS.WOOD,
            quantity: 4
        }, {
            ...MATERIALS.IRON_NUGGET,
            quantity: 3
        }, {
            ...MATERIALS.FURNITURE('Cómoda Universal'),
            quantity: 1
        }, {
            ...MATERIALS.FURNITURE('Tabla de Cortar Sencilla'),
            quantity: 1
        }]
    }, {
        name: 'Carrito Universidad',
        image: 'FtrIronwoodServingcart.png',
        height: 1,
        width: 1,
        category: [],
        serie: 'nook',
        materials: []
    }, {
        name: 'Mesa Grande Universidad',
        image: 'FtrIronwoodTableL.png',
        height: 1,
        width: 1,
        category: [],
        serie: 'nook',
        materials: []
    }, {
        name: 'Mesa Universidad',
        image: 'FtrIronwoodTableM.png',
        height: 1,
        width: 1,
        category: [],
        serie: 'nook',
        materials: []
    }
]
