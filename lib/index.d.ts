import { ReadonlyDeep } from "type-fest";
import { BaseData as RawBaseData } from "./datatypes/base_data";

export type BaseData = ReadonlyDeep<RawBaseData>;
