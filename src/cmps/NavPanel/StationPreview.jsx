import { Link } from "react-router-dom"
import { StationImage } from "../StationImage"
import { TrashIcon } from "../icons/TrashIcon"
export function StationPreview({station}) {
  return (
    <article className="station-preview ">
        <Link to={`/station/${station._id}`}>
            <div className="station-image-container">
                <StationImage url={station.songs[0]?.imgUrl} size="small" />
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

