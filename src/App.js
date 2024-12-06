import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/Navbar';
import News from './Components/News';
//import LoadingBar from 'react-top-loading-bar'
//import { useState } from 'react';

const App = () => {
 // const [progress, setProgress] = useState(0)
  return (
    <div>
      <Router>
        <NavBar />

       {/* <LoadingBar
          color='#f11946'
          height={3}
          progress={progress}

        />*/}
        <Routes>
          <Route exact path="/" element={<News  key="home" pageSize={9} country="us" category="general" />} />
          <Route exact path="/business" element={<News key="business" pageSize={9} country="us" category="business" />} />
          <Route exact path="/entertainment" element={<News  key="entertainment" pageSize={9} country="us" category="entertainment" />} />
          <Route exact path="/general" element={<News  key="general" pageSize={9} country="us" category="general" />} />
          <Route exact path="/health" element={<News  key="health" pageSize={9} country="us" category="health" />} />
          <Route exact path="/science" element={<News  key="science" pageSize={9} country="us" category="science" />} />
          <Route exact path="/sports" element={<News  key="sports" pageSize={9} country="us" category="sports" />} />
          <Route exact path="/technology" element={<News  key="technology" pageSize={9} country="us" category="technology" />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App