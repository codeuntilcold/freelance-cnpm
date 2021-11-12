import React from "react";
// component for big page header
export default function PageHeader({ title }) {

    return (
        <div className='central-page-header'>
            <h1>
                {title}
            </h1>
        </div>
    )
}
