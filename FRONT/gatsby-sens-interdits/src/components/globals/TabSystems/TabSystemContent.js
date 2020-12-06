
import React from "react";


export default function TabSystemContent (props) {
    const tab = props.tab
    const DisplayPicture = props.DisplayPicture;

    return (
        <div>
            <p>{tab.content}</p>
            {tab.credited_image.length !== 0 ? 
            <DisplayPicture imageContent={tab.credited_image} />
            : null}
        </div>
    )  
}
