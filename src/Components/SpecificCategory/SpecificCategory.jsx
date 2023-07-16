    import axios from "axios";
    import React, { useEffect, useState } from "react";
    import { useParams } from "react-router-dom";
    import { Link } from "react-router-dom";

    export default function SpecificCategory() {
    const { specificCategory } = useParams();
    async function getSpecificCategory() {
        const { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${specificCategory}`
        );

        // console.log(data.meals);
        setValueOfSpecificCategory(data.meals);
    }
    const [valueOfSpecificCategory, setValueOfSpecificCategory] = useState([]);

    useEffect(function () {
        getSpecificCategory();
    });

    return (
        <>
        {valueOfSpecificCategory != null ? (
            <div className="container mt-3">
            <div className="row">
                {valueOfSpecificCategory.map(function (item, index) {
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
    );
    }
