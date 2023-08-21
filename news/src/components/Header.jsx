import React from "react";
import { useSearchQuery } from "../context/NewsContext";
import { BsSearch } from "react-icons/bs";
const Header = () => {
  const { query, handleChange, handleSubmit } = useSearchQuery();
  // console.log(query);
  return (
    <div className=" bg-gray-950 border-2 border-zinc-600 rounded-full lg:mx-64 mx-2 px-6 text-white flex items-center justify-between py-5 mb-4">
      <div className=" uppercase text-lg font-bold">newzz</div>
      <div>
        <form onSubmit={handleSubmit} className="relative">
          <input
            placeholder="Search"
            onChange={handleChange}
            value={query}
            className="px-4 w-40 rounded-2xl py-[6px] bg-slate-800 focus:outline-none "
          />
          <BsSearch
            className="absolute top-[10px] right-3 cursor-pointer"
            type="submit"
            onClick={handleSubmit}
          />
        </form>
      </div>
    </div>
  );
};

export default Header;
