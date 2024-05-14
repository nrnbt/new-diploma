"use client";
import {
  FunctionComponent,
  InputHTMLAttributes,
  SetStateAction,
  useEffect
} from "react";
import { PInput, PTextArea } from ".";
import { useValidateContext } from "@/app/admin/components/validateProvider";
import CustomInput from "@/app/admin/components/customInput";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import API from "@/utils/api";
import CustomDropdown from "@/app/admin/components/customDropdown";

interface IPFormInput extends InputHTMLAttributes<HTMLInputElement> {
  inputRef?: any;
  name: string;
  inputtype: string;
  label: string;
  listName: string;
  listId: string;
}

const PFormInput: FunctionComponent<IPFormInput> = ({
  label,
  name,
  inputtype,
  listName,
  listId,
  ...props
}) => {
  const context = useValidateContext();
  const queryClient = useQueryClient();
  const getList = async () => {
    const response = await API({
      url: `/${name}`
    });
    return response;
  };

  const mutation = useMutation({
    mutationFn: getList,
    onSuccess: () => {
      if (typeof name === "string") {
        queryClient.invalidateQueries({ queryKey: [name] });
      }
    }
  });
  useEffect(() => {
    if (name && inputtype === "dropdown") {
      mutation.mutate();
    }
  }, []);
  console.log(mutation?.data, listName, listId);
  const error = context ? context.error : null;
  return (
    <div className="w-full">
      {inputtype === "dropdown" ? (
        <CustomDropdown
          label={`${label}`}
          name={name}
          list={mutation?.data || []}
          listName={listName}
          listId={listId}
        />
      ) : (
        <CustomInput
          {...props}
          label={`${label}`}
          placeholder={name}
          name={name}
          className={`w-full ${
            error && Object.keys(error).includes(name) ? "ERROR" : ""
          }`}
        />
      )}
      {error && Object.keys(error).includes(name) && (
        <p className="absolute text-error">{error[name]}</p>
      )}
    </div>
  );
};

export default PFormInput;
