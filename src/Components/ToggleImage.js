import React, { useEffect, useState } from "react";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { useObjectVal } from "react-firebase-hooks/database";
import { getDbRef } from "Helper/firebase";

const TogglemImage = ({ getBackground }) => {
  const [metals, loading, error] = useObjectVal(getDbRef("metals"));

  const resources = metals ? metals : {};

  const [groupValue, setGroupValue] = useState();
  console.log("888", groupValue);
  const handleChange = (_event, value) => {
    if (value) {
      setGroupValue(value);
    }
  };

  useEffect(() => {
    if (getBackground) {
      getBackground(groupValue);
    }
  }, [groupValue, setGroupValue]);

  return (
    <ToggleButtonGroup
      size="large"
      value={groupValue}
      exclusive
      onChange={handleChange}
      className="toggle-Image"
    >
      {Object.keys(resources)
        .filter((x) => resources[x].image !== "empty")
        .map((x, i) => (
          <ToggleButton
            key={`metal-option-${i}`}
            value={resources[x].image}
            aria-label="left aligned"
            className="toggle-image-item bg-cover"
            style={{
              backgroundImage: `url(${resources[x].image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            +{resources[x].price}$
          </ToggleButton>
        ))}
    </ToggleButtonGroup>
  );
};

export default TogglemImage;