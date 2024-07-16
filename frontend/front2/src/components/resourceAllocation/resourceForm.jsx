/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'

const ResourceForm = ({ handleSubmit, allocationtData }) => {
    const [resourceData, setResourceData] = useState({
        projectId: 0,
        budget: 0.0,
        createdAt: '',
        updatedAt: ''
    })

    useEffect(() => {
        if (allocationtData) {
            setResourceData(allocationtData)
        }
    }, [allocationtData])

    const handleChange = (e) => {
        setResourceData({ ...resourceData, [e.target.name]: e.target.value })
    }

    const submit = (event) => {
        event.preventDefault()
        handleSubmit(resourceData)
    }

    return (
        <div className="container mt-4">
            <h2>Resource Allocation Form</h2>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="projectId" className="form-label">Project ID</label>
                    <input
                        type="number"
                        className="form-control"
                        id="projectId"
                        name="projectId"
                        value={resourceData.projectId}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="budget" className="form-label">Budget</label>
                    <input
                        type="number"
                        step="0.01"
                        className="form-control"
                        id="budget"
                        name="budget"
                        value={resourceData.budget}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="createdAt" className="form-label">Created At</label>
                    <input
                        type="datetime-local"
                        className="form-control"
                        id="createdAt"
                        name="createdAt"
                        value={resourceData.createdAt}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="updatedAt" className="form-label">Updated At</label>
                    <input
                        type="datetime-local"
                        className="form-control"
                        id="updatedAt"
                        name="updatedAt"
                        value={resourceData.updatedAt}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default ResourceForm
