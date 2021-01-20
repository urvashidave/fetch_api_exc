import React  from 'react';
import ApidataList from './Components/ApidataList/ApidataList.js';

const FetchData =(props) =>{
  console.log(props);
  return (<React.Fragment>
    <div className="row">
      {
        props.items.map((item) => <ApidataList FetchData={item} key={item.id}></ApidataList>)
      }
    </div>
  </React.Fragment>)
}

export default FetchData;