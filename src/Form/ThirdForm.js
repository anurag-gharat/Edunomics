import React,{useEffect, useState} from 'react'
import M from  'materialize-css/dist/js/materialize.min.js';

export default function ThirdForm(props) {


    const[form,setForm]=useState({
        motivationToFullTime:[],
        questions:[]
    })
    const [question1,setQuestion1]=useState({
        name:"Have you ever made plans with your friends for starting up something ? What is it ? Why you haven't pursued it ?",
        answer:""
    })
    const [question2,setQuestion2]=useState({
        name:'Add a youtube video link of your introduction (max. 90 seconds ) ',
        answer:""
    })

    const {questions,motivationToFullTime}=form
    useEffect(()=>{
        let date = document.querySelector('.datepicker');
          M.Datepicker.init(date, {});
        },[])
    const conti = e => {
            e.preventDefault();
            props.nextStep();
    };
    const back = e => {
        e.preventDefault();
        props.prevStep();
};
    const handleCheckChange=(e)=>{
        if(e.target.checked){
            const answer=e.target.value
            setForm({...form,motivationToFullTime:[...motivationToFullTime,answer]})
        }
        console.log(form)
    }
   const ontestSubmit=async(e)=>{
       e.preventDefault()
       setForm({...form,questions:[question1,question2]})
        console.log(form)
   }

    return (
        <div className="container lower">
            <form>

                <div className="row">
                <div className="input-field col s12">
                    <h6>What will be yours prime motivator to join edunomics full time post this internship as well ?</h6>
                    <p>
                        <label>
                        <input type="checkbox" value="Take a high growth" onChange={(e)=>handleCheckChange(e)} />
                        <span>Take a high growth</span>
                        </label>
                    </p>
                    <p>
                        <label>
                        <input type="checkbox"  value="Looking For Challenges" onChange={(e)=>handleCheckChange(e)} />
                        <span>Looking for challenges
                        </span>
                        </label>
                    </p>
                    <p>
                        <label>
                        <input type="checkbox"  value="Passionate" onChange={(e)=>handleCheckChange(e)} />
                        <span>Passionate</span>
                        </label>
                    </p>
                    <p>
                        <label>
                        <input type="checkbox"  value="Wish to work in dynamic environment" onChange={(e)=>handleCheckChange(e)} />
                        <span>Wish to work in dynamic environment</span>
                        </label>
                    </p>
                    <p>
                        <label>
                        <input type="checkbox"  value="Learning" onChange={(e)=>handleCheckChange(e)} />
                        <span>Learning</span>
                        </label>
                    </p>
                    <p>
                        <label>
                        <input type="checkbox"  value="To be a part of decision making" onChange={(e)=>handleCheckChange(e)} />
                        <span>To be a part of decision making</span>
                        </label>
                    </p>
                
                </div>

                 
                <div className="input-field col s12">
                <textarea id="textarea1" className="materialize-textarea" value={question1.answer} onChange={(e)=>setQuestion1({...question1,answer:e.target.value})}></textarea>
                <label htmlFor="textarea1">Have you ever made plans with your friends for starting up something ? What is it ? Why you haven't pursued it ?</label>
                </div>
                {/* <div className="input-field col s12">
                <input type="text" className="datepicker" placeholder="How soon you can join edunomics ?"/> 
                </div> */}
                {/* <div className="input-field col s12">
                <textarea id="textarea1" class="materialize-textarea"></textarea>
                <label htmlFor="textarea1">What all possible ways you will add value to the organisation growth ?</label>
                </div>
                <div className="input-field col s12">
                <textarea id="textarea1" class="materialize-textarea"></textarea>
                <label htmlFor="textarea1">Why you want to join edunomics ?</label>
                </div> */}
                <div className="input-field col s12">
                <textarea id="textarea1" class="materialize-textarea" value={question2.answer} onChange={(e)=>setQuestion2({...question2,answer:e.target.value})}></textarea>
                <label htmlFor="textarea1">Add a youtube video link of your introduction (max. 90 seconds )</label>
                </div>


                <div className="col s12 center">
                   <button type="button" className="btn large light-blue accent-4 left" onClick={back}>Back<i className="material-icons left">arrow_back</i></button>

                    <button type="submit" className="btn large light-green accent-4 right" onClick={(e)=>ontestSubmit(e)}>Submit<i class="material-icons right">arrow_forward</i></button>
                </div>


                </div>

            </form>
           
        </div>
    )
}
