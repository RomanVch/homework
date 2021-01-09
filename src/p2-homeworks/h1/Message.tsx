import React from "react";
import style from "./Message.module.css"
import {TaskType} from "./HW1";


 export const Message = (props:TaskType) => {
    return (
        <div className={style.message} >
            <img className={style.avatar} src={props.avatar}/>
            <div className={style.message__block}>
                <div>
            <p className={style.message__name}>{props.name}</p>
            <p className={style.message__text}>{props.message}</p>
                </div>
                    <time className={style.message__time}>{props.time}</time>
            </div>

        </div>
    );
}

export default Message;
