/* eslint-disable no-unused-vars */
import axios from "axios"
import { useEffect, useState } from "react"
import ResourceForm from "./resourceForm"

const ResourceGrid = () => {
    const [error, setError] = useState('')
    const [resources, setResources] = useState([])
    const [resourceData, setResourceData] = useState({
        projectId: 0,
        budget: 0.0,
        createdAt: '',
        updatedAt: ''
    })
    const [isEditing, setIsEditing] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:5000/api/resource-allocations")
            .then(res => setResources(res.data))
            .catch(error => setError(error.message))
    }, [])

    const deleteResource = (id) => {
        const originalResources = [...resources]
        setResources(resources.filter(resource => resource.id !== id))
        axios.delete("http://localhost:5000/api/resource-allocations/" + id)
            .catch(error => {
                setError(error.message)
                setResources(originalResources)
            })
    }

    const onEdit = (resource) => {
        setResourceData(resource)
        setIsEditing(true)
    }

    const handleSubmit = (resource) => {
        const updatedResources = resources.map(res =>
            res.id === resource.id ? resource : res
        )
        setResources(updatedResources)
        setIsEditing(false)

        axios.put(`http://localhost:5000/api/resource-allocations/${resource.id}`, resource)
            .then(() => {
            })
            .catch(error => {
                setError(error.message)
                setResources([...resources])
            })
    }

    return (
        <div className="list-group mt-4">
            <h2>Resource Grid</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Project ID</th>
                        <th>Budget</th>
                        <th>Created At</th>
                        <th>Updated At</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {resources.map(resource => (
                        <tr key={resource.id}>
                            <td>{resource.projectId}</td>
                            <td>{resource.budget}</td>
                            <td>{resource.createdAt}</td>
                            <td>{resource.updatedAt}</td>
                            <td>
                                <button
                                    className="btn btn-outline-secondary"
                                    onClick={() => onEdit(resource)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="btn btn-outline-danger"
                                    onClick={() => deleteResource(resource.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {isEditing && (
                <ResourceForm
                    handleSubmit={handleSubmit}
                    allocationtData={resourceData}
                />
            )}
        </div>
    )
}

export default ResourceGrid
