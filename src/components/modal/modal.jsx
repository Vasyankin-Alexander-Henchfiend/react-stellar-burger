import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import ReactDom from 'react-dom'
import styles from './modal.module.css'
import ModalOverlay from "../modal-overlay/modal-overlay";

const modalRoot = document.getElementById('modal-root')

const Modal = ({ children, onClose }) => {
    return ReactDom.createPortal(
        (
            <div className={styles.modal}>
                <div className={`pt-30 pb-30 ${styles[`modal-content`]}`} >
                    <div className={styles[`close-icon`]}>
                        <CloseIcon type="primary" onClick={onClose} />
                    </div>
                    {children}
                </div>
                <ModalOverlay onClose={onClose}/>
            </div>
        ),
        modalRoot
    );
}

export default Modal;