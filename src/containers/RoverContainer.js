import React, {useState, useEffect} from "react";
import RoverPic from "../components/RoverPic";
import RoverPicsList from "../components/RoverPicsList";


const RoverContainer = () => {

    const [roverPhotos, setRoverPhotos] = useState([]);
    const [selectedPhoto, setSelectedPhoto] = useState(null);


    const getRoverPhotos = () => {
        fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=KtKMReohDfi5qb0kDDIBygWwHDjEWbSzEokRq1JT")
        
        .then(res => res.json())
        .then(data => setRoverPhotos(data.photos))
    }

    useEffect (() => {
        getRoverPhotos()
    }, [])


      
    
    const handleSelectedPhoto = (photo) => {
        setSelectedPhoto(photo)
    }

    



    return (
            <>
            <RoverPicsList roverPhotos={roverPhotos} onSelectedPhoto={handleSelectedPhoto}/>
            <RoverPic photo={selectedPhoto}/>
            </>
    )
    
}


export default RoverContainer;
