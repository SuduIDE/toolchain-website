import React from 'react';
import projectCardStyles from "./ProjectCard.module.scss";
import {Link} from "react-router-dom";
import {ProjectCardType} from "../../types/ProjectCard.type";
import Label from "../elements/Label";
import {ProjectStatus} from "../../types/ProjectStatus";

interface Props {
    projectCard: ProjectCardType | undefined
}
const ProjectCard = (props: Props) => {
   /* document.addEventListener('mousemove', e => {
        var w = window.innerWidth;
        var h = window.innerHeight;
        var x = Math.round(e.pageX / w * 100);
        var y = Math.round(e.pageY / h * 100);
        document.getElementsByTagName("Link").style.background = `radial-gradient(at ${x}% ${y}%, #6b5ef7, #f75e5e)`;
    });*/
    var color = "grey"
    var text = ""
    switch (props.projectCard?.status) {
        case ProjectStatus.READY:
            color = "green"
            text = "READY"
            break
        case ProjectStatus.IN_PROGRESS:
            color = "orange"
            text = "IN PROGRESS"
            break
        case ProjectStatus.USABLE_PROTOTYPE:
            color = "purple"
            text = "USABLE PROTOTYPE"
            break
    }

    return (
        <Link to={"/" + props.projectCard?.path } className={projectCardStyles.projectCard}>
            <p className={projectCardStyles.cardTitle}>{props.projectCard?.title}</p>
            <Label text={text} color={color}/>
            <p className={projectCardStyles.cardDescription}>{props.projectCard?.description}</p>
        </Link>
    );
}

export default ProjectCard;
