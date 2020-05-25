import React, { useState } from 'react'
import FirstForm from './FirstForm'
import SecondForm from './SecondForm'
import ThirdForm from './ThirdForm'
import Success from './Success'
import {applyNow} from '../API/UserRoutes'



export default function Userform() {


    const [step,setStep]=useState(1)
    
    const [data,setData]=useState({
        form1:{},
        form2: {
            questions: [
                {
                    question: "Sum Your experience, how this will take the vision of edunomics ahead",
                    answer: ""
                },
                {
                    question: "Sum Your experience, how this will take the vision of edunomics ahead",
                    answer: ""
                },
                {
                    question: "Sum Your experience, how this will take the vision of edunomics ahead",
                    answer: ""
                },
                {
                    question: "Sum Your experience, how this will take the vision of edunomics ahead",
                    answer: ""
                },
                {
                    question: "Sum Your experience, how this will take the vision of edunomics ahead",
                    answer: " "
                }
            ]
        },
        form3: {
            motivationToFullTime: [
                {
                    reasons: "Take a high growth"
                }
            ],
            questions: [
                {
                    question: "Sum Your experience, how this will take the vision of edunomics ahead",
                    answer: ""
                }
            ]
        }
    })
    const {form1,form2,form3}=data


    const handleForm1=(item)=>{
        setData({
            form1:item,
            ...data
        })
    }
    const handleForm2=(item)=>{
        setData({
            form2:item,
            ...data
        })
    }
    const handleForm3=(item)=>{
        setData({
            form3:item,
            ...data
        })
    }
    const handleNext=input=>recievedData=>{
        setData({
            [input]:recievedData
        })
    }
    
//changes the values
    const handleChange=input=>e=>{
        setData({
            [input]:e.target.value
        })
        

    }
    const handleArrays=async(name,array)=>{
        setData({
            [name]:array
        })
    }

//handles the submit
    const handleSubmit=event=>{
    event.preventDefault()
    }


// Proceed to next step
  const nextStep = () => {
    
    setStep({
      step: step + 1
    });
  };


// Go back to prev step
  const prevStep = () => {
    
    setStep({
      step: step - 1
    });
  };

    

       
        switch(step){
            case 1:
                return (
                    <FirstForm
                        nextStep={nextStep}
                        prevStep={prevStep}
                        handleNext={handleNext}
                    
                        handleArrays={handleArrays}
                        values={form1}
                    />

                )
            case 2:
                return (
                    <SecondForm
                        nextStep={nextStep}
                        prevStep={prevStep}
                        handleArrays={handleArrays}
                        handleNext={handleNext}                     
                        values={form2}

                    />
    
            )
            case 3:
                return (
                    <ThirdForm
                        nextStep={nextStep}
                        prevStep={prevStep}
                        handleNext={handleNext}
                        handleSubmit={handleSubmit}
                        values={form3}
                    />
    
            )
            case 4:
                return <Success />;
                    
                    

        }



        return (
            <div>
                
            </div>
        )
   
}
