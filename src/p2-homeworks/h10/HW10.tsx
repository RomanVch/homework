import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {loadingAC, stopLoadingAC} from "./bll/loadingReducer";
import preloader from "./img/6.gif"
import s from "./HW10.module.css"
import {log} from "util";

function HW10() {
    const selectLoading=(state:any)=>state.loading.loading
  const loading = useSelector(selectLoading)
const dispatch= useDispatch()
    const setLoading = () => {
        debugger
        dispatch(loadingAC())
        setTimeout(()=>dispatch(stopLoadingAC()),2000)
        console.log(loading);

    };

    return (
        <div className={s.block}>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (<img className={s.preloader} src={preloader} alt={"preloader"}/>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    );
}

export default HW10;
