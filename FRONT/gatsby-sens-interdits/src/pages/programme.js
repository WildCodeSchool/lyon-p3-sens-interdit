import React,{ useState, useEffect } from "react"
import ProgrammePage from "../components/globalscomponents/programmepagecomponents/ProgrammePage"
//import axios from "axios"
import listEvenement from "../testDB/evenements.json"

export default function Programme() {
  
  const [listSpectacles, setListSpectacles] = useState([...listEvenement])
  const [loading, isLoading] = useState(true)

  /*useEffect(() => {
    if (loading === true) {
      console.log("fetching...")
      axios
        .get("http://localhost:1337/spectacles")
        .then(response => response.data)
        .then(data => {
          setListSpectacles(data)
        })
        .catch(err => console.log(err))

      isLoading(false)
    } else {
      console.log("list", listSpectacles)
    }
  }, [listSpectacles])
*/

  return (
    <>
      <ProgrammePage list={listSpectacles}/>
    </>
  )
}