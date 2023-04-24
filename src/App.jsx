import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Table from './Table';

function App() {
  const [filterType, setfilterType] = useState(1);
  const [data, setdata] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  let filters = [
    'Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.',
    'Male Users which have phone price greater than 10,000.',
    'Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.',
    'Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.',
    'Show the data of top 10 cities which have the highest number of users and their average income.'
  ]

  useEffect(() => {
    setisLoading(true);
    axios.get('https://assign-backend.vercel.app/filter'+filterType).then(res => {
      setdata(res.data);
      setisLoading(false);
    })
  }, [filterType])

  return (
    <>
      <div className="func">
        <button onClick={() => setfilterType(1)}>Filter1</button>
        <button onClick={() => setfilterType(2)}>Filter2</button>
        <button onClick={() => setfilterType(3)}>Filter3</button>
        <button onClick={() => setfilterType(4)}>Filter4</button>
        <button onClick={() => setfilterType(5)}>Filter5</button>
      </div>
      <p>{filters[filterType-1]}</p>
      {
        isLoading &&
        <h1>Loading...</h1>
      }
      {
        !isLoading && (filterType !== 5)&&
        <Table data={data} />
      }
      {
        !isLoading && (filterType === 5)&&
        <table>
          <tr>
              <th>Position</th>
              <th>City</th>
              <th>Users</th>
              <th>Average Income</th>
          </tr>
          {
            data.map((item,pos=1)=> {
              pos++;
              return(
                <tr>
                    <td>{pos}</td>
                    <td>{item.city}</td>
                    <td>{item.users}</td>
                    <td>{item.average_income}</td>
                </tr>
              )
            })
          }
        </table>
      }
    </>
  );
}

export default App;
