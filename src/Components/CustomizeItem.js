import React,{useState , useEffect} from 'react'
import Slider from '@material-ui/core/Slider';
import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import CustomTextField from './CustomTextField'

function CustomizeItem({getValue, customText , textSize , customImage, customImageHeight , customImageWidth}) {
    const [state,setState] = useState({
        customText : customText || "",
        textSize : textSize || 20,
        logo: customImage || null,
        logoWidth : customImageWidth || 100,
        logoHeight : customImageHeight || 100,
    })

    const [imageContol,setImageControl] = useState(false)

    const handleFontSize = (e , value) =>{
        setState({
            ...state,
            textSize : value
        })
    }

    useEffect(()=>{
        if(customImage){
            setImageControl(true)
        }
    },[customImage])

    useEffect(()=>{
        if(getValue){
            getValue(state)
        }
    },[state,setState])

    const handleCustomText = (e) =>{
        setState({
            ...state,
            customText : e.target.value
        })
    }

    const handleImageWidth = (e , value) =>{
        setState({
            ...state,
            logoWidth : value
        })
    }

    const handleImageHeight = (e, value) =>{
        setState({
            ...state,
            logoHeight : value
        })
    }

    const handleImage = (e) =>{
        const image = e.target.files[0]
        const imageUrl = URL.createObjectURL(image)
        setState({
            ...state,
            logo : imageUrl
        })
        setImageControl(true)
    }

    const handleRemoveLogo = () =>{
        setState({
            ...state,
            logo : null
        })
        setImageControl(false)
    }

    return (
        <div className="row">
            <div className="col-md-12">
                <input
                    accept="image/*"
                    style={{display : "none"}}
                    id="contained-button-file"
                    type="file"
                    onChange={handleImage}
                />
                <label htmlFor="contained-button-file" className="col-md-12">
                    <Button variant="outlined" size="large" fullWidth style={{color : "#333"}} component="span">
                        Upload Logo
                    </Button>
                </label>
                {
                    imageContol &&
                    <>
                    <div className="row image-control">
                        <div className="col-md-6">
                            <Typography  gutterBottom>Width</Typography>
                            <Slider max="200" aria-label="custom thumb label" defaultValue={100} color="primary" onChange={handleImageWidth}/>

                        </div>
                        <div className="col-md-6">
                            <Typography  gutterBottom>Height</Typography>
                            <Slider max="200" aria-label="custom thumb label" defaultValue={100} color="primary" onChange={handleImageHeight}/>
                        </div>
                    </div>
                    <div className="row image-control justify-content-end">
                            <Button variant="contained" color="secondary" onClick={handleRemoveLogo}>Remove Logo</Button>
                    </div>
                    </>
                }
            </div>
            <div className="col-md-12 custom-text">
                    <CustomTextField label="Add Custom Text" value={customText} onChange={handleCustomText}/>   
            </div>
            <div className="col-md-12 custom-text">
                    <Typography  gutterBottom>Font Size</Typography>
                    <Slider max="80" aria-label="custom thumb label" defaultValue={20} color="primary" onChange={handleFontSize}/>
            </div>
        </div>
    )
}

export default CustomizeItem
