import React, { useEffect, useState } from "react";
import { AccordionContainer, InfoContainer, OurProsContainer, ProfessionalsContainer, LogoContainer } from "./our-pros.styled";
import { professions } from "../../../../utils/constants";
import { Link, useParams } from "react-router-dom";
import ProfessionalsCard from "../../../../src/Components/Professionals";
import Jumbotron from "../../../../src/Components/Jumbotron";

const OurPros = () => {
    const params = useParams();
    const { pro } = params;
    const [isOpen, setIsOpen] = useState(!pro);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    };

    const jumbotronTitle = pro ? professions[pro].name : 'Nuestros profesionales'

    return (
        <>
            <Jumbotron title={jumbotronTitle} />
            <OurProsContainer isOpen={isOpen}>
                {pro ?
                    <div className="trigger" onClick={handleOpen}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div> : null
                }
                <ProfessionalsContainer isOpen={isOpen}>
                    <AccordionContainer isOpen={isOpen}>
                        <section>
                            {Object.keys(professions).map(element => {
                                return (
                                    <Link key={element} to={`/servicios/nuestros-profesionales/${element}`}>
                                        <h3>{professions[element].name}</h3>
                                    </Link>
                                )
                            })}
                        </section>
                    </AccordionContainer>
                    <InfoContainer isOpen={isOpen}>
                        {pro ?
                            <div className="professionals--info" >
                                {professions[pro].professionals.map(prof =>
                                    <React.Fragment key={prof.name}>
                                        <ProfessionalsCard {...prof} />
                                    </React.Fragment>
                                )}
                            </div>
                            :
                            <LogoContainer>
                                <img src='/images/logo.svg'></img>
                            </LogoContainer>
                        }

                    </InfoContainer>
                </ProfessionalsContainer>
            </OurProsContainer>
        </>
    )
}

export default OurPros;