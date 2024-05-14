import { Label, TextInput } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";

interface ISearch {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  placeholder: string;
}

const Search = ({ value, setValue, placeholder }: ISearch) => {
  return (
    <div className="mb-4 sm:mb-0 sm:pr-3">
      <Label htmlFor="search" className="sr-only">
        Search
      </Label>
      <div className="relative mt-1 lg:w-64 xl:w-96">
        <TextInput
          id="search"
          name="search"
          placeholder={`Search for ${placeholder}`}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
