import React, { useEffect, useState } from 'react'

export default function FirstForm({handleChange,values,nextStep,handleArrays}) {

    const conti =async(e)  => {
        e.preventDefault();
        await resolveCheckInput()
        await resolveSliderInput()
        await resolveQuestions()

        nextStep()
    };
    const [questions,setQuestions]=useState({
        successful_on_a_team: "",
        learn_quickly: "",
        made_mistakes: "",
        disagree_with_someone: "",
        most_challenging_project: "",
        edunomics_mean: "",
        edunomics_vision: ""
    })
    
    const resolveCheckInput=async()=>{
        await setArr([...arr,check])
        handleArrays("see_yourself_as",arr)
       
    }
    const resolveSliderInput=async()=>{
        await setSArr([...sarr,slider])
        handleArrays("Tech_you_know",sarr)
    }
    const resolveQuestions=async()=>{
        // setQuestions({...questions,
        //     [name]:event.target.value
        // })
        handleArrays("questions",questions)
    }


    const [check,setCheck]=useState({
        name:""
    })
    const [slider,setSlider]=useState({
        name:"",
        proficiency:1
    })
    const [arr,setArr]=useState([])
    const [sarr,setSArr]=useState([])

    const setTheArray=()=>{
        setArr([...arr,check])
    }

    const sliderChanged=(name)=>(e)=>{
        setSlider({
            name:name,
            proficiency:e.target.value
        })
        setSArr([...sarr,slider])
        console.log(slider)
    }

    const checkboxChanged=(e)=>{
        // console.log(e.target.checked)
        if(e.target.checked){
            setCheck({
                name:e.target.value
            })
            setTheArray()           
        }
        else{
            setCheck({
                name:""
            })
        }    
    }

    const handleQuestions=(name)=>(event)=>{
        setQuestions({...questions,
            [name]:event.target.value
        })

    }
    return (
        <div className="container lower">
                <form>
                    
                    
                <div className="row lower">
                
                <div className="input-field col s6">
                <i className="material-icons prefix">account_circle</i>
                <input id="icon_prefix" type="text" className="validate" value={values.full_name} onChange={handleChange("full_name")} />
                <label htmlFor="icon_prefix">Full Name</label>
                </div>
                
                <div className="input-field col s6">
                <i className="material-icons prefix">phone</i>
                <input id="icon_telephone" type="tel" className="validate" value={values.contact_no}  onChange={handleChange("contact_no")}/>
                <label htmlFor="icon_telephone">Telephone</label>
                </div>

                <div className="input-field col s6">
                <i className="material-icons prefix">mail</i>
                <input id="icon_prefix" type="email" className="validate" value={values.email} onChange={handleChange("email")} />
                <label htmlFor="icon_prefix">Email</label>
                </div>
                
                <div className="input-field col s6">
                <i className="material-icons prefix">school</i>
                <input id="icon_telephone" type="tel" className="validate"  value={values.university_name}  onChange={handleChange('university_name')}/>
                <label htmlFor="icon_telephone" >University Name</label>
                </div>
     
                
                <div className="input-field col s12">
                <textarea id="textarea1" className="materialize-textarea" value={questions.successful_on_a_team} onChange={handleQuestions("successful_on_a_team")}></textarea>
                <label htmlFor="textarea1">Tell us about a time when you were successful on a team ?</label>
                </div>

                <div className="input-field col s12">
                <textarea id="textarea1" className="materialize-textarea"  value={questions.learn_quickly} onChange={handleQuestions("learn_quickly")}></textarea>
                <label htmlFor="textarea1">Tell us about a time when you had to learn something quickly ?</label>
                </div>
                
                <div className="input-field col s12">
                <textarea id="textarea1" className="materialize-textarea" value={questions.made_mistakes} onChange={handleQuestions("made_mistakes")}></textarea>
                <label htmlFor="textarea1">Tell us about a time when you failed or made mistake ? Learnings post that</label>
                </div>
                
                <div className="input-field col s12">
                <textarea id="textarea1" className="materialize-textarea"  value={questions.disagree_with_someone} onChange={handleQuestions("disagree_with_someone")}></textarea>
                <label htmlFor="textarea1">Tell us about a time you need to disagree with someone ?</label>
                </div>
                
                <div className="input-field col s12">
                <textarea id="textarea1" className="materialize-textarea"  value={questions.most_challenging_project} onChange={handleQuestions("most_challenging_project")}></textarea>
                <label htmlFor="textarea1">Describe your one of the most challenging project ?</label>
                </div>
                
                <div className="input-field col s12">
                <textarea id="textarea1" className="materialize-textarea"   value={questions.edunomics_mean} onChange={handleQuestions("edunomics_mean")} ></textarea>
                <label htmlFor="textarea1">What do you mean by the word edunomics ? How this startup can transform India ?</label>
                </div>
                
                <div className="input-field col s12">
                <textarea id="textarea1" className="materialize-textarea"  value={questions.edunomics_vision} onChange={handleQuestions("edunomics_vision")} ></textarea>
                <label htmlFor="textarea1">Sum Your experience, how this will take the vision of edunomics ahead ?</label>
                </div>
                
                <div className="input-field col s12">
                    <h6>How you see yourself as ?</h6>
                    <p>
                        <label>
                        <input type="checkbox" name="Helping person" onChange={(e)=>checkboxChanged(e)} value="Helping Person"   />
                        <span>Helping Person</span>
                        
                        </label>
                    </p>
                    <p>
                        <label>
                        <input type="checkbox" name="Role Model" onChange={(e)=>checkboxChanged(e)} value="Role Model" />
                        <span>Role Model
                        </span>
                        </label>
                    </p>
                    <p>
                        <label>
                        <input type="checkbox"  onChange={(e)=>checkboxChanged(e)} value="Passionate" />
                        <span>Passionate</span>
                        </label>
                    </p>
                    <p>
                        <label>
                        <input type="checkbox" onChange={(e)=>checkboxChanged(e)} value="Intelligent"  />
                        <span>Intelligent</span>
                        </label>
                    </p>
                    <p>
                        <label>
                        <input type="checkbox"  onChange={(e)=>checkboxChanged(e)} value="Smart" />
                        <span>Smart</span>
                        </label>
                    </p>
                    <p>
                        <label>
                        <input type="checkbox" onChange={(e)=>checkboxChanged(e)} value="Doer" />
                        <span>Doer</span>
                        </label>
                    </p>
                    <p>
                        <label>
                        <input type="checkbox" onChange={(e)=>checkboxChanged(e)} value="Hardworking" />
                        <span>Hardworking</span>
                        </label>
                    </p>
                    <p>
                        <label>
                        <input type="checkbox" onChange={(e)=>checkboxChanged(e)} value="None Of the above"/>
                        <span>None of the above</span>
                        </label>
                    </p>

                
                </div>


                <div className="col s12">
                <h4>Technologies you know:</h4>
                </div>

                <div className="col s12">
                <h6>React JS</h6>
                <p className="range-field">
                    <span className="left">1</span><span className="right">5</span>
                    <input type="range" id="test5" min="1" max="5" onChange={sliderChanged("React JS")} />
                </p>
 
                </div>
                <div className="col s12">
                <h6>Angular JS</h6>
                <p className="range-field">
                    <span className="left">1</span><span className="right">5</span>
                    <input type="range" id="test5" min="1" max="5" onChange={sliderChanged("Angular JS")} />
                </p>
 
                </div>
                <div className="col s12">
                <h6>Python</h6>
                <p className="range-field">
                    <span className="left">1</span><span className="right">5</span>
                    <input type="range" id="test5" min="1" max="5" onChange={sliderChanged("Python")}  />
                </p>
 
                </div>
                <div className="col s12">
                <h6>Java</h6>
                <p className="range-field">
                    <span className="left">1</span><span className="right">5</span>
                    <input type="range" id="test5" min="1" max="5" onChange={sliderChanged("Java")}  />
                </p>
 
                </div>
                <div className="col s12">
                <h6>Node JS</h6>
                <p className="range-field">
                    <span className="left">1</span><span className="right">5</span>
                    <input type="range" id="test5" min="1" max="5" onChange={sliderChanged("Node JS")}  />
                </p>
 
                </div>
                <div className="col s12">
                <h6>Swift</h6>
                <p className="range-field">
                    <span className="left">1</span><span className="right">5</span>
                    <input type="range" id="test5" min="1" max="5" onChange={sliderChanged("Swift")}  />
                </p>
 
                </div>

                <div className="input-field col s12">
                <i className="material-icons prefix">code</i>
                <input id="icon_prefix" type="email" className="validate" value={values.github_repo} onChange={handleChange("github_repo")} />
                <label htmlFor="icon_prefix">Your github profile link</label>
                </div>
     
                <div className="col s12 center">
                    <button type="submit" className="btn large light-green accent-4" onClick={conti}>Next<i className="material-icons right">arrow_forward</i></button>
                </div>

                </div>



                    
                    
                    
                    
                </form>   
        </div>
    )
}
