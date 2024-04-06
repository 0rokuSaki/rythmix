import { Link } from "react-router-dom"
import { StationImage } from "../StationImage"
export function StationPreview({station}) {
  return (
    <article className="station-preview">
        <Link to={`/station/${station.id}`}>
            <StationImage url={station.songs[0]?.imgUrl} size="smaill" />
            <h2>{station.name}</h2>
            <h4>Playlist • {station.createdBy.fullname} </h4>

        </Link>

    </article>
  )
}

