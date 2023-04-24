import React from 'react';

function Row(props) {
  return (
    <>
    <tr>
        <td>{props.item.first_name}</td>
        <td>{props.item.last_name}</td>
        <td>{props.item.email}</td>
        <td>{props.item.gender}</td>
        <td>{props.item.income}</td>
        <td>{props.item.city}</td>
        <td>{props.item.car}</td>
        <td>{props.item.phone_price}</td>
        <td>{props.item.quote}</td>
    </tr>
    </>
  )
}

export default Row