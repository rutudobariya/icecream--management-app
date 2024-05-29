import React from "react";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
// eslint-disable-next-line react/prop-types
export const ExportToExcel = ({ apiData, fileName }) => {
    const fileType =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";
    //   const fileExtension = ".csv";
      const exportToCSV = (apiData, fileName) => {
      const ws = XLSX.utils.json_to_sheet(apiData);
      const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
      const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
      const data = new Blob([excelBuffer], { type: fileType });
      FileSaver.saveAs(data, fileName + fileExtension);
    };
  
    return (

    <button onClick={() => exportToCSV(apiData, fileName)} className="btn btn-sm btn-success float-end">ExportinExcel <span className='bi bi-file-earmark-spreadsheet'></span></button>
    );
  };