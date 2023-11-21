import React, { useMemo } from "react";
import { useTable, useSortBy, usePagination } from "react-table";
import MockData from "./MOCK_DATA.json";
import { COLUMNS } from "./columns";
import "./BasicTable.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretUp,
  faCaretDown,
  faForward,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";

const BasicTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MockData, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    prepareRow,
    // handleEdit,
    // handleDelete,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy,
    usePagination
  );

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroups) => (
            <tr {...headerGroups.getHeaderGroupProps()}>
              {headerGroups.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span className="ml-3">
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <FontAwesomeIcon icon={faCaretUp} />
                      ) : (
                        <FontAwesomeIcon icon={faCaretDown} />
                      )
                    ) : (
                      ""
                    )}
                  </span>
                </th>
              ))}
              <th>
                <h4>Action</h4>
              </th>
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}
                   
                    </td>
                    
                  );
                })}
                <td>
                  <div className="buttons">
                    <div className="edit">
                      <button onClick={null} className="btn btn-edit">
                        <i className="bi bi-pencil"></i>
                      </button>
                    </div>
                    <div className="delete">
                      <button onClick={null} className="btn btn-delete ">
                        <i className="bi bi-trash-fill"></i>
                      </button>
                    </div>
                  </div>
                </td>
                
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="buttons">
        <div className="backward">
          <button onClick={() => previousPage()}>
            <FontAwesomeIcon icon={faBackward} className="btn" />
          </button>
        </div>
        <div className="forward">
          <button onClick={() => nextPage()}>
            <FontAwesomeIcon icon={faForward} className="btn" />
          </button>
        </div>
      </div>
    </>
  );
};

export default BasicTable;
