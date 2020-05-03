import React from 'react'

export default function SecondForm() {
    return (
        <div  className="container lower">
           <form>
               <div className="row">
                   <div className="col s12">
                        <h6>What aspirations you have with this Internship ?</h6>
                        <textarea id="textarea1" className="materialize-textarea" />
                        <label for="textarea1">Textarea</label>
                   </div>

               </div>
           </form>
        </div>
    )
}
