import React,{useEffect, useState} from 'react'
import M from  'materialize-css/dist/js/materialize.min.js';



export default function SecondForm(props) {
    


    const [form,setForm]=useState({
        questions:[],
    })
    const [question1,setQuestion1]=useState({
        name:'What aspirations you have with this Internship ?',
        answer:""
    })
    const [question2,setQuestion2]=useState({
        name:'What all possible ways you will add value to the organisation growth ?',
        answer:""
    })
    const [question3,setQuestion3]=useState({
        name:'Are you motivated with our Vision?',
        answer:""
    })
    const [question4,setQuestion4]=useState({
        name:'Why you want to join edunomics ? ',
        answer:""
    })
    const [question5,setQuestion5]=useState({
        name:'Which is a greatest tech product you use ?',
        answer:""
    })


    useEffect(()=>{
        let select = document.querySelector('select');
          M.FormSelect.init(select, {});
        },[])
    
    const conti =async e => {
            e.preventDefault();
            await setForm({question1,question2,question3,question4,question5})
            await console.log(form)  
            await props.nextStep(props.step)          
    };
    const back = e => {
        e.preventDefault();
        props.prevStep(props.step);
};

    useEffect(()=>{
        console.log(form)
    },[setForm])
    
    return (
        <div  className="container lower">
           <form>
               <div className="row">
                   <div className="col input-field s12">
                        <textarea id="textarea1" className="materialize-textarea" value={question1.answer} onChange={ (e)=> {setQuestion1({...question1,answer:e.target.value})}} />
                        <label htmlFor="textarea1">What aspirations you have with this Internship ?</label>
                   </div>
                   <div className="col input-field s12">
                        <textarea id="textarea2" className="materialize-textarea"  value={question2.answer} onChange={ (e)=> {setQuestion2({...question2,answer:e.target.value})}} />
                        <label htmlFor="textarea2">What all possible ways you will add value to the organisation growth ?</label>
                   </div>                   
                   <div className="col input-field s12">
                        <textarea id="textarea3" className="materialize-textarea"  value={question3.answer} onChange={ (e)=> {setQuestion3({...question3,answer:e.target.value})}} />
                        <label htmlFor="textarea3">Are you motivated with our Vision?</label>
                   </div>                   
                   <div className="col input-field s12">
                        <textarea id="textarea4" className="materialize-textarea"  value={question4.answer} onChange={ (e)=> {setQuestion4({...question1,answer:e.target.value})}} />
                        <label htmlFor="textarea4">Why you want to join edunomics ? </label>
                   </div>                   
                   <div className="col input-field s12">
                    <textarea id="textarea5" className="materialize-textarea"  value={question5.answer} onChange={ (e)=> {setQuestion5({...question5,answer:e.target.value})}} />
                        <label htmlFor="textarea5">Which is a greatest tech product you use ?</label>
                   </div>
                   <div className="col s12 l12">
                   <button type="button" className="btn large light-blue accent-4 left" onClick={back}>Back<i className="material-icons left">arrow_back</i></button>

                    <button type="submit" className="btn large light-green accent-4 right" onClick={conti}>Next<i className="material-icons right">arrow_forward</i></button>

                </div>



               </div>
           </form>
        </div>
    )
}
