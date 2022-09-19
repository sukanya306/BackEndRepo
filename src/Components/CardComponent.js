import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col
} from 'reactstrap';

import './CardComponent.css'
export default function CardComponent() {
    return (
        <div>
            <Row>
                <Col sm="6">
                    <Card body className='card-body'>
                        <CardTitle className='card-title'>Student's Attendance</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button className='card-btn'>Show</Button>
                    </Card>
                </Col>
                <Col sm="6">
                    <Card body>
                        <CardTitle>Timetable</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button>Show</Button>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col sm="6">
                    <Card body className='card-body'>
                        <CardTitle>Results</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button>Show</Button>
                    </Card>
                </Col>
                <Col sm="6">
                    <Card body>
                        <CardTitle>Feedback</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button>Give feedback</Button>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}


