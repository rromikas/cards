import React from 'react'
import InstagramGallery from "./InstaGallery";
import '../../Styles/css/gallery.css'
const INSTAGRAM_ID = "45276714580";
const THUMBNAIL_WIDTH = 240;
const PHOTO_COUNT = 60;


function Gallery() {
    return (
        <div className="row gallery-container">
            <div className="col-md-5">
                <div className="gallery-header">
                    Gallery
                </div>
            </div>
            <div className="col-md-7">
                <InstagramGallery
                    userId={INSTAGRAM_ID}
                    thumbnailWidth={THUMBNAIL_WIDTH}
                    photoCount={PHOTO_COUNT}
                />
            </div>

        </div>
    )
}

export default Gallery
