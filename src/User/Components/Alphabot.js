import React from 'react'
import Bot from '../../images/bot.png'

export default function Alphabot() {
    return (
        <div className=" container z-depth-3 m-b-50">
            <div className="row green" >
                <h4 className="left ml2 white-text">Alpha Bot</h4>
            </div>
            <div className="chat-container">
                
                <div className="alphabot-dialog row">
                    <div className="alphabot-avatar col l1">
                        <img className="responsive-img" src={Bot}></img>
                    </div>
                    <div className="alphabot-text col l6 ">
                        <p className="botText">Hi I am Alphabot</p>
                    </div>
                </div>
                <div className="user-dialog row">
                    <div className="alphabot-text right col l6 green">
                        <p className="botText right white-text">Hi I am Alphabot</p>
                    </div>
                </div>

            </div>
            <div className="row">
                <div className="col input-field  l10">
                    
                    <input className="input" placeholder="Type your response"></input>
                    
                </div>
                <div className="col l2 input-field">
                    <button className="btn-large green">
                    <i className="material-icons">send</i>
                    </button>
                </div>
            </div>
        </div>
    )
}
