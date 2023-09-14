import { createPortal } from 'react-dom';
import styles from './Modal.module.scss';

const portalElement = document.getElementById('overlays');

const Backdrop = ({ onClose }) => {
  return <div onClick={onClose} className={styles.backdrop}>
  </div>
}

const ModalOverlay = ({children}) => {
  return (
    <div className={styles.modal}>
      {children}
    </div>
  )
}

const Modal = ({ onClose, children }) => {
  return (
    <>
      {createPortal(<>
        <Backdrop onClose={onClose} />
        <ModalOverlay children={children} />
      </>, portalElement)}
    </>
  )
}

export default Modal;