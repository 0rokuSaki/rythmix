import { Link } from "react-router-dom";
import { StationImage } from "../../cmps/StationImage";

export function StationDetails() {
  return (
    <section className="station-details">
      <header className="flex row align-center gap-20 ph-20">
        <StationImage size="large" />
        <div className="station-info-wrapper flex column">
          <h6 className="font-regular fs16">Playlist</h6>
          <h2 className="font-bold fs70">My Playlist</h2>
          <Link>User Name</Link>
        </div>
      </header>
      <main>
        <ul></ul>
      </main>
    </section>
  );
}
