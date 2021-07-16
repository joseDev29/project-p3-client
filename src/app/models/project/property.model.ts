import { BlockModel } from "./block.model";

export interface PropertyModel {
  id?: string;
  code?: string;
  description: string;
  number: string;
  value: number;
  status?: string;
  blockId: string;
  block?:BlockModel

}
