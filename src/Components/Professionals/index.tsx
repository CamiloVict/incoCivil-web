import React, { useEffect, useState } from "react";
import { ModalElement, ProfessionalsContainer, SimpleSliderContainer, SliderElement } from "./professionals.styled";
import { ProfessionalsInfo } from "../../../utils/types/Professional";

const ProfessionalsCard = ({ name, experience, profile, regions, work }: ProfessionalsInfo) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState('');

    const handleClick = (image: string) => {
        setCurrentImage(image);
        setIsModalOpen(true)
        window.location.href = `/images/theirWork/${image}`;
    }

    const SimpleSlider = ({ elements }: any) => {
        return (
            <SimpleSliderContainer>
                {
                    elements.map((element: string) =>
                        <SliderElement key={element} onClick={() => handleClick(element)}>
                            <img src={`/images/theirWork/${element}`} />
                        </SliderElement>
                    )
                }
            </SimpleSliderContainer>
        );
    }

    return (
        <ProfessionalsContainer>
            <div className="info-container">
                <h3>{name}</h3>
                <p><strong>Experiencia:</strong> {experience}</p>
                <p><strong>Perfil:</strong> {profile}</p>
                <p><strong>Locaciones:</strong> {regions}</p>
            </div>
            <div className="slider-container">
                <SimpleSlider elements={work} />
                <p>Da click en cualquiera de las imagenes para verla en tamaño completo.</p>
            </div>
        </ProfessionalsContainer>
    )
}

export default ProfessionalsCard;