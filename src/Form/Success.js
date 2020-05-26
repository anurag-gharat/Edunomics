import React from 'react'
import Loading from '../Components/Loading'
export default function Success({handleSubmit,prevStep,loading,message}) {
    return (
        <div className="row m-b-50">
            <div className="col l12 s12 m12">
                <div className="container center p-20">
                    {loading ? 
                    (<Loading />):
                    (<div>
                        {message?
                        (<div className="container center"><h2>{message}</h2>
                            {message===''}
                        </div>)
                        :
                        (<div className="container">
                        <h4>Continue with the form or update it?</h4>
                        <button className="btn btn-small green-accent left" onClick={prevStep}>Go back</button>
                        <button className="btn btn-small green-accent right" onClick={handleSubmit}>Submit your Response?</button>

                    </div>)}
                    
                    </div>)}
                    
                </div>
            </div>
        </div>
    )
}
