
import React, { useState } from "react";

export default function FirstForm({ handleForm1, form1 }) {
  
    const conti = async(e) => {
    e.preventDefault();
    const newForm =await  { ...form, see_yourself_as: person, Tech_you_know: skills };
    setform(newForm);
    handleForm1(newForm);
  };
  
  const [form, setform] = useState(form1);
  const handleQuestionChange = (question, answer) => {
    setform({
      ...form,
      questions: form.questions.map((questionObj) =>
        questionObj.question === question ? { question, answer } : questionObj
      ),
    });
  };
  
  
  const { full_name, email, contact_no, university_name, github_repo } = form;
  const [person, setPerson] = useState([]);
  const [skills, setSkills] = useState([]);




  //all functions
  //to change text fields
  const handleChange = (input) => (e) => {
    setform({ ...form, [input]: e.target.value });
  };
  //to change checkbox
  const checkboxChanged = (e) => {
    if (e.target.checked) {
      const val = e.target.value;
      setPerson([...person, val]);
    }
  };

  const sliderChanged = (input) => (e) => {
    const val = { name: input, proficiency: e.target.value };
    setSkills([...skills, val]);
  };

  const seeurself = [
    "Helping person",
    "Role Model",
    "Passionate",
    "Intelligent",
    "Smart",
    "Doer",
    "Hardworking",
    "None Of the above",
  ];
  
  return (
    <div className="container lower">
      <form onSubmit={conti}>
        <div className="row lower">
          <div className="input-field col s6">
            <i className="material-icons prefix">account_circle</i>
            <input
              id="icon_prefix"
              type="text"
              className="validate"
              value={full_name}
              onChange={handleChange("full_name")}
            />
            <label htmlFor="icon_prefix">Full Name</label>
          </div>

          <div className="input-field col s6">
            <i className="material-icons prefix">phone</i>
            <input
              id="icon_telephone"
              type="tel"
              className="validate"
              value={contact_no}
              onChange={handleChange("contact_no")}
            />
            <label htmlFor="icon_telephone">Telephone</label>
          </div>

          <div className="input-field col s6">
            <i className="material-icons prefix">mail</i>
            <input
              id="icon_prefix"
              type="email"
              className="validate"
              value={email}
              onChange={handleChange("email")}
            />
            <label htmlFor="icon_prefix">Email</label>
          </div>

          <div className="input-field col s6">
            <i className="material-icons prefix">school</i>
            <input
              id="icon_telephone"
              type="tel"
              className="validate"
              value={university_name}
              onChange={handleChange("university_name")}
            />
            <label htmlFor="icon_telephone">University Name</label>
          </div>

          {form.questions.map((questionObj, ind) => {
            return (
              <div key={ind} className="input-field col s12 m-t-10">
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

          <div className="input-field col s12">
            <h6>How you see yourself as ?</h6>
            {seeurself.map((labelObj, ind) => (
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
          <div className="col s12">
            <h4>Technologies you know:</h4>
          </div>
          {["React JS", "Angular JS", "Python", "Java", "Node JS", "Swift"].map(
            (technology, key) => (
              <div key={key} className="col s12">
                <h6>{technology}</h6>
                <p className="range-field">
                  <span className="left">0</span>
                  <span className="right">5</span>
                  <input
                    type="range"
                    id="test5"
                    min="1"
                    max="5"
                    name={technology}
                    onChange={sliderChanged(technology)}
                  />
                </p>
              </div>
            )
          )}

          <div className="input-field col s12">
            <i className="material-icons prefix">code</i>
            <input
              id="icon_prefix"
              type="text"
              className="validate"
              value={github_repo}
              onChange={handleChange("github_repo")}
            />
            <label htmlFor="icon_prefix">Your github profile link</label>
          </div>

          <div className="col s12 center">
            <button type="submit" className="btn large light-green accent-4">
              Next<i className="material-icons right">arrow_forward</i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
