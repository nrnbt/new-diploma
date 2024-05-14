import { Button, Modal } from "flowbite-react";
import { FaPlus } from "react-icons/fa";
import { HiPencilAlt, HiTrash } from "react-icons/hi";
import { ReactNode } from "react";

interface IModalLayout {
  type: "create" | "edit" | "delete";
  title: string;
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
  children: ReactNode;
  func?: Function;
}

const CModal = ({
  type,
  title,
  isOpen,
  setOpen,
  children,
  func
}: IModalLayout) => {
  return (
    <>
      <Button
        onClick={() => (func ? func() : setOpen(!isOpen))}
        color={type === "delete" ? "failure" : "blue"}>
        {type === "delete" ? (
          <HiTrash className="mr-3 text-lg" />
        ) : type === "edit" ? (
          <HiPencilAlt className="mr-3 text-lg" />
        ) : (
          <FaPlus className="mr-3 text-sm" />
        )}
        {title}
      </Button>
      <Modal onClose={() => setOpen(false)} show={isOpen}>
        <Modal.Header className="border-b border-gray-200 !p-6 dark:border-gray-700">
          <strong>{title}</strong>
        </Modal.Header>
        <Modal.Body>
          <form>{children}</form>
        </Modal.Body>
        <Modal.Footer className="flex justify-end">
          {type === "delete" ? (
            <>
              <Button color="failure" onClick={() => setOpen(false)}>
                Yes, I{"'"}m sure
              </Button>
              <Button color="gray" onClick={() => setOpen(false)}>
                No, cancel
              </Button>
            </>
          ) : (
            <Button color="blue" onClick={() => setOpen(false)}>
              {title}
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CModal;
