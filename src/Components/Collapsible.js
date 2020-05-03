import React,{useEffect} from 'react'
import M from  'materialize-css/dist/js/materialize.min.js';


export default function Collapsible(props) {



    return (
        <li>
        <div className="collapsible-header light-green accent-4 white-text"><i className="material-icons">expand_more</i>{props.question}</div>
        <div className="collapsible-body "><span>{props.answer}</span></div>
        </li>
    )
}
