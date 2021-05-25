import "./../../components/CButton/CButton.css";
import React from "react";
import { Button } from "reactstrap";
const TAG = "CUSTOM BUTTON";
type CButtonProps = {
  text?: any;
  onPress?: () => void;
};
const CButton: React.FC<CButtonProps> = ({ text, onPress = () => null }) => {
  return (
    <Button className="buttonAction" onClick={() => onPress()}>
      {text}
    </Button>
  );
};
export default CButton;
