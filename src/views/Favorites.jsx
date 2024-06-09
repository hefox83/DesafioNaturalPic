import { useContext } from "react";
import { PhotosContext } from "../contexts/PhotosContext"
import Gallery from "../components/Gallery"

const Favorites = () => {
  const { photos } = useContext(PhotosContext)

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
        {photos && photos.filter(photo => photo.liked).map((photo) => (
          <Gallery key={photo.id} photo={photo} />
        ))}
      </div>
      </div>
      )
};
      export default Favorites;
