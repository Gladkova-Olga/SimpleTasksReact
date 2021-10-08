import {initialPeopleType} from "../HW8";

export type ActionsType = ReturnType<typeof sortByName> |
    ReturnType<typeof checkAge>

export const homeWorkReducer = (state: initialPeopleType, action: ActionsType): initialPeopleType => { // need to fix any
    switch (action.type) {
        case 'sort': {
            let newState = [...state].sort((a, b) => {
                if (a.name > b.name) {
                    return 1
                } else if (a.name < b.name) {
                    return -1
                } else {
                    return 0
                }
            })
            if (action.payload === "up") {
                return newState
            } else {
                return newState.reverse()
            }
        }
        case 'check': {
            return state.filter(u => u.age >= action.age)
        }
        default:
            return state
    }
}

export const sortByName = (payload: string) => ({type: "sort", payload} as const);
export const checkAge = (age: number) => ({type: "check", age} as const)