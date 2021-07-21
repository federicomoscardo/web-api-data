import { useEffect, useState } from 'react';
import {Container,Card, ListGroup, ListGroupItem} from 'react-bootstrap'

function Products() {
    let [products, setProducts] = useState({data:[]})

    useEffect(function() {
        fetch('https://fakerapi.it/api/v1/products?_quantity=12')
            .then(result => result.json())
            .then(json => setProducts(json))
    }, [])

    return (
        <div className="display-flex">
            {
                products.data.map(product => {
                    return (
                        <div>
                            <Card className="card-product">
                                <Card.Img variant="top" src={product.image} />
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Text>{product.description}</Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>Price: {product.price}</ListGroupItem>
                                    <ListGroupItem>Net Price: {product.net_price}</ListGroupItem>
                                    <ListGroupItem>Taxes: {product.taxes}</ListGroupItem>
                                </ListGroup>
                            </Card>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Products