import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import PhoneService from "../js/services/phoneService";

const mapStateToProps = state => {
  return { phone: state.phone, message: state.message, ready: state.ready };
};

export function UnconnectedPhoneCard(props) {
  useEffect(() => {
    const service = new PhoneService();
    service
      .fetchPhoneByID(props.match.params.id)
      .then(res => props.dispatch({ type: "GET_ONE_PHONE", payload: res }))
      .catch(err => console.log(err));

    return () => {
      props.dispatch({ type: "GET_ONE_PHONE", payload: null });
    };
  }, []);
  console.log(props);
  if (props.phone) {
    const { name, imageFileName, manufacturer, color, description, price, screen, ram } = props.phone;

    return (
      <div>
        <h2>{name}</h2>
        <Img src={`./images/${imageFileName}`} alt={`${name}`} />
        <ul>
          <li>Fabricante: {manufacturer}</li>
          <li>Color: {color}</li>
          <li>{description}</li>
          <li>Precio: {price}</li>
          <li>Tipo de pantalla: {screen}</li>
          <li>Cantidad de RAM: {ram}</li>
        </ul>
      </div>
    );
  } else {
    return <h1>fuck</h1>;
  }
}

const Img = styled.img`
  height: 400px;
  width: auto;
`;

const PhoneCard = connect(mapStateToProps)(UnconnectedPhoneCard);

export default PhoneCard;
