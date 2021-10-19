import React from 'react';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const Department = () => {
    const { departmentId } = useParams();
    const [departments, setDepartment] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ishrafil2233/fakedata/main/doctors.json')
            .then(res => res.json())
            .then(data => setDepartment(data));
    }, []);

    const findDepartment = departments.find(department => department.id == departmentId)

    return (
        <div>
            <Container>
                <Row xs={1} md={2} className="g-4 justify-content-md-center">
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={findDepartment?.img} />
                            <Card.Body>
                                <Card.Title>Name : {findDepartment?.name}</Card.Title>
                                <Card.Title>Degree : {findDepartment?.degree}</Card.Title>
                                <Card.Title>Speciality : {findDepartment?.Speciality}</Card.Title>
                                <Card.Title>chamberTime : {findDepartment?.chamberTime}</Card.Title>

                                <Card.Text>
                                    {findDepartment?.description}
                                </Card.Text>
                                <Button variant="primary">Primary</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Department;