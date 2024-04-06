// import { Link } from "react-router-dom"
import { StationPreview } from "./StationPreview"

export function StationList({stations =[]}) {
  return (
    <ul className="station-list m-0 p-0">
      {
        stations.map(station => <ul className="station-map m-0 p-0" key={station._id}>
          <StationPreview station={station} />
        </ul>)
      }
    </ul>
  )
}

