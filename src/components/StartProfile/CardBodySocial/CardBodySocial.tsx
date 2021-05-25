import "./../../../components/StartProfile/CardBodySocial/CardBodySocial.css";
import React, { useMemo } from "react";
import { CardBody, CardSubtitle, Col, Row } from "reactstrap";
import CButtonImage from "../../CButtonImage/CButtonImage";
import GitHubIcon from "../../../icons/GitHubIcon";
import TwitterIcon from "../../../icons/TwitterIcon";
import TelegramIcon from "../../../icons/TelegramIcon";
import LinkedinIcon from "../../../icons/LinkeinIcon";
import InstagramIcon from "../../../icons/InstagramIcon";
const TAG = "CARD BODY SOCIAL";
type CardBodySocialProps = {
  prop1?: any;
};
const CardBodySocial: React.FC<CardBodySocialProps> = ({ prop1 }) => {
  const iconsColor = "#f3f3f3"; //"#d67322";

  const action = (url: string = "") => {
    const w: any = window;
    w.open(url, "_blank").focus();
  };

  const arrButtonsData = useMemo(
    () => [
      {
        name: "GitHub",
        icon: <GitHubIcon color={iconsColor} />,
        url: "https://github.com/luismgluis",
      },
      {
        name: "Twitter",
        icon: <TwitterIcon color={iconsColor} />,
        url: "https://twitter.com/luismigraja",
      },
      {
        name: "Telegram",
        icon: <TelegramIcon color={iconsColor} />,
        url: "https://t.me/luismigraja",
      },
      {
        name: "Linkedin",
        icon: <LinkedinIcon color={iconsColor} />,
        url: "https://www.linkedin.com/in/luis-miguel-grajales/",
      },
      {
        name: "Instagram",
        icon: <InstagramIcon color={iconsColor} />,
        url: "https://www.instagram.com/luismiguel_gl/",
      },
    ],
    []
  );
  const arrButtonsJSX = useMemo(() => {
    const arr = [];
    for (const key in arrButtonsData) {
      const item = arrButtonsData[key];
      arr.push(
        <Col sm={6}>
          <CButtonImage
            onPress={() => action(item.url)}
            icon={item.icon}
            marginX="auto"
          />
        </Col>
      );
    }
    return arr;
  }, [arrButtonsData]);

  return (
    <div className="CardBodySocial">
      <CardBody style={{ flexDirection: "row" }}>
        <Row className="px-2">
          <h4 className="mb-0 pb-0">CONTACT ME</h4>
        </Row>
        <Row>{arrButtonsJSX}</Row>
        <CardSubtitle tag="h6" className="mb-2 text-muted">
          Site currently under construction.
        </CardSubtitle>
      </CardBody>
    </div>
  );
};
export default CardBodySocial;
