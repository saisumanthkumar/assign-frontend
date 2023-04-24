import React from 'react';
import Row from './Row';

function Table(props) {
  return (
    <>
    <table>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Income</th>
            <th>City</th>
            <th>Car</th>
            <th>Phone Price</th>
            <th>Quote</th>
        </tr>
        {
            props.data.map((item) => {
                return(
                    <Row item={item}/>
                )
            })
        }
    
    </table>
    </>
  )
}

export default Table