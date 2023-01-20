import React, { useRef, useState } from "react";
import { ServiceFormTypes } from "../../../utils/types/Services";
import { FormContainer, Input, SubmitInput, FileInput } from "./service-form.styled";
import emailjs from '@emailjs/browser';



const ServiceForm = ({ fields }: ServiceFormTypes) => {

    const [inputState, setInputState] = useState({
        nameInput: '',
        emailInput: '',
        phoneInput: '',
        cityInput: ''
    })

    const [fileState,setFileState] = useState('')

    // !Client
    // const PUBLIC_KEY = 'n7XxvC7okH8KYzxGV'
    // const SERVICE_ID = 'service_c8fodj2'
    // const TEMPLATE_ID = 'template_snwv0w3'

    const PUBLIC_KEY = 'PSnBouBWeHf1hIB-C'
    const SERVICE_ID = 'service_lbz8cjv'
    const TEMPLATE_ID = 'template_yopfrwl'

    const templateParams = {
        ... inputState,
        file: fileState,
    };

    const handleClick = () => {
        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
                console.log('FAILED...', err);
            });
    }

    const handleFile = (e: any) => {
        setFileState(e.target.files)
    }

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>, nameField: string) => {
        const newValue: any = { ...inputState }
        newValue[nameField] = event.target.value 
        setInputState(newValue)
    }
    console.log('51 templateParams >>> ', templateParams);
    
    return (
        <FormContainer>
            <form>
                <label htmlFor="name-input" >Nombre: </label>
                <Input name={'nameInput'} type={'text'} required onChange={event => handleChange(event as any, 'nameInput')} ></Input>

                <label htmlFor="email-input">Correo: </label>
                <Input name={'emailInput'} type={'text'} required onChange={event => handleChange(event as any, 'emailInput')} ></Input>

                <label htmlFor="phone-input">Teléfono: </label>
                <Input name={'phoneInput'} type={'text'} required onChange={event => handleChange(event as any, 'phoneInput')} ></Input>

                <label htmlFor="city-input">Ciudad: </label>
                <Input name={'cityInput'} type={'text'} required onChange={event => handleChange(event as any, 'cityInput')} ></Input>

                <label htmlFor="files-input">Añade fotos si es posible: </label>
                <FileInput name="fileInput" type={'file'} placeholder="Ciudad" multiple onChange={event => handleFile(event)} ></FileInput>

                {fields.map((field, index) =>
                    <React.Fragment key={index}>
                        <label htmlFor={'input' + '-' + index}>{field.fieldName}</label>
                        {
                            field.fieldType === 'select' ?
                                <select name={field.fieldName} id="" onChange={(event) => handleChange(event, field.fieldName)} >
                                    {
                                        field.options.map(option => (
                                            <option value={option}>{option}</option>
                                        )
                                        )
                                    }
                                </select>
                                :
                                <>
                                    <Input name={field.fieldType} type={field.fieldType} required onChange={(event) => handleChange(event as any, field.fieldName)} />
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