import React, { useRef } from "react";
import { ServiceFormTypes } from "../../../utils/types/Services";
import { FormContainer, Input, SubmitInput, FileInput } from "./service-form.styled";
import emailjs from '@emailjs/browser';



const ServiceForm = ({ fields }: ServiceFormTypes) => {

    const nameRef = useRef()
    const emailRef = useRef()
    const phoneRef = useRef()
    const cityRef = useRef()
    const fileRef = useRef()
    const optionRef = useRef()
    const typeRef = useRef()

    const PUBLIC_KEY = 'n7XxvC7okH8KYzxGV'
    const SERVICE_ID = 'service_c8fodj2'
    const TEMPLATE_ID = 'template_snwv0w3'

    
    const handleClick = () => {
        const templateParams = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            phone: phoneRef.current.value,
            city: cityRef.current.value,
            file: fileRef.current.value,
            option: optionRef.current.value,
            type: typeRef.current.value,
            // content: 'Check this out!',
        };
    
        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
                console.log('FAILED...', err);
            });
    }

    return (
        <FormContainer>
            <form>
                <label htmlFor="name-input">Nombre: </label>
                <Input ref={nameRef} name={'name-input'} type={'text'} required></Input>

                <label htmlFor="email-input">Correo: </label>
                <Input ref={emailRef} name={'email-input'} type={'text'} required></Input>

                <label htmlFor="phone-input">Teléfono: </label>
                <Input ref={phoneRef} name={'phone-input'} type={'text'} required></Input>

                <label htmlFor="city-input">Ciudad: </label>
                <Input ref={cityRef} name={'city-input'} type={'text'} required></Input>

                <label htmlFor="files-input">Añade fotos si es posible: </label>
                <FileInput ref={fileRef} name="files-input" type={'file'} placeholder="Ciudad" multiple></FileInput>

                {fields.map((field, index) =>
                    <React.Fragment key={index}>
                        <label htmlFor={'input' + '-' + index}>{field.fieldName}</label>
                        {
                            field.fieldType === 'select' ?
                                <select name="" id="">
                                    {
                                        field.options.map(option =>
                                            <option ref={optionRef} value={option}>{option}</option>
                                        )
                                    }
                                </select>
                                :
                                <>
                                    <Input ref={typeRef} name={'input' + '-' + index} type={field.fieldType} required />
                                </>

                        }
                    </React.Fragment>
                )}

                <SubmitInput type={'submit'} value={'¡Solicita tu servicio!'} onClick={handleClick} ></SubmitInput>
            </form>
        </FormContainer>
    )
}

export default ServiceForm;