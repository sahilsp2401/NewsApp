import './App.css';
import NavBar from './components/NavBar';
import LoadingBar from 'react-top-loading-bar'

import React,{ useState } from 'react'
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


const App= ()=> {
  
  const pageSize = 6
  const apiKey = process.env.REACT_APP_NEWS_API
  const [url, setUrl] = useState('/')
  const [progress, setProgress] = useState(0)

  const toggleUrl = (url)=>{
    setUrl(url)
  }
  const progressSet = (progress)=>{
    setProgress(progress)
  }
    return (
      <div>
        <Router>
        <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
        <NavBar url = {url}/>
        <Routes>
          <Route exact path="/" element={<News setProgress={progressSet} apiKey={apiKey} key="general"  pageSize={pageSize} country = "in" category ="general"toggleUrl= {toggleUrl}/>}/>
          <Route exact path="/business" element={<News setProgress={progressSet} apiKey={apiKey} key="business"  pageSize={pageSize} country = "in" category ="business"toggleUrl= {toggleUrl}/>}/>
          <Route exact path="/entertainment" element={<News setProgress={progressSet} apiKey={apiKey} key="entertainment" pageSize={pageSize} country = "in" category ="entertainment" toggleUrl= {toggleUrl}/>}/>
          <Route exact path="/health" element={<News setProgress={progressSet} apiKey={apiKey} key= "health" pageSize={pageSize} country = "in" category ="health"toggleUrl= {toggleUrl}/>}/>
          <Route exact path="/science" element={<News setProgress={progressSet} apiKey={apiKey} key="science"  pageSize={pageSize} country = "in" category ="science"toggleUrl= {toggleUrl}/>}/>
          <Route exact path="/sports" element={<News setProgress={progressSet} apiKey={apiKey} key= "sports" pageSize={pageSize} country = "in" category ="sports"toggleUrl= {toggleUrl}/>}/>
          <Route exact path="/technology" element={<News setProgress={progressSet} apiKey={apiKey} key="technology"  pageSize={pageSize} country = "in" category ="technology"toggleUrl= {toggleUrl}/>}/>
    </Routes>
        </Router>
      </div>
    )
}
export default App;
