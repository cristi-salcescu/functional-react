import React, { useState } from "react";
import "./ProductSearch.css";

export default function ProductSearch({onSearch}) {
    const [query, setQuery] = useState({text: ""});

    function updateQuery(e){
        const query = Object.freeze({ text: e.target.value });
        setQuery(query);
    }

    function triggerSearch(e){
        e.preventDefault();
        onSearch(query);
    }

    return (
    <form className="search-form" onSubmit={triggerSearch}>
        <input
            value={query.text}
            onChange={updateQuery}
            placeholder="Product"
            type="text"
            name="text"
        />
        <button type="search" className = "search-button" onClick={triggerSearch}>Search</button>
    </form>
    );
}