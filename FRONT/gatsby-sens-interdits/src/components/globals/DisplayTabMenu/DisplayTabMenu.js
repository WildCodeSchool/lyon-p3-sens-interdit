import React from "react";
import { Link } from "gatsby";
import "./DisplayTabMenu.css";
import TabMenuContent from './TabMenuContent';

function DisplayTabMenu(props) {
    const external = props.url.startsWith("http");
    return (
        <div className="display-tab-sticker">
            {console.log("url",props.url,"external",external)}
            {external ?
                <a href={props.url} target="_blank" className="to-uppercase">
                    <TabMenuContent props={props} />
                </a>
                :
                <Link to={props.url} target="_self" className="to-uppercase">
                    <TabMenuContent props={props} />
                </Link>
            }
        </div>
    );
}

export default DisplayTabMenu;
