import { store } from "../store";
import { SET_CURR_SONG } from "../reducers/player.reducer";
import { utilService } from "../../services/util.service";

const STORAGE_KEY = "LAST_PLAYED_SONG_ID";

export function setCurrSong(songId) {
  store.dispatch({ type: SET_CURR_SONG, songId });
  utilService.saveToStorage(STORAGE_KEY, songId);
}

export function setLastPlayedSong() {
  const songId = utilService.loadFromStorage(STORAGE_KEY);
  console.log(songId);
  store.dispatch({ type: SET_CURR_SONG, songId });
}
