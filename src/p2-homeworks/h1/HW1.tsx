import React from "react";
import AlternativeMessage from "./AlternativeMessage";
import Message from "./Message";

export type TaskType ={
    avatar:string;
    name: string;
    message: string;
    time: string;
}


function HW1() {
    const messageData: TaskType = {
        avatar: "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
        name: "Иван",
        message: "привет от Ивана привет от Ивана ",
        time: "22:00"
    };
    return (
        <div>
            <Message
            avatar={messageData.avatar}
            name={messageData.name}
            message={messageData.message}
            time={messageData.time}
            />
            <hr/>
            для личного творчества, могу проверить
            <AlternativeMessage/>

        </div>
    );
}

export default HW1;
