import React,{useEffect, useState} from 'react'

export default function SecondForm({handleForm2,form2,step,prevStep}) {
    
    const conti =async e => {
        e.preventDefault();
        handleForm2(form)  
};

    const [form,setForm]=useState(form2)
    const handleQuestionChange = (question, answer) => {
        setForm({
          ...form,
          questions: form.questions.map((questionObj) =>
            questionObj.question === question ? { question, answer } : questionObj
          ),
        });
      };


    const back = e => {
        e.preventDefault();
        prevStep(step);
};
    
    return (
        <div  className="container lower">
           <form>
               <div className="row">
               {form.questions.map((questionObj, ind) => {
            return (
              <div key={ind} className="input-field col s12">
                <textarea
                  id={"textarea" + ind}
                  className="materialize-textarea"
                  value={questionObj.answer}
                  onChange={({ target }) =>
                    handleQuestionChange(questionObj.question, target.value)
                  }
                ></textarea>
                <label htmlFor={"textarea" + ind}>{questionObj.question}</label>
              </div>
            );
          })}
                   <div className="col s12 l12">
                   <button type="button" className="btn large light-blue accent-4 left" onClick={back}>Back<i className="material-icons left">arrow_back</i></button>

                    <button type="submit" className="btn large light-green accent-4 right" onClick={conti}>Next<i className="material-icons right">arrow_forward</i></button>

                </div>



               </div>
           </form>
        </div>
    )
}
