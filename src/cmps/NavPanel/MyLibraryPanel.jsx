import { useNavigate } from "react-router";

import { stationService } from "../../services/station.service";
import { LibraryIcon } from "../icons/LibraryIcon";

export function MyLibraryPanel() {
  
  const navigate =useNavigate()

  async function onCreateStation(){
    const station = await stationService.getEmptyStation()
    navigate('/station')

  }
  return (
    <section className="my-library-panel scrollable-y">
      <div className="library-title flex row align-center m-0 w-100">
        <LibraryIcon />
        <h3>Your Library</h3>
      </div>
      <div className="create-list-container">
        <h4>Create your first playlist</h4>
        <h5>It's easy, we'll help you</h5>
        <button onClick={onCreateStation}>
          Create playlist
        </button>
      </div>
    </section>
  );
}
