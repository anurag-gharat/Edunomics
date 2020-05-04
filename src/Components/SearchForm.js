import useJquery from 'react-use-jquery'
import React, { useState, useEffect } from 'react'
import { Redirect, Link } from 'react-router-dom'
import M from  'materialize-css/dist/js/materialize.min.js';


export default function SearchForm() {

    const [query,setQuery] = useState('')
    const [redirect, setRedirect] = useState(false)
  
    const handleSubmit=(e)=>{
        e.preventDefault();
        if (query===''){
            alert("Enter a search!")
        }
        else{
            setRedirect(true)
        }
    }
   

    useEffect(()=>{
        let elems = document.querySelectorAll('.autocomplete');
        var instances = M.Autocomplete.init(elems, {
            data:{
                "Apple": null,
                "Microsoft": null,
                "Google": 'https://placehold.it/250x250',
                "React":null,
                "Node":null,
                "Php":null
              },
        });
        },[])
    


 
 
    const handleChange=(e)=>{
        setQuery(e.target.value)
    }
    if (redirect) {
        return <Redirect to={{
          pathname: '/searchquery',
          state: { data:query}
        }} />
      } else {         
    return (
        <form onSubmit={(e)=>handleSubmit(e)}>
            
        <div className="row">
            <div className="col s7">
                
                    <div className="input-field">
                        <input type="text" id="autocomplete-input" class="autocomplete" onChange={handleChange} />
                        <label for="autocomplete-input">Enter Your Query</label>
                </div>
            </div>
            <div className="col s5 m-t-10">
                <button type="submit" className="button m-t-10">Search</button>
            </div>
        </div>
        </form>

     
    )
}
}