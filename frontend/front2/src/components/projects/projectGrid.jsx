/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import ProjectForm from "./projectForm";
import './projects.css'; // Import CSS file

const ProjectGrid = () => {
    const [error, setError] = useState('');
    const [projects, setProjects] = useState([]);
    const [isCreating, setIsCreating] = useState(false);
    const [projectData, setProjectData] = useState({
        createdAt: "",
        description: "",
        endDate: "",
        id: 0,
        name: "",
        startDate: "",
        updatedAt: ""
    });
    const [isEditing, setIsEditing] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:5000/api/projects")
            .then(res => setProjects(res.data))
            .catch(error => setError(error.message));
    }, []);

    const deleteProject = (id) => {
        const originalProjects = [...projects];
        setProjects(projects.filter(project => project.id !== id));
        axios.delete("http://localhost:5000/api/projects/" + id)
            .catch(error => {
                setError(error.message);
                setProjects(originalProjects);
            });
    };

    const onEdit = (formData) => {
        const originalProjects = [...projects];
        setProjects(projects.map(project => project.id === projectData.id ? { ...formData, id: projectData.id } : project));
        axios.put("http://localhost:5000/api/projects/" + projectData.id, { ...formData, id: projectData.id })
            .then(() => {
                setIsEditing(false); // Hide the form after update
                setSelectedProject(null); // Hide details after update
            })
            .catch(error => {
                setError(error.message);
                setProjects(originalProjects);
            });
    };

    const onCreate = (formData) => {
        axios.post("http://localhost:5000/api/projects", formData)
            .then(res => {
                setProjects([...projects, res.data]);
                setIsCreating(false);
            })
            .catch(error => {
                setError(error.message);
            });
    };

    const handleEditClick = () => {
        setProjectData(selectedProject);
        setIsEditing(true);
    };

    const handleProjectClick = (project) => {
        setSelectedProject(project);
    };

    const handleDeleteClick = () => {
        deleteProject(selectedProject.id);
        setSelectedProject(null);
    };

    return (
        <>
            <button className="btn btn-outline-primary mb-3" onClick={() => setIsCreating(true)}>Create Project</button>
            <div className="projects">
                <ul className="list-group">
                    {projects.map(project =>
                        <li key={project.id} className="list-group-item d-flex justify-content-between">
                            <span className="project-name" onClick={() => handleProjectClick(project)}>{project.name}</span>
                        </li>)}
                </ul>
                {selectedProject && !isEditing && (
                    <div className="project-details">
                        <h3>Project Details</h3>
                        <p><strong>Name:</strong> {selectedProject.name}</p>
                        <p><strong>Description:</strong> {selectedProject.description}</p>
                        <div className="dates">
                            <p><strong>Start Date:</strong> {selectedProject.startDate}</p>
                            <p><strong>End Date:</strong> {selectedProject.endDate}</p>
                        </div>
                        <div className="project-buttons">
                            <button className="btn btn-outline-secondary" onClick={handleEditClick}>Edit</button>
                            <button className="btn btn-outline-danger" onClick={handleDeleteClick}>Delete</button>
                        </div>
                    </div>
                )}
            </div>
            {isCreating && (
                <div className="mb-3">
                    <ProjectForm handleSubmit={(formData) => onCreate(formData)} projectData={projectData} />
                </div>
            )}
            {isEditing && (
                <div className="mb-3">
                    <ProjectForm handleSubmit={(formData) => onEdit(formData)} projectData={projectData} />
                </div>
            )}
            {error && <p className="text-danger">{error}</p>}
        </>
    );
};

export default ProjectGrid;
