import React from 'react'
import Calendar from './ProjectDirectory/ProjectList';
import CalendarContent from './ProjectContent/ProjectContent';
import HeaderContainer from '../../Components/HeaderContainer/HeaderContainer';
import "./Technology.css"
import { useState } from 'react';

function importAll(r) {
    return r.keys().map(r);
}
const allProjects = importAll(require.context('/src/Projects', false, /\.jsx$/)).reverse();

export default function Technology() {

    // const allDates = [...new Set(allProjects.map((project) => project.metadata.date))];

    const [selectedProject, setSelectedProject] = useState(allProjects[allProjects.length - 1])

    const handleSelect = (project) => {
        console.log("project: ", project)
        setSelectedProject(project)
    }

    // const selectedProjects = allProjects.filter((project) => project.metadata.date === selectedDate)
    // const selectedProjects = allProjects

    // console.log("selected date: ",selectedDate)
    // console.log("all projects: ",allProjects)
    // console.log("selected projects: ",selectedProjects)

    return (
        <>
            <HeaderContainer />
            <div className='technology'>
                <Calendar
                    projects={allProjects}
                    selectedProject={selectedProject}
                    handleSelect={handleSelect}
                />
                <CalendarContent project={selectedProject} />
            </div>

        </>
    )
}
