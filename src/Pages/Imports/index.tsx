import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { imports } from '../../../utils/constants';
import Jumbotron from '../../../src/Components/Jumbotron';
import { AccordionContainer, LogoContainer, OurProsContainer } from '../Services/OurPros/our-pros.styled';
import { ImportsContainer, InfoContainer } from './imports.styled';
import { SubmitInput } from '../../../src/Components/ServiceForm/service-form.styled';

const Imports = () => {
  const params = useParams();
  const { imp } = params;
  const [isOpen, setIsOpen] = useState(!imp);

  const handleOpen = () => {
    setIsOpen(!isOpen);
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
                  <a key={element.name} href={`/importaciones/${element.url}`}>
                    <h3>{element.name}</h3>
                  </a>
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
                  <input type='text' name='area' />

                  <label htmlFor='area'>Correo</label>
                  <input type={'email'} name='area' />

                  <label htmlFor='area'>Telefono</label>
                  <input type={'number'} name='area' />

                  <label htmlFor='area'>Ciudad</label>
                  <input type='text' name='area' />

                  <label htmlFor='caliber'>Calibres</label>
                  <select name='caliber' id=''>
                    <option>1.5cm</option>
                    <option>2cm</option>
                  </select>

                  <label htmlFor='descripcion'>Descripción</label>
                  <textarea name='descripcion' />

                  <label htmlFor='formatos'>Formatos</label>
                  <select name='formatos' id=''>
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
                  <input type='number' name='area' />

                  <SubmitInput type={'submit'} value={'¡Solicita tu importación!'}></SubmitInput>
                </form>
              </div>
            ) : (
              <LogoContainer>
                <img src='/images/logo.svg'></img>
              </LogoContainer>
            )}
          </InfoContainer>
        </ImportsContainer>
      </OurProsContainer>
    </>
  );
};

export default Imports;
