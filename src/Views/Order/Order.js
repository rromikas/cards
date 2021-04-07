import React, { useEffect, useState } from "react";
import "../../Styles/css/order.css";
import FrontCard from "../../Components/FrontCard";
import BackCard from "../../Components/BackCard";
import ControlPanel from "./ControlPanel";
import M1 from "../../Assets/images/card/m1.jpg";
import M2 from "../../Assets/images/card/m2.jpg";
import M3 from "../../Assets/images/card/m3.jpg";
import M4 from "../../Assets/images/card/m4.jpg";

function Order() {
  const [customCard, setCustomCard] = useState();
  const [activeBackground, setActiveBackground] = useState();

  const handleValue = (value) => {
    setCustomCard(value);
  };

  useEffect(() => {
    if (customCard && customCard.backgroundIndicator) {
      const back = customCard.backgroundIndicator;

      setActiveBackground(back);
    }
  }, [customCard]);

  console.log("From Abba", customCard);
  return (
    <div className="row order-container">
      <div className="col-md-5">
        <FrontCard data={customCard} background={activeBackground || M2} />
        <BackCard data={customCard} background={activeBackground || M2} />
      </div>
      <div className="col-md-7">
        <ControlPanel getValue={handleValue} />
      </div>
    </div>
  );
}

export default Order;
