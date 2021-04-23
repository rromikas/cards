import React from "react";
import "../Styles/css/card.css";
import { checkCardName } from "../Helper/checkCardName";
import Logo from "Assets/images/logo/logo2r.png";

function BackCard({ data, background }) {
  let divStyle = {
    backgroundImage: "url(" + background.image || "" + ")",
    backgroundSize: "cover",
  };
  return (
    <div className="card-container position-relative text-white" style={divStyle}>
      <div className="back-card-scan position-absolute" style={{ top: 26 }}></div>
      <div className="position-absolute" style={{ top: 88, left: 20 }}>
        <div className="d-flex align-items-center">
          <div className="back-seal mr-4"></div>
          <div className="back-seal-text">777</div>
        </div>
        <div className="authorize-sig">Authorize Signature &nbsp; &nbsp; Not Valid Unless Sign</div>
      </div>
      <div className="text-center position-absolute" style={{ top: 160, left: 20 }}>
        {data && data.cardNumberPosition === "back" && (
          <>
            <div className="back-number">7777777777</div>
            <div className="back-valid-date">Valid 77/77</div>
          </>
        )}
      </div>
      <div
        className="back-bankname-container position-absolute"
        style={{
          top: data && data.cardNumberPosition === "back" ? 210 : 198,
          left: 0,
          right: 0,
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        <div className="bankname-left">
          <span style={{ lineHeight: 1, marginBottom: 6 }}>
            {checkCardName(data && data.backgroundIndicator)}{" "}
          </span>
          <span>Services : 1XBV-GTSR-2REP-BH43 (Bank Name)</span>
        </div>
        <div className="back-logo">
          <div style={{ fontSize: 12 }}>Powered By</div>
          <div className="position-relative d-flex justify-content-center" style={{ width: 95 }}>
            <img width={120} src={Logo}></img>
          </div>
        </div>
      </div>
      <div
        className="back-notice position-absolute text-white"
        style={{ bottom: 7, left: 20, right: 20 }}
      >
        This custom card is commissioned by the cardholder. It is produced in South Africa by uCard
        Elite. This card is strictly for personal use, issuing bank can recover the property at any
        time.
      </div>
    </div>
  );
}

export default BackCard;
