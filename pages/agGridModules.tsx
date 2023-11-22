import { Module } from "@ag-grid-community/core";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { SideBarModule } from "@ag-grid-enterprise/side-bar";
import { ColumnsToolPanelModule } from "@ag-grid-enterprise/column-tool-panel";
import { FiltersToolPanelModule } from "@ag-grid-enterprise/filter-tool-panel";
import { StatusBarModule } from "@ag-grid-enterprise/status-bar";
import { MenuModule } from "@ag-grid-enterprise/menu";
import { RangeSelectionModule } from "@ag-grid-enterprise/range-selection";
import { RichSelectModule } from "@ag-grid-enterprise/rich-select";
import { ExcelExportModule } from "@ag-grid-enterprise/excel-export";
import { RowGroupingModule } from "@ag-grid-enterprise/row-grouping";
import { ClipboardModule } from "@ag-grid-enterprise/clipboard";
import { SparklinesModule } from "@ag-grid-enterprise/sparklines";
import { ServerSideRowModelModule } from "@ag-grid-enterprise/server-side-row-model";
import { ViewportRowModelModule } from "@ag-grid-enterprise/viewport-row-model";
import { MasterDetailModule } from "@ag-grid-enterprise/master-detail";

export const agGridModules: Module[] = [
  ClientSideRowModelModule,
  SideBarModule,
  ColumnsToolPanelModule,
  FiltersToolPanelModule,
  StatusBarModule,
  MenuModule,
  RangeSelectionModule,
  RichSelectModule,
  ExcelExportModule,
  RowGroupingModule,
  ClipboardModule,
  SparklinesModule,
  ServerSideRowModelModule,
  ViewportRowModelModule,
  MasterDetailModule,
];
