"use client";

import React from "react";
import moment from "moment";
import { Checkbox, Label, Table } from "flowbite-react";
import Actions from "@/partials/actions/actions";
import EmptyState from "./emptyState";
import TableLoader from "./loader/tableLoader";
import Pagination from "./pagination";

interface ICTable<T> {
  datas: Array<T>;
  heads: Array<any>;
  name: string;
  actions?: boolean;
  isLoading?: boolean;
  json: Array<{
    label: string;
    name: string;
    type: string;
    inputtype: string;
    required: boolean;
  }>;
}

const CTable = <T extends unknown>({
  datas,
  heads,
  name,
  actions,
  json,
  isLoading
}: ICTable<T>): JSX.Element => {
  console.log(datas);
  return (
    <>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow"></div>
            <Table className="w-full rounded-xl border-collapse overflow-hidden shadow-[0 0 20px rgba(0,0,0,0.5)] ">
              <Table.Head className="bg-[rgba(0,0,0,0.2)]">
                <Table.HeadCell>
                  <Label htmlFor="select-all" className="sr-only">
                    Select all
                  </Label>
                  <Checkbox id="select-all" name="select-all" />
                </Table.HeadCell>
                {heads?.map((head, index) => (
                  <Table.HeadCell
                    className="p-4 bg-[rgba(255,255,255,0.2)] text-left "
                    key={index}
                    colSpan={head.colspan}>
                    {head.label}
                  </Table.HeadCell>
                ))}
                {actions && (
                  <Table.HeadCell className="p-4 bg-[rgba(255,255,255,0.2)] text-left ">
                    Action
                  </Table.HeadCell>
                )}
              </Table.Head>
              <Table.Body>
                {isLoading ? (
                  <TableLoader />
                ) : datas?.length > 0 ? (
                  datas?.map((data, index) => (
                    <Table.Row
                      className=" hover:bg-[rgba(255,255,255,0.3)] tr-pseudo"
                      key={index}>
                      <Table.Cell className="w-4 p-4">
                        <div className="flex items-center">
                          <input
                            id="checkbox-20"
                            aria-describedby="checkbox-1"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 bg-gray-50 focus:ring-4 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                          />
                          <label htmlFor="checkbox-20" className="sr-only">
                            checkbox
                          </label>
                        </div>
                      </Table.Cell>
                      {heads?.map((head, idx) => (
                        <Table.Cell
                          key={idx}
                          className="p-4 relative bg-[rgba(255,255,255,0.2)] ">
                          <div>
                            {head.name === "created_at" &&
                            (data as any)[head.name]
                              ? moment((data as any)[head.name]).format(
                                  "YYYY-MM-DD HH:mm:ss"
                                )
                              : (data as any)[head.name] || "-"}
                          </div>
                        </Table.Cell>
                      ))}
                      <Table.Cell className="w-4 p-4">
                        <Actions
                          isEdit={name}
                          action_id={(data as any)?.id}
                          name={name}
                          url={`/${{ name }}/create`}
                          validate_schema={json}
                          method="PUT"
                        />
                      </Table.Cell>
                    </Table.Row>
                  ))
                ) : (
                  <Table.Row>
                    <Table.Cell colSpan={6} className="p-0">
                      <EmptyState />
                    </Table.Cell>
                  </Table.Row>
                )}
              </Table.Body>
            </Table>
          </div>
        </div>
      </div>
      <Pagination />
    </>
  );
};

export default CTable;
