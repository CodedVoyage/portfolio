import React from 'react';
import { educationData } from './Data/Data';
import './css/education.css';

const Education = () => {
    return (
        <section className="education-container bg-light p-4">
            <h2 className="text-center text-light">Education</h2>
            <div className="row justify-content-center">
                {educationData.map(({ institution, duration, degree }, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div className="education-card text-center">
                            <h3 className="card-title">{institution}</h3>
                            <p className="duration"><strong>Duration:</strong> {duration}</p>
                            <p className="degree"><strong>Degree:</strong> {degree}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
