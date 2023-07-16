import axios from "axios";
import React, { useEffect, useState } from "react";
import  ScrollReveal  from 'scrollreveal';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import { Link } from "react-router-dom";

export default function Area() {
    async function getArea(){
        const {data} = await axios.get("https://www.themealdb.com/api/json/v1/1/list.php?a=list");
        setValueOfArea(data.meals);
    };
    const [ valueOfArea , setValueOfArea ] = useState([]);
    useEffect(function(){
        getArea();
    },[]);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    return <>
    {valueOfArea.length > 0 ? (
            <div className="container">
            <div className="row">
            {ScrollReveal().reveal("i", {
                    
                    scale: 0.9,
                    duration: 400,
                    easing: "ease-in",
                    reset: true,
                    interval: 16,
                })}
                {ScrollReveal().reveal(".heading", {
                    delay:100,
                    scale: 0.9,
                    easing: "ease-in",
                    reset: true,
                    interval: 16,
                })}
                {valueOfArea.map((item, index) => (
                
                
                    <div key={index} className="col-md-3 col-sm-6 mt-3">
                        <Link className="text-decoration-none" to={`/area/specificarea/${item.strArea}`}>
                <div className="d-flex flex-column align-items-center justify-content-center">
                <div>
                <i className="fa-house fa-solid w-100 fa-7x text-white-50"></i>
                </div>
                <div>    
                <h3 className="text-white mt-2 heading text-center">
                    {item.strArea}
                </h3>
                </div>
                </div>
                </Link>
            </div>
                
                ))}
            </div>
            </div>
        ) : (
            <LoadingScreen/>
        )}
    </>;
}
