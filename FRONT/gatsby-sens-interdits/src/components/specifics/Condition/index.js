import React from 'react';
import './Condition.css';
import { graphql, useStaticQuery } from "gatsby";


export default function ConditionsPage() {
    const { strapiConditions } = useStaticQuery(graphql`
    query MyQueryConditions {
        strapiConditions {
            content
            id
          }
      }`)
    return (
        <div>
            <div className='global-conditions'>
                <h1 className='to-uppercase'>Conditions Générales d'utilisation</h1>
                <div className='content-conditions'>
                    {strapiConditions.content}
                </div>
            </div>

        </div>
    )
}