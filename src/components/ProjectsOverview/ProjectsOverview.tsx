import React from 'react';
import projectOverviewStyles from "./ProjectsOverview.module.scss"
import ProjectCard from "../ProjectCard/ProjectCard";
import {projectsList} from "../../projectsList";

function ProjectsOverview() {
    return (
        <div className={projectOverviewStyles.overviewBlock}>
            <div className={projectOverviewStyles.projectsRow}>
                <ProjectCard projectCard={projectsList.get("Sudu")}/>
                <ProjectCard projectCard={projectsList.get("Sudu Editor")}/>
                <ProjectCard projectCard={projectsList.get("Code Browser")}/>
            </div>
            <div className={projectOverviewStyles.projectsRow}>
                <ProjectCard projectCard={projectsList.get("Project 3")}/>
                <ProjectCard projectCard={projectsList.get("Project 3")}/>
                <ProjectCard projectCard={projectsList.get("Project 3")}/>
            </div>
        </div>
    );
}

export default ProjectsOverview;
