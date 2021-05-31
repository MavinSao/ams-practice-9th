import React from 'react'
import Menu from './components/Menu'
import User from './views/User'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Article from './views/Article'
import Post from './views/Post'
import ViewArticle from './views/ViewArticle'
import './App.css'
function App() {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route exact path='/' component={Article} />
        <Route path='/user' component={User} />
        <Route path='/post' component={Post} />
        <Route path='/update/:uid' component={Post} />
        <Route path='/article/:id' component={ViewArticle} />
        <Route path='/*' render={() => <h1>404 Not Found</h1>} />
      </Switch>

    </Router>
  )
}

export default App
