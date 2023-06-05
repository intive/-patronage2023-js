export type ColorProps = {
  color?: string;
};

export type ImportResponseProps = {
  errors: string[];
  uri: string;
  status: number;
};

type PropsType = {
  errors?: string[];
  errorMessage?: string;
};

export type ImportExportState = {
  showImportButton?: boolean;
  csvUri?: string;
  screen: React.ComponentType<any>;
  props?: PropsType;
};

export type ImportExportAction =
  | { type: "SET_SHOW_IMPORT_BUTTON"; payload: boolean }
  | { type: "SET_CSV_URI"; payload: string }
  | { type: "SET_SCREEN"; payload: React.ComponentType<any> }
  | { type: "SET_PROPS"; payload: PropsType }
  | { type: "SET_MULTIPLE"; payload: ImportExportState };
