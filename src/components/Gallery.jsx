import { useContext } from "react";
import { PhotosContext } from "../contexts/PhotosContext"
import IconHeart from "./IconHeart";

const Gallery = (Photo) => {
  const { photos, setPhotos } = useContext(PhotosContext)

  const fotosFavoritas = (id) => {
    const agregaFotos = photos.map(Photo => {
      if (Photo.id === id){
        return {
          ...Photo,
          liked: !Photo.liked
        }}
      return Photo
    });
    setPhotos(agregaFotos)
  }


  return <div className="gallery grid-columns-5 p-3">
    
    {photos.map((Photo, index) => <div key={index} className="photo" style={{ backgroundImage: `url(${Photo.src.tiny})` }}>
      <span onClick={() => fotosFavoritas(Photo['id'])}>
        <IconHeart filled={Photo.liked} />
      </span>
    </div>)}

  </div>;
};
export default Gallery;
