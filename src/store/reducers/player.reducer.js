export const SET_CURR_SONG = "SET_CURR_SONG";
export const TOGGLE_PLAY = "TOGGLE_PLAY";

const initialState = {
  isPlaying: false,
  currSongId: null,
};

export function playerReducer(state = initialState, cmd = {}) {
  switch (cmd.type) {
    case SET_CURR_SONG:
      return {
        ...state,
        currSongId: cmd.songId,
      };
    case TOGGLE_PLAY:
      return {
        ...state,
        isPlaying: !state.isPlaying,
      };
    default:
      return state;
  }
}
