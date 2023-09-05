import React from 'react';
import styles from "../../common.module.scss"
import ProjectsOverview from "../ProjectsOverview/ProjectsOverview";

function MainPage() {
    return (
        <div className={styles.content}>
            <div className={styles.titleBlock}>
                <p className={styles.title}>R&D Toolchain Technology Departments <br/>Website's Title</p>
                <p className={styles.subtitle}>Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
            </div>
            <ProjectsOverview/>
        </div>
    );
}

export default MainPage;
