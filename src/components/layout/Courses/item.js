import React from 'react'
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';

const item = (props) => {
  return(
    <Card className='z-depth-1 bg-success mb-4' style={{"margin" : "0 20px"}}>
      <CardHeader className='display-3 blue darken-3 z-depth-2 text-white'>{props.course ? <p>{props.course.name}</p> : null}</CardHeader>
      <CardBody>
        <CardTitle className='display-4 text-white' >{props.course ? <p>{props.course.name}</p> : null}</CardTitle>
        <CardTitle className='text-white display-3'>{props.course ? <p>{props.course.description}</p> : null}</CardTitle>
      </CardBody>
    </Card>
  )
}

export default item;