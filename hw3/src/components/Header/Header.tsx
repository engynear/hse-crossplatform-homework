import * as React from 'react';
import './Header.css';

const Header: React.FC = () => {
    return (
        <header id="header">
            <div className="logo">
                <img src="logo.svg" alt="Logo"></img>
            </div>
            <nav>
                <li><a href="#about">О нас</a></li>
                <li><a href="#projects">Проекты</a></li>
                <li><a href="https://www.youtube.com/watch?v=MjeNzvhxSds">Материалы</a></li>
                <li><a href="#testimonials">Отзывы</a></li>
            </nav>
            <a href="tel:+79616590823" className="phone">
                <p>+7 961 659 08 23</p>
            </a>
            <div className="burger">
                <img src="burger.svg" alt="Menu"></img>
            </div>
        </header>
    );
};

export default Header;
