"use client";
import ObjectUtil from "@/utils/ObjectUtil";
import React, {
  FormHTMLAttributes,
  FunctionComponent,
  useEffect,
  useState
} from "react";
import { useValidate } from "@/utils/useValidate";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { NextApiResponse } from "next";
import { useValidateContext } from "../admin/components/validateProvider";
import API from "@/utils/api";

interface ICBaseForm extends FormHTMLAttributes<HTMLFormElement> {
  validate_schema: any;
  url: string;
  name: string;
  method: string;
}

const CBaseForm: FunctionComponent<ICBaseForm> = ({
  children,
  validate_schema,
  url,
  name,
  method,
  ...props
}) => {
  const queryClient = useQueryClient();
  const { checkValidate } = useValidate();
  const { setError } = useValidateContext();
  const post = async (formData: FormData) => {
    console.log(formData);

    const response = await API({ url: url, body: formData, method });
    return response;
  };

  const mutation = useMutation({
    mutationFn: post,
    onSuccess: () => {
      if (typeof name === "string") {
        queryClient.invalidateQueries({ queryKey: [name] }); // this is for invalidation of query.
      }
    }
  });
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("asd");
    if (event.target instanceof HTMLFormElement) {
      const formData = new FormData(event.target);

      const fileInput = event.target.querySelector(
        'input[type="file"]'
      ) as HTMLInputElement;
      if (fileInput?.files && fileInput?.files[0]) {
        formData.append("file", fileInput.files[0]);
      }

      const data = ObjectUtil.formDataToJson(formData);
      console.log(data);
      let errors = checkValidate({
        data: data,
        validateSchema: validate_schema
      });

      if (Object.keys(errors).length > 0) {
        await setError(errors);
        const inputs = event.target.getElementsByClassName("ERROR");
        const my_element = inputs[0] as HTMLInputElement;
        if (inputs.length > 0 && typeof my_element.focus === "function") {
          my_element.focus();
        }
        return;
      } else {
        setError({});
      }

      mutation.mutate(formData);
    }
  };

  return (
    <>
      <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
        {children}
      </form>
    </>
  );
};

export default CBaseForm;
