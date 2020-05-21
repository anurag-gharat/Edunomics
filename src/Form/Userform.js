import React, { Component } from 'react'
import FirstForm from './FirstForm'
import SecondForm from './SecondForm'
import ThirdForm from './ThirdForm'
import Success from './Success'


export default class Userform extends Component {

    state={
        step:1
    }

// Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

    render() {
        const { step } = this.state;

        switch(step){
            case 1:
                return (
                    <FirstForm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                    />

                )
            case 2:
                return (
                    <SecondForm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                    />
    
            )
            case 3:
                return (
                    <ThirdForm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}

                        handleChange={this.handleChange}
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
}
