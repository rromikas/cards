import React, { useEffect } from "react";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import B1 from "../Assets/images/border/b1.png";
import B2 from "../Assets/images/border/b2.png";
import { useObjectVal } from "react-firebase-hooks/database";
import { getDbRef } from "Helper/firebase";

const ToggleBorder = ({ getValue }) => {
  const [metals, loading, error] = useObjectVal(getDbRef("borders"));
  const resources = metals ? metals : {};

  const [groupValue, setGroupValue] = React.useState();

  const handleChange = (_event, value) => {
    if (value) {
      setGroupValue(value);
    }
  };

  useEffect(() => {
    if (getValue) {
      getValue(groupValue);
    }
  }, [, groupValue, setGroupValue]);

  return (
    <ToggleButtonGroup
      size="large"
      value={groupValue}
      exclusive
      onChange={handleChange}
      className="toggle-border"
    >
      {Object.keys(resources)
        .filter((x) => resources[x].image !== "empty")
        .map((x, i) => (
          <ToggleButton
            key={`border-option-${i}`}
            value={resources[x].image}
            aria-label="left aligned"
            className="border-toggle-item"
          >
            <img src={resources[x].image} className="img-border" />
            <div className="border-price">+{resources[x].price}$</div>
          </ToggleButton>
        ))}
    </ToggleButtonGroup>
  );
};

export default ToggleBorder;
