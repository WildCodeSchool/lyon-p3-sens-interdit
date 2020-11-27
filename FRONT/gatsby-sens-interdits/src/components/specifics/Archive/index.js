import React from "react";
import FestivalPoster from "./FestivalPoster";
import ImageCarousel from "../../globals/Carousel/ImageCarousel";
import FilterTab from "../Programme/FilterTab";
import Thumbnail from "../../globals/Thumbnail";
import photoTest from "../../../assets/img/img-sens-interdit.jpg";
import "./Archive.css";

function Archive(props) {
  const title = "Bonjour";
  const content =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  const festivals = [
    {
      title: "Édition 2013",
      posterUrl:
        "https://i.pinimg.com/originals/a5/5d/f0/a55df0b59a4a8400374af61cb71e7ae0.jpg",
    },
    {
      title: "Édition 2013",
      posterUrl:
        "https://i.pinimg.com/originals/a5/5d/f0/a55df0b59a4a8400374af61cb71e7ae0.jpg",
    },
    {
      title: "Édition 2013",
      posterUrl:
        "https://i.pinimg.com/originals/a5/5d/f0/a55df0b59a4a8400374af61cb71e7ae0.jpg",
    },
    {
      title: "Édition 2013",
      posterUrl:
        "https://i.pinimg.com/originals/a5/5d/f0/a55df0b59a4a8400374af61cb71e7ae0.jpg",
    },
    {
      title: "Édition 2013",
      posterUrl:
        "https://i.pinimg.com/originals/a5/5d/f0/a55df0b59a4a8400374af61cb71e7ae0.jpg",
    },
    {
      title: "Édition 2013",
      posterUrl:
        "https://i.pinimg.com/originals/a5/5d/f0/a55df0b59a4a8400374af61cb71e7ae0.jpg",
    },
  ];

  return (
    <>
      <ImageCarousel displayed={true} images={props.images} title={title} />
      <div className="global-margin archive-global-styling">
        <p className="archive-description">{content}</p>
        <h1 className="to-uppercase">
          Découvrez <span>les archives du festival</span>
        </h1>
        <FilterTab />
        <div className="archive-festivals-grid-wrapper">
          {festivals.map(festival => {
            return (
              <FestivalPoster
                title={festival.title}
                poster={festival.posterUrl}
                url=""
              />
            );
          })}
        </div>
        <h1 className="to-uppercase">
          Découvrez <span>les archives diffusion-transmission</span>
        </h1>
        <FilterTab />
        <div className="archive-transmission-grid-wrapper">
          <Thumbnail
            url="http://localhost:8000/spectacle"
            affiche={photoTest}
            date="26 Octobre"
            country="Russie"
            name="Titre du spectacle"
            team="Metteur en scène"
          />
          <Thumbnail
            url="http://localhost:8000/spectacle"
            affiche={photoTest}
            date="26 Octobre"
            country="Russie"
            name="Titre du spectacle"
            team="Metteur en scène"
          />{" "}
          <Thumbnail
            url="http://localhost:8000/spectacle"
            affiche={photoTest}
            date="26 Octobre"
            country="Russie"
            name="Titre du spectacle"
            team="Metteur en scène"
          />{" "}
          <Thumbnail
            url="http://localhost:8000/spectacle"
            affiche={photoTest}
            date="26 Octobre"
            country="Russie"
            name="Titre du spectacle"
            team="Metteur en scène"
          />{" "}
          <Thumbnail
            url="http://localhost:8000/spectacle"
            affiche={photoTest}
            date="26 Octobre"
            country="Russie"
            name="Titre du spectacle"
            team="Metteur en scène"
          />{" "}
          <Thumbnail
            url="http://localhost:8000/spectacle"
            affiche={photoTest}
            date="26 Octobre"
            country="Russie"
            name="Titre du spectacle"
            team="Metteur en scène"
          />
        </div>
      </div>
    </>
  );
}

export default Archive;
