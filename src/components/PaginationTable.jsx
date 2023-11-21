// import React, { useMemo } from "react";
// import { useTable , usePagination} from "react-table";
// import MockData from "./MOCK_DATA.json";
// import { COLUMNS } from "./columns";
// import "./BasicTable.css";

// const PaginationTable = () => {
//   const columns = useMemo(() => COLUMNS, []);
//   const data = useMemo(() => MockData, []);

//   const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow } =
//     useTable({
//       columns,
//       data,
//     },
//     usePagination
//     );

//   return (
//     <table {...getTableProps()}>
//       <thead>
//         {headerGroups.map((headerGroups) => (
//           <tr {...headerGroups.getHeaderGroupProps()}>
//             {headerGroups.headers.map((column) => (
//               <th {...column.getHeaderProps()}>{column.render("Header")}</th>
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
//   );
// };

// export default PaginationTable;
