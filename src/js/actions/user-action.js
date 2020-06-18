import { buyCake } from "./actionTypes";

export const cakeAction = () => {
    console.log("You clicked on buy cake: ");
    return {
        type: buyCake,
        cakeCount: 1
    }
};
