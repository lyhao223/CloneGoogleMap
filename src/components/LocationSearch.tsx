import { Fragment, useState } from "react";
import { Place } from "../api/Places";
import { search } from "../api/search";

interface LocationSearchProps {
  onPlaceClick: (place: Place) => void;
}
const LocationSearch = ({ onPlaceClick }: LocationSearchProps) => {
  const [place, setPlace] = useState<Place[]>([]);
  const [term, setTerm] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = await search(term);
    setPlace(result);
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
      <h1 className="font-bold mt-6">Found Location</h1>
      <div className="grid grid-cols-[1fr_40px] gap-2 mt-2 items-center">
        {
          place.map((p)=>{
            return <Fragment key={p.id}>
              <p className="text-sm">{p.name}</p>
              <button className="bg-blue-500 text-white text-xs rounded font-bold px-1 py-1" onClick={()=>onPlaceClick(p)}>Go</button>
              <div className="border-b col-span-2 w-full"/>
            </Fragment>
          })
        }
      </div>
    </div>
  );
};

export default LocationSearch;
