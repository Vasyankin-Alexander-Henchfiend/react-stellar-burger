import styles from "./modal-overlay.module.css";
import PropTypes from "prop-types";
import { TModalOverlay } from "./modal-overlay.types";

const ModalOverlay = ({ onClose }: TModalOverlay) => {
  return <div className={styles[`modal-overlay`]} onClick={onClose}></div>;
};

ModalOverlay.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ModalOverlay;
