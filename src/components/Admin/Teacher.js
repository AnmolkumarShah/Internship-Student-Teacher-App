import React, { Component } from 'react'
import moment from 'moment'

const teacher = ({index,teacher}) => {
  return(
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{teacher.firstname}</td>
      <td>{teacher.lastname}</td>
      <td>{teacher.email}</td>
      <td>{moment(teacher.date.toDate()).calendar()}</td>
      <td>{teacher.courses}</td>
      <td>{teacher.subjects}</td>
      <td>{teacher.contact}</td>
    </tr>
  )
}

export default teacher;