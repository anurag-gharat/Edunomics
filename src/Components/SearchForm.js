import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import {getArticle} from '../API/BlogRequests'
import M from  'materialize-css/dist/js/materialize.min.js';


export default function SearchForm() {

    //query is the text that you search
    //search is the category filter that you wish to search

    const [query,setQuery] = useState('')
    const [redirect, setRedirect] = useState(false)
    const [search,setSearch]=useState("career")
    const [blog,setBlog]=useState()
    const [skills,setSkills]=useState({})
    const [career,setCareer]=useState({})
    const [auto,setAuto]=useState()


    const activeSearch="btn blue   "
    const inactiveSearch="btn blue lighten-3 " 


    const handleSubmit=(e)=>{
        e.preventDefault();
        if (query===''){
            alert("Enter a search!")
        }
        else{
            getArticle(query,search)
            .then(response=>{
                if(response.success){
                    setBlog(response.data)
                    setRedirect(true)
                }
                else{
                    alert("Requested blog is not present")
                    setRedirect(false)
                }
            })
            .catch(error=>(console.log(error)))
            
            
            // .then(response=>{
            //     console.log(response)
            //     setBlog(response.data)
            // })
            // .catch(error=>console.log(error))
            // .finally(()=>setRedirect(true))
            
        }
    }
   

    useEffect(()=>{
        let elems = document.querySelectorAll('.autocomplete');
        var instances = M.Autocomplete.init(elems, {
            data:{
                'vue':null,
                'react':null,
                'angular':null
              },
        });
        myFun(myarr)
        },[])
    var myobj={}
    var myarr=['A','b','c','d']

    function myFun(myarr){
        myobj=myarr.reduce((o, key) => Object.assign(o, {[key.toString()]: null}), {});
        // console.log(myobj)

    }


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
          state: { data:blog}
        }} />
      } else {         
    return (
        <form onSubmit={(e)=>handleSubmit(e)}>
        {search==='career'?
        (
        //career   
<div className="row m-t-10">
            <div className="col s12 l10">
                
                    <div className="input-field">
                        <input type="text" id="autocomplete-input" className="autocomplete" onChange={handleChange} autoComplete='off'/>
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
        ):
        //skill
        (   
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
        )
    
    
    }   
        
        </form>

     
    )
}
}