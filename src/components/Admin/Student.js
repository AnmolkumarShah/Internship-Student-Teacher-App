import React, { Component } from 'react'
import moment from 'moment'

const student = ({index,student}) => {
  return(
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{student.firstname}</td>
      <td>{student.lastname}</td>
      <td>{student.email}</td>
      <td>{moment(student.date.toDate()).calendar()}</td>
      <td>{student.course}</td>
      <td>{student.contact}</td>
    </tr>
  )
}

export default student;