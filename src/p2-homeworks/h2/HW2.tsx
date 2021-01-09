import React, {useState} from "react";
import Affairs from "./Affairs";
import AlternativeAffairs from "./AlternativeAffairs";

// types
export type AffairPriorityType = "high" | "middle" | "low"; // need to fix any
export type AffairType = {
    _id: number,
    name: string,
    priority: "high" | "middle" | "low"
}
export type FilterType = "all" | AffairPriorityType;

// constants
const defaultAffairs: Array<AffairType> = [ // need to fix any
    {_id: 1, name: "React", priority: "high"},
    {_id: 2, name: "anime", priority: "low"},
    {_id: 3, name: "games", priority: "low"},
    {_id: 4, name: "work", priority: "high"},
    {_id: 5, name: "html & css", priority: "middle"},
];

// pure helper functions


function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs);
    const [filter, setFilter] = useState<FilterType>("all");

    const deleteAffair = (affairs: Array<AffairType>, _id: number) => {
        const newAffair = affairs.filter(task => task._id !== _id);
        return newAffair;
    }


    const filterAffairs = (affairs: Array<AffairType>, filter: FilterType) => {
        if (filter === "all") {
            return affairs;
        } else {
            return affairs.filter(t => t.priority === filter);
        }
    }
    const filteredAffairs = filterAffairs(affairs, filter);
    const deleteAffairCallback = (_id: number) => deleteAffair(filteredAffairs, _id); // need to fix any
    return (
        <div>
            <hr/>
            homeworks 2

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
                setAffairs={setAffairs}
                priority={defaultAffairs}/>

            <hr/>
            <AlternativeAffairs/>
        </div>
    );
}

export default HW2;
