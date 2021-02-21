import React from "react";


const RoverPic = ({photo}) => {
    if(!photo) {
        return(null)
    }

   
    
    



    return(
        <>
        <div className="photo details">
            
            <p><b>Photo</b>{photo}</p>
            <img src={photo.image_src} height = "150"/>

        </div>
        </>


    )

}


export default RoverPic;

