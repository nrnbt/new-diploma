import { ButtonHTMLAttributes, FunctionComponent, useState } from "react";
import ModalLayout from "./modalLayout";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import Modal from "./modal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import API from "@/utils/api";

interface IPDeleteButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  isDelete: any;
  id: string;
}

const DeleteModal: FunctionComponent<IPDeleteButton> = ({ isDelete, id }) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const queryClient = useQueryClient();
  const post = async () => {
    const response = await API({
      url: `/${isDelete}/delete?id=${id}`,
      method: "DELETE"
    });
    return response;
  };

  const mutation = useMutation({
    mutationFn: post,
    onSuccess: () => {
      if (typeof name === "string") {
        queryClient.invalidateQueries({ queryKey: [isDelete] }); // this is for invalidation of query.
      }
    }
  });

  return (
    <Modal
      func={() => mutation.mutate()}
      isOpen={isOpen}
      setOpen={setOpen}
      type="delete"
      title="Delete item">
      <div className="flex flex-col items-center gap-y-6 text-center">
        <HiOutlineExclamationCircle className="text-7xl text-red-600" />
        <p className="text-lg text-gray-500 dark:text-gray-300">
          Are you sure you want to delete this item?
        </p>
      </div>
    </Modal>
  );
};

export default DeleteModal;
