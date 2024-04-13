import { stationService } from "../services/station.service"
import { useState } from "react"
import { Thumbnail } from "../cmps/Thumbnail"
import { CloseIcon } from "../cmps/icons/CloseIcon"

export function StationEdit({ show, onClose, station, onSave }) {
    const [title, setTitle] = useState(station.name)
    console.log(title);

    const handleSave = () => {
        const updatedStation = {
          ...station,
          name: title,
        }
        onSave(updatedStation)
        onClose()
    }

    if (!show) return null
  return (
    <section className="station-edit-modal">
        <div className="station-edit">
            <div className="title-edit-modal">
                <h1>Edit details</h1>
                <button className="close-button" onClick={onClose}><CloseIcon /></button>
            </div>
            <div className="body-edit-modal">
                <div className="image-station">
                    <Thumbnail />
                </div>
                <div className="title-station">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Name"
                    />
                </div>
                <div className="description-area">
                    <textarea placeholder="Add an optional description"></textarea>
                </div>
                <div className="save-button">
                    <button onClick={handleSave}>Save</button>
                </div>



            </div>
        </div>

    </section>
  )
}
