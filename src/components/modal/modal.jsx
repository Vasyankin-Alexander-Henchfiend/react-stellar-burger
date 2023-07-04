import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useEffect } from "react";
import ReactDom from 'react-dom'
import styles from './modal.module.css'
import ModalOverlay from "../modal-overlay/modal-overlay";

const modalRoot = document.getElementById('modal-root')

const Modal = ({ children, title, onClose }) => {

    useEffect(() => {
        const closeByEscape = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        document.addEventListener('keydown', closeByEscape);
        return() => {
            document.removeEventListener('keydown', closeByEscape);
        }
    }, [onClose])

    return ReactDom.createPortal(
        (
            <div className={styles.modal}>
                <div className={`p-10 ${styles[`modal-content`]}`} >
                    <div className={styles.header}>
                        <h2 className="text text_type_main-large">{title}</h2>
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