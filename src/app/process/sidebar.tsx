import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import CommentSection from "./comment";
import CDynamicForm from "../form/dynamicForm";
let json = [
  {
    label: "name",
    name: "name",
    type: "string",
    inputtype: "text",
    required: true,
    listName: "role_name",
    listId: "id"
  },
  {
    label: "studentId",
    name: "studentId",
    type: "number",
    inputtype: "number",
    required: true,
    listName: "role_name",
    listId: "id"
  },
  {
    label: "teacherId",
    name: "teacherId",
    type: "number",
    inputtype: "number",
    required: true,
    listName: "role_name",
    listId: "id"
  },

  {
    label: "diploma",
    name: "diploma",
    type: "file",
    inputtype: "file",
    required: true,
    listName: "role_name",
    listId: "id"
  }
];
export function SideBar() {
  return (
    <Tabs aria-label="Tabs with icons" className="flex flex-col" style="underline">
      <Tabs.Item active title="step 1" icon={HiUserCircle}>
        {localStorage?.getItem("role") === "STUDENT" ?(
        <CDynamicForm
          name="diploma"
          url="/diploma/create"
          json={json}
          method="POST"
        />) : 
        <CommentSection stepId={1} />
         }
      </Tabs.Item>
      <Tabs.Item disabled title ="step 2" icon={MdDashboard}>
        step 2
        <CommentSection stepId={1} />
      </Tabs.Item>
      <Tabs.Item disabled title="step 3" icon={HiAdjustments}>
        step 3
      </Tabs.Item>
      <Tabs.Item disabled title="step 4" icon={HiClipboardList}>
        step 4
      </Tabs.Item>
      <Tabs.Item disabled title="step 5">
        step 5
      </Tabs.Item>
    </Tabs>
  );
}
