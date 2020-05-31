import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import Bot from '../../images/bot.png'
import {sendMessage} from '../../API/AlphaBot'

export default function Alphabot() {

    const [step,setStep]=useState(0)
    const [userInputText,setUserInputText]=useState('')
    const [botReplyText,setBotReplyText]=useState('')
    const [button,setButton]=useState(false)
    const [botreply,setBotReply]=useState('hii')
    const [allChats,setAllChats]=useState([])
    const [end,setEnd]=useState(true)
    const userId=121321414
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
    setUserInputText('')
       
}

    const setScrollBar=()=>{
        document.querySelector('.input').scrollIntoView({block: 'start', behavior: 'smooth',inline:'end'})
    }
// chat bot chats
    const appendReply=(response)=>{  
        
        displayData.push(<div className="alphabot-dialog row" key={step}>
            <div className="alphabot-avatar col l1">
        <img className="responsive-img" src={Bot}></img>
    </div>
    <div className="alphabot-text col l6">
    <p className="botText">{response.question}</p>
    </div>
</div>)
   setAllChats([...allChats,...displayData])
   setUserInputText('')
   //console.log(step)

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
                console.log(response)
                if(response.button===1){
                    setButton(true)
                }
                else{
                    setButton(false)
                }
                if(response.End){
                    setEnd(true)
                }
                setBotReplyText(response.question)
                appendReply(response)
                setScrollBar()
            })
        }
    }
    const handleNo=(e)=>{
        e.preventDefault()
        setUserInputText('no')
        handleSubmit(e)
    }

    const EnterKeyPress=(e)=>{
        if(e.which===13){
            handleSubmit(e)
        }
    }

    return (
        <>
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
            {button ? 
            (<div className="row">
                <div className="col input-field s2 l2 .alphabot-send-button">
                <button className="btn red round-edges" onClick={handleNo}>
                <i className="material-icons white-text">clear</i>
                </button>
                </div>
            <div className="col input-field s7 l8">
                
                <input className="input" onKeyPress={EnterKeyPress} placeholder="Type your response" value={userInputText} onChange={handleChange
                }></input>
                
            </div>
            <div className="col l2 s3 input-field center alphabot-send-button">
                <button className="btn green round-edges" onClick={(e)=>handleSubmit(e)}>
                <i className="material-icons">send</i>
                </button>
            </div>
        </div>)
            :(<div className="row">
            <div className="col input-field s9 l10">
                
                <input className="input" onKeyPress={EnterKeyPress} placeholder="Type your response" value={userInputText} onChange={handleChange
                }></input>
                
            </div>
            <div className="col l2 s3 input-field center alphabot-send-button">
                <button className="btn green round-edges" onClick={(e)=>handleSubmit(e)}>
                <i className="material-icons">send</i>
                </button>
            </div>
        </div>)
            }
            
            
        </div>
    {end
        ?
        (
            <div className="container center" >
                <h4>Thank you for answering all our questions</h4>
                <Link to={`/user/resume/${userId}`}><button className="btn btn-large">Check Resume</button></Link>
            </div>
        ):
        (<div className="divider" ></div>)}
        </>
    )
}



