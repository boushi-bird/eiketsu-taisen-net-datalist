import { expectError } from "tsd";
import type { BaseData as BaseDataWritable } from "../writable";
import type { BaseData as BaseData } from "../";

const baseDataW = {} as BaseDataWritable;
const baseDataR = {} as BaseData;

baseDataW.general[0].idx = 0;
expectError((baseDataR.general[0].idx = 0));
