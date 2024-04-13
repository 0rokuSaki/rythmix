export const SET_CURR_SONG = "SET_CURR_SONG";

const initialState = {
  currSong,
};

export function playerReducer(state = initialState, cmd = {}) {
  switch (cmd.type) {
    case SET_CURR_SONG:
      return {
        ...state,
        currSong: cmd.currSong,
      };
    default:
      return state;
  }
}
