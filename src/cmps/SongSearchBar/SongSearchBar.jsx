import { useEffect, useState } from "react";
import axios from "axios";

import { SearchIcon } from "../icons/SearchIcon";
import { SearchResultsList } from "./SearchResultsList";
import { utilService } from "../../services/util.service";

export function SongSearchBar() {
  const [songs, setSongs] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const maxResults = 5;
    debounceSearch(query, maxResults);
  }, [query]);

  /**
   * Searches for videos on YouTube based on the provided query string.
   * @param {string} query - The search query string.
   * @param {number} maxResults - The maximum number of search results to retrieve.
   * @returns {Promise<Array<{title: string, videoId: string}>>} - A Promise that resolves with an array of search results, each containing title and videoId.
   */
  async function searchVideos(query, maxResults) {
    if (query) {
      // Base URL for YouTube Data API
      const base_url = "https://www.googleapis.com/youtube/v3/search";

      try {
        // Define parameters for the request
        const params = {
          key: __API_KEY__,
          part: "snippet", // Specifies the snippet resource properties that the API response will include
          q: query, // The search query string
          type: "video", // Restricts the search results to only include videos
          maxResults: maxResults, // Maximum number of results to return
        };

        // Make the request to the API using Axios and await the response
        const response = await axios.get(base_url, { params });

        // Extract information from the response
        const results = response.data.items.map((item) => ({
          title: item.snippet.title,
          id: item.id.videoId,
          imgUrl: item.snippet.thumbnails.medium.url,
        }));

        return results;
      } catch (error) {
        console.error("Error:", error);
      }
    }
    return [];
  }

  const debounceSearch = utilService.debounce(async (query, maxResults) => {
    const searchResult = await searchVideos(query, maxResults);
    setSongs(searchResult);
  }, 500);

  return (
    <section className="song-search-bar">
      <hr className="my-16" />
      <h3 className="fs20">Let's find something for your playlist</h3>
      <form>
        <div className="input-wrapper flex row align-center br-4 overflow-hidden box-shadow-medium">
          <SearchIcon />
          <input
            className="bg-transparent border-none font"
            type="text"
            placeholder="Search for songs"
            value={query}
            onChange={(ev) => setQuery(ev.target.value)}
          />
        </div>
      </form>
      {!!songs.length && <SearchResultsList songs={songs} />}
      {!songs.length && query && <div className="no-results-msg w-100 flex column align-center justify-center">
        <span className="fs24 font-bold">No results found for {`"${query}"`}</span>
        <span className="fs14">Please make sure your words are spelled correctly, or use fewer or different keywords.</span>
      </div> }
    </section>
  );
}
