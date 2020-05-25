import React, { useState,useEffect } from 'react'
import FirstForm from './FirstForm'
import SecondForm from './SecondForm'
import ThirdForm from './ThirdForm'
import Success from './Success'
import {applyNow} from '../API/UserRoutes'



export default function Userform() {


    const [step,setStep]=useState(1)
    
    const [data,setData]=useState({
        form1:{},
        form2: {},
        form3: {}
    })
    const {form1,form2,form3}=data

    
    const handleForm1=async(item)=>{
        console.log(item)
        const test={ha:"hall"}
        setData({
            form1: test, ...data
        })
        console.log(data)
    }
    const handleForm2=async(item)=>{
        await setData({
            ...data,
            form2:item,
            
        })
        nextStep(step)
    }
    const handleForm3=async(item)=>{
        await setData({
            ...data,
            form3:item
            
        })

    }
    const handleNext=input=>recievedData=>{
        setData({
            [input]:recievedData
        })
    }
    
//handles the submit
    const handleSubmit=()=>{
    console.log(data)    
}


// Proceed to next step
  const nextStep = (step) => {
    console.log(data)
   setStep(step+1) 
  }


// Go back to prev step
  const prevStep = () => {
    
    setStep({
      step: step - 1
    });
  };
useEffect(() => {
    console.log(data)
}, [data])
  

       
        switch(step){
            case 1:
                return (
                    <FirstForm
                        nextStep={nextStep}
                        prevStep={prevStep}
                        handleNext={handleNext}
                        step={step}
                        handleForm1={handleForm1}
                        values={form1}
                    />

                )
            case 2:
                return (
                    <SecondForm
                        nextStep={nextStep}
                        prevStep={prevStep}
                        handleForm2={handleForm2}
                        handleNext={handleNext}                     
                        values={form2}
                        step={step}

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
                        handleForm3={handleForm3}
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
