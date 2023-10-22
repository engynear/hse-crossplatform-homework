import * as React from 'react';
import './FormModal.css';

interface FormModalProps {
    isVisible: boolean;
    onClose: () => void;
}

const FormModal: React.FC<FormModalProps> = ({ isVisible, onClose }) => {
    if (!isVisible) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>X</button>
                <div className="modal-body">
                    Заявка отправлена, <br />
                    мы скоро свяжемся с вами!
                </div>
            </div>
        </div>
    );
};

export default FormModal;
