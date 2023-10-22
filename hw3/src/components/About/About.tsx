import * as React from 'react';
import AboutPoint from './AboutPoint';
import './About.css';

import { Typography } from '@mui/material';

const About: React.FC = () => {
    return (
        <div id="about">
            <div className="about-title">
                <Typography variant='h2' className="web-title">Более 5 лет создаем мебель для вашего комфорта</Typography>
                <Typography variant='h2' className="mob-title">О компании</Typography>
            </div>
            <div className="about-text">
                <p>Мы — команда профессионалов, которые могут произвести любую мебель для вашего проекта, а также найти
                    производственное решение любой задумки.</p>
                <p>Наша основная цель — реализовывать самые смелые задумки, и делать это качественно и аккуратно.</p>
                <p>В качестве материалов мы используем натуральные — стекло, дерево, бетон, камень, металл и эпоксидную
                    смолу.</p>
            </div>
            <div className="about-info">
                <AboutPoint title="1 год" text="гарантии на всю продукцию" />
                <AboutPoint title="300+" text="выполненных проектов" />
                <AboutPoint title="15 дней" text="срок производства" />
            </div>
        </div>
    );
};

export default About;
