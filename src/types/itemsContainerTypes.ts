export interface Item {
  id: string;
  content: string;
}

export type Items = Item[];

export interface ItemsContainer {
  [key: string]: Items;
}
