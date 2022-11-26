import React from "react";
import Card from "../../Components/Card";
import { ServicesContainer } from "./services.styled";

const Services = () => {
    const imageLocation = '/images/'
    return (
        <ServicesContainer>
            <Card redirectLink="/servicios-tecnicos" image={imageLocation + 'REMODELACION_COCINA_MARMOL_MARRO_NEMPERADOR_MADERA.jpg'} header="Servicios técnicos" />
            <Card redirectLink="/nuestros-profesionales" image={imageLocation + 'teamwork.jpg'} header='Nuestros profesionales' />
        </ServicesContainer>
    )
}

export default Services;