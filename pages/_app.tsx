import * as React from "react";
import { useState } from "react";
import AdaptableReact, {
  AdaptableApi,
  AdaptableOptions,
  AdaptableReadyInfo,
} from "@adaptabletools/adaptable-react-aggrid";

import { AgGridReact } from "@ag-grid-community/react";
import { GridOptions } from "@ag-grid-community/core";

// import adaptable css and themes
import "@adaptabletools/adaptable-react-aggrid/base.css";
import "@adaptabletools/adaptable-react-aggrid/themes/light.css";
import "@adaptabletools/adaptable-react-aggrid/themes/dark.css";
// import aggrid themes (using Balham theme)
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-balham.css";

// import "./styles.css";

import { adaptableOptions } from "./adaptableOptions";
import { onAdaptableReady } from "./onAdaptableReady";
import { gridOptions } from "./gridOptions";
import { agGridModules } from "./agGridModules";
import { WebFramework } from "./rowData";
const App: React.FunctionComponent = () => {
  const adaptableApiRef = React.useRef<AdaptableApi>();

  const [adaptOptions, setAdaptOptions] = useState<
    AdaptableOptions<WebFramework>
  >({
    ...adaptableOptions,
    stateOptions: {
      loadState: () => Promise.resolve({}),
      persistState: () => Promise.resolve(),
      ...adaptableOptions.stateOptions,
    },
  });
  const [agGridOptions, setAgGridOptions] = useState<GridOptions>(gridOptions);

  return (
    // <div>Redereddddddddddddd</div>
    <div style={{ display: "flex", flexFlow: "column", height: "100vh" }}>
      <div id="demoOutputAbove"></div>
      <AdaptableReact
        style={{ flex: "none" }}
        gridOptions={agGridOptions}
        adaptableOptions={adaptOptions}
        onAdaptableReady={(adaptableReadyInfo: AdaptableReadyInfo) => {
          // save a reference to adaptable api
          adaptableApiRef.current = adaptableReadyInfo.adaptableApi;
          onAdaptableReady(adaptableReadyInfo);
        }}
      />
      <div className="ag-theme-balham" style={{ flex: 1 }}>
        <AgGridReact gridOptions={gridOptions} modules={agGridModules} />
      </div>
      <div id="demoOutputBelow"></div>
    </div>
  );
};
export default App;
