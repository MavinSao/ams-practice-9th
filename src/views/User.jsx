import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Profile from '../components/Profile'
function User() {
  const url = "https://reqres.in/api/users?page=2"

  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {

    fetch(url)
      .then(response => response.json())
      .then(result => {
        setUsers(result.data)
        setIsLoading(false)
      })
      .catch(error => console.log(error))

  }, [])

  return (
    <Container>
      <h1 className="text-center my-4">Users</h1>
      {isLoading ? <h1>...loading</h1> : (
        <div>
          <Row>
            {users.map((user) =>
              <Col key={user.id}>
                <Profile user={user} />
              </Col>
            )}
          </Row>
        </div>
      )}
    </Container>
  );
}

export default User;

