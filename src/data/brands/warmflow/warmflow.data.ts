import { nanoid } from "nanoid"
import { BrandItem } from "../../../types"

// "Warmflow Boiler Fault Codes"

export const brand_warmflow: BrandItem = {
  id: nanoid(),
  name: "Warmflow",

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
      brand: "Warmflow",
      model: "All Warmflow Boilers",
      faultType: "CODE",
      faultCode: "E01",
      faultCause: "No flame – flame has failed during startup."
    },
    {
      brand: "Warmflow",
      model: "All Warmflow Boilers",
      faultType: "CODE",
      faultCode: "E02",
      faultCause: "Safety thermostat tripped (95°C)"
    },
    {
      brand: "Warmflow",
      model: "All Warmflow Boilers",
      faultType: "CODE",
      faultCode: "E03",
      faultCause: "Flue thermofuse tripped"
    },
    {
      brand: "Warmflow",
      model: "All Warmflow Boilers",
      faultType: "CODE",
      faultCode: "H20",
      faultCause: "Low system pressure"
    },
    {
      brand: "Warmflow",
      model: "All Warmflow Boilers",
      faultType: "CODE",
      faultCode: "E05",
      faultCause: "Heating sensor fault"
    },
    {
      brand: "Warmflow",
      model: "All Warmflow Boilers",
      faultType: "CODE",
      faultCode: "E22",
      faultCause: "Fan fault"
    },
    {
      brand: "Warmflow",
      model: "All Warmflow Boilers",
      faultType: "CODE",
      faultCode: "E16",
      faultCause: "Parameter programming request"
    },
    {
      brand: "Warmflow",
      model: "All Warmflow Boilers",
      faultType: "CODE",
      faultCode: "E35",
      faultCause: "Ionisation electrode fault"
    },
    {
      brand: "Warmflow",
      model: "All Warmflow Boilers",
      faultType: "CODE",
      faultCode: "E42",
      faultCause: "Fan printed circuit board (PCB) fault"
    },
  ]
}


