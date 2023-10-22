import * as React from 'react';

import { Typography } from '@mui/material';

interface AboutPointProps {
    title: string;
    text: string;
}

const AboutPoint: React.FC<AboutPointProps> = ({ title, text }) => {
    return (
        <div>
            <Typography variant='h3'>{title}</Typography>
            <p>{text}</p>
        </div>
    );
};

export default AboutPoint;