import React from 'react'
import Jumbotron from '../Components/Jumbotron'
import UserForm from '../Form/Userform'

export default function Application() {
    return (
        <div className="no-mar">
           <section className="section">
                <Jumbotron />
           </section>
           <section>
               <UserForm />
           </section>
        </div>
    )
}
