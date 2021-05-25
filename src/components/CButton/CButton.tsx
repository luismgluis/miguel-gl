import "./../../components/CButton/CButton.css";
import React from "react";
import { Button } from "reactstrap";
const TAG = "CUSTOM BUTTON";
type CButtonProps = {
  text?: any;
};
const CButton: React.FC<CButtonProps> = ({ text }) => {
  return <Button className="buttonAction">{text}</Button>;
};
export default CButton;
