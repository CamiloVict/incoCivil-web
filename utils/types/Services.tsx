export type ServicesTypes = {
    [key: string]: ServiceTypes
}

export type ServiceTypes = {
    name: string;
    image: string;
    link: string;
    extraFields?: ExtraFields[]
}

export type ExtraFields = {
    fieldName: string,
    fieldType: string,
}

export type ServiceFormTypes = {
    fields: ExtraFields[]
}