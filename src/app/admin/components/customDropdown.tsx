"use client";
import { Dropdown, Label } from "flowbite-react";
import { HTMLInputTypeAttribute, InputHTMLAttributes, useState } from "react";

interface ICustomDropdown {
  label: string;
  name: string;
  list: Array<any>;
  listName: string;
  listId: string;
}

const CustomDropdown = ({
  label,
  name,
  list = [],
  listId,
  listName
}: ICustomDropdown) => {
  const [value, setValue] = useState("");
  console.log(listId, listName);
  return (
    <div>
      <Label htmlFor={label}>{label}</Label>
      <input type="hidden" name={name} value={value} />
      <Dropdown label={value !== "" ? value : label} value={value}>
        {list?.length > 0 &&
          list?.map((e, i) => (
            <Dropdown.Item onChange={() => setValue(e[`${listId}`])} key={i}>
              {e[`${listName}`]}
            </Dropdown.Item>
          ))}
      </Dropdown>
    </div>
  );
};

export default CustomDropdown;
