import { useMemo, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Row,
} from "reactstrap";
import "./StartProfile.scss";
import { useWindowSize } from "../../utils/windowResize";
import WavesIcon from "../../icons/WavesIcon";
import CardBodyDescription from "./CardBodyDescription/CardBodyDescription";
import CardBodySocial from "./CardBodySocial/CardBodySocial";
import CButtonImage from "../CButtonImage/CButtonImage";
import ChangeIcon from "../../icons/ChangeIcon";
const TAG = "startProfile";

const StartProfile: React.FC<any> = (props) => {
  //const [isOpen, setIsOpen] = useState(false);
  const [winX, winY] = useWindowSize();
  const imageWidth = useMemo(() => {
    let percent = 0.3;
    if (winX < 580) {
      percent = 0.5;
    } else if (winX < 850) {
      percent = 0.3;
    }
    return parseInt((winX * percent).toString(), 10);
  }, [winX]);

  const [cardSelected, setCardSelected] = useState(0);
  const toggleCardSelected = () => {
    setCardSelected(cardSelected === 1 ? 0 : 1);
    // if (cardSelected === 1) setCardSelected(0);
    // if (cardSelected === 0) setCardSelected(0);
  };
  const imageSize = { width: imageWidth, height: imageWidth };
  const panelTotalStyles: any = { height: winY - 55, overflowY: "auto" };
  const containerStyles = { width: winX };
  console.log(TAG, imageSize);
  return (
    <div style={containerStyles}>
      <Row style={panelTotalStyles} className="panelTotal">
        <Col>
          <div className="panelCustomImage" style={imageSize}>
            <img
              style={imageSize}
              className="customImage"
              src={
                process.env.PUBLIC_URL + "/media/images/luismiguel_tatacoa.jpg"
              }
              alt=""
            />
          </div>
        </Col>
        <Col>
          <Card className="card border-0">
            <div className="changeButton">
              <CButtonImage
                onPress={() => toggleCardSelected()}
                ghost={true}
                icon={<ChangeIcon width={30} />}
              />
            </div>
            {cardSelected === 0 && <CardBodyDescription />}
            {cardSelected === 1 && <CardBodySocial />}
          </Card>
        </Col>
      </Row>
      <div className="panelBackground">
        <WavesIcon width={winX} />
      </div>
    </div>
  );
};

export default StartProfile;
