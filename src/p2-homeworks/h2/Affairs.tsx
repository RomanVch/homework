import React from "react";
import Affair from "./Affair";
import {AffairType, FilterType} from "./HW2";
import style from "./Affairs.module.css"

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>;
    setFilter: (filter:FilterType)=> void
    deleteAffairCallback: (_id:number)=> Array<AffairType>
    setAffairs: (affairs:Array<AffairType>)=>void
    priority: Array<AffairType>

}

function Affairs(props: AffairsPropsType) {
    console.log(props.priority)
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
            setAffairs={props.setAffairs}
            priority={a.priority}

        />
    ))

    const setAll = () => {
        props.setFilter("all")
    }; // need to fix
    const setHigh = () => {
        props.setFilter("low")
    };
    const setMiddle = () => {
        props.setFilter("middle")
    };
    const setLow = () => {
        props.setFilter("high")
    };

    return (
        <div>
            {mappedAffairs}
        <div className={style.block__filter}>



            <button className={style.filer__button} onClick={setAll}>All</button>
            <button className={style.filer__button} onClick={setHigh}>High</button>
            <button className={style.filer__button} onClick={setMiddle}>Middle</button>
            <button className={style.filer__button} onClick={setLow}>Low</button>
        </div>
        </div>
    );
}

export default Affairs;
