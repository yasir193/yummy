import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function SearchByName() {
  async function getElementsByName(name) {
    const { data } = await axios.get(
      
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    );

    // console.log(data.meals);
    setValueOfElement(data.meals);
  }
  const [valueOfElement, setValueOfElement] = useState([]);
  useEffect(function () {
    getElementsByName();
  }, []);

  let input = document.getElementById("input");
  function getValue() {
    let inputValue = input.value;
    if(inputValue !== "" && inputValue !== " "){
      getElementsByName(inputValue);
    }
    else{
      getElementsByName("1")
    }
    
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <input
              type="text"
              placeholder="Search By Name"
              className="w-100 form-control mt-3"
              id="input"
              onChange={getValue}
            />
          </div>
        </div>
      </div>

      {valueOfElement != null ? (
        <div className="container mt-3">
          <div className="row">
            {valueOfElement.map(function (item , index) {
              return (
                
                  <div key={index} className="col-md-3">
                    <Link className="text-decoration-none" to={`/details/${item.idMeal}`}>
                    <div>
                      <img src={item.strMealThumb} className="w-100 mb-3 rounded-1" alt={item.strMeal} />
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
  );
}
