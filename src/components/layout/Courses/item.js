import React from 'react'
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';

const item = (props) => {
  return(
    <Card className='z-depth-3' style={{"margin" : "0 20px"}}>
      <CardHeader className='truncate blue-grey darken-1'>{props.course ? <p>{props.course.name}</p> : null}</CardHeader>
      <CardBody>
        <h1><CardTitle >{props.course ? <p>{props.course.name}</p> : null}</CardTitle></h1>
        <CardText>{props.course ? <p>{props.course.description}</p> : null}</CardText>
      </CardBody>
    </Card>
  )
}

export default item;