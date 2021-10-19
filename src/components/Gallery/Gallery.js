import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const Gallery = () => {
    return (
        <div id='gallery'>
            <h1 className='text-info mt-5 mb-5'>Our Gallery</h1>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src="https://i.ibb.co/h12WFbr/g1.jpg" />
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://i.ibb.co/5TmFmCd/g2.jpg" />
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://i.ibb.co/cgjSzr6/g6.jpg" />
                </Card>
            </CardGroup>

            <CardGroup>
                <Card>
                    <Card.Img variant="top" src="https://i.ibb.co/fCctHyq/g3.jpg" />
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://i.ibb.co/f29CK7m/g4.jpg" />
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://i.ibb.co/yXSHj1j/g5.jpg" />
                </Card>
            </CardGroup>
        </div>
    );
};

export default Gallery;