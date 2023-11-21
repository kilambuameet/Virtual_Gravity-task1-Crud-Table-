// import React, { useMemo } from "react";
// import { useTable , useSortBy, usePagination } from "react-table";
// import MockData from "./MOCK_DATA.json";
// import { COLUMNS } from "./columns";
// import "./BasicTable.css";

// const SortingTable = () => {
//   const columns = useMemo(() => COLUMNS, []);
//   const data = useMemo(() => MockData, []);

//   const { getTableProps, getTableBodyProps, headerGroups, page,nextPage,previousPage, prepareRow } =
//     useTable({
//       columns,
//       data,
//     },
//     useSortBy,
//     usePagination
//     );

//   return (
//     <>
//     <table {...getTableProps()}>
//       <thead>
//         {headerGroups.map((headerGroups) => (
//           <tr {...headerGroups.getHeaderGroupProps()}>
//             {headerGroups.headers.map((column) => (
//               <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render("Header")}
//               <span>
//                 {column.isSorted ? (column.isSortedDesc ? '' : ''  ) : ''}
//               </span>
//               </th>
//             ))}
//           </tr>
//         ))}
//       </thead>
//       <tbody {...getTableBodyProps()}>
//         {page.map((row) => {
//           prepareRow(row);
//           return (
//             <tr {...row.getRowProps()}>
//               {row.cells.map((cell) => {
//                 return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
//               })}
//             </tr>
//           );
//         })}
//       </tbody>
//     </table>
//     <div>
//         <button onClick={() => nextPage()}>NextPage</button>
//         <button onClick={() =>previousPage()}>PreviousPage</button>
//     </div>
//     </>
//   );
// };

// export default SortingTable;
