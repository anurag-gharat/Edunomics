import React,{useEffect, useState} from 'react'

export default function ThirdForm({form3,nextStep,step,prevStep,handleForm3}) {
    const ontestSubmit=async(e)=>{
        e.preventDefault()
        const newForm =await  { ...form,motivationToFullTime:person};
        setform(newForm);
        handleForm3(newForm)  
    }

    const[form,setform]=useState(form3)

    const motivation = [
        "Take a high growth",
        "Looking for challenges",
        'Passionate',
        "Wish to work in dynamic environment",
        "Learning",
        "To be a part of decision making"
      ];

    const back = e => {
        e.preventDefault();
        prevStep(step);
};

    const handleQuestionChange = (question, answer) => {
        setform({
        ...form,
        questions: form.questions.map((questionObj) =>
        questionObj.question === question ? { question, answer } : questionObj
      ),
    });
  };



  const checkboxChanged = (e) => {
    if (e.target.checked) {
      const val = e.target.value;
      setPerson([...person, val]);
    }
  };
    const [person, setPerson] = useState([]);
   
    

    return (
        <div className="container lower">
            <form>

            <div className="input-field col s12">
            <h6>How you see yourself as ?</h6>
            {motivation.map((labelObj, ind) => (
              <p key={ind}>
                <label>
                  <input
                    type="checkbox"
                    name={labelObj}
                    onChange={(e) => checkboxChanged(e)}
                    value={labelObj}
                  />
                  <span>{labelObj}</span>
                </label>
              </p>
            ))}
          </div>
         
                 
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


                <div className="col s12 center">
                   <button type="button" className="btn large light-blue accent-4 left" onClick={back}>Back<i className="material-icons left">arrow_back</i></button>

                    <button type="submit" className="btn large light-green accent-4 right" onClick={(e)=>ontestSubmit(e)}>Submit<i class="material-icons right">arrow_forward</i></button>
                </div>


                

            </form>
           
        </div>
    )
}
