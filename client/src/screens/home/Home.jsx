import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PhoneService from "../../js/services/phoneService";
import { Spinner, Col, Row } from "react-bootstrap";
import styled, { keyframes } from "styled-components";

const mapStateToProps = state => {
  return { phones: state.phones, message: state.message, ready: state.ready };
};

class ConnectedHome extends Component {
  constructor(props) {
    super(props);
    this.service = new PhoneService();
  }

  componentDidMount = () => {
    console.log("dispatching");

    this.service
      .fetchPhones()
      .then(phones => {
        this.props.dispatch({ type: "UPDATE_PHONES", payload: phones });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render = () => {
    console.log(this.props);
    return this.props.ready ? (
      <>
        <h1>List of phones</h1>
        <ListWrapper>
          {this.props.phones.length > 0 && (
            <Row>
              {this.props.phones.map(phone => {
                return (
                  <Col key={phone.id} md={4}>
                    <Link to={`${phone.id}`}>
                      <Img>
                        <img src={`./images/${phone.imageFileName}`}></img>
                      </Img>
                    </Link>
                  </Col>
                );
              })}
            </Row>
          )}
        </ListWrapper>
      </>
    ) : (
      <div style={{ margin: "0 auto", width: "200px", height: "200px" }}>
        <Spinner style={{ width: "200px", height: "200px" }} animation="grow" />
      </div>
    );
  };
}

const slideIn = keyframes`
  0% {
    transform: translateY(200px)
  }
  100% {
    height: translateY(0)
  }`;

const ListWrapper = styled.div`
  margin: 100px 0;
`;

const Img = styled.div`
  img {
    height: 400px;
    width: auto;
    transition: transform 1s;
    &:hover {
      z-index: -5000;
      transform: scale(1.2);
    }
  }

  animation: ${slideIn} 2s ease-out forwards;
`;

const Home = connect(mapStateToProps)(ConnectedHome);
export default Home;
