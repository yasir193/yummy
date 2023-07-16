    import React, { useEffect, useState } from "react";
    import axios from "axios";
    import ScrollReveal from "scrollreveal";
import { Link } from "react-router-dom";

    const Category = () => {
    const [allCategories, setAllCategories] = useState([]);

    useEffect(function () {
        const getCategory = async function () {
        const { data } = await axios.get(
            "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        setAllCategories(data.categories);
        };

        getCategory();
    }, []);

    return (
        <>
        {allCategories.length > 0 ? (
            <div className="container">
            <div className="row">
            {ScrollReveal().reveal(".img", {
                    
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
                {allCategories.map((item, index) => (
                
                
                    <div key={index} className="col-md-3 col-sm-6 mt-3">
                        <Link className="text-decoration-none" to={`/category/specificcategory/${item.strCategory}`}>
                <div>
                
                <img
                    src={item.strCategoryThumb}
                    className="w-100 img mb-3 rounded-3"
                    alt=""
                />
                <h3 className="text-white heading text-center">
                    {item.strCategory}
                </h3>
                </div>
                </Link>
            </div>
                
                ))}
            </div>
            </div>
        ) : (
            <div className="position-fixed top-0 flex-column start-0 end-0 bottom-0 bg-black d-flex justify-content-center align-items-center">
            <i className="fa-solid fa-spin fa-spinner fa-7x text-white"></i>
            <h3 className="text-white text-center">wait</h3>
            </div>
        )}
        </>
    );
    };

    export default Category;
