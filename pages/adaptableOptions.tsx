import {
  AdaptableOptions,
  PredicateDefHandlerContext,
} from "@adaptabletools/adaptable/types";
import { WebFramework } from "./rowData";

export const adaptableOptions: AdaptableOptions<WebFramework> = {
  primaryKey: "id",
  adaptableId: "Filter Predicates",
  predicateOptions: {
    customPredicateDefs: [
      {
        id: "popular",
        label: "Popular",
        columnScope: {
          ColumnIds: ["github_stars"],
        },
        moduleScope: ["filter"],
        handler(params: PredicateDefHandlerContext) {
          return params.value > 10000;
        },
      },
      {
        id: "scripting",
        label: "Scripting",
        columnScope: {
          ColumnIds: ["language"],
        },
        moduleScope: ["filter"],
        handler(params: PredicateDefHandlerContext) {
          return params.value == "JavaScript" || params.value == "TypeScript";
        },
      },
      {
        id: "last_ten_years",
        label: "Last Ten Years",
        moduleScope: ["filter"],
        columnScope: {
          DataTypes: ["Date"],
        },
        handler(params: PredicateDefHandlerContext) {
          const now = new Date();
          const tenYearsAgo = new Date(now.setFullYear(now.getFullYear() - 10));
          return new Date(params.value) > tenYearsAgo;
        },
      },
      {
        id: "starting_with_s",
        label: "Starting with 'S'",
        moduleScope: ["filter"],
        columnScope: {
          ColumnIds: ["name"],
        },
        handler(params: any) {
          const firstChar = params.value.charAt(0);
          return firstChar == "s";
          // return true;
        },
      },
      {
        id: "starting_with_char",
        label: "Starting with Char",
        moduleScope: ["filter"],
        columnScope: {
          ColumnIds: ["name"],
          DataTypes: ["String"],
        },
        handler(params: any) {
          console.log("inputssss", params.inputs[0].charAt(0));
          const firstChar = params.value.charAt(0);
          return firstChar == params.inputs[0].charAt(0);
          // return true;
        },
        inputs: [{ type: "text" }],
        toString: ({ inputs }) => `cell length > ${inputs[0]}`,
      },
    ],
  },

  layoutOptions: {
    autoSizeColumnsInLayout: true,
  },
  predefinedConfig: {
    Dashboard: {
      ModuleButtons: ["Filter", "SettingsPanel"],
    },
    StatusBar: {
      StatusBars: [
        {
          Key: "Center Panel",
          StatusBarPanels: ["Layout", "Filter"],
        },
      ],
    },
    Theme: { CurrentTheme: "dark" },
    Layout: {
      CurrentLayout: "Default",
      Layouts: [
        {
          Columns: [
            "name",
            "language",
            "week_issue_change",
            "github_stars",
            "open_pr_count",
            "created_at",
            "closed_issues_count",
            "pushed_at",
            "closed_pr_count",
            "has_projects",
            "has_pages",
            "updated_at",
            "topics",
          ],
          Name: "Default",
          ColumnFilters: [
            {
              ColumnId: "github_stars",
              Predicate: {
                PredicateId: "popular",
              },
            },
            {
              ColumnId: "language",
              Predicate: {
                PredicateId: "scripting",
              },
            },
            {
              ColumnId: "created_at",
              Predicate: {
                PredicateId: "last_ten_years",
              },
            },
          ],
        },
      ],
    },
  },
};
