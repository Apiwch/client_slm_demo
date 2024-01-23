import React, { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MDBContainer } from "mdbreact";
import "./DeviceList.css";
import ProgressBar from 'react-bootstrap/ProgressBar';

function DeviceList({ messages, onItemClicked }) {
    const scrollContainerStyle = {  width: '500px', height: 480, maxHeight: "480px" };

    const alertClicked = (name) => {
        onItemClicked(name); // Call the callback function with the selected device name
    };

    return (

            <div className="scrollbar scrollbar-primary " >
                <ListGroup style={{height: 472}}>
                    {messages.map((message, index) => (
                        <ListGroup.Item variant={message.status === 'Offline' ? 'danger' : 'primary'} key={index} action onClick={() => alertClicked(message.name)}>
                            <Row>
                                <Col>
                                    <strong>Device Name:</strong> {message.name}
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <strong>Sound Level:</strong> {message.value + ' dBA'}
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <ProgressBar min={40} max={90} now={message.value} />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <strong>Status:</strong> {message.status}
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <strong>Battery:</strong> {message.batt+'%'}
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <strong>Last Update:</strong> {message.timestamp}
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </div>

    );
}

export default DeviceList;
