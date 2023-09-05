import {ProjectCardType} from "./types/ProjectCard.type";
import {ProjectStatus} from "./types/ProjectStatus";

export const projectsList = new Map<string, ProjectCardType>([[
    "Sudu", {
        title: "Sudu",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English",
        path: "project1",
        status: ProjectStatus.IN_PROGRESS,
    }],[
    "Code Browser", {
        title: "Code Browser",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English",
        path: "code-browser",
        status: ProjectStatus.READY,
    }],
    ["Sudu Editor", {
        title: "Sudu Editor",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English",
        path: "project2",
        status: ProjectStatus.USABLE_PROTOTYPE,
    }
    ],
    ["Project 3", {
        title: "Project 3",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English",
        path: "project3",
        status: ProjectStatus.READY,
    }
    ]])