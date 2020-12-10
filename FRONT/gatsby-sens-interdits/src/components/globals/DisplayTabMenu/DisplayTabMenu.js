import React from "react";
import { Link } from "gatsby";
import "./DisplayTabMenu.css";
import TabMenuContent from './TabMenuContent';

function DisplayTabMenu(props) {
    const external = props.url.charAt(0) === 'h';
    return (
        <div className="display-tab-sticker">
            {external ?
                <a href={props.url} target="_blank" className="to-uppercase">
                    <TabMenuContent props={props} />
                </a>
                :
                <Link to={props.url} className="to-uppercase">
                    <TabMenuContent props={props} />
                </Link>
            }
        </div>
    );
}

export default DisplayTabMenu;
