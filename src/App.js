import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import './App.css';

import Header from './components/Header/Header'
import Welcome from './components/Welcome/Welcome'
import ResultsPage from './components/ResultsPage/ResultsPage'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'

function App() {

  const [SearchValue, setSearchValue] = useState(null);
  const [VideoList, setVideoList] = useState([]);
  const [VideoToPlay, setVideoToPlay] = useState({});
  const [IsLoading, setIsLoading ] = useState(false);

  return (
    <div className="App">
      <Router>
        <Header 
        setVideoList={setVideoList}
        setIsLoading={setIsLoading}
        SearchValue={SearchValue}
        setSearchValue={setSearchValue}/>

        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>

          <Route path="/results">
            {SearchValue ?
            <ResultsPage 
            VideoList={VideoList}
            setVideoToPlay={setVideoToPlay}
            IsLoading={IsLoading}/>
            :
            <Redirect to="/" />
            }
          </Route>

          <Route path="/watch">
            {SearchValue ?
            <VideoPlayer 
            VideoList={VideoList}
            VideoToPlay={VideoToPlay}/>
            :
            <Redirect to="/" />
            }
          </Route>

          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;