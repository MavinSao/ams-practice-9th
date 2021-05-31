import React,{useEffect,useState} from "react";
import { Col, Container,Row,Table } from "react-bootstrap";
import Item from "../components/Item";
import { deleteArticle, fetchArticle } from "../service/article_service";


function Article() {

    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)


  
    useEffect(() => {
        async function fetchData(){
          let articles = await fetchArticle();
          setIsLoading(false)
          setArticles(articles)
        }
        fetchData()
    }, [])

    const deleteData = async (id)=>{

      let [status,message] = await deleteArticle(id)

      console.log(status);

      if(status === 200){
          let newArticles = articles.filter(article=>article._id !== id )
          setArticles(newArticles)
          alert(message)
      }


      // axios.delete(BASE_URL+`/articles/${id}`).
      // then((response)=>{
      //     let newArticles = articles.filter(article=>article._id !== id )
      //     setArticles(newArticles)
      //     alert(response.data.message)
      // })
}

  return (
    <Container>
      <h1 className="my-4 text-center">AMS Management</h1>
      <Row>
          {
              isLoading ? <h3>Loading...</h3> : 
              articles.map((article,index)=>
                  <Col md={3} key={article._id}>
                    <Item article={article} deleteData={deleteData}/>
                  </Col>
              )
          }
          </Row>
    </Container>
  );
}

export default Article;
