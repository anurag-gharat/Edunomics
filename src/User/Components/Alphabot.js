import React, { useState, useEffect } from 'react'
import Bot from '../../images/bot.png'
import {sendMessage} from '../../API/AlphaBot'

export default function Alphabot() {

    const [step,setStep]=useState(0)
    const [userInputText,setUserInputText]=useState('')
    const [botReplyText,setBotReplyText]=useState('')

    const [botreply,setBotReply]=useState('hii')
    const [allChats,setAllChats]=useState([])

    const handleChange=(e)=>{
        setUserInputText(e.target.value)
    }
    const displayData=[]
    
//userchats    
    const appendMessage=()=>{
    displayData.push(<div className="user-dialog row" key={step+100}>
    <div className="alphabot-text right col l6 green">
    <p className="botText right white-text">{userInputText}</p>
    </div>
    </div>)
    setAllChats([...allChats,...displayData])
    }


// chat bot chats
    const appendReply=(response)=>{  
        console.log('appendReply')
        console.log(displayData)  
        displayData.push(<div className="alphabot-dialog row" key={step}>
            <div className="alphabot-avatar col l1">
        <img className="responsive-img" src={Bot}></img>
    </div>
    <div className="alphabot-text col l6 ">
    <p className="botText">{response}</p>
    </div>
</div>)
   setAllChats([...allChats,...displayData])

    }


    const handleSubmit=(e)=>{
        e.preventDefault()
        if(userInputText===''){
            alert('Your Message cannot be empty')
        }
        else{
            setStep(step+1)
            appendMessage()
            sendMessage(userInputText,step)
            .then(response=>{
                console.log("server response is ",response)
                setBotReplyText(response)
                appendReply(response)
            })
        }
    }

    return (
        <div className=" container z-depth-3 m-b-50">
            <div className="row green" >
                <h4 className="left ml2 white-text">Alpha Bot</h4>
            </div>
            <div className="chat-container" id="chatscreen">
            <div className="row alphabot-dialog">
            <div className="alphabot-avatar col l1">
            <img className="responsive-img" src={Bot}></img>
            </div>
            <div className="alphabot-text col l6 ">
            <p className="botText">Hello there! I am AlphaBot</p>
            </div></div> 
            {allChats}               

            </div>
            <div className="row">
                <div className="col input-field s9 l10">
                    
                    <input className="input" placeholder="Type your response" value={userInputText} onChange={handleChange
                    }></input>
                    
                </div>
                <div className="col l2 s3 input-field center">
                    <button className="btn green round-edges" onClick={(e)=>handleSubmit(e)}>
                    <i className="material-icons">send</i>
                    </button>
                </div>
            </div>
        </div>
    )
}



