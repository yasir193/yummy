    import axios from "axios";
    import "./Home.css";
    import React, { useEffect, useState } from "react";
    import ScrollReveal from "scrollreveal";
    import { Link } from "react-router-dom";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
    // export default class Home extends Component {
    //     state = {
    //         allYummy:[]
    //     }
    //     async getYummy(){
    //         let {data} = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=");
    //         // console.log(data.meals);
    //         this.setState({allYummy:data.meals});
    //         // this.getValue(this.state.allYummy)

    //     }
    //     // componentDidUpdate(){
    //     //     console.log(this.state.allYummy);
    //     // }
    //     render() {

    // return <>

    // {this.state.allYummy.length > 0 ? <div className="container">
    //     <div className="row">
    //         {this.state.allYummy.map((item , index) => { return <div key={index} className="col-md-3 mt-3">
    //                 <div className="item w-100">
    //                 {/* {ScrollReveal().reveal('.scroll',{delay:600,scale: 0.75,easing: 'ease-in',reset:"",interval:16})} */}
    //                     <div className="scroll">
    //                     <img src={item.strMealThumb} className="w-100 img mb-3 rounded-1"  alt={item.strMeal} />
    //                     <h3 className="text-white heading text-center">{item.strMeal}</h3>
    //                     </div>
    //                     { ScrollReveal().reveal('.img',{delay:600,scale: 0.90,duration:700,easing: 'ease-in',reset:"true",interval:16})}
    //                     {ScrollReveal().reveal('.heading',{delay:600,scale: 0.90,easing: 'ease-in',reset:"true",interval:16})}
    //                     {/* {ScrollReveal().reveal('.heading', {delay:500 ,interval:40})} */}
    //                 </div>
    //             </div>
    //         })}
    //     </div>
    // </div> : <div className="position-fixed top-0 flex-column start-0 end-0 bottom-0 bg-black d-flex justify-content-center align-items-center">
    //     <i className="fa-solid fa-spin fa-spinner fa-7x text-white"></i>
    //     <h3 className="text-white text-center">wait</h3>
    // </div> }
    // </>
    //     }
    // }
    export default function Home() {
    //        value      function     initial value
    const [allYummy, setAllYummy] = useState([]);
    useEffect(() => {
        async function getAllYummy() {
        const { data } = await axios.get(
            "https://www.themealdb.com/api/json/v1/1/search.php?s="
        );
        setAllYummy(data.meals);
        }
        getAllYummy();
    }, []);
    return (
        <>
        {allYummy.length > 0 ? (
            <div className="container">
            <div className="row">
                {allYummy.map((item, index) => {
                return (
                    <div key={index} className="col-md-3 col-sm-6 mt-3">
                    <Link className="text-decoration-none" to={`/details/${item.idMeal}`}>
                        <div className="item w-100">
                        {/* {ScrollReveal().reveal('.scroll',{delay:600,scale: 0.75,easing: 'ease-in',reset:"",interval:16})} */}
                        <div className="scroll">
                            <img
                            src={item.strMealThumb}
                            className="w-100 img mb-3 rounded-1"
                            alt={item.strMeal}
                            />
                            <h3 className="text-white heading text-center">
                            {item.strMeal}
                            </h3>
                        </div>
                        {ScrollReveal().reveal(".img", {
                            
                            scale: 0.9,
                            duration: 400,
                            easing: "ease-in",
                            reset: "true",
                            interval: 40,
                        })}
                        {ScrollReveal().reveal(".heading", {
                            duration:100,
                            scale: 0.9,
                            easing: "ease-in",
                            reset: "true",
                            interval: 40,
                        })}
                        {/* {ScrollReveal().reveal('.heading', {delay:500 ,interval:40})} */}
                        </div>
                    </Link>
                    </div>
                );
                })}
            </div>
            </div>
        ) : (
            <LoadingScreen/>
        )}
        </>
    );
    }
