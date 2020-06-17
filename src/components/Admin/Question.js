import React, { Component } from 'react'
import moment from 'moment'

const question = ({index,question}) => {
  return(
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{question.subject}</td>
      <td>{question.description}</td>
      <td>{moment(question.date.toDate()).calendar()}</td>
    </tr>
  )
}

export default question;