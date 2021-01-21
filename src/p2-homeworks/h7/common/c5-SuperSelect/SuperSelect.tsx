import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent,useState} from "react";

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions = options?.map(t=><option key={options.length}>{t}</option>); // map options with key

    const [value,setValue]= useState("")
    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        setValue (e.currentTarget.value)
    }


    return (
        <div className="select">
        <select  onChange={onChangeCallback} {...restProps} value={value} >
            {mappedOptions}
        </select>
            <div className="select__arrow"></div>
        </div>
    );
}

export default SuperSelect;
