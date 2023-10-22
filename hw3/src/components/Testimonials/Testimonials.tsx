import * as React from 'react';
import Testimonial from './Testimonial';
import './Testimonials.css';
import { Typography } from '@mui/material';

const Testimonials: React.FC = () => {
    return (
        <div id="testimonials">
            <div className="testimonials-title">
                <Typography variant='h2'>Отзывы</Typography>
            </div>
            <div className="testimonials-flex">
                <Testimonial name="Игорь Антонов" text="Обратилась к Aveji по рекомендации. Команда сразу поняла, какой дизайн я хочу. Предоставили несколько вариантов и в течение недели сделали наброски. Итог понравился, все на высшем уровне." />
                <Testimonial name="Ольга Иванова" text="После пары заказов у компании Aveji убедилась, что за мебелью теперь только к ним. Абсолютно любые решения, в любых размерах и форм-факторе, то что нужно!" />
                <Testimonial name="Аркадий Макаров" text="Aveji — настоящие профессионалы своего дела. Быстро поняли мою задумку, сделали дизайн, согласовали и изготовили мебель. А потом еще и бесплатно все собрали на месте. Большое спасибо!" />
            </div>
        </div>
    );
};

export default Testimonials;