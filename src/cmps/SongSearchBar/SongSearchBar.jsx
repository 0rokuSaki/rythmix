import { SearchIcon } from "../icons/SearchIcon";

export function SongSearchBar() {
  return (
    <section className="song-search-bar">
      <hr className="my-16" />
      <h3 className="fs20">Let's find something for your playlist</h3>
      <form>
        <div className="input-wrapper flex row align-center br-4 overflow-hidden">
          <SearchIcon />
          <input className="bg-transparent border-none font" type="text" placeholder="Search for songs" />
        </div>
      </form>
    </section>
  );
}
