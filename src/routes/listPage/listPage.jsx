import { listData } from '../../lib/dummydata';
import './listPage.scss';
import Filter from "./../../components/filter/Filter"
import Card from "../../components/card/Card"
import React from 'react';
import Map from '../../components/map/Map';

function ListPage() {

  const data = listData;
  return (
    <div className ="listPage">
      <div className="wrapper">
        <Filter></Filter>
        {data.map(item => (
          <Card key = {item.id} item ={item}/>
        ))}
      </div>
      {/* <div className="listContainer"></div> */}
      <div className="mapContainer">
        <Map items={data}/>
        
      </div>
    </div>
  )
}

export default ListPage;