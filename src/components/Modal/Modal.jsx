import PropTypes from 'prop-types';
import { useEffect }  from "react";
import css from '../Modal/Modal.module.css';


const Modal = ({ onCloseModal, children }) => {
    const handleBackdropClick = e => {
        if (e.target.dataset.action === 'overlay') {
            onCloseModal();
        }
    };

    useEffect(() => {
        const handleKeydown = e => {
            if (e.key === 'Escape') {
            onCloseModal();
        }
    };

    window.addEventListener('keydown', handleKeydown);

    return () => {
        window.removeEventListener('keydown', handleKeydown);
    };
    }, [onCloseModal]);

        return (
            <div className={css.Overlay} onClick={handleBackdropClick} data-action="overlay">
                <div className={css.Modal}>{children}</div>
            </div>
        );
    };

Modal.propTypes = {
    onCloseModal: PropTypes.func.isRequired,
};

export default Modal;