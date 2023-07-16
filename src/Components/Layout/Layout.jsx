import React from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import './Layout.css'
export default function Layout() {
    const {specificAreaParam}  =  useParams();
    const {specificCategory}  =  useParams();
    const location = useLocation();

    return (
        <>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
            <Link className="navbar-brand" to="home">
                Yummy!
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link
                    className={
                        location.pathname === "/home" ? "nav-link active" : location.pathname === "/" ? "nav-link active" : location.pathname === "/yummy/" ? "nav-link active" : "nav-link"
                    }
                    aria-current="page"
                    to="home"
                    >
                    Home
                    </Link>
                </li>
                <li className="nav-item dropdown">
                    <Link className={location.pathname === "/search" || location.pathname === "/search/searchbyname" || location.pathname === "/search/searchbyletter" ? 'nav-link active dropdown-toggle overflow-hidden' : "nav-link dropdown-toggle overflow-hidden"} to="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Search
                    </Link>
                    <ul className="dropdown-menu overflow-hidden">
                        <li><Link className="dropdown-item" to="/search/searchbyname">Search by name</Link></li>
                        <li><Link className="dropdown-item" to="/search/searchbyletter">Search by first letter</Link></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <Link
                    className={
                        location.pathname === "/area" ? "nav-link active" : location.pathname === `/area/specificarea/${specificAreaParam}` ? "nav-link active" : "nav-link"
                    }
                    aria-current="page"
                    to="area"
                    >
                    Area
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                    className={
                        location.pathname === "/category" ? "nav-link active" : location.pathname === `/category/specificcategory/${specificCategory}` ? "nav-link active" : "nav-link"
                    }
                    to="category"
                    >
                    Category
                    </Link>
                </li>
                </ul>
            </div>
            </div>
        </nav>
        <Outlet />
        </>
    );
    }
