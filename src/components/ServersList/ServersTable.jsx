/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { useTable, useSortBy } from "react-table";
import createServersColumns from "../../utils/createServersColumns";
import { SERVERS_TABLE_INITIAL_STATE } from "../../config/constants";
import SortAscIcon from "../../assets/sort-asc.svg";
import SortDescIcon from "../../assets/sort-desc.svg";
import SortDefaultIcon from "../../assets/sort-default.svg";

function ServersTable() {
  const servers = useSelector((state) => state.servers.data);
  const columns = useMemo(createServersColumns, []);
  const initialState = SERVERS_TABLE_INITIAL_STATE;

  const { headerGroups, rows, prepareRow } = useTable(
    { columns, data: servers, ...initialState },
    useSortBy
  );

  return (
    <div className="servers__table">
      <table>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr key={headerGroup.getHeaderGroupProps().key}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  key={column.id}
                >
                  <div className="servers__header-wrapper">
                    {column.render("Header")}
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <img
                          alt=""
                          src={SortDescIcon}
                          className="servers__sort-icon"
                        />
                      ) : (
                        <img
                          alt=""
                          src={SortAscIcon}
                          className="servers__sort-icon"
                        />
                      )
                    ) : (
                      <img
                        alt=""
                        src={SortDefaultIcon}
                        className="servers__sort-icon"
                      />
                    )}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr key={row.id}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ServersTable;
