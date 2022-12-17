import { ProfessionalsTypes } from "utils/types/Professional";
import { ServicesTypes } from "utils/types/Services";

// El profesional Nestor Fabian Macuace tiene informacion pero no se sabe de que profesion es
// El profesional Cesar Valencia no tiene informacion y no se sabe de que profesion es
// El profesional Juan D Torres no tiene informacion y no se sabe de que profesion es
// El profesional Lozano no tiene informacion
// El profesional Luis Salazar no tiene informacion

export const professions: ProfessionalsTypes = {
    'ingenieros': {
        name: 'Ingenieros',
        professionals: [
            {
                name: 'Santiago Montoya',
                profile: 'Ingeniero comercial, especialista en superficies compactas.',
                experience: '7 Años.',
                regions: 'Valle del Cauca y Medellín.',
                work: [
                    'SantiagoMontoya1.png',
                    'SantiagoMontoya2.png',
                    'SantiagoMontoya3.jpg',
                    'SantiagoMontoya4.png',
                ]
            },
        ]
    },
    'marmoleros': {
        name: 'Marmoleros',
        professionals: [
            {
                name: 'Lozano',
                profile: '',
                experience: '',
                regions: '',
                work: []
            }
        ]
    },
    'obra-blanca': {
        name: 'Obra blanca',
        professionals: [
            {
                name: 'John Edward Arteaga',
                profile: 'Especialista en instalación de panel yeso, super board y PVCielo. Aplicación de enchapes y pinturas.',
                experience: '22 Años.',
                regions: 'Todo el país.',
                work: [
                    'JohnEdwardArteaga1.jpeg',
                    'JohnEdwardArteaga2.jpeg',
                    'JohnEdwardArteaga3.jpeg',
                    'JohnEdwardArteaga4.jpeg',
                ]
            }

        ]
    },
    'soldadores': {
        name: 'Soldadores',
        professionals: [
            {
                name: 'Alex Guerrero',
                profile: 'Soldador laminas metálicas según técnica de arco manual electrodo revestido y normativa',
                experience: '12 Años.',
                regions: 'Valle del Cauca',
                work: [
                    'AlexGuerrero1.jpeg',
                    'AlexGuerrero2.jpeg',
                    'AlexGuerrero3.jpeg',
                    'AlexGuerrero4.jpeg',
                ]
            }
        ]
    },
    'electrodomesticos-y-gasodomesticos': {
        name: 'Electrodomésticos y gasodomésticos',
        professionals: [
            {
                name: 'Luis Salazar',
                profile: '',
                experience: '',
                regions: '',
                work: []
            }
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
                fieldName: 'Especifícanos el material:',
                fieldType: 'select',
                options: ['Aluminio', 'Madera', 'Acero', 'Inoxidable']
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
                fieldName: 'Especifícanos el material:',
                fieldType: 'select',
                options: ['Mármol', 'Granito', 'Sinterizado', 'Cuarzo']
            },
            {
                fieldName: 'Aplicación:',
                fieldType: 'select',
                options: ['Fachada', 'Piso', 'Pared', 'Exterior']
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
                fieldName: 'Material del mueble:',
                fieldType: 'select',
                options: ['Madera', 'Aglomerado', 'Laminado de Alta Presión']
            },
            {
                fieldName: 'Material encimera:',
                fieldType: 'select',
                options: ['Mármol', 'Granito', 'Sintetizado', 'Cuarzo']
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
                fieldName: 'Especifícanos el material:',
                fieldType: 'select',
                options: ['Acero', 'Madera']
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
                fieldName: 'Equipo:',
                fieldType: 'select',
                options: ['Electrodoméstico', 'Gasodoméstico', 'Mobiliario']
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
                fieldName: 'Aplicación:',
                fieldType: 'select',
                options: ['Intera', 'Externa']
            }
        ]
    },
    'IMPE': {
        name: 'IMPERMEABILIZACIÓN',
        image: '/images/AGLOMERADO_RH_Y_GRANITO_CANELA.jpg',
        link: 'impermeabilizacion',
        extraFields: [
            {
                fieldName: 'Aplicación: ',
                fieldType: 'select',
                options: ['Fachada', 'Terraza', 'Interna', 'Externa']
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
                fieldType: 'select',
                options: ['Interna', 'Externa']
            }
        ]
    }
}

type ImportsTypes = {
    name: string,
    url: string,
    image: string,
}


export const imports: ImportsTypes[] = [
    {
        name: 'Mármol crema marfil',
        url: 'marmol-crema-marfil',
        image: 'crema-marfil.jpg',
    },
    {
        name: 'Mármol marrón emperador',
        url: 'marmol-marron-emperador',
        image: 'marron-emperador.png',
    },
    {
        name: 'Mármol rojo alicante',
        url: 'marmol-rojo-alicante',
        image: 'rojo-alicante.jpg',
    },
    {
        name: 'Mármol negro marquina',
        url: 'marmol-negro-marquina',
        image: 'negro-marquina.jpg',
    },
    {
        name: 'Herramientas diamantadas',
        url: 'herramientas-diamantadas',
        image: '',
    },
]