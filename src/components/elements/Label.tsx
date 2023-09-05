import React from 'react';
import labelStyles from "./Label.module.scss";

interface Props {
    text: string,
    color: string
}
const Label = (props: Props) => {

    return (
        <div className={labelStyles.label}
             style={{background: `var(--light-${props.color})`, color: `var(--${props.color})`}}>
            {props.text}
        </div>
    );
}

export default Label;
