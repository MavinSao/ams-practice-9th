import React, { useState,useEffect } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useParams } from "react-router";
import { fetchArticleById, postArticle, updateArticle, uploadImage } from "../service/article_service";
function Post() {
    const [imageLink, setImageLink] = useState();
    const [imageFile, setImageFile] = useState();
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();

    let {uid} = useParams()

    useEffect(() => {
        fetchArticleById(uid).then(article=>{
            setTitle(article.title)
            setDescription(article.description)
            setImageLink(article.image)
        })
    }, [uid])

    const postData = async(e)=>{
        e.preventDefault()

        if(uid){
            if(imageFile){
                let image = await uploadImage(imageFile)
                let artilce = {
                    title,description,image
                }
                let [message] = await updateArticle(uid,artilce)
                alert(message)
            } else{
                let artilce = {
                    title,description
                }
                let [message] = await updateArticle(uid,artilce)
                alert(message)
            }  
        }else{
            if(imageFile){
                let image = await uploadImage(imageFile)
                let artilce = {
                    title,description,image
                }
                let [status,message] = await postArticle(artilce)
                alert(message)
            } else{
                let artilce = {
                    title,description
                }
                let [status,message] = await postArticle(artilce)
                alert(message)
            }  
        }
    }

  return (
    <Container>
      <h1 className="my-4 text-center">{uid?"Update Article":"Post Article"}</h1>
      <Row>
        <Col md={8}>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Title" 
                value={title}
                onChange = {(e)=>{
                    setTitle(e.target.value)
                }}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="description"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control 
                  as="textarea" 
                  rows={3}
                  value={description}
                  onChange={(e)=>{
                      setDescription(e.target.value)
                  }}
              />
            </Form.Group>

            <Button variant="primary" type="submit" 
                onClick={postData}
            >
              {uid? "Save" : "Post"}
            </Button>
          </Form>
        </Col>
        <Col md={4}>
          <Form>
            <Form.Group controlId="choose">
              <img
                src={imageLink ? imageLink : "/image/placeholder.png"}
                className="w-100"
              />
              <Form.File
                label="Import Image"
                onChange={(e) => {
                  let imgLink = URL.createObjectURL(e.target.files[0]);
                  setImageLink(imgLink);
                  setImageFile(e.target.files[0])
                }}
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Post;
