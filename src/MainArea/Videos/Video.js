import React from "react";
import ReactPlayer from 'react-player'
import './Video.css'

export default function Video(props){
    return(
        <div className="Video">
            <ReactPlayer url={props.lien} height="160px" width="300px" controls/>
            <br></br>
            <div className="Logo">
                <img src={props.pic} alt="React" style={{height:"35px", width:"35px", borderRadius:"50%"}}/>
                <div>{props.titre}</div>
            </div>
            <div className="view">
                {props.vues}
            </div>
        </div>
    )
}