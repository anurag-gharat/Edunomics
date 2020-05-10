import React, { useEffect,useState } from 'react'
import {getAllCategories} from '../API/BlogRequests'
export default function AllCategories() {
    
    const [categories, setCategories] = useState([])    
    
    
    
    const fetchCategories=()=>{
        getAllCategories()
        .then(result=>{
            if(result.success){
                setCategories(result.categories)
            }
            else{
                console.log("unable to load categories")
            }
        })
    }


    useEffect(()=>{

    fetchCategories()

    },[])
    
    
    return (
        <div className="container p-t-100">
            <div className="row">
                <ul className="collection with-header">
                    <li className="collection-item header"><h4>All Available Categories</h4></li>
                    {categories.map((item)=>{
                        return <li className="collection-item" key="item._id">{item.name}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}
