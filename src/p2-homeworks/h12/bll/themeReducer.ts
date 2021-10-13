export type InitStateType = typeof initState
export type ActionTypes = ReturnType<typeof changeThemeC>


const initState = {
    theme: "some"
};

export const themeReducer = (state: InitStateType = initState, action: ActionTypes): InitStateType => { // fix any
    switch (action.type) {
        case "CHANGE_THEME": {
            return {...state, theme: action.theme};
        }
        default: return state;
    }
};

export const changeThemeC = (theme: string) => ({
    type: "CHANGE_THEME", theme
} as const);