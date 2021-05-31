import React,{useState,useEffect} from 'react'
import { Container } from 'react-bootstrap'
import {useParams} from 'react-router'
import { fetchArticleById } from '../service/article_service'
function ViewArticle() {

  const [article, setArticle] = useState()
  const {id} = useParams()

  useEffect(() => {
        fetchArticleById(id).then(article=>{
            setArticle(article)
        })

    }, [])

  return (
    <Container>
        {article ? <>
            <h1>{article.title}</h1>
            <p>{article.description}</p>
        </>:
        ''}
    </Container>
  )
}

export default ViewArticle
