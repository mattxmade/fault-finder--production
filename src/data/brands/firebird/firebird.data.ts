import { nanoid } from "nanoid"
import { BrandItem } from "../../../types"

"Firebird Boiler Fault Codes"

export const brand_firebird: BrandItem = {
  id: nanoid(),
  name: "Firebird",

  info: {
    website: "",
    manual: { page: 0, link: "" }
  },

  hasIcon: false,
  hasFlash: false,
  hasFaultCode: true,
  hasFaultNote: false,
  
  faultCodes: [
    {
      brand: "Firebird",
      model: "All Firebird Boilers",
      faultCode: "E1",
      faultType: "CODE",
      faultCause: "Control thermistor fault"
    },
    {
      brand: "Firebird",
      model: "All Firebird Boilers",
      faultCode: "E2",
      faultType: "CODE",
      faultCause: "Flue thermistor fault"
    },
    {
      brand: "Firebird",
      model: "All Firebird Boilers",
      faultCode: "E3",
      faultType: "CODE",
      faultCause: "Flue thermistor fault"
    },
    {
      brand: "Firebird",
      model: "All Firebird Boilers",
      faultCode: "E5",
      faultType: "CODE",
      faultCause: "Burner fault (possibly burner lockout) \nThermostat at a high limit (cuts off)\n",
      faultCheck: "Reset boiler"
    },
  ]
}