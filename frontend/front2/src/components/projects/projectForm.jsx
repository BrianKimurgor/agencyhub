/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'

const ProjectForm = ({ handleSubmit, projectData }) => {

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        startDate: '',
        endDate: ''
    })

    useEffect(() => {
        if (projectData) {
            setFormData(projectData);
        }
    }, [projectData]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const submit = (event) =>{
        event.preventDefault()
        handleSubmit(formData)
    }
    return (
        <form onSubmit={submit}>
            <div className='mb-3'>
                <label htmlFor="name" className='form-lable'>Project Name:</label>
                <input
                    className='form-control'
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className='mb-3'>
                <label htmlFor="description" className='form-lable'> description:</label>
                <input
                    className='form-control'
                    type="text"
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className='mb-3'>
                <label htmlFor="startDate" className='form-lable'>Start Date</label>
                <input
                    className='form-control'
                    type="text"
                    id="startDate"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className='mb-3'>
                <label htmlFor="endDate" className='form-lable'>End Date</label>
                <input
                    className='form-control'
                    type="text"
                    id="endDate"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    required
                />
            </div>


            <button type="submit" className='btn btn-outline-primary' >{projectData ? 'Update' : 'Create'} Project</button>
        </form>
    )
}

export default ProjectForm
