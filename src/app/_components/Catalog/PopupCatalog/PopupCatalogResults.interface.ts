import { Dispatch, SetStateAction } from "react";

import { catalogMenuItem } from "@/types/intefaces/catalogData";

interface PopupCatalogResultsProps {
  resultsData: catalogMenuItem[];
  activeResultInx?: number;
  setActiveResultInx?: Dispatch<SetStateAction<number | undefined>>;
}

export default PopupCatalogResultsProps;
