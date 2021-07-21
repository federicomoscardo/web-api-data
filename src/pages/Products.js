import { useEffect, useState } from 'react';
import {Container,Card, ListGroup, ListGroupItem} from 'react-bootstrap'

function Products() {
    let [products, setProducts] = useState({data:[]})

    useEffect(function() {
        fetch('https://fakerapi.it/api/v1/products?_seed=1234&_quantity=1')
            .then(result => result.json())
            .then(json => setProducts(json))
    }, [])

    return (
        <Container>
                    {
                        products.data.map(product => {
                            return (
                                <>
                                    <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                    <ListGroup className="list-group-flush">
                                        <ListGroupItem>Cras justo odio</ListGroupItem>
                                        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                                        <ListGroupItem>Vestibulum at eros</ListGroupItem>
                                    </ListGroup>
                                    <Card.Body>
                                        <Card.Link href="#">Card Link</Card.Link>
                                        <Card.Link href="#">Another Link</Card.Link>
                                    </Card.Body>
                                    </Card>
                                </>
                            )
                        })
                    }
        </Container>
    )
}

export default Products