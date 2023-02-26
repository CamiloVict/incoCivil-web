import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { imports } from '../../../utils/constants';
import Jumbotron from '../../../src/Components/Jumbotron';
import { AccordionContainer, LogoContainer, OurProsContainer } from '../Services/OurPros/our-pros.styled';
import { ImportsContainer, InfoContainer } from './imports.styled';
import { SubmitInput } from '../../../src/Components/ServiceForm/service-form.styled';
import emailjs from '@emailjs/browser';

const Imports = () => {
  const params = useParams();
  const { imp } = params;
  const [isOpen, setIsOpen] = useState(!imp);

  const page = window.location.pathname.split('/').reverse();

  const [inputState, setInputState] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    contactDescription: '',
    page: page[0],
  });

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const PUBLIC_KEY = 'n7XxvC7okH8KYzxGV'
  const SERVICE_ID = 'service_c8fodj2'
  const TEMPLATE_ID = 'template_snwv0w3'

  const templateParams = {
    ...inputState,
  };
  
  const handleSubmit = (e: any) => {
    e.preventDefault();
    emailjs.send(SERVICE_ID, TEMPLATE_ID, JSON.parse(JSON.stringify(templateParams)), PUBLIC_KEY).then(
      function () {
        console.log('Email successfully sent!');
      },
      function (err: any) {
        alert('Error sending email: ');
      },
    );
  };

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>, nameField: string) => {
    const newValue: any = { ...inputState };
    newValue[nameField] = event.target.value;
    setInputState(newValue);
  };

  return (
    <>
      <Jumbotron title={'Importaciones'} />
      <OurProsContainer isOpen={isOpen}>
        {imp ? (
          <div className='trigger' onClick={handleOpen}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : null}
        <ImportsContainer isOpen={isOpen}>
          <AccordionContainer isOpen={isOpen}>
            <section>
              {imports.map((element) => {
                return (
                  <Link key={element.name} to={`/importaciones/${element.url}`}>
                    <h3>{element.name}</h3>
                  </Link>
                );
              })}
            </section>
          </AccordionContainer>
          <InfoContainer isOpen={isOpen}>
            {imp ? (
              <div className='imports--info'>
                {imports.map(
                  (imprt) => imprt.url === imp && imprt.image !== '' && <img src={`/images/imports/${imprt.image}`} />,
                )}
                <form action=''>
                  <label htmlFor='area'>Nombre</label>
                  <input type='text' name='area' onChange={(event) => handleChange(event as any, 'name')} />

                  <label htmlFor='area'>Correo</label>
                  <input type={'email'} name='email' onChange={(event) => handleChange(event as any, 'email')} />

                  <label htmlFor='area'>Telefono</label>
                  <input type={'text'} name='area' onChange={(event) => handleChange(event as any, 'phone')} />

                  <label htmlFor='area'>Ciudad</label>
                  <input type='text' name='ciudad' onChange={(event) => handleChange(event as any, 'city')} />

                  <label htmlFor='caliber'>Calibres</label>
                  <select name='caliber' id='' onChange={(event) => handleChange(event as any, 'calibre')}>
                    <option>1.5cm</option>
                    <option>2cm</option>
                  </select>

                  <label htmlFor='descripcion'>Descripción</label>
                  <textarea name='descripcion' onChange={(event) => handleChange(event as any, 'contactDescription')}/>

                  <label htmlFor='formatos'>Formatos</label>
                  <select name='formatos' id='' onChange={(event) => handleChange(event as any, 'formatos')}>
                    <option>60 x 30 cm</option>
                    <option>60 x 40 cm</option>
                    <option>60 x 60 cm</option>
                    <option>80 x 80 cm</option>
                    <option>90 x 90 cm</option>
                    <option>120 x 120 cm</option>
                    <option>40 x Largo Libre cm</option>
                    <option>60 x Largo Libre cm</option>
                  </select>

                  <label htmlFor='area'>Área</label>
                  <input type='number' name='area' onChange={(event) => handleChange(event as any, 'area')} />

                  <SubmitInput type={'submit'} onClick={handleSubmit} >
                    ¡Solicita tu importación!
                  </SubmitInput>
                </form>
              </div>
            ) : (
              <LogoContainer>
                <img src='/images/LOGO_INCOCIVIL.png'></img>
              </LogoContainer>
            )}
          </InfoContainer>
        </ImportsContainer>
      </OurProsContainer>
    </>
  );
};

export default Imports;
