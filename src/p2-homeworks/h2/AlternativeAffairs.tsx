import React,{useState} from "react";
import style from "./AlternativeAffairs.module.css"
type  HW2 = {
}
function AlternativeAffairs() {
    const [vals,setVals] = useState(1)
    const funcMinus = () => {
        setVals(vals + 1)
        console.log(vals)
    }
    const  funcPlus = () => {
        setVals(vals - 1)
        console.log(vals)
    }
    return (
        <div className={style.block__form}>
            <textarea className={style.block__textarea} value={vals}>
            </textarea>
<div className={style.block__butoon}>
            <button className={style.buton__UP } onClick={funcPlus}><svg xmlns="http://www.w3.org/2000/svg"  width="20px"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><polyline points="6 9 12 15 18 9"></polyline></svg></button>
            <button className={style.buton__Down} onClick={funcMinus}><svg xmlns="http://www.w3.org/2000/svg"  width="20px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg> </button>
            </div>     
        </div>
    );
}

export default AlternativeAffairs;
