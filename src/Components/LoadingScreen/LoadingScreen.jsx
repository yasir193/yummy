import React from 'react'

export default function LoadingScreen() {
    return <>
    <div className="position-fixed top-0 flex-column start-0 end-0 bottom-0 bg-black d-flex justify-content-center align-items-center">
            <i className="fa-solid fa-spin fa-spinner fa-7x text-white"></i>
            <h3 className="text-white text-center">wait</h3>
            </div>
    </> 
}
