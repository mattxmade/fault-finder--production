import { nanoid } from "nanoid"
import { BrandItem } from "../../../types";
import { atag_faultCodes } from "./atag_fault_codes.data";

"ATAG Boiler Error Codes"

export const brand_atag: BrandItem = {
  id: nanoid(),
  name: "ATAG",

  info: {
    website: "",
    manual: { page: 0, link: "" }
  },

  hasIcon: false,
  hasFlash: false,
  hasFaultCode: true,
  hasFaultNote: false,

  faultCodes: atag_faultCodes,
};
