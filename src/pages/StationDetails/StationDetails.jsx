// React
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

// Components
import { StationImage } from "../../cmps/StationImage";

// Services
import { stationService } from "../../services/station.service";

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

  if (!station) return <div>Loading...</div>
  return (
    <section className="station-details ph-20">
      <header className="flex row align-center gap-20">
        <StationImage url={station.songs[0].imgUrl} size="large" />
        <div className="station-info-wrapper flex column">
          <h6 className="font-medium fs16">Playlist</h6>
          <h2 className="font-black fs70">My Playlist</h2>
          <Link>User Name</Link>
        </div>
      </header>
      <main>
        <ul>

        </ul>
      </main>
    </section>
  );
}
