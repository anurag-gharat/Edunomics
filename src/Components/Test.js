import React, { Component, useState, useEffect } from 'react'
import M from  'materialize-css/dist/js/materialize.min.js';


export default function Test() {


    const [dates,setDates]=useState({
        startDate:"",
        endDate:""
    })
    const handleDate = () => {
        setDates({
            startDate: startDate.current.value,
            endDate: endDate.current.value,
        })
        // console.log(this.state.startDate)
        // console.log(this.state.endDate)
    }  
    const initiallizeMaterialize=()=>{
        var start = document.querySelectorAll('.datepicker');
            M.Datepicker.init(start, {
                format: "mm/dd/yyyy",
                autoClose: true,
                onClose: handleDate
            });
    } 
    const handleChange = (e) => {
        setDates({
            [e.target.id]: e.target.value
        })
        console.log(dates)
    }
    const handleSumbit = (e) => {
        e.preventDefault();
        console.log(dates)
    }

    const startDate = React.useRef()
    const endDate = React.useRef()
    useEffect(()=>{
        initiallizeMaterialize()
    })
    
    return (
        <div>
        <div className="container p-t-100">
            <form onSubmit={handleSumbit} className="white col s12 m6">

                <div className="row">
                    <div className="input-field col s3 offset-s2">
                        <label htmlFor="date">Start Date</label>
                        <input
                            type="text"
                            className="datepicker"
                            id="startDate"
                            onChange={handleChange}
                            value={dates.startDate}
                            ref={startDate}
                        />
                    </div>
                    <div className="input-field col s3 offset-s2">
                        <label htmlFor="date">End Date</label>
                        <input
                            type="text"
                            className="datepicker"
                            id="endDate"
                            onChange={handleChange}
                            value={dates.endDate}
                            ref={endDate} />
                    </div>
                </div>
                <div className="col s8 offset-s2 center-align">
                    <button className="btn pink lighten-1 z-depth-0 " type="submit">Sign Up</button>
                </div>

            </form>
        </div>
    </div >
    )
}
