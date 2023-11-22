import { ColDef, GridOptions } from "@ag-grid-community/core";

import { rowData, WebFramework } from "./rowData";
import { columnDefs } from "./columnDefs";

export const gridOptions: GridOptions<WebFramework> = {
  defaultColDef: {
    resizable: true,
    sortable: true,
    editable: true,
    filter: true,
    floatingFilter: true
  },
  columnDefs: columnDefs,
  rowData: rowData,
  sideBar: true,
  suppressMenuHide: true,
  enableRangeSelection: true,
  statusBar: {
    statusPanels: [
      { statusPanel: "agTotalRowCountComponent", align: "left" },
      { statusPanel: "agFilteredRowCountComponent" },
      {
        key: "Center Panel",
        statusPanel: "AdaptableStatusPanel",
        align: "center"
      }
    ]
  },
  processPivotResultColDef: (colDef: ColDef) => {
    colDef.filter = "agNumberColumnFilter";
    colDef.floatingFilter = true;
  }
};
