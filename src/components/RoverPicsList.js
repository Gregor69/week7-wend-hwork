import React from "react";


const RoverPicsList = ({roverPhotos, onSelectedPhoto}) => {

    const photoListItems = roverPhotos.map((photo, index) => {
        return <li onClick={() => {onSelectedPhoto(photo)}} key={index}>{photo.rover.name} {photo.camera.full_name}</li>
    })
    

    return (
        <>
        <div className="photo-list">
        <ul>
            {photoListItems}
      
        </ul>

        </div>
        </>

    )
}

export default RoverPicsList;