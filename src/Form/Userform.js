
import React, { useState, useEffect } from "react";
import FirstForm from "./FirstForm";
import SecondForm from "./SecondForm";
import ThirdForm from "./ThirdForm";
import Success from "./Success";
import { applyNow } from "../API/UserRoutes";

export default function Userform() {


  const [loading,setLoading]=useState(false)
  const [success,setSuccess]=useState(true)
  const [message,setMessage]=useState("")
  const [step, setStep] = useState(1);
  const form1Questions = [
    "Tell us about a time when you were successful on a team ?",
    "Tell us about a time when you had to learn something quickly",
    "Tell us about a time when you failed or made mistake ? Learnings post that",
    "Tell us about a time you need to disagree with someone",
    "Describe your one of the most challenging project",
    "What do you mean by the word edunomics ? How this startup can transform India",
    "Sum Your experience, how this will take the vision of edunomics ahead",
  ];

  const form2Questions = [
    "What aspirations you have with this Internship ?",
    "What all possible ways you will add value to the organisation growth ?",
    "Are you motivated with our Vision?",
    "Why you want to join edunomics ?",
    "Which is a greatest tech product you use ?",
  ];

  const form3Questions=[
    "Have you ever made plans with your friends for starting up something ? What is it ? Why you haven't pursued it ?"
    ,"Add a youtube video link of your introduction (max. 90 seconds )"
]
  const [data, setData] = useState({
    form1: {
      full_name: "",
      contact_no: "",
      email: "",
      university_name: "",
      questions: form1Questions.map((question) => ({ question, answer: "" })),
      see_yourself_as: [],
      Tech_you_know: [],
      github_repo: "",
    },
    form2: {
      questions: form2Questions.map((question) => ({ question, answer: "" })),

    },
    form3: {
        questions:form3Questions.map((question)=>({question,answer:""})),
        motivationToFullTime:[]
    },
  });
  const { form1, form2, form3 } = data;

  const handleForm1 = (form) => {
    setData({
      ...data,
      form1: form,
    });
    nextStep(step);
  };

  const handleForm2 = (item) => {
    setData({
      ...data,
      form2: item,
    });
    nextStep(step);
  };

  const handleForm3 = (item) => {
    setData({
      ...data,
      form3: item,
    });
    nextStep(step)
  };

  const handleNext = (input) => (recievedData) => {
    setData({
      [input]: recievedData,
    });
  };

  const handleSubmit = () => {
    setLoading(true)
    console.log("submit wala data",data)
    applyNow(data)
      .then(response=>{
        console.log(response)
        if(response.success){
          setSuccess(true)
          setLoading(false)
          setMessage("Application Successfully Submitted.")
        }
        else{
          setLoading(false)
          setMessage("Application Cannot be Submitted.")
          setSuccess(true)
        }
      })
      .catch(error=>console.log(error))
  };

  const nextStep = (step) => {
    setStep(step + 1);
  };
  console.log(data);
  const prevStep = () => {
    setStep(step - 1);
  };


  switch (step) {
    case 1:
      return (
        <FirstForm
          nextStep={nextStep}
          prevStep={prevStep}
          handleNext={handleNext}
          step={step}
          handleForm1={handleForm1}
          form1={form1}
        />
      );
    case 2:
      return (
        <SecondForm
          nextStep={nextStep}
          prevStep={prevStep}
          handleForm2={handleForm2}
          handleNext={handleNext}
          form2={form2}
          step={step}
        />
      );
    case 3:
      return (
        <ThirdForm
          nextStep={nextStep}
          prevStep={prevStep}
          handleNext={handleNext}
          handleSubmit={handleSubmit}
          form3={form3}
          handleForm3={handleForm3}
        />
      );
    case 4:
      return <Success  
      handleSubmit={handleSubmit}
      prevStep={prevStep}
      loading={loading}
      message={message}
      success={success}
      />;
    default:
      return <Success />;
  }
}
