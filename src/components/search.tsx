"use client";
import Image from "next/image";
import { useState } from "react";

import SearchSvg from "@/assets/images/general/search.svg";
import { Input } from "@/components/ui/input";

interface SearchProps extends React.HTMLAttributes<HTMLDivElement> {
  onClickSearchBtn?: () => void;
}

const Search = ({ onClickSearchBtn, className }: SearchProps) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className={`relative w-full select-none ${className}`}>
      <Input
        className="h-full text-base p-3.5 pl-11 bg-mm-cement rounded-lg border-0"
        type="search"
        placeholder="Я ищу..."
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
      />
      <button
        className="flex absolute top-1/2 transform -translate-y-1/2 left-4 items-center justify-center bg-transparent border-0 outline-0 cursor-pointer"
        onClick={onClickSearchBtn}
      >
        <Image src={SearchSvg} alt={"иконка поиска"} width={18} height={18} />
      </button>
    </div>
  );
};

export default Search;
