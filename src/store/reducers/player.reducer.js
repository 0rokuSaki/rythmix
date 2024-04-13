export const SET_CURR_SONG = "SET_CURR_SONG";

const initialState = {
  currSongId: null,
};

export function playerReducer(state = initialState, cmd = {}) {
  switch (cmd.type) {
    case SET_CURR_SONG:
      return {
        ...state,
        currSongId: cmd.songId,
      };
    default:
      return state;
  }
}
