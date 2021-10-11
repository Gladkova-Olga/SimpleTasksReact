export type InitStateType = typeof initState
export type ActionTypes = ReturnType<typeof loadingOnOff>

const initState = {
    loading: false
}

export const loadingReducer = (state:InitStateType = initState, action: ActionTypes): InitStateType => {
    switch (action.type) {
        case 'LOADING': {
            return {...state, loading: action.loading}
        }
        default:
            return state
    }
}

export const loadingOnOff = (loading: boolean) => ({
    type: "LOADING", loading
} as const)

