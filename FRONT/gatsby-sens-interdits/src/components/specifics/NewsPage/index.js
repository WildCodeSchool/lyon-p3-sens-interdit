import React from "react";
// import { graphql, useStaticQuery } from "gatsby";
import TabSystemNews from "../../globals/TabSystems/TabSystemNews";


export default function NewsPage() {
   
    // const {strapiNewsPage} = useStaticQuery(graphql`
    //     query MyQuery {
    //         strapiNewsPage {
    //             News_Page {
    //                 title
    //                 content
    //             }
    //         }
    //     }
    // `)
      

    return (
        <div>
            <div>
                <p>Actu</p>
                {/* <h3>{strapiNewsPage.News_Page.title}</h3>
                <p>{strapiNewsPage.News_Page.content}</p> */}
            </div>
            {/* <div>
                <TabSystemNews />
            </div> */}
            
        </div>

        

    )

}