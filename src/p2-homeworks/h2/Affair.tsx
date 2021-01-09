import React from "react";
import style from "./Affair.module.css"
import {AffairType, FilterType} from "./HW2";
type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id:number)=> Array<AffairType> // need to fix any
    setAffairs: (affairs:Array<AffairType>)=>void
    key: number
    priority: string
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => props.setAffairs(props.deleteAffairCallback(props.affair._id));// need to fix
    console.log(props.affair.priority)
    return (
        <div className={style.todo}>
           <div> {"дела:  " + props.affair.name}</div>
            <div>{"  приоритет:  " + props.affair.priority} </div>
            <button onClick={deleteCallback}>удалить</button>
        </div>
    );
}

export default Affair;
