    import React, { useEffect } from "react";
    import axios from "axios";
    import { useState } from "react";
    import LoadingScreen from "./../LoadingScreen/LoadingScreen";
    import { useParams } from "react-router-dom";
    import "./Details.css"
    export default function Details() {
    const { id } = useParams();

    async function getDetails() {
        const { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        setDetails(data.meals[0]);
    }

    useEffect(function () {
        getDetails();
    });

    const [details, setDetails] = useState(null);

    // console.log("hamada");
    return (
        <>

        {details ? (
            <div className="container w-100 text-white mt-3">
            <div className="row">
                <div className="col-md-3">
                <div className="d-flex">
                    <img
                    src={details.strMealThumb}
                    className="w-100 det rounded-2"
                    alt={details.strMeal}
                    />
                    </div>
                    <h4 className="text-center mt-2">{details.strMeal}</h4>
                
                </div>
                <div className="col-md-9">
                <div>
                    <h3>Instructions</h3>
                    <p>{details.strInstructions}</p>
                    <h5>Area:{" " + details.strArea}</h5>
                    <h5>Category:{" " + details.strCategory}</h5>
                    <h5>Recipes:</h5>
                    <div className="container-fluid ">
                    <div className="row">
                        <div className="col-md-3">
                        <span className="d-block bg-opacity-50 bg-danger my-2  rounded-3 text-center">
                            {details.strMeasure1 == null ||
                            details.strIngredient1 == null
                            ? " "
                            : details.strMeasure1 + " " + details.strIngredient1}
                        </span>
                        </div>
                        <div className="col-md-3">
                        <span className="d-block bg-opacity-50 bg-danger my-2  rounded-3 text-center">
                        {details.strMeasure2 == null ||
                            details.strIngredient2 == null
                            ? " "
                            : details.strMeasure2 + " " + details.strIngredient2}
                        </span>
                        </div>
                        <div className="col-md-3">
                        <span className="d-block bg-opacity-50 bg-danger my-2  rounded-3 text-center">
                        {details.strMeasure3 == null ||
                            details.strIngredient3 == null
                            ? " "
                            : details.strMeasure3 + " " + details.strIngredient3}
                        </span>
                        </div>
                        <div className="col-md-3">
                        <span className="d-block bg-opacity-50 bg-danger my-2  rounded-3 text-center">
                        {details.strMeasure4 == null ||
                            details.strIngredient4 == null
                            ? " "
                            : details.strMeasure4 + " " + details.strIngredient4}
                        </span>
                        </div>

                        <div className="col-md-3">
                        <span className="d-block bg-opacity-50 bg-danger my-2  rounded-3 text-center">
                            {details.strMeasure5 == null ||
                            details.strIngredient5 == null
                            ? " "
                            : details.strMeasure5 + " " + details.strIngredient5}
                        </span>
                        </div>

                        <div className="col-md-3">
                        <span className="d-block bg-opacity-50 bg-danger my-2  rounded-3 text-center">
                        {details.strMeasure6 == null ||
                            details.strIngredient6 == null
                            ? " "
                            : details.strMeasure6 + " " + details.strIngredient6}
                        </span>
                        </div>

                        <div className="col-md-3">
                        <span className="d-block bg-opacity-50 bg-danger my-2  rounded-3 text-center">
                        {details.strMeasure7 == null ||
                            details.strIngredient7 == null
                            ? " "
                            : details.strMeasure7 + " " + details.strIngredient7}
                        </span>
                        </div>

                        <div className="col-md-3">
                        <span className="d-block bg-opacity-50 bg-danger my-2  rounded-3 text-center">
                        {details.strMeasure8 == null ||
                            details.strIngredient8 == null
                            ? " "
                            : details.strMeasure8 + " " + details.strIngredient8}
                        </span>
                        </div>

                        <div className="col-md-3">
                        <span className="d-block bg-opacity-50 bg-danger my-2  rounded-3 text-center">
                        {details.strMeasure9 == null ||
                            details.strIngredient9 == null
                            ? " "
                            : details.strMeasure9 + " " + details.strIngredient9}
                        </span>
                        </div>

                        <div className="col-md-3">
                        <span className="d-block bg-opacity-50 bg-danger my-2  rounded-3 text-center">
                        {details.strMeasure10 == null ||
                            details.strIngredient10 == null
                            ? " "
                            : details.strMeasure10 + " " + details.strIngredient10}
                        </span>
                        </div>

                        <div className="col-md-3">
                        <span className="d-block bg-opacity-50 bg-danger my-2  rounded-3 text-center">
                        {details.strMeasure11 == null ||
                            details.strIngredient11 == null
                            ? " "
                            : details.strMeasure11 + " " + details.strIngredient11}
                        </span>
                        </div>

                        <div className="col-md-3">
                        <span className="d-block bg-opacity-50 bg-danger my-2  rounded-3 text-center">
                        {details.strMeasure12 == null ||
                            details.strIngredient12 == null
                            ? " "
                            : details.strMeasure12 + " " + details.strIngredient12}
                        </span>
                        </div>

                        <div className="col-md-3">
                        <span className="d-block bg-opacity-50 bg-danger my-2  rounded-3 text-center">
                        {details.strMeasure13 == null ||
                            details.strIngredient13 == null
                            ? " "
                            : details.strMeasure13 + " " + details.strIngredient13}
                        </span>
                        </div>

                        <div className="col-md-3">
                        <span className="d-block bg-opacity-50 bg-danger my-2  rounded-3 text-center">
                        {details.strMeasure14 == null ||
                            details.strIngredient14 == null
                            ? " "
                            : details.strMeasure14 + " " + details.strIngredient14}
                        </span>
                        </div>

                        <div className="col-md-3">
                        <span className="d-block bg-opacity-50 bg-danger my-2  rounded-3 text-center">
                        {details.strMeasure15 == null ||
                            details.strIngredient15 == null
                            ? " "
                            : details.strMeasure15 + " " + details.strIngredient15}
                        </span>
                        </div>

                        <div className="col-md-3">
                        <span className="d-block bg-opacity-50 bg-danger my-2  rounded-3 text-center">
                            {details.strMeasure16 == null ||
                            details.strIngredient16 == null
                            ? " "
                            : details.strMeasure16 +
                                " " +
                                details.strIngredient16}
                        </span>
                        </div>

                        <div className="col-md-3">
                        <span className="d-block bg-opacity-50 bg-danger my-2  rounded-3 text-center">
                            {details.strMeasure17 == null ||
                            details.strIngredient17 == null
                            ? " "
                            : details.strMeasure17 +
                                " " +
                                details.strIngredient17}
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        ) : (
            <LoadingScreen />
        )}
        </>
    );
    }
