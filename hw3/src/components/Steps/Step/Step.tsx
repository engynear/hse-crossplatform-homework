import './Step.css'
import { Typography } from '@mui/material';

interface StepProps {
    title?: string;
    text?: string;
}

const Step: React.FC<StepProps> = ({ title, text }) => {
    return (
        <div className="step">
            <div className="step-title">
                <Typography variant='h3'>{title}</Typography>
            </div>
            <div className="step-text">
                <p>{text}</p>
            </div>
            <div className="step-separator"></div>
        </div>
    );
};

Step.defaultProps = {
    title: 'Шаг №N',
    text: 'Делаем что-то крутое'
}

export default Step;