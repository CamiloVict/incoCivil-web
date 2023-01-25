import React, { MutableRefObject, useRef, useState } from "react";
import { ServiceFormTypes } from "../../../utils/types/Services";
import { FormContainer, Input, SubmitInput, FileInput } from "./service-form.styled";
import emailjs from '@emailjs/browser';


const ServiceForm = ({ fields }: ServiceFormTypes) => {

	const page = window.location.pathname.split('/').reverse()

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

	const [fileState, setFileState] = useState(null)

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

	// ? This is the function to convert the object image to a base64 format
	// ? the problem is, the library has restriction to send information. just 50K per variable
	// const fileConvert = (file: any) => {
	// 	const reader = new FileReader();
	// 	reader.readAsDataURL(file);
	// 	reader.onload = () => {
	// 		setFileState(reader.result);
	// 	}
	// 	reader.onerror = error => console.log(error);
	// }

	const handleSubmit = (e: any) => {
		e.preventDefault()
		emailjs.send(SERVICE_ID, TEMPLATE_ID, JSON.parse(JSON.stringify(templateParams)), PUBLIC_KEY)
			.then(function () {
				console.log("Email successfully sent!");
			}, function (err) {
				alert("Error sending email: ");
			});
	}

	// const handleFile = (e: any) => {
	// 	setFileState(fileConvert(e.target.files[0]))
	// }

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
					page.includes('contacto') &&
						<>
							<label htmlFor="contact-description">Descripción del servicio: </label>
							<textarea name="contactDescription" id="" cols={28} rows={10} onChange={event => handleChange(event as any, 'contactDescription')} ></textarea>
						</>
						// :
						// <>
						// 	<label htmlFor="files-input">Añade fotos si es posible: </label>
						// 	<FileInput name="file" type={'file'} multiple onChange={event => handleFile(event)} ></FileInput>
						// </>
				}

				{fields.map((field, index) => {
					const inputObject: any = {
						'Área (m²):' : 'cantidad',
						'Material del mueble:': 'mueble',
						'Material encimera:': 'cantidadEncimera',
						'Descripción:': 'contactDescription',
						'Aplicación:': 'aplicacion',
						'Especifícanos el material:': 'material',
						'Cantidad:' : 'cantidad',
						'Metros lineales totales:': 'metros lineales totales',
						'Equipo:': 'equipo'
					}
					let inputName = inputObject[field.fieldName] || field.fieldName.toLowerCase()
					
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