"use client";
import { FunctionComponent, useEffect, useState } from "react";
import { PButton, PFormInput } from "@/partials";
import CBaseForm from "./form";
import ModalLayout from "../admin/components/modalLayout";
import { ValidateWrapper } from "../admin/components/validateProvider";
import { CForm } from "./baseForm";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import API from "@/utils/api";

interface ICDynamicForm {
  json: Array<{
    label: string;
    name: string;
    type: string;
    inputtype: string;
    required: boolean;
    listName: string;
    listId: string;
  }>;
  name: string;
  url: string;
  method: string;
  action_id?: string;
}

const CDynamicForm: FunctionComponent<ICDynamicForm> = ({
  json,
  name,
  url,
  method,
  action_id
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const queryClient = useQueryClient();

  async function post() {
    try {
      const response = await API({
        url: action_id ? `/${name.toLowerCase()}/${action_id}` : url,
        method: "GET"
      });
      return response;
    } catch (error: any) {
      throw new Error(error.response.data.message || "An error occurred");
    }
  }
  const mutation = useMutation({ mutationFn: post });

  useEffect(() => {
    // Call mutation when action_id is provided
    if (action_id && isOpen) {
      mutation.mutate();
    }
  }, [action_id, isOpen]);
  console.log(json);
  return (
    <div className="py-4 w-full ">
      <ModalLayout
        type="create"
        title={method === "POST" ? "Create " + name : "Update " + name}
        isOpen={isOpen}
        setOpen={setIsOpen}
        method={method}
        name={name}
        validate_schema={json}
        url={url}>
        {json?.map((element, index) => (
          <PFormInput
            value={
              { ...mutation?.data, ...mutation?.data?.user }[`${element.name}`]
            }
            key={index}
            {...element}
          />
        ))}
      </ModalLayout>
    </div>
  );
};

export default CDynamicForm;
