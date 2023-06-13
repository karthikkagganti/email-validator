import { FREE_DOMAINS } from "../constants"

export function validateEmail(email) {
    if(FREE_DOMAINS?.includes(email?.split('.')[0])){
        return true
    }
    else{
        return false
    } 
}