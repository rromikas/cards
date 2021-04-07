import React from 'react'
import '../Styles/css/card.css'
import {checkCardName} from '../Helper/checkCardName'

function BackCard({data , background}) {
    let divStyle = {
        backgroundImage: 'url(' + background + ')',
        backgroundSize : 'cover'
    }
    return (
        <div className="card-container" style={divStyle}>
            <div className="back-card-scan"></div>
            <div className="back-seal-portion">
                <div className="back-seal-container">
                    <div className="back-seal"></div>
                    <div className="authorize-sig">Authorize Signature  &nbsp; &nbsp; Not Valid Unless Sign</div>
                </div>
                <div className="back-seal-text">
                    777
                </div>
            </div>
            <div className="back-number">
            {
                data && data.cardNumberPosition === "back" &&
                <>
                    <div>7777777777</div>
                    <div>Valid 77/77</div>
                </>
            }
            </div>
            <div className="back-bankname-container">
                <div className="bankname-left">
                    <span>{checkCardName(data && data.backgroundIndicator)} </span>
                    <span>Services : 1XBV-GTSR-2REP-BH43 (Bank Name)</span>
                </div>
                <div className="back-logo">Powered By UCARDelite</div>
            </div>
            <div className="back-notice">
                IMPORTANT: it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
            </div>
         

        </div>
    )
}

export default BackCard
