import { useEffect, useState } from 'react';
import {Container, Row, Col} from 'react-bootstrap'

function Community() {
    let [users, setUsers] = useState({data:[]})

    useEffect(function() {
        fetch('https://fakerapi.it/api/v1/users?_seed=12456&_quantity=200')
            .then(result => result.json())
            .then(json => setUsers(json))
    }, [])

    return (
        <Container>
                    <Row className="table-title">
                        <Col>Username</Col>
                        <Col>Name and Surname</Col>
                        <Col>Email</Col>
                        <Col>Website</Col>
                    </Row>
                    {
                        users.data.map(user => {
                            return (
                                <>
                                    <Row key={user.uuid} className="row-data">
                                        <Col><img src={user.image} className="image-user"></img>{user.username}</Col>
                                        <Col>{user.firstname} {user.lastname}</Col>
                                        <Col>{user.email}</Col>
                                        <Col>{user.website}</Col>
                                    </Row>
                                </>
                            )
                        })
                    }
        </Container>
    )
}

export default Community