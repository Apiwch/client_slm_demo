import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import axios from 'axios';


function History() {
    const username = localStorage.getItem('username');
    const [loginMessage, setLoginMessage] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch data from the protected route using the stored token
        const token = localStorage.getItem('token');
        axios.get('http://localhost:5000/api/home', { headers: { Authorization: token } })
            .then((response) => {
                setLoginMessage(response.data.loginMessage);
            })
            .catch((error) => {
                console.error('Failed to fetch data:', error.response.data.loginMessage);
                if (error.response.status === 401) {
                    window.location.href = '/'
                }
                if (error.response.status === 400) {
                    window.location.href = '/'
                }
            });

    }, []);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/Devices/${username}`)
            .then(response => {
                console.log(response)
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
    return (


        <div>
            <NavBar />
            <Row style={{ margin: '5px' }}>
                <Col lg={4} style={{ marginTop: '10px' }}>
                    <Card>
                        <Card.Header>Device List</Card.Header>
                        <Card.Body>
                            <Form.Select aria-label="Default select example">
                                {data.map((val, index) => {
                                    return (<option key={index}>{val.name}</option>)
                                })}
                            </Form.Select>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm style={{ marginTop: '10px' }}>
                    <Card>
                        <Card.Header>Graph</Card.Header>
                        <Card.Body>
                            {/* <DeviceMap messages={messages} selectedDevice={selectedDevice}></DeviceMap> */}

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default History