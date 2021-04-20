import React, { useState, useEffect } from "react";
import Slider from "@material-ui/core/Slider";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CustomTextField from "./CustomTextField";
import Checkbox from "@material-ui/core/Checkbox";
import { renderImage, removeImage } from "Helper/images";

function CustomizeItem({
  getValue,
  customText,
  textSize,
  customImage,
  customImageHeight,
  customImageWidth,
  keepLogoAspectRatio,
}) {
  const [state, setState] = useState({
    customText: customText || "",
    textSize: textSize || 20,
    logo: customImage || null,
    logoWidth: customImageWidth || 100,
    logoHeight: customImageHeight || 100,
    keepLogoAspectRatio: keepLogoAspectRatio || false,
  });

  const [imageContol, setImageControl] = useState(false);

  const handleFontSize = (e, value) => {
    setState({
      ...state,
      textSize: value,
    });
  };

  useEffect(() => {
    if (customImage) {
      setImageControl(true);
    }
  }, [customImage]);

  useEffect(() => {
    if (getValue) {
      getValue(state);
    }
  }, [state, setState]);

  const handleCustomText = (e) => {
    setState({
      ...state,
      customText: e.target.value,
    });
  };

  const handleImageWidth = (e, value) => {
    setState({
      ...state,
      logoWidth: value,
      ...(state.keepLogoAspectRatio ? { logoHeight: value } : {}),
    });
  };

  const handleImageHeight = (e, value) => {
    setState({
      ...state,
      logoHeight: value,
      ...(state.keepLogoAspectRatio ? { logoWidth: value } : {}),
    });
  };

  const handleImage = (e) => {
    const image = e.target.files[0];
    const imageUrl = URL.createObjectURL(image);
    renderImage(imageUrl, "logo-canvas");
    setState({
      ...state,
      logoHeight: 200,
      logoWidth: 200,
      logo: imageUrl,
    });
    setImageControl(true);
  };

  const handleRemoveLogo = () => {
    setState({
      ...state,
      logo: null,
    });
    setImageControl(false);
    removeImage("logo-canvas");
  };

  const handleAspectRatio = (e) => {
    if (e.target.checked) {
      let newSize = Math.max(state.logoHeight, state.logoWidth);
      setState({
        ...state,
        logoHeight: newSize,
        logoWidth: newSize,
        keepLogoAspectRatio: e.target.checked,
      });
    } else {
      setState({
        ...state,
        keepLogoAspectRatio: e.target.checked,
      });
    }
  };

  return (
    <div className="row">
      <div className="col-md-12">
        <input
          accept="image/*"
          style={{ display: "none" }}
          id="contained-button-file"
          type="file"
          onChange={handleImage}
        />
        <label htmlFor="contained-button-file" className="col-md-12">
          <Button
            variant="outlined"
            size="large"
            fullWidth
            style={{ color: "#333" }}
            component="span"
          >
            Upload Logo
          </Button>
        </label>
        {imageContol && (
          <>
            <div className="row image-control">
              <div className="col-md-6">
                <Typography gutterBottom>Width</Typography>
                <Slider
                  max="200"
                  aria-label="custom thumb label"
                  defaultValue={100}
                  color="primary"
                  value={state.logoWidth}
                  onChange={handleImageWidth}
                />
              </div>
              <div className="col-md-6">
                <Typography gutterBottom>Height</Typography>
                <Slider
                  max="200"
                  aria-label="custom thumb label"
                  defaultValue={100}
                  color="primary"
                  value={state.logoHeight}
                  onChange={handleImageHeight}
                />
              </div>
              <div className="col-md-6 d-flex align-items-center mt-2">
                <Checkbox
                  checked={state.keepLogoAspectRatio}
                  onChange={handleAspectRatio}
                ></Checkbox>
                <Typography>Keep aspect ratio</Typography>
              </div>
            </div>
            <div className="row image-control justify-content-end">
              <Button variant="contained" color="secondary" onClick={handleRemoveLogo}>
                Remove Logo
              </Button>
            </div>
          </>
        )}
      </div>
      <div className="col-md-12 custom-text">
        <CustomTextField label="Add Custom Text" value={customText} onChange={handleCustomText} />
      </div>
      <div className="col-md-12 custom-text">
        <Typography gutterBottom>Font Size</Typography>
        <Slider
          max="80"
          aria-label="custom thumb label"
          defaultValue={20}
          color="primary"
          onChange={handleFontSize}
        />
      </div>
    </div>
  );
}

export default CustomizeItem;
