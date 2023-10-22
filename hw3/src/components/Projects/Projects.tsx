import * as React from 'react';
import Project from './Project/Project';
import './Projects.css';
import { Typography } from '@mui/material';

const Projects: React.FC = () => {
    return (
        <div id="projects">
            <div className="projects-title">
                <Typography variant='h2'>Проекты</Typography>
            </div>
            <div className="projects-grid">
                <Project imageUrl="projects/1.jpg" description="Тумба под телевизор" />
                <Project imageUrl="projects/2.jpg" description="Кухонный гарнитур" />
                <Project imageUrl="projects/3.jpg" description="Кресло-качалка" />
                <Project imageUrl="projects/4.jpg" description="Ванный гарнитур" />
                <Project imageUrl="projects/5.jpg" description="Кровать King-size" />
                <Project imageUrl="projects/6.jpg" description="Тумба ручной работы" />
            </div>
        </div>
    );
};

export default Projects;
