"use client";
import { useKBar } from "kbar";
import React from "react";

const SearchInput = () => {
  const { query } = useKBar();
  const toggleKBar = () => {
    query.toggle();
  };
  return (
    <input
      type="search"
      readOnly
      onClick={toggleKBar}
      placeholder="Search"
      className="w-full rounded-lg cursor-pointer dark:bg-gray-900 bg-gray-100 border px-2 py-2 text-sm focus:outline-none"
    />
  );
};

export default SearchInput;
