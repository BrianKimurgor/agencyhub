/* eslint-disable no-unused-vars */
import axios from "axios"
import { useEffect, useState } from "react"
import ProjectForm from "./projectForm"



const ProjectGrid = () => {
    const [error, setError] = useState('')
    const [projects, setProjects] = useState([])
    const [projectData, setProjectData] = useState({
        createdAt:"",
        description:"",
        endDate:"",
        id:0,
        name:"",
        startDate:"",
        updatedAt:""
    })
    useEffect(() => {
        axios.get("http://localhost:5000/api/projects")
            .then(res => setProjects(res.data))
            .catch(error => setError(error.message))
    }, []);

    const deleteProject = (id) => {
        const originalProjects = [...projects]
        setProjects(projects.filter(project => project.id !== id))
        axios.delete("http://localhost:5000/api/projects/" + id)
            .catch(error => {
                setError(error.message)
                setProjects(originalProjects)
            })
    }

    const onEdit = (formData) => {
        const originalProjects = [...projects]
        setProjects(projects.map(project => project.id === projectData.id ? {...formData, id: projectData.id}: project))
        axios.put("http://localhost:5000/api/projects/" + projectData.id, { ...formData, id: projectData.id })
        .catch( error => {
            setError(error.message)
            setProjects(originalProjects)
        })
    }

    return (
        <>

            <ul className="list-group">
                {projects.map(project =>
                    <li key={project.id} className="list-group-item d-flex justify-content-between">
                        {project.name}
                        <button className="btn btn-outline-secondary" onClick={() => setProjectData(project)}>Edit</button>
                        <button className="btn btn-outline-danger" onClick={() => deleteProject(project.id)}>Delete</button>
                    </li>)}
            </ul>
            <div className="mb-3">
                <ProjectForm  handleSubmit={(formData) => onEdit(formData)} projectData={projectData} />
            </div>
        </>

    )
}

export default ProjectGrid
