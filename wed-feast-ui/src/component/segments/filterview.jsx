import React, { useEffect}  from 'react';
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import {useParams } from "react-router-dom";
import segments from '../segments.json';
const FilterView = (props) => {
    let params = useParams();
  
    useEffect(() => {
     console.log("filterView",params,"vendorID",params.vendorID,"segment",params.segment);
    }, []);
    return (<div>Gurupreet</div>)
}

export default FilterView;