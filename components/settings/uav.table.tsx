"use client"
import React, { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  getKeyValue,
} from "@nextui-org/react";
import { UAVS } from "./data";

interface ITableUAV {
  uavs: UAVS[];
  setIsModalOpen: (set: boolean) => void;
  setUavData: (uav: UAVS) => void;
}

export default function TableUAV({ setIsModalOpen, setUavData, uavs}: ITableUAV) {


  const [page, setPage] = React.useState(1);
  const rowsPerPage = 4;

  const pages = Math.ceil(uavs.length / rowsPerPage);

  // Move the onRowAction function outside of the useMemo callback
  const onRowAction = React.useCallback((key: React.Key) => {
    const selectedRow = uavs.find((item) => item.id == key);
    if (selectedRow) {
      setUavData(selectedRow);
      setIsModalOpen(true);
    }
  }, [uavs, setIsModalOpen]);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return uavs.slice(start, end);
  }, [page, uavs]);


  return (
    <Table
      selectionMode="multiple"
      selectionBehavior="toggle"
      onRowAction={(key) => {
        onRowAction(key);
      }}
      aria-label="uav table"
      bottomContent={
        <div className="flex w-full justify-center">
          <Pagination
            isCompact
            showControls
            showShadow
            color="default"
            page={page}
            total={pages}
            onChange={(page) => setPage(page)}
          />
        </div>
      }
      classNames={{
        wrapper: "min-h-[222px]",
      }}
    >
      <TableHeader>
        <TableColumn key="topic">TOPIC</TableColumn>
        <TableColumn key="stream_url">STREAM</TableColumn>
      </TableHeader>
      <TableBody items={items}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
