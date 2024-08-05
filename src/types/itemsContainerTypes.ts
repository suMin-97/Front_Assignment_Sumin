export interface Item {
  id: string;
  content: string;
}

type Items = Item[] | [];

export interface ItemsContainer {
  [key: string]: Items;
}
