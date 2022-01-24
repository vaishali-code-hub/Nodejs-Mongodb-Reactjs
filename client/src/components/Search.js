import React, { useState } from "react";
import SearchList from "../components/SearchList";

export default function Search({ products }) {
  const [searchField, setSearchField] = useState("");

  var filteredPersons = products.filter((person) => {
    return person.Handle.toLowerCase()
      .replaceAll("-", " ")
      .includes(searchField.toLowerCase())
      ? true
      : false;
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  function searchList() {
    console.log("################" + filteredPersons.length);
    return <SearchList filteredPersons={filteredPersons} />;
  }

  return (
    <section className="garamond">
      <div className="navy georgia ma0 grow">
        <h2 className="f2">Search your course</h2>
        <h1>{products.length}</h1>
      </div>
      <div className="pa2">
        <input
          className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
          type="search"
          placeholder="Search People"
          onChange={handleChange}
        />
      </div>
      {searchList()}
    </section>
  );
}
