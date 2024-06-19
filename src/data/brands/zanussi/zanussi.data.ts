import { nanoid } from "nanoid"
import { BrandItem } from "../../../types"

"Zanussi Boiler Fault Codes"

export const brand_zanussi: BrandItem = {
  id: nanoid(),
  name: "Zanussi",

  info: {
    website: "",
    manual: {page: 40, link: ""}
  },

  hasIcon: false,
  hasFlash: false,
  hasFaultCode: true,
  hasFaultNote: false,

  faultCodes: [
    {
      brand: "Zanussi",
      model: "All Zanussi Boilers",
      faultType: "CODE",
      faultCode: "C0",
      faultCause: "Boiler chip card (BCC) activation fault"
    },
    {
      brand: "Zanussi",
      model: "All Zanussi Boilers",
      faultType: "CODE",
      faultCode: "C2",
      faultCause: "Boiler chip card (BCC) fault"
    },
    {
      brand: "Zanussi",
      model: "All Zanussi Boilers",
      faultType: "CODE",
      faultCode: "F1",
      faultCause: "Low water pressure"
    },
    {
      brand: "Zanussi",
      model: "All Zanussi Boilers",
      faultType: "CODE",
      faultCode: "F2",
      faultCause: "Flame loss"
    },
    {
      brand: "Zanussi",
      model: "All Zanussi Boilers",
      faultType: "CODE",
      faultCode: "F3",
      faultCause: "Fan fault"
    },
    {
      brand: "Zanussi",
      model: "All Zanussi Boilers",
      faultType: "CODE",
      faultCode: "F4",
      faultCause: "Flow thermistor"
    },
    {
      brand: "Zanussi",
      model: "All Zanussi Boilers",
      faultType: "CODE",
      faultCode: "F5",
      faultCause: "Return thermistor"
    },
    {
      brand: "Zanussi",
      model: "All Zanussi Boilers",
      faultType: "CODE",
      faultCode: "F6",
      faultCause: "Outside sensor failure"
    },
    {
      brand: "Zanussi",
      model: "All Zanussi Boilers",
      faultType: "CODE",
      faultCode: "F7",
      faultCause: "Low mains voltage"
    },
    {
      brand: "Zanussi",
      model: "All Zanussi Boilers",
      faultType: "CODE",
      faultCode: "F9",
      faultCause: "Unconfigured printed circuit board (PCB)"
    },
    {
      brand: "Zanussi",
      model: "All Zanussi Boilers",
      faultType: "CODE",
      faultCode: "L1",
      faultCause: "Flow temperature overheat or no water flow"
    },
    {
      brand: "Zanussi",
      model: "All Zanussi Boilers",
      faultType: "CODE",
      faultCode: "L2",
      faultCause: "Flame loss"
    },
    {
      brand: "Zanussi",
      model: "All Zanussi Boilers",
      faultType: "CODE",
      faultCode: "L5",
      faultCause: "5 boiler resets in 15 minutes"
    },
    {
      brand: "Zanussi",
      model: "All Zanussi Boilers",
      faultType: "CODE",
      faultCode: "L6",
      faultCause: "False flame lockout"
    },
  ]
}