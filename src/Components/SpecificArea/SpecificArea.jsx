import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function SpecificArea() {
    const {specificAreaParam} = useParams();
    async function getSpecificArea(){
        const {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${specificAreaParam}`)
        setValueOfSpecificArea(data.meals);
    }
    const [valueOfSpecificArea , setValueOfSpecificArea]= useState([]);
    
    useEffect(function(){
        getSpecificArea();
    });
    
    
    
    
    
    
    
    
    return <>
    {valueOfSpecificArea != null ? (
            <div className="container mt-3">
            <div className="row">
                {valueOfSpecificArea.map(function (item, index) {
                return (
                    <div key={index} className="col-md-3 col-sm-6">
                    <Link
                        className="text-decoration-none"
                        to={`/details/${item.idMeal}`}
                    >
                        <div>
                        <img
                            src={item.strMealThumb}
                            className="w-100 mb-3 rounded-1"
                            alt={item.strMeal}
                        />
                        
                        <h3 className="text-white text-center">{item.strMeal}</h3>
                        </div>
                    </Link>
                    </div>
                );
                })}{" "}
            </div>
            </div>
        ) : (
            " "
        )}
    
    
    </> 
}
