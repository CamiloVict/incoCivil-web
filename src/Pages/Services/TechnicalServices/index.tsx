import React from "react";
import Card from "../../../../src/Components/Card";
import { services } from "../../../../utils/constants";
import { TechnicalServicesContainer, CardsContainer } from "./technical-services.styles";

const TechicalServicesPage = () => {
    return (
        <TechnicalServicesContainer>
            <h2>Servicios técnicos</h2>
            <CardsContainer>
                {
                    Object.values(services).map(service =>
                        <div className="card--container">
                            <Card header={service.name} image={service.image} redirectLink={service.link}/>
                        </div>
                    )
                }
            </CardsContainer>
        </TechnicalServicesContainer>
    )
}

export default TechicalServicesPage;