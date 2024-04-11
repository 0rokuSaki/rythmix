// React
import { useNavigate } from "react-router";
import { useState,useEffect } from "react";

// Components
import { LibraryIcon } from "../icons/LibraryIcon";
import { DeleteIcon } from "../icons/DeleteIcon";

// Services
import { stationService } from "../../services/station.service";
import { StationList } from "./StationList";
import { RclickModal } from "../RclickModal";
import { TrashIcon } from "../icons/TrashIcon";
import { ContextMenu } from "../ContextMenu";
import { AddStationIcon } from "../icons/AddStationIcon";

export function MyLibraryPanel() {

  const iconsSvg=[TrashIcon]
  const listOfOptions =['Delete','Edit']

  const navigate =useNavigate()
  const [stations, setStations] = useState([])
  const [isActiveId, setIsActiveId] = useState(null)
  const [contextMenu, setContextMenu] = useState(null)

  const handleContextMenu = (event, station) => {

    event.preventDefault()
    setContextMenu({
      isVisible: true,
      x: event.clientX,
      y: event.clientY,
      station: station,
    })
  }
  
  useEffect(() => {
    loadStations()
  },[])
  
  useEffect(() => {
    document.addEventListener('click', handleCloseContextMenu)
    return () => {
      document.removeEventListener('click', handleCloseContextMenu)
    }
  }, [])
  
  async function loadStations(){
    try {
      const stations = await stationService.query()
      setStations(stations)
    } catch (error) {
      console.log('err',err)
    }
  }
  
  async function onAddStation(){
    const station = stationService.getEmptyStation()
    station.name =`My Playlist #${stations.length+1}`
    try {
      const newStation =await stationService.save(station)
      setStations(prevStations => [...prevStations, newStation] )
      setIsActiveId(newStation._id)
      navigate(`/station/${newStation._id}`)
    } catch(err){
      console.log('err',err)
    }
    
  }

  const handleCloseContextMenu = () => {
    setContextMenu(null)
  }

  async function handleRemoveStation (stationId){
    try {
      await stationService.remove(stationId)
      setStations(prevStations => prevStations.filter(station => station._id !== stationId))
    } catch (err) {
      console.error('Error removing station:', err)
      
    }
    
  }

  const handleStationClick = (id) => {
    setIsActiveId(id)
  }
  
  return (
    <section className="my-library-panel overflow-hidden">
      <div className="scrollable-y p-16">
        <div className="library-title flex row align-center m-0 w-100">
          <LibraryIcon />
          <h3>Your Library</h3>
          <AddStationIcon onClick={onAddStation} />
        </div>
        {!stations && ( <div className="create-list-container w-100">
          <h4>Create your first playlist</h4>
          <h5>It's easy, we'll help you</h5>
          <button onClick={onAddStation}>
            Create playlist
          </button>
        </div>)}
        {stations &&( <StationList 
                stations={stations} 
                isActiveId={isActiveId}
                onStationClick={handleStationClick}
                onContextMenu={handleContextMenu} />)}
      </div>
      {contextMenu && (
      <ContextMenu
        x={contextMenu.x}
        y={contextMenu.y}
        onEdit={() => handleEditStation(contextMenu.station._id)}
        onRemove={() => handleRemoveStation(contextMenu.station._id)}
      />
    )}
    </section>

  )


}
