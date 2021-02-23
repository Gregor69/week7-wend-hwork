import React from "react";


const RoverPic = ({photo}) => {
    if(!photo) {
        return(null)
    }

   
    
    



    return(
        <>
        <div className="photo details">
            
            <p><b>Photo: </b>{photo.camera.full_name}</p>
            <p><b>Image: </b></p><img src={photo.img_src} height = "150"/>

        </div>
        </>


    )

}


export default RoverPic;

