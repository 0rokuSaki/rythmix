export const SET_STATION = 'SET_STATION'


const initialState = {
    station: null
}

export function stationReducer(state = initialState, cmd = {}) {
    switch (cmd.type) {
        case SET_STATION:
            return {
                ...state,
                station : cmd.station
            }

        default:
            return state
    }
}