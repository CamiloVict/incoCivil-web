import React from "react";
import * as ReactDOM from 'react-dom';
import { ModalContainer } from "./modal.styled";

const Modal = ({ children }: any) => {
    const renderChildren = () => {
        return (
            <ModalContainer>
                {children}
            </ModalContainer>
        )
    }

    return (
        ReactDOM.createPortal(renderChildren(), document.body)
    )
}

export default Modal;