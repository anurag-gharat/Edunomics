import React from 'react'
import Loading from '../Components/Loading'
import {Link } from 'react-router-dom'
export default function Success({handleSubmit,prevStep,loading,message,success}) {
    return (
        <div className="row m-b-50">
            <div className="col l12 s12 m12">
                <div className="container center p-20">
                    {loading ? 
                    (<Loading />):
                    (<div>
                        {message?
                        (<div className="container center"><h2>{message}</h2>
                            {success ? (<div className="container"><button className="btn green-accent"><Link to="/">Return Back</Link></button></div>):(<div className="container"><button className="btn green-accent">Fill Again</button></div>)}
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
