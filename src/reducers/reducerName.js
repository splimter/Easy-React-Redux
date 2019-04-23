import {initStateName} from "../initState/initStateName";

export const reducerName = (state=initStateName, action)=>{
    console.log(action.payload);
    switch (action.type) {
        case "getName":
            return {name: action.payload};
        default:
    }
    return state;
};