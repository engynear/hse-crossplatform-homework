import * as React from 'react';
import { Typography } from '@mui/material';
import './Hero.css';

const Hero: React.FC = () => {
    return (
        <div id="hero">
            <div className="hero-title">
                <Typography variant="h1">
                    Эксклюзивная <br /> и нестандартная мебель для дома
                </Typography>
            </div>
            <div className="hero-text">
                <Typography variant="body1">
                    Мы можем произвести любую мебель для вашего проекта и найти производственное решение любой задумки.
                </Typography>
            </div>
            <div className="order-link">
                <a href="https://engy.me">ЗАКАЗАТЬ ПРОЕКТ</a>
            </div>
            <div className="web-image">
                <img src="hero/web-image.jpg" alt=""></img>
            </div>
            <div className="mob-image">
                <img src="hero/mob-image.jpg" alt=""></img>
            </div>
            <div className="extra-image">
                <img src="hero/extra-image.jpg" alt=""></img>
            </div>
        </div>
    );
};

export default Hero;
