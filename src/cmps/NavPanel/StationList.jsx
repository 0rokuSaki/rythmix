// import { Link } from "react-router-dom"
import { StationPreview } from "./StationPreview"

export function StationList({stations =[]}) {
  return (
    <ul className="station-list">
      {
        stations.map(station => <ul key={station._id}>
          <StationPreview station={station} />
        </ul>)
      }
    </ul>
  )
}

