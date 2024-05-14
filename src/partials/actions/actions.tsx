import { ButtonHTMLAttributes, FunctionComponent, useState } from "react";
import Link from "next/link";
import CDynamicForm from "@/app/form/dynamicForm";
import DeleteModal from "@/app/admin/components/deleteModal";

interface IActions extends ButtonHTMLAttributes<HTMLButtonElement> {
  isEdit: string;
  action_id: string | number;
  validate_schema: Array<{
    label: string;
    name: string;
    type: string;
    inputtype: string;
    required: boolean;
  }>;
  name: string;
  url: string;
  method: string;
}

const Actions: FunctionComponent<IActions> = ({
  isEdit,
  validate_schema,
  name,
  url,
  method,
  action_id
}) => {
  return (
    <div className="flex items-center gap-x-3 whitespace-nowrap">
      <CDynamicForm
        method={method}
        name={name}
        json={validate_schema as any}
        url={url}
        action_id={action_id as string}
      />
      <DeleteModal isDelete={isEdit} id={action_id as string} />
    </div>
  );
};

export default Actions;
