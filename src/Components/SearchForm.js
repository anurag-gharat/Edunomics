import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import M from  'materialize-css/dist/js/materialize.min.js';


export default function SearchForm() {

    const [query,setQuery] = useState('')
    const [redirect, setRedirect] = useState(false)
    const [search,setSearch]=useState("career")
    
    const activeSearch="btn blue   "
    const inactiveSearch="btn blue lighten-3 " 


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
    

    const handleRole=(e)=>{
        e.preventDefault()
        setSearch(e.target.name)
    }
 
 
    const handleChange=(e)=>{
        setQuery(e.target.value)
    }
    if (redirect) {
        return <Redirect to={{
          pathname: '/search',
          state: { data:query}
        }} />
      } else {         
    return (
        <form onSubmit={(e)=>handleSubmit(e)}>
            
        <div className="row m-t-10">
            <div className="col s12 l10">
                
                    <div className="input-field">
                        <input type="text" id="autocomplete-input" className="autocomplete" onChange={handleChange} />
                        <label htmlFor="autocomplete-input">Enter Your Query</label>
                </div>
            </div>
            <div className="col s12 l2 m-t-10">
                <button type="submit" className="button-search m-t-10 gradient1 white-text hoverable">Search</button>
            </div>
            <div className="row">
                <div className="col l6 s6 right-align">
                    <button className={search==="career"?activeSearch:inactiveSearch} name="career" onClick={handleRole}>Career</button>
                </div>
                <div className="col l6 s6 left-align">
                    <button className={search==="skill"?activeSearch:inactiveSearch} name="skill" onClick={handleRole}  >Skill</button>
                </div>
            </div>
        </div>
        </form>

     
    )
}
}