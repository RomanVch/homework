import React, {useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from "./Clock.module.css"

function Clock() {
    const [timerId, setTimerId] = useState(0);
    const [date, setDate] = useState<string>();
    const [show, setShow] = useState<boolean>(false);
    const [stopTimer,setStopTimer]=useState("")

    const stop = () => {

        let date = new Date(); /* создаем объект класса Date() */
/*        let hour:any = date.getHours();
        let min:any = date.getMinutes();
        let sec:any = date.getSeconds();*/
        // let Time = hour + " : " + min + " : " + sec;
        let Time = date.toLocaleTimeString('ru')
        clearInterval(timerId)
        // setStopTimer("2222222222");

    }
    const start = () => {

        const id: number = window.setInterval(() => {
            setStopTimer(currentTime());
        }, 1000);
        setTimerId(id)
    }

    const onMouseEnter = () => {
        let today: any = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        yyyy = yyyy.toString().substr(-2);
        today = dd + '.' + mm + '.' + yyyy;
        setDate(today)
        setShow(true)
    };
    const onMouseLeave = () => {
        setShow(false)
    };
    function updateTime(k:number) {
        if (k < 10) {
            return "0" + k;
        } else {
            return k;
        }
    }
    function currentTime() {
        let date = new Date(); /* создаем объект класса Date() */
        let hour:any = date.getHours();
        let min:any = date.getMinutes();
        let sec:any = date.getSeconds();
        hour = updateTime(hour);
        min = updateTime(min);
        sec = updateTime(sec);
        let Time = hour + " : " + min + " : " + sec ; /* adding time to the div */
        return Time
    }


    const stringTime = stopTimer; // fix with date
    const stringDate = date; // fix with date

    return (
        <div>
            <div className={s.timerBlock}>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div className={s.dataBlock}>
                    {
                        "/" + stringDate}
                </div>
            )}
            </div>
            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    );
}

export default Clock;
