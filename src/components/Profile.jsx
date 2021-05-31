import React from 'react'
import {Card,Button} from 'react-bootstrap';

function Profile({user}) {
    return (
       <Card>
        <Card.Img variant="top" src={user.avatar} />
        <Card.Body>
          <Card.Title>{`${user.first_name} ${user.last_name}`}</Card.Title>
          <Card.Text>
            Email: {user.email}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    )
}

export default Profile
