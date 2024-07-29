interface catalogItemContent {
  id: number;
  title: string;
  route: string;
}

interface catalogMenuItem {
  id: number;
  title: string;
  route: string;
  svg?: string;
  content?: catalogItemContent[];
}

interface popupCatalogResults {
  id?: number;
  title?: string;
  route?: string;
}

export type { catalogMenuItem, popupCatalogResults };
