type stateType = {_id: number, name: string, age: number}[]
type actionType={type:"sort" | "down"|"check", payload:"up"| "down"|number}
export const homeWorkReducer = (state: stateType, action: actionType):stateType => {
    const stateCopy =[...state]
    switch (action.type) {
        case "sort": {
            if (action.payload === "up") {
                return stateCopy.sort((a: any, b: any) => {
                        if(a.name<=b.name){
                            return -1
                        } else {
                            return 1
                        }
                    }
                )
            } else if (action.payload === "down") {
                return stateCopy.sort((a: any, b: any) => {
                  if(a.name<=b.name){
                        return 1
                    } else {
                        return -1
                    }
                    })

            } else {
                return state
            }
        }
        case "check": {
            return stateCopy.filter((w: any) => w.age >= action.payload)
        }
        default:
            return state
    }
};
