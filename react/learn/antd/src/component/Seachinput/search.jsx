/*********************************************************************
 *
 *    FarmwiseAI Private Limited
 *
 *    Module                 :  Common Module
 *
 *    Usage                  :  Reuseable component
 *
 *    Developed By and Date  :  Mani - 21-11-2023
 *
 *    Modified By and Date   :  Mani - 04-01--2024
 *
 *    Version                :  1.0
 *
 **********************************************************************/
import "./search.scss";
// import searchicon from "./Icon.png";
// import {images} from '../../utils/images';
import { useEffect, useState } from "react";
import searchIcon from './search_icon.png'

const Searchboxcomponent = ({ placeholder, onChange, searchName, dataSource, setDatasource }) => {
  const [data, setData] = useState([...dataSource]||[]);
  const [change,setChange] = useState(false);

  const handleChange = ({target}) => {
    let {value} = target;
    setDatasource(value != "" ? data.filter((val) => String(val[searchName]).toLowerCase().includes(value.toLowerCase())) : data)
    setChange(true)
    onChange && onChange();
  }
  useEffect(()=>{
    if(!change)
    setData([...dataSource])
  },[dataSource])
  return (
    <div className="search-container">
      <div>
        <img src={searchIcon} width="16px" height="16px"></img>
      </div>
      <input
        className="search-input"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

export default Searchboxcomponent;
