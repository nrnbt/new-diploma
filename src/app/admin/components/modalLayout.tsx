import { Button, Modal } from "flowbite-react";
import { FaPlus } from "react-icons/fa";
import { HiPencilAlt, HiTrash } from "react-icons/hi";
import { ReactNode } from "react";
import { CForm } from "@/app/form/baseForm";

interface IModalLayout {
  type: "create" | "edit" | "delete";
  title: string;
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
  children: ReactNode;
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

const ModalLayout = ({
  type,
  title,
  isOpen,
  setOpen,
  children,
  validate_schema,
  name,
  url,
  method
}: IModalLayout) => {
  return (
    <>
      <Button
        onClick={() => setOpen(!isOpen)}
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
        <CForm
          method={method}
          name={name}
          validate_schema={validate_schema}
          url={url}>
          <Modal.Header className="border-b border-gray-200 !p-6 dark:border-gray-700">
            <strong>{title}</strong>
          </Modal.Header>
          <Modal.Body>{children}</Modal.Body>
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
              <Button color="blue" type="submit">
                {title}
              </Button>
            )}
          </Modal.Footer>
        </CForm>
      </Modal>
    </>
  );
};

export default ModalLayout;
