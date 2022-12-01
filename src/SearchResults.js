import React from "react";
import "./searched.css";
import SearchedItem from "./SearchedItem";

const SearchResults = ({
  searchedItems,
  setSelectedId,
  isLoading,
  setSelectedRecipe,
}) => {
  return (
    <div className="searchedList">
      {isLoading && <p>Its loading....</p>}

      {!isLoading && (
        <>
          {" "}
          <h1>searchd results</h1>
          {searchedItems.map((item) => (
            <SearchedItem
              key={item.id}
              setSelectedRecipe={setSelectedRecipe}
              searchedItem={item}
              setSelectedId={setSelectedId}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default SearchResults;
