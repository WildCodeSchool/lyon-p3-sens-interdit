import React from 'react';
import './Mention.css';
import "../../../assets/styles/global.css";
import { graphql, useStaticQuery } from "gatsby";


export default function MentionsPage() {
    const { strapiMentions } = useStaticQuery(graphql`
    query MyQueryMentions {
        strapiMentions {
            content
            id
          }
      }`)
    return (
        <div>
            <div className='global-mentions container'>
                <h1 className='to-uppercase'>Mentions Légales</h1>
                <div className='content-mentions'>
                    {strapiMentions.content}
                </div>
            </div>

        </div>
    )
}