import React,{useEffect} from 'react'
import M from  'materialize-css/dist/js/materialize.min.js';



export default function SecondForm(props) {
    
    useEffect(()=>{
        let select = document.querySelector('select');
          M.FormSelect.init(select, {});
        },[])
    
    const conti = e => {
            e.preventDefault();
            props.nextStep();
    };
    
    
    
    return (
        <div  className="container lower">
           <form>
               <div className="row">
                   <div className="col input-field s12">
                        <textarea id="textarea1" className="materialize-textarea" />
                        <label htmlFor="textarea1">What aspirations you have with this Internship ?</label>
                   </div>
                   
                   <div className="col input-field s12">
                        <textarea id="textarea1" className="materialize-textarea" />
                        <label htmlFor="textarea1">What aspirations you have with this Internship ?</label>
                   </div>                   
                   
                   <div className="col input-field s12">
                        <textarea id="textarea1" className="materialize-textarea" />
                        <label htmlFor="textarea1">What aspirations you have with this Internship ?</label>
                   </div>                   
                   
                   <div className="input-field col s12">
                    
                    <select multiple>
                    <option value="" disabled selected>Choose your option</option>
                    <option value="1">Salary & Compensation</option>
                        <option value="2">Challenging environment of startup
</option>
                    <option value="3">Learning</option>
                    <option value="3">Work htmlFor vision to transform Indian Education & Economy</option>

                    </select>
                    <label>Are you motivated with our vision or </label>
                </div>
                   
                   
                   
                   <div className="col input-field s12">
                        <textarea id="textarea1" className="materialize-textarea" />
                        <label htmlFor="textarea1">What aspirations you have with this Internship ?</label>
                   </div>
                   <div className="col s12 center">
                    <button type="submit" className="btn large light-green accent-4" onClick={conti}>Next<i className="material-icons right">arrow_forward</i></button>
                </div>



               </div>
           </form>
        </div>
    )
}
