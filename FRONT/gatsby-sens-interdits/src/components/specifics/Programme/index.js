import React from "react";
import "./Index.css";
import photoTest from "../../../assets/img/img-sens-interdit.jpg";
import Thumbnail from "../../globals/Thumbnail";
import FilterTab from "./FilterTab";
import CalendarLarge from "../../globals/Calendar/CalendarLarge";
import ImageCarousel from "../../globals/Carousel/ImageCarousel";

export default function ProgrammePage() {

  const props = {list: {}};
  const [list, setList] = useState(props.list);

  useEffect(() => {
    setList(props.list);
  }, [props]);

  function countryFilter(e) {
    e.preventDefault();
    console.log("Le filtre pays a été cliqué.");
  }

  function authorFilter(e) {
    e.preventDefault();
    console.log("Le filtre metteur en scene a été cliqué.");
  }

  function placeFilter(e) {
    e.preventDefault();
    console.log("Le filtre lieu a été cliqué.");
  }
  function resetFilter(e) {
    e.preventDefault();
    console.log("Les filtres sont reinitialisés.");
  }

  const affichageList = () => {
    console.log("AAAAAAAAAAAAAAAA", "list");
    if (list.length === 0) {
      return (
        <img
          src="https://media.giphy.com/media/WiIuC6fAOoXD2/giphy.gif"
          alt="loading"
        />
      );
    } else {
      return list.map(spectacle => {
        console.log(spectacle.all_photos.photo_1);
        return (
          <Thumbnail
            key={
              spectacle.titre +
              Math.floor(Math.random() * 10) +
              Math.floor(Math.random() * 10)
            }
            affiche={
              spectacle.all_photos.photo_1 !== undefined
                ? spectacle.all_photos.photo_1
                : photoTest
            }
            date={
              spectacle.info_pratique.dates === undefined ||
              spectacle.info_pratique.dates.date_1 === undefined
                ? "inconnu"
                : spectacle.info_pratique.dates.date_1
            }
            country={
              spectacle.credits === undefined ||
              spectacle.credits.pays === undefined
                ? "inconnu"
                : spectacle.credits.pays
            }
            name={spectacle.titre}
            team={
              spectacle.credits === undefined ||
              spectacle.credits.auteur === undefined
                ? "inconnu"
                : spectacle.credits.auteur
            }
          />
        );
      });
    }
  };
  return (
    <div className="global-programme-page">
      <ImageCarousel />
      <div className="content-programme-page">
        <CalendarLarge />
        <FilterTab />
        <div className="display-mini-tab">
          <Thumbnail
            affiche={photoTest}
            date="26 Octobre"
            country="Russie"
            name="Titre du spectacle"
            team="Metteur en scène"
          />
          <Thumbnail
            affiche={photoTest}
            date="26 Octobre"
            country="Russie"
            name="Titre du spectacle"
            team="Metteur en scène"
          />
          <Thumbnail
            affiche={photoTest}
            date="26 Octobre"
            country="Russie"
            name="Titre du spectacle"
            team="Metteur en scène"
          />
          <Thumbnail
            affiche={photoTest}
            date="26 Octobre"
            country="Russie"
            name="Titre du spectacle"
            team="Metteur en scène"
          />
          <Thumbnail
            affiche={photoTest}
            date="26 Octobre"
            country="Russie"
            name="Titre du spectacle"
            team="Metteur en scène"
          />
          <Thumbnail
            affiche={photoTest}
            date="26 Octobre"
            country="Russie"
            name="Titre du spectacle"
            team="Metteur en scène"
          />
          <Thumbnail
            affiche={photoTest}
            date="26 Octobre"
            country="Russie"
            name="Titre du spectacle"
            team="Metteur en scène"
          />
          <Thumbnail
            affiche={photoTest}
            date="26 Octobre"
            country="Russie"
            name="Titre du spectacle"
            team="Metteur en scène"
          />
          <Thumbnail
            affiche={photoTest}
            date="26 Octobre"
            country="Russie"
            name="Titre du spectacle"
            team="Metteur en scène"
          />
          <Thumbnail
            affiche={photoTest}
            date="26 Octobre"
            country="Russie"
            name="Titre du spectacle"
            team="Metteur en scène"
          />
          <Thumbnail
            affiche={photoTest}
            date="26 Octobre"
            country="Russie"
            name="Titre du spectacle"
            team="Metteur en scène"
          />
          <Thumbnail
            affiche={photoTest}
            date="26 Octobre"
            country="Russie"
            name="Titre du spectacle"
            team="Metteur en scène"
          />
        </div>
      </div>
    </div>
  );
}
