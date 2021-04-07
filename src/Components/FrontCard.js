import React, { useEffect } from "react";
import "../Styles/css/card.css";
import { RiVisaLine, RiMastercardFill } from "react-icons/ri";
import Draggable from "react-draggable";
import B1 from "../Assets/images/border/b1.png";
import B2 from "../Assets/images/border/b2.png";

function FrontCard({ data, background }) {
  const [state, setState] = React.useState({
    activeDrags: 0,
  });

  const onStart = () => {
    setState({ activeDrags: ++state.activeDrags });
  };

  const onStop = () => {
    setState({ activeDrags: --state.activeDrags });
  };

  const dragHandlers = { onStart: onStart, onStop: onStop };

  let divStyle = {
    backgroundImage: "url(" + background + ")",
    backgroundSize: "cover",
  };

  let imageStyle = {
    position: "absolute",
    height: `${data?.logoHeight}px`,
    width: `${data?.logoWidth}px`,
  };

  return (
    <div className="card-container" style={divStyle}>
      <Draggable {...dragHandlers}>
        <img src={data && data?.logo} style={imageStyle} />
      </Draggable>
      <div className="card-portion">
        {data && data.customText && (
          <>
            <Draggable {...dragHandlers}>
              <div className="custom-text-last" style={{ fontSize: `${data.textSize + "px"}` }}>
                {data.customText}
              </div>
            </Draggable>
          </>
        )}
      </div>
      <div className="card-portion">
        <span className="small-chip"></span>
      </div>
      <div className="card-portion card-number">
        {data?.cardNumberPosition === "front" && (
          <>
            <Draggable {...dragHandlers}>
              <div>7777 7777 7777 7777</div>
            </Draggable>
            <Draggable {...dragHandlers}>
              <div>Valid 77/77</div>
            </Draggable>
          </>
        )}
      </div>
      <div className="card-portion name-type-portion">
        <Draggable {...dragHandlers}>
          <div>{data?.primaryName || "(Name Here)"}</div>
        </Draggable>
        <Draggable {...dragHandlers}>
          <div>
            {data && data.cardNumberType === "visa" ? (
              <RiVisaLine className="card-type-icon" />
            ) : (
              <RiMastercardFill className="card-type-icon" />
            )}
          </div>
        </Draggable>
      </div>
      {data && data.borderIndicator ? (
        <img src={data.borderIndicator} className="img-border" />
      ) : null}
    </div>
  );
}

export default FrontCard;
