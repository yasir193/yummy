import React, { Component } from 'react'
import Home from './Components/Home/Home'
import Category from './Components/Category/Category';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import SearchByName from './Components/SearchByName/SearchByName';
import SearchByLetter from './Components/SearchByLetter/SearchByLetter';
import Details from './Components/Details/Details';
import SpecificCategory from './Components/SpecificCategory/SpecificCategory';
import Area from './Components/Area/Area';
import SpecificArea from './Components/SpecificArea/SpecificArea';
  const router =  createBrowserRouter([{path:"", element:<Layout/>, children:[
    {path:"",element:<Home/>},
    {path:"/yummy/",element:<Home/>},
    {path:"/home", element:<Home/>},
    {path:"/area", element:<Area/>},
    {path:"/area/specificarea/:specificAreaParam", element:<SpecificArea/>},
    {path:"details/:id", element:<Details/>},
    {path:"/search/searchbyname" , element:<SearchByName/>},
    {path:"/category/specificcategory/:specificCategory" , element:<SpecificCategory/>},
    {path:"/search/searchbyletter" , element:<SearchByLetter/>},
    {path:"/category",element:<Category/>},
    {path:"*",element:<div className='vh-100 d-flex justify-content-center align-items-center fs-1 text-white'>Not Found</div>}
]}]);
export default class App extends Component {
  render() {
    return <>
    
    <RouterProvider  router={router}  />
    
    </>
  }
}
