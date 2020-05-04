import React, { useEffect } from 'react'

export default function FirstForm(props) {

    const conti = e => {
        e.preventDefault();
        props.nextStep();
    };
  



    return (
        <div className="container lower">
                <form>
                    
                    
                <div className="row lower">
                
                <div className="input-field col s6">
                <i className="material-icons prefix">account_circle</i>
                <input id="icon_prefix" type="text" className="validate" />
                <label htmlFor="icon_prefix">Full Name</label>
                </div>
                
                <div className="input-field col s6">
                <i className="material-icons prefix">phone</i>
                <input id="icon_telephone" type="tel" className="validate" />
                <label htmlFor="icon_telephone">Telephone</label>
                </div>

                <div className="input-field col s6">
                <i className="material-icons prefix">mail</i>
                <input id="icon_prefix" type="email" className="validate" />
                <label htmlFor="icon_prefix">Email</label>
                </div>
                
                <div className="input-field col s6">
                <i className="material-icons prefix">school</i>
                <input id="icon_telephone" type="tel" className="validate" />
                <label htmlFor="icon_telephone">University Name</label>
                </div>
     
                
                <div className="input-field col s12">
                <textarea id="textarea1" className="materialize-textarea"></textarea>
                <label htmlFor="textarea1">Tell us about a time when you were successful on a team ?</label>
                </div>

                <div className="input-field col s12">
                <textarea id="textarea1" className="materialize-textarea"></textarea>
                <label htmlFor="textarea1">Tell us about a time when you had to learn something quickly ?</label>
                </div>
                
                <div className="input-field col s12">
                <textarea id="textarea1" className="materialize-textarea"></textarea>
                <label htmlFor="textarea1">Tell us about a time when you failed or made mistake ? Learnings post that</label>
                </div>
                
                <div className="input-field col s12">
                <textarea id="textarea1" className="materialize-textarea"></textarea>
                <label htmlFor="textarea1">Tell us about a time you need to disagree with someone ?</label>
                </div>
                
                <div className="input-field col s12">
                <textarea id="textarea1" className="materialize-textarea"></textarea>
                <label htmlFor="textarea1">Describe your one of the most challenging project ?</label>
                </div>
                
                <div className="input-field col s12">
                <textarea id="textarea1" className="materialize-textarea"></textarea>
                <label htmlFor="textarea1">What do you mean by the word edunomics ? How this startup can transform India ?</label>
                </div>
                
                <div className="input-field col s12">
                <textarea id="textarea1" className="materialize-textarea"></textarea>
                <label htmlFor="textarea1">Sum Your experience, how this will take the vision of edunomics ahead ?</label>
                </div>
                
                <div className="input-field col s12">
                    <h6>How you see yourself as ?</h6>
                    <p>
                        <label>
                        <input type="checkbox" />
                        <span>Helping Person</span>
                        </label>
                    </p>
                    <p>
                        <label>
                        <input type="checkbox" />
                        <span>Role Model
                        </span>
                        </label>
                    </p>
                    <p>
                        <label>
                        <input type="checkbox" />
                        <span>Passionate</span>
                        </label>
                    </p>
                    <p>
                        <label>
                        <input type="checkbox" />
                        <span>Intelligent</span>
                        </label>
                    </p>
                    <p>
                        <label>
                        <input type="checkbox" />
                        <span>Smart</span>
                        </label>
                    </p>
                    <p>
                        <label>
                        <input type="checkbox" />
                        <span>Doer</span>
                        </label>
                    </p>
                    <p>
                        <label>
                        <input type="checkbox" />
                        <span>Hardworking</span>
                        </label>
                    </p>
                    <p>
                        <label>
                        <input type="checkbox" />
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
                    <input type="range" id="test5" min="1" max="5" />
                </p>
 
                </div>
                <div className="col s12">
                <h6>Angular JS</h6>
                <p className="range-field">
                    <span className="left">1</span><span className="right">5</span>
                    <input type="range" id="test5" min="1" max="5" />
                </p>
 
                </div>
                <div className="col s12">
                <h6>Python JS</h6>
                <p className="range-field">
                    <span className="left">1</span><span className="right">5</span>
                    <input type="range" id="test5" min="1" max="5" />
                </p>
 
                </div>
                <div className="col s12">
                <h6>Java JS</h6>
                <p className="range-field">
                    <span className="left">1</span><span className="right">5</span>
                    <input type="range" id="test5" min="1" max="5" />
                </p>
 
                </div>
                <div className="col s12">
                <h6>Node JS</h6>
                <p className="range-field">
                    <span className="left">1</span><span className="right">5</span>
                    <input type="range" id="test5" min="1" max="5" />
                </p>
 
                </div>
                <div className="col s12">
                <h6>Swift</h6>
                <p className="range-field">
                    <span className="left">1</span><span className="right">5</span>
                    <input type="range" id="test5" min="1" max="5" />
                </p>
 
                </div>

                <div className="input-field col s12">
                <i className="material-icons prefix">code</i>
                <input id="icon_prefix" type="email" className="validate" />
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
