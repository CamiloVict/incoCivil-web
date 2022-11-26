import { ServicesTypes, ServiceTypes } from "utils/types/Services";

export const professionals = {
    'ING': {
        name: 'INGENIEROS',
        professional: [
            'Santiago Montoya',
            'Freddy Chatez'
        ]
    },
    'ARQ': {
        name: 'ARQUITECTOS',
        professional: [
            'Cesar Valencia',
            'Juan David Torres'
        ]
    },
    'MAR': {
        name: 'MARMOLEROS',
        professional: [
            'Lozano',
            'Manuel'
        ]
    },
    'OBRAB': {
        name: 'OBRA BLANCA',
        professional: [
            'Cesar Ordoñez',
            'Eduar Arteaga'
        ]
    },
    'SOLD': {
        name: 'SOLDADOR',
        professional: [
            'Samuel Quintero',
            'Alex Guerrero'
        ]
    },
    'ELEC&GAS': {
        name: 'ELECTRODOMESTICOS Y GASODOMESTICOS',
        professional: [
            'Luis Salazar',
            'Humberto'
        ]
    }
};

export const services: ServicesTypes = {
    'CARP': {
        name: 'CARPINTERÍA EN ALUMINIO, METALICA O EN MADERA',
        image: '/images/carpinteriaEnAluminio.jpg',
        link: 'carpinteria-en-aluminio-metalica-o-madera',
        extraFields: [
            {
                fieldName: 'Especifícanos el material (ALUMINIO, MADERA, ACERO, INOXIDABLE):',
                fieldType: 'text'
            },
            {
                fieldName: 'Cantidad:',
                fieldType: 'number'
            },
        ]
    },
    'MARM': {
        name: 'MARMOL Y GRANITO',
        image: '/images/marmol&granito.jpg',
        link: 'marmol-y-granito',
        extraFields: [
            {
                fieldName: 'Especifícanos el material (mármol, granito, sinterizado, cuarzo):',
                fieldType: 'text'
            },
            {
                fieldName: 'Aplicación (fachada, piso, pared, exterior):',
                fieldType: 'text'
            },
            {
                fieldName: 'Área (m²):',
                fieldType: 'number'
            }
        ]
    },
    'ADEC': {
        name: 'ADECUACIONES Y REMODELACIONES',
        image: '/images/adecuaciones&remodelaciones.jpeg',
        link: 'adecuaciones-y-remodelaciones',
        extraFields: [
            {
                fieldName: 'Área (m²):',
                fieldType: 'number'
            }
        ]
    },
    'COCI': {
        name: 'COCINAS',
        image: '/images/cocinas.jpg',
        link: 'cocinas',
        extraFields: [
            {
                fieldName: 'Material del mueble (madera, aglomerado, laminado de alta presión):',
                fieldType: 'text'
            },
            {
                fieldName: 'Material encimera (mármol, granito, sinterizado, cuarzo):',
                fieldType: 'text'
            },
            {
                fieldName: 'Metros lineales totales:',
                fieldType: 'text'
            },
        ]
    },
    'CUBI': {
        name: 'CUBIERTAS Y TERRAZAS',
        image: '/images/cubiertas&terrezas.jpg',
        link: 'cubiertas-y-terrazas',
        extraFields: [
            {
                fieldName: 'Especifícanos el material (ACERO, MADERA):',
                fieldType: 'text'
            },
            {
                fieldName: 'Área (m²):',
                fieldType: 'number'
            }
        ]
    },
    'MANT': {
        name: 'MANTENIMIENTO',
        image: '/images/mantenimiento.jpg',
        link: 'mantenimientos',
        extraFields: [
            {
                fieldName: 'Equipo (electrodoméstico, gasodoméstico, mobiliario):',
                fieldType: 'text'
            },
            {
                fieldName: 'Cantidad:',
                fieldType: 'number'
            }
        ]
    },
    'HUME': {
        name: 'HUMEDADES',
        image: '/images/AGLOMERADO_RH_Y_GRANITO_CANELA.jpg',
        link: 'humedades',
        extraFields: [
            {
                fieldName: 'Aplicación (Intera, externa):',
                fieldType: 'text'
            }
        ]
    },
    'IMPE': {
        name: 'IMPERMEABILIZACIÓN',
        image: '/images/AGLOMERADO_RH_Y_GRANITO_CANELA.jpg',
        link: 'impermeabilizacion',
        extraFields: [
            {
                fieldName: 'Aplicación (Fachada, terraza, interna, externa): ',
                fieldType: 'text'
            },
            {
                fieldName: 'Área (m²):',
                fieldType: 'number'
            }
        ]
    },
    'ASEO': {
        name: 'ASEO',
        image: '/images/AGLOMERADO_RH_Y_GRANITO_CANELA.jpg',
        link: 'aseo',
        extraFields: [
            {
                fieldName: 'Descripción:',
                fieldType: 'text'
            },
            {
                fieldName: 'Área (m²):',
                fieldType: 'number'
            },
            {
                fieldName: 'Aplicación:',
                fieldType: 'text'
            }
        ]
    }
}