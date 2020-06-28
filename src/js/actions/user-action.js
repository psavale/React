import { buyCake } from "./actionTypes";

export const cakeAction = () => {
    return {
        type: buyCake,
        cakeCount: 1
    }
};
