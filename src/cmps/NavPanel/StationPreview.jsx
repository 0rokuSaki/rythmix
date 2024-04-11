import { Link } from "react-router-dom"
import { StationImage } from "../StationImage"
import { TrashIcon } from "../icons/TrashIcon"
import { Thumbnail } from "../Thumbnail"
export function StationPreview({station, isActiveId, onClick }) {
  
  const handleClick = (e) => {
    e.stopPropagation()
    onClick(station._id)
  }
  return (
    <article className={`station-preview station-hover  ${isActiveId ? 'station-active' : ''} bg-transparent`} onClick={() => onClick(station._id)}>
        <Link to={`/station/${station._id}`} onClick={handleClick}>
            <div className="station-image-container">
                <Thumbnail url={station.songs[0]?.imgUrl} />
            </div>
            <div className="station-info">
                <h2>{station.name}</h2>
                <h4>Playlist • {station.createdBy.fullname} </h4>
            </div>
            {/* <div className= "remove-icon">
              <Link to ="/station">
                <TrashIcon onClick={() => onRemoveStation(station._id)} />
              </Link>
            </div> */}
        </Link>

    </article>
  )
}

