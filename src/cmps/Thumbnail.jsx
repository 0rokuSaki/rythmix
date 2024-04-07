import { MusicNote } from "./icons/MusicNote";

export function Thumbnail({ url = "", alt = "" }) {
  return (
    <div className="thumbnail box-shadow-extra-bold square-ratio w-100 h-100 br-4">
      {url && <img src={url} alt={alt} />}
      {!url && <MusicNote />}
    </div>
  );
}
