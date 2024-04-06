// React
import { useNavigate } from "react-router";
import { useState,useEffect } from "react";

// Components
import { LibraryIcon } from "../icons/LibraryIcon";

// Services
import { stationService } from "../../services/station.service";
import { StationList } from "./StationList";

export function MyLibraryPanel() {

  const navigate =useNavigate()
  const [stations, setStations] = useState([])
  const [showStation, setShowStation] =useState(false)

  useEffect(() => {
    loadStations();
  },[]);

  async function loadStations(){
    try {
      const stations = await stationService.query()
      setStations(stations)
    } catch (error) {
      console.log('err',err);
    }
  }

  async function onClickBtn(){
    setShowStation(showStation =>!showStation)
    const station = stationService.getEmptyStation()
    station.name ='My playlist'
    try {
        const newStation =await stationService.save(station)
        setStations(prevStations => [...prevStations, newStation] )
        navigate(`/station/${newStation._id}`)
    } catch(err){
        console.log('err',err)
    }


  }

  return (
    <section className="my-library-panel overflow-hidden">
      <div className="scrollable-y">
        <div className="library-title flex row align-center m-0 w-100">
          <LibraryIcon />
          <h3>Your Library</h3>
        </div>
        {!showStation && <div className="create-list-container">
          <h4>Create your first playlist</h4>
          <h5>It's easy, we'll help you</h5>
          <button onClick={onClickBtn}>
            Create playlist
          </button>
        </div>}

        {showStation && <StationList stations={stations} />}
      </div>
    </section>
  );
}
