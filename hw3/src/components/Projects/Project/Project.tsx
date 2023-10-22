import * as React from 'react';
import './Project.css';

interface ProjectProps {
    imageUrl?: string;
    description?: string;
}

const Project: React.FC<ProjectProps> = ({ imageUrl, description }) => {
    return (
        <div className="project">
            <img src={imageUrl} alt=""></img>
            <div className="project-description">
                <a href="#">
                    <p>{description}</p>
                    <img src="projects/project-arrow.svg" alt=""></img>
                </a>
            </div>
        </div>
    );
};

Project.defaultProps = {
    imageUrl: 'projects/placeholder.png',
    description: 'Описание проекта'
};

export default Project;
