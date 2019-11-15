import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

const CharacterCard = (props) => {
  return (
    <Card>
      <CardImg top src={props.data.image} alt="Card image cap" />
      <CardBody>
        <CardTitle>{props.data.name}</CardTitle>
        <CardSubtitle>{`${props.data.species} ${props.data.gender}, ${props.data.status}.`}</CardSubtitle>
        <CardText>{`${props.data.name} was created ${props.data.created}`}</CardText>
      </CardBody>
    </Card>

  );
};

export default CharacterCard;
