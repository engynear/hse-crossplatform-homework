import * as React from 'react';

interface TestimonialProps {
    name?: string;
    text: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, text }) => {
    return (
        <div className="testimonial">
            <img src="./testimonials/quotes.svg" alt=""></img>
            <p className="testimonial-name">{name}</p>
            <p className="testimonial-text">{text}</p>
        </div>
    );
};

Testimonial.defaultProps = {
    name: 'Аноним',
    text: 'Текст отзыва'
};


export default Testimonial;
