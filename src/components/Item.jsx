import React from "react";
import {Card,Button} from 'react-bootstrap';
import {useHistory} from 'react-router'
function Item({article,deleteData}) {

  let history = useHistory()

  return (
    <Card>
      <Card.Img 
      variant="top" 
      alt="img"
      src={ article.image
                ? article.image
                : "https://lunawood.com/wp-content/uploads/2018/02/placeholder-image.png"} />
               
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text className="text-3">
          {article.description}
        </Card.Text>
        <Button 
            variant="primary" 
            size="sm" 
            onClick={()=>history.push('/article/'+article._id)}>View</Button>
        <Button 
            variant="warning" 
            className="mx-2" 
            onClick={()=>history.push('/update/'+article._id)}
            size="sm">Edit</Button>
        <Button 
            variant="danger" 
            size="sm" 
            onClick={()=>deleteData(article._id)}>Delete</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;
