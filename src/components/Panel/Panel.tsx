import "./../../components/Panel/Panel.css";
import React from "react";
const TAG = "PANEL";
type PanelProps = {
  prop1?: any;
};
const Panel: React.FC<PanelProps> = ({ prop1 }) => {
  console.log(TAG, "Panel");
  return <div className="Panel">panel</div>;
};
export default Panel;
