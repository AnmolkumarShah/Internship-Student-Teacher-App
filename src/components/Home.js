import React, { Component } from 'react'
import Head from './layout/Head'
import Carousel from './layout/Carousel/Carousel'
import Card from './layout/Cards'

class Home extends Component{
  render(){
    const style = {
      width : '100%',
      height : '100%'
    }
    return(
      <>
        <Head />
        <Carousel />
        <Card />
      </>
    )
  }
}

export default Home;