// React
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

// Components
import { StationImage } from "../../cmps/StationImage";
import { SongList } from "../../cmps/SongList/SongList";

// Services
import { stationService } from "../../services/station.service";
import { SongSearchBar } from "../../cmps/SongSearchBar/SongSearchBar";

export function StationDetails() {
  const [station, setStation] = useState(null);
  const params = useParams();

  useEffect(() => {
    loadStation();
  }, [params.stationId]);

  async function loadStation() {
    try {
      const station = await stationService.getById(params.stationId);
      setStation(station);
    } catch (err) {
      console.log("Error loading station", err);
    }
  }

  if (!station) return <div>Loading...</div>;
  const containsSongs = !!station.songs.length;
  return (
    <section className="station-details">
      <header className="station-details-header flex row align-center gap-20">
        <StationImage url={station.songs[0]?.imgUrl} size="large" />
        <div className="station-info-wrapper flex column">
          <h6 className="font-medium">Playlist</h6>
          <h2 className="font-black">{station.name}</h2>
          <h6 className="fs18">{station.createdBy.fullname}</h6>
        </div>
      </header>
      <main>
        {containsSongs && <SongList songs={station.songs} />}
        {!containsSongs && <SongSearchBar />}
      </main>
    </section>
  );
}
