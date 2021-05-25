import "./../../components/CButtonImage/CButtonImage.css";
import React, { useImperativeHandle, useMemo } from "react";
import { Button } from "reactstrap";
const TAG = "CUSTOM BUTTON";
type CButtonImageProps = {
  ghost?: boolean;
  icon: JSX.Element;
  onPress?: () => void;
  marginX?: string;
};
const CButtonImage: React.FC<CButtonImageProps> = ({
  ghost = false,
  onPress = () => null,
  icon,
  marginX = "",
}) => {
  const classButton = useMemo(() => {
    if (!ghost) {
      return "buttonImage";
    }
    return "buttonImageGhost";
  }, [ghost]);
  console.log(TAG, classButton);

  const containerStyles = useMemo(() => {
    const style = {
      padding: undefined,
      width: undefined,
      marginLeft: marginX ? marginX : undefined,
      marginRight: marginX ? marginX : undefined,
    };
    if (!ghost) {
      return { ...style, padding: "20px", width: "150px" };
    }
    return style;
  }, [ghost, marginX]);
  const buttonStyles = useMemo(() => {
    if (!ghost) {
      return {
        padding: "20px",
      };
    }
    return {};
  }, [ghost]);

  return (
    <div className="buttonContainer" style={containerStyles}>
      <button className={classButton} onClick={() => onPress()}>
        <div style={buttonStyles}>{icon}</div>
      </button>
    </div>
  );
};
export default CButtonImage;
