import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps,useState} from "react";
import '../../HW7.css';
type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    let [checked,setCheckes] = useState(true)

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        debugger
        setCheckes(e.currentTarget.checked)
    }


    const mappedOptions: any[] = options ? options.map((o, i) => ( // map options with key
        <label className={"control" + " " + "control--radio"} key={name + "-" + i}>
            <input
                type={"radio"} name = {name} checked={checked} value={value} onChange={onChangeCallback}
            />
            {o}
            <div className={"control__indicator"}></div>
        </label>
    )) : [];

    return (
        <>
            {mappedOptions}
        </>
    );
}

export default SuperRadio;
