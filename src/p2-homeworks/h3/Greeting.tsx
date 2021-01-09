import React,{ChangeEvent} from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e:ChangeEvent<HTMLInputElement>)=>void
    addUser: ()=>void // need to fix any
    error: any // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error} // деструктуризация пропсов
) => {
    const inputClass = error === "error" ?  s.error : s.inputClass ;// need to fix with (?:)

    return (
        <div className={s.inputBlock}>
            <input value={name} onChange={setNameCallback} className={inputClass}/>
            <div className={inputClass}>{error} </div>
            <div className={s.button_item}>
            <button onClick={addUser} className={s.btn2}>добавить</button>
            </div>

        </div>
    );
}

export default Greeting;
