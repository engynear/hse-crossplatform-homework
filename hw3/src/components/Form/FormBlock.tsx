import * as React from 'react';

import Form from './Form';
import './Form.css'
import Modal from './Modal/FormModal';
import { Typography } from '@mui/material';

const FormBlock: React.FC = () => {
    const [isModalVisible, setModalVisible] = React.useState(false);

    const handleFormSubmit = (name: string, email: string, phone: string) => {
        console.log('Form submitted with:', { name, email, phone });
        setModalVisible(true);
    };

    return (
        <div id="form">
            <div className="form-image">
                <img src="form/form-image.jpg" alt=""></img>
            </div>
            <div className="form-container">
                <Typography variant="h2" className="form-title">Оставьте заявку</Typography>
                <p className="form-text">Оставьте заявку, и мы вам перезвоним</p>
                <Form onSubmit={handleFormSubmit} />
                <div className="download-buttons">
                    <a href="https://apps.apple.com/" id="download-appstore">
                        <img src="form/form-appstore-button.svg" alt="Download from AppStore"></img>
                    </a>
                    <a href="https://play.google.com/" id="download-googleplay">
                        <img src="form/form-googleplay-button.svg" alt="Download from Google Play"></img>
                    </a>
                </div>
            </div>
            <Modal isVisible={isModalVisible} onClose={() => setModalVisible(false)} />
        </div>
    );
};

export default FormBlock;