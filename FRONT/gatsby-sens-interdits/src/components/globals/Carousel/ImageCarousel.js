import React, { useState, useEffect } from "react"
import "./ImageCarousel.css"
import axios from "axios"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import placeholder from "../../../assets/img/placeholder-photo-slider.jpg"

function ImageCarousel() {
  const [isLoading, setIsLoading] = useState(true)
  const [images, setImages] = useState([])
  const [spectacleTitle, setSpectacleTitle] = useState("")

  function AxiosCall(url, dataTreatment) {
    axios
      .get(url)
      .then(response => response.data)
      .then(data => dataTreatment(data))
  }

  function dataImageTreatment(data) {
    setSpectacleTitle(data[0].title)
    setImages(data[0].carousel.image)
    setIsLoading(false)
  }

  const urlSpectacles = "http://localhost:1337/spectacles"

  useEffect(() => {
    AxiosCall(urlSpectacles, dataImageTreatment)
  }, [])

  return isLoading ? (
    <>
      <div className="red"></div>
      <div className="image-text">
        <p>Contenu en cours de chargement</p>
      </div>
      <div className="carousel-loading">
        <img src={placeholder} alt="placeholder_photo" />
      </div>
    </>
  ) : (
      <>
        <div className="red"></div>
        <div className="image-text">
          <p>{spectacleTitle}</p>
          <button>Réserver</button>
        </div>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          interval={5000}
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
        >
          {images.map(image => (
            <div className="size-adjustment">
              <img
                src={"http://localhost:1337" + image.image.url}
                alt={image.image.name}
              />
            </div>
          ))}
        </Carousel>
      </>
    )
}

export default ImageCarousel
