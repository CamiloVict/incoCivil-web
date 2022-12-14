import React from "react";
import { ServiceFormTypes } from "../../../utils/types/Services";
import { FormContainer, Input, SubmitInput, FileInput } from "./service-form.styled";

const ServiceForm = ({ fields }: ServiceFormTypes) => {
    return (
        <FormContainer>
            <form>
                <label htmlFor="name-input">Nombre: </label>
                <Input name={'name-input'} type={'text'} required></Input>

                <label htmlFor="email-input">Correo: </label>
                <Input name={'email-input'} type={'text'} required></Input>

                <label htmlFor="phone-input">Teléfono: </label>
                <Input name={'phone-input'} type={'text'} required></Input>

                <label htmlFor="city-input">Ciudad: </label>
                <Input name={'city-input'} type={'text'} required></Input>

                <label htmlFor="files-input">Añade fotos si es posible: </label>
                <FileInput name="files-input" type={'file'} placeholder="Ciudad" multiple></FileInput>

                {fields.map((field, index) =>
                    <React.Fragment key={index}>
                        <label htmlFor={'input' + '-' + index}>{field.fieldName}</label>
                        {
                            field.fieldType === 'select' ?
                                <select name="" id="">
                                    {
                                        field.options.map(option =>
                                            <option value={option}>{option}</option>
                                        )
                                    }
                                </select>
                                :
                                <>
                                    <Input name={'input' + '-' + index} type={field.fieldType} required />
                                </>

                        }
                    </React.Fragment>
                )}

                <SubmitInput type={'submit'} value={'¡Solicita tu servicio!'}></SubmitInput>
            </form>
        </FormContainer>
    )
}

export default ServiceForm;