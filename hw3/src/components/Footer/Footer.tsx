import * as React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer id="footer">
            <div className="rights-reserved">
                <p>© 2023 engynear</p>
                <p>Все права защищены</p>
            </div>
            <div className="documents">
                <a href="#" id="privacy">Политика конфеденциальности</a>
                <span className="documents-separator">/</span>
                <a href="#" id="payments">Оплата и доставка</a>
            </div>
            <div className="social-media">
                <a href="https://vk.com/engynear" className="vk">ВКОНТАКТЕ</a>
                <a href="https://t.me/engynear" className="tg">ТЕЛЕГРАМ</a>
            </div>
        </footer>
    );
};

export default Footer;