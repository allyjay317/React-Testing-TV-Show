import React, { useState, useEffect } from "react";
import Dropdown from "react-dropdown";
import parse from "html-react-parser";

import { fetchShow } from './api/fetchShow'

import { formatSeasons } from "./utils/formatSeasons";

import Episodes from "./components/Episodes";
import "./styles.css";
import Search from "./components/Search";

export default function App() {
  const [show, setShow] = useState(null);
  const [seasons, setSeasons] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState("");
  const episodes = seasons[selectedSeason] || [];
  const [search, setSearch] = useState('')

  useEffect(() => {

    fetchShow(search)
      .then(res => {
        setShow(res.data);
        setSeasons(formatSeasons(res.data._embedded.episodes));
        setSelectedSeason('')
      })
      .catch(err => {
        setShow(null)
      })
  }, [search]);

  const handleSelect = e => {
    setSelectedSeason(e.value);
  };

  if (!show) {
    return <div className='App'>
      <Search set={setSearch} />
      <h2>No Show yet, Search for one!</h2>
    </div>;
  }

  return (
    <div className="App">
      <Search set={setSearch} />
      <img className="poster-img" src={show.image.original} alt={show.name} />
      <h1>{show.name}</h1>
      <div data-testid='summary'>{parse(show.summary)}</div>
      <Dropdown
        options={Object.keys(seasons)}
        onChange={handleSelect}
        value={selectedSeason || "Select a season"}
        placeholder="Select an option"
      />
      <Episodes episodes={episodes} />
    </div>
  );
}
