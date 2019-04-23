import {initStateAge} from "../initState/initStateAge";

export const reducerAge = (state=initStateAge, action)=>{
    switch (action.type) {
        case "getAge":
            return {age: action.payload};
        default:
    }
    return state;
};