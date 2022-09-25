import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsArrowReturnLeft } from "react-icons/bs";
import { SearchData } from "../../../data/searchData";

export const SearchBar = () => {
  const [isSearch, SetIsSearch] = useState("");
  const [searchResult, setSearchResult] = useState(SearchData);
  const ApplyFilter = () => {
    const filter = SearchData.filter((value) => {
      if (isSearch === " ") {
        return value;
      } else {
        return value.productName.toString().toLowerCase().includes(isSearch);
      }
    });
    setSearchResult(filter);
  };
  return (
    <div className="relative flex flex-col">
      <BiSearch className="absolute top-1 right-2 h-5 w-5 text-gray-500" />
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => {
          SetIsSearch(e.target.value.toLowerCase());
        }}
        onInput={ApplyFilter}
        className="w-full rounded-md bg-neutral-900 py-1 pl-2 pr-8 font-inter font-normal text-gray-300 caret-gray-300 focus:outline-none focus:ring-1 focus:ring-pink-500"
      />
      {isSearch ? (
        <div className="absolute top-10 h-72 w-full rounded-md bg-neutral-900">
          {searchResult.map((value) => {
            return (
              <a
                href={value.link}
                key={value.productName}
                className="flex w-full items-center justify-between border-b border-neutral-700 p-2 font-inter font-medium text-gray-300 hover:bg-neutral-800"
              >
                {value.productName}
                <BsArrowReturnLeft />
              </a>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

