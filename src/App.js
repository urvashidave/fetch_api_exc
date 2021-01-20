//Import libraries
import React, {useState, useEffect} from 'react';
import './App.css'
import axios from 'axios';
import Loader from "react-loader-spinner";
//set loading initially false
const App = () => {
  const [apidata,
    setApidata] = useState([]);
  const [loading,
    setLoading] = useState(false);
//Component DidMount axios for fetching api data

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        setApidata(res.data);
        setLoading(true);
      })
  }, [])

  //console.log(loading);
  //Map all data 
  //Call loader if loading value is true
  return (
    <div className='container'>
      <h3>Fetch Data From API : https://jsonplaceholder.typicode.com/posts</h3>
      Total Data:{apidata.length}
      <table className='datatable tableFixHead'>
        <thead>
          <tr className='heading'>
            <th>
              TITLE
            </th>
            <th>
              BODY
            </th>
          </tr>
        </thead>
        <tbody>
        
          {loading
            ? apidata.map((p, index) => {
              return <Tr key={index} apidata={p}/>
            })
            : <Loader type="TailSpin" color="#00BFFF" height={100} width={100}/>}

        </tbody>
      </table>
    </div>
  );
}
//return data in a grid with required column name
const Tr = ({apidata}) => {
  return (
    <tr className='data'>
      <td>{apidata.title}</td>
      <td>{apidata.body}</td>
    </tr>
  )
}
export default App;
