import React, { useState } from 'react';
import { projectExperienceData, workExperienceData } from './Data/Data';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './css/projects.css';

const Projects = () => {
    return (
        <div className="projects-section p-4 align-items-center justify-content-center">
            <h2 className="text-center my-4 text-light">Work Experience</h2>
            <div className="row col-lg-6 col-md-6 col-sm-11 mb-3 justify-content-center align-items-center">
                {workExperienceData.map((exp, index) => (
                    <div key={index} className=" col-lg-6 col-md-6 col-sm-11 mb-3 align-items-center justify-content-center ">
                        <div className="timeline-content work card shadow-sm p-3">
                            <h3 className="card-title">{exp.company}</h3>
                            <p className="mb-1"><strong>Duration:</strong> {exp.duration}</p>
                            <p className="mb-1"><strong>Role:</strong> {exp.role}</p>
                            {exp.client && <p className="mb-1"><strong>Client:</strong> {exp.client}</p>}
                            {exp.project && <p><strong>Project:</strong> {exp.project}</p>}
                        </div>
                    </div>
                ))}
            </div>


            <h2 className="text-center justify-content-center my-4 text-light">Project Experience</h2>
            <div className="row  justify-content-center col-lg-11 col-md-6 col-sm-11 mb-3">
                {projectExperienceData.map((proj, index) => (
                    <ProjectCard key={index} project={proj} />
                ))}
            </div>
        </div>
    );
};

const ProjectCard = ({ project }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(prev => !prev);
    };

    return (
        <div className="col-md-6 col-lg-4 mb-4">
            <div
                className={`timeline-content project card shadow-sm p-3 ${isExpanded ? 'expanded' : ''}`}
                onMouseEnter={toggleExpand}
                onMouseLeave={toggleExpand}
            >
                <h3 className="card-title text-center">{project.project}</h3>
                <p className="mb-1 text-center"><strong>Company:</strong> {project.company}</p>
                <p className="mb-1 text-center"><strong>Role:</strong> {project.role}</p>
                <p className="mb-1"><strong>Description:</strong></p>
                <p className="text-justify">
                    {project.description}
                </p>

                {isExpanded && project.tools && (
                    <div className="tools-section mt-2">
                        <h5>Tools Used:</h5>
                        <table className="table-tools">
                            <thead>
                                <tr>
                                    <th>Category</th>
                                    <th>Tools</th>
                                </tr>
                            </thead>
                            <tbody>
                                {project.tools.map((tool, idx) => (
                                    <tr key={idx}>
                                        <td>{tool.type}</td>
                                        <td>
                                            <ul className="list-unstyled">
                                                {tool.items.map((item, id) => (
                                                    <li key={id}>{item}</li>
                                                ))}
                                            </ul>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Projects;
