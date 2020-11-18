 import React from 'react';

 import { graphql, useStaticQuery } from "gatsby";

 export default function Navbar() {

   const { strapiGlobalMenu } = useStaticQuery(graphql`
   query MyQuery {
     strapiGlobalMenu {
       global_menu_link {
         id
         title
         url
       }
     }
   }
   `);
   return (
     <nav>
       <ul className="nav-bar">
         {strapiGlobalMenu.global_menu_link.map(elem => (
           <li key={elem.id}><a href={elem.url}>{elem.title}</a></li>
         ))}
       </ul>
     </nav >
   )
 }
