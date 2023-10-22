import * as React from 'react';

interface FormProps {
    onSubmit: (name: string, email: string, phone: string) => void;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(name, email, phone);
        setName('');
        setEmail('');
        setPhone('');
    };

    return (
        <form onSubmit={handleSubmit}> 
            <input
                type="text"
                className="name"
                placeholder="Имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="email"
                className="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="tel"
                className="phone"
                placeholder="Телефон"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <button id="form-submit" type="submit">Отправить заявку</button>
        </form>
    );
};

export default Form;
