import React, { MutableRefObject, useRef, useState } from "react";
import { ServiceFormTypes } from "../../../utils/types/Services";
import { FormContainer, Input, SubmitInput, FileInput } from "./service-form.styled";
import emailjs from '@emailjs/browser';


const ServiceForm = ({ fields }: ServiceFormTypes) => {

	const page = window.location.pathname;
	const [inputState, setInputState] = useState({
		name: '',
		email: '',
		phone: '',
		city: '',
		contactDescription: '',
		areaCuadrada: '',
		cantidadEncimera: '',
		page: page
	})

	const [fileState, setFileState] = useState('')

	// !Client
	// const PUBLIC_KEY = 'n7XxvC7okH8KYzxGV'
	// const SERVICE_ID = 'service_c8fodj2'
	// const TEMPLATE_ID = 'template_snwv0w3'

	const PUBLIC_KEY = 'PSnBouBWeHf1hIB-C'
	const SERVICE_ID = 'service_lbz8cjv'
	const TEMPLATE_ID = 'template_yopfrwl'

	const templateParams = {
		...inputState,
		file: fileState,
	};

	const handleSubmit = (e: any) => {
		e.preventDefault()
		emailjs.send(SERVICE_ID, TEMPLATE_ID, JSON.parse(JSON.stringify(templateParams)), PUBLIC_KEY)
			.then(function () {
				console.log("Email successfully sent!");
			}, function (err) {
				console.log("Error sending email: ", err);
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

	return (
		<FormContainer>
			<form>
				<label htmlFor="name-input" >Nombre: </label>
				<Input name={'name'} type={'text'} required onChange={event => handleChange(event as any, 'name')} ></Input>

				<label htmlFor="email-input">Correo: </label>
				<Input name={'email'} type={'text'} required onChange={event => handleChange(event as any, 'email')} ></Input>

				<label htmlFor="phone-input">Teléfono: </label>
				<Input name={'phone'} type={'text'} required onChange={event => handleChange(event as any, 'phone')} ></Input>

				<label htmlFor="city-input">Ciudad: </label>
				<Input name={'city'} type={'text'} required onChange={event => handleChange(event as any, 'city')} ></Input>

				{
					page.includes('contacto') ?
						<>
							<label htmlFor="contact-description">Descripción del servicio: </label>
							<textarea name="contactDescription" id="" cols={28} rows={10} onChange={event => handleChange(event as any, 'contactDescription')} ></textarea>
						</>
						:
						<>
							<label htmlFor="files-input">Añade fotos si es posible: </label>
							<FileInput name="file" type={'file'} multiple onChange={event => handleFile(event)} ></FileInput>
						</>
				}

				{fields.map((field, index) => {

					let inputName = field.fieldName.replace(/[^a-zA-Z0-9\s]/g, "").toLocaleLowerCase();
					inputName = field.fieldName === 'Área (m²):' ? 'cantidad' : inputName
					inputName = field.fieldName === 'Material del mueble:' ? 'mueble' : inputName
					inputName = field.fieldName === 'Material encimera:' ? 'cantidadEncimera' : inputName
					inputName = field.fieldName === 'Descripción:' ? 'contactDescription' : inputName
					inputName = field.fieldName === 'Aplicación:' ? 'aplicacion' : inputName

					return (<React.Fragment key={index}>
						<label htmlFor={inputName}>{field.fieldName}</label>
						{
							field.fieldType === 'select' ?
								<select name={field.fieldName} id="" onChange={(event) => handleChange(event, inputName)}>
									{
										field.options.map(option => (
											<option value={option}>{option}</option>
										)
										)
									}
								</select>
								:
								<>
									<Input name={inputName} type={field.fieldType} onChange={(event) => handleChange(event as any, inputName)} />
								</>

						}
					</React.Fragment>
					)
				}
				)}

				<SubmitInput type={'submit'} onClick={handleSubmit} >
					¡Solicita tu servicio!
				</SubmitInput>
			</form>
		</FormContainer>
	)
}

export default ServiceForm;