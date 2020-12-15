import React from 'react';
import Twitter from './Twitter';
import Facebook from './Facebook';
import Share from './Share';
import "./sharingbox.css"

function SharingBox() {

    return (
        <div id="sharingbox">
            <Twitter/>
            <Facebook/>
            <Share/>
        </div>
    )
}

export default SharingBox;
