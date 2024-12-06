import React, { Component } from 'react'
import NavBar from './Components/Navbar'
import News from './Components/News'
export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
<News/>
      </div>
    )
  }
}


