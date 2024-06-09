import { createContext, useEffect, useState } from "react";
// exportamos un contexto (sin default)y un provider como components
export const PhotosContext = createContext()

export default function PhotosProvider({children}) {
    const [photos,setPhotos] = useState([])
    const getPhotos= async()=>{
        const response = await fetch ("/photos.json")
        const {photos:photosdb} = await response.json()
        setPhotos(photosdb)
    };
    useEffect(()=>{getPhotos()},[]);
    return(
        <PhotosContext.Provider value={{photos,setPhotos}}>
            {children}
        </PhotosContext.Provider>
    )
}
