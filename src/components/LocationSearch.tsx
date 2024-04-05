import { useState } from "react";
import { Place } from "../api/Places";

interface LocationSearchProps {
  onPlaceClick: (place: Place) => void;
}
const LocationSearch = ({ onPlaceClick }: LocationSearchProps) => {
  const [place, setPlace] = useState<Place[]>([]);
  const [term, setTerm] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("searching for", term);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="font-bold" htmlFor="term">
          Search Location
        </label>
        <input
          className="border border-gray-300 rounded-md focus:border-indigo-500 px-4 py-2 w-full"
          id="term"
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </form>
    </div>
  );
};

export default LocationSearch;
