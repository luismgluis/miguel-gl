import "./../../../components/StartProfile/CardBodyDescription/CardBodyDescription.css";
import React from "react";
import { Button, CardBody, CardSubtitle, CardText, Row } from "reactstrap";
import CButton from "../../CButton/CButton";
const TAG = "CARD BODY DESCRIPTION";
type CardBodyDescriptionProps = {
  prop1?: any;
};

const CardBodyDescription: React.FC<CardBodyDescriptionProps> = ({ prop1 }) => {
  return (
    <div className="CardBodyDescription">
      <CardBody>
        <Row className="px-2">
          <h4 className="mb-0 pb-0">LUIS MIGUEL</h4>
          <h6 className="mt-0 pt-2 pl-2">GRAJALES LOAIZA</h6>
        </Row>
        <CardSubtitle tag="h6" className="mb-2 text-muted">
          Developer
        </CardSubtitle>
        <CardText>
          I love programming and all its possibilities, I am a collaborative and
          friendly person, I like to share my knowledge and learn with other
          people. I aim with technology to improve the quality of life of people
          in my region. I have the ability to mix creativity, recursion and
          logic to create amazing things.
        </CardText>

        <CButton text="Get CV" />

        <CardSubtitle tag="h6" className="my-2 text-muted">
          Press on the top right button :)
        </CardSubtitle>
      </CardBody>
    </div>
  );
};
export default CardBodyDescription;
