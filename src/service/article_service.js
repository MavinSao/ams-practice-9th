import API from "../utils/API"

export const fetchArticle = async () => {
    let response = await API.get("/articles?page=1&size=10")
    return response.data.data
}

export const fetchArticleById = async (id) => {
    let response = await API.get("/articles/" + id)
    return response.data.data
}

export const deleteArticle = async (id) => {
    let response = await API.delete(`/articles/${id}`)
    return [response.status, response.data.message]
}

export const postArticle = async (article) => {
    let response = await API.post(`/articles`, article)
    return [response.status, response.data.message]
}

export const updateArticle = async (id, article) => {
    let response = await API.patch(`/articles/${id}`, article)
    return response.data.message
}

export const uploadImage = async (image) => {
    let file = new FormData()
    file.append("image", image)
    let response = await API.post('/images', file)
    return response.data.url
}