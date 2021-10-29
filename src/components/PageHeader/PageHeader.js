import React from "react";
import './PageHeader.css'
export default function PageHeader(props){
    const {content} = props;
    return (
        <div className="PageHeader">
            <h1>{content}</h1>
        </div>
    )
}