import { nanoid } from "nanoid"
import { BrandItem } from "../../../types"

"Johnson & Starley Boiler Fault Codes"

export const brand_johnson_and_starley: BrandItem = {
  id: nanoid(),
  name: "Johnson & Starley",

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
      brand: "Johnson & Starley",
      model: "All Johnson & Starley Boilers",
      faultType: "CODE",
      faultCode: "1",
      faultCause: "Flame lockout after several ignition attempts"
    },
    {
      brand: "Johnson & Starley",
      model: "All Johnson & Starley Boilers",
      faultType: "CODE",
      faultCode: "2",
      faultCause: "False flame"
    },
    {
      brand: "Johnson & Starley",
      model: "All Johnson & Starley Boilers",
      faultType: "CODE",
      faultCode: "3",
      faultCause: "High water temperature limit"
    },
    {
      brand: "Johnson & Starley",
      model: "All Johnson & Starley Boilers",
      faultType: "CODE",
      faultCode: "5",
      faultCause: "No tacho from fan"
    },
    {
      brand: "Johnson & Starley",
      model: "All Johnson & Starley Boilers",
      faultType: "CODE",
      faultCode: "8",
      faultCause: "Flame circuit error"
    },
    {
      brand: "Johnson & Starley",
      model: "All Johnson & Starley Boilers",
      faultType: "CODE",
      faultCode: "9",
      faultCause: "Valve driver circuit error"
    },
    {
      brand: "Johnson & Starley",
      model: "All Johnson & Starley Boilers",
      faultType: "CODE",
      faultCode: "11",
      faultCause: "Flow/return sensor calibration error"
    },
    {
      brand: "Johnson & Starley",
      model: "All Johnson & Starley Boilers",
      faultType: "CODE",
      faultCode: "12",
      faultCause: "Default lockout"
    },
    {
      brand: "Johnson & Starley",
      model: "All Johnson & Starley Boilers",
      faultType: "CODE",
      faultCode: "13",
      faultCause: "Elapsed the number of retrials"
    },
    {
      brand: "Johnson & Starley",
      model: "All Johnson & Starley Boilers",
      faultType: "CODE",
      faultCode: "21",
      faultCause: "ADC error"
    },
    {
      brand: "Johnson & Starley",
      model: "All Johnson & Starley Boilers",
      faultType: "CODE",
      faultCode: "26",
      faultCause: "Flame signal lost 5 times in 4 minutes"
    },
    {
      brand: "Johnson & Starley",
      model: "All Johnson & Starley Boilers",
      faultType: "CODE",
      faultCode: "31",
      faultCause: "Centra heating supply sensor error (open or short)"
    },
    {
      brand: "Johnson & Starley",
      model: "All Johnson & Starley Boilers",
      faultType: "CODE",
      faultCode: "44",
      faultCause: "Central heating return sensor error (open or short)"
    },
    {
      brand: "Johnson & Starley",
      model: "All Johnson & Starley Boilers",
      faultType: "CODE",
      faultCode: "7",
      faultCause: "High flue gas temperature"
    },
    {
      brand: "Johnson & Starley",
      model: "All Johnson & Starley Boilers",
      faultType: "CODE",
      faultCode: "25",
      faultCause: "CRC error"
    },
    {
      brand: "Johnson & Starley",
      model: "All Johnson & Starley Boilers",
      faultType: "CODE",
      faultCode: "30",
      faultCause: "Boiler flow temperature sensor short circuit"
    },
    {
      brand: "Johnson & Starley",
      model: "All Johnson & Starley Boilers",
      faultType: "CODE",
      faultCode: "31",
      faultCause: "Boiler flow temperature sensor open circuit"
    },
    {
      brand: "Johnson & Starley",
      model: "All Johnson & Starley Boilers",
      faultType: "CODE",
      faultCode: "32",
      faultCause: "Domestic hot water temperature sensor short circuit"
    },
    {
      brand: "Johnson & Starley",
      model: "All Johnson & Starley Boilers",
      faultType: "CODE",
      faultCode: "33",
      faultCause: "Domestic hot water temperature sensor open circuit"
    },
    {
      brand: "Johnson & Starley",
      model: "All Johnson & Starley Boilers",
      faultType: "CODE",
      faultCode: "34",
      faultCause: "Low mains supply voltage"
    },
    {
      brand: "Johnson & Starley",
      model: "All Johnson & Starley Boilers",
      faultType: "CODE",
      faultCode: "37",
      faultCause: "Low system water pressure"
    },
    {
      brand: "Johnson & Starley",
      model: "All Johnson & Starley Boilers",
      faultType: "CODE",
      faultCode: "40",
      faultCause: "High system water pressure"
    },
    {
      brand: "Johnson & Starley",
      model: "All Johnson & Starley Boilers",
      faultType: "CODE",
      faultCode: "41",
      faultCause: "No water pressure signal received from MMI"
    },
    {
      brand: "Johnson & Starley",
      model: "All Johnson & Starley Boilers",
      faultType: "CODE",
      faultCode: "45",
      faultCause: "Flue gas temperature sensor short circuit"
    },
    {
      brand: "Johnson & Starley",
      model: "All Johnson & Starley Boilers",
      faultType: "CODE",
      faultCode: "46",
      faultCause: "Flue gas temperature sensor open circuit"
    },
    {
      brand: "Johnson & Starley",
      model: "All Johnson & Starley Boilers",
      faultType: "CODE",
      faultCode: "47",
      faultCause: "Water pressure sensor open circuit"
    },
    {
      brand: "Johnson & Starley",
      model: "All Johnson & Starley Boilers",
      faultType: "CODE",
      faultCode: "99",
      faultCause: "Communication MMI -ESYS lost"
    },
    {
      brand: "Johnson & Starley",
      model: "All Johnson & Starley Boilers",
      faultType: "CODE",
      faultCode: "E01",
      faultCause: "Ignition lockout"
    },
    {
      brand: "Johnson & Starley",
      model: "All Johnson & Starley Boilers",
      faultType: "CODE",
      faultCode: "E02",
      faultCause: "False flame lockout"
    },
    {
      brand: "Johnson & Starley",
      model: "All Johnson & Starley Boilers",
      faultType: "CODE",
      faultCode: "E03",
      faultCause: "Overheat lockout"
    },
    {
      brand: "Johnson & Starley",
      model: "All Johnson & Starley Boilers",
      faultType: "CODE",
      faultCode: "E05",
      faultCause: "Fan fault"
    },
    {
      brand: "Johnson & Starley",
      model: "All Johnson & Starley Boilers",
      faultType: "CODE",
      faultCode: "E08",
      faultCause: "Flame circuit failure"
    },
    {
      brand: "Johnson & Starley",
      model: "All Johnson & Starley Boilers",
      faultType: "CODE",
      faultCode: "E09",
      faultCause: "Valve feed back error"
    },
    {
      brand: "Johnson & Starley",
      model: "All Johnson & Starley Boilers",
      faultType: "CODE",
      faultCode: "E12",
      faultCause: "EEPROM lockout"
    },
    {
      brand: "Johnson & Starley",
      model: "All Johnson & Starley Boilers",
      faultType: "CODE",
      faultCode: "E15",
      faultCause: "Sensor drift lockout"
    },
    {
      brand: "Johnson & Starley",
      model: "All Johnson & Starley Boilers",
      faultType: "CODE",
      faultCode: "E16, E17, E18",
      faultCause: "Sensor stuck lockout"
    },
    {
      brand: "Johnson & Starley",
      model: "All Johnson & Starley Boilers",
      faultType: "CODE",
      faultCode: "E21",
      faultCause: "ADC lockout"
    },
    {
      brand: "Johnson & Starley",
      model: "All Johnson & Starley Boilers",
      faultType: "CODE",
      faultCode: "E33",
      faultCause: "Return thermistor fault"
    },
    {
      brand: "Johnson & Starley",
      model: "All Johnson & Starley Boilers",
      faultType: "CODE",
      faultCode: "E34",
      faultCause: "Low power supply lockout"
    },
    {
      brand: "Johnson & Starley",
      model: "All Johnson & Starley Boilers",
      faultType: "CODE",
      faultCode: "E35",
      faultCause: "Flow thermistor fault"
    },
    {
      brand: "Johnson & Starley",
      model: "All Johnson & Starley Boilers",
      faultType: "CODE",
      faultCode: "F07",
      faultCause: "Exhaust sensor fault"
    },
    {
      brand: "Johnson & Starley",
      model: "All Johnson & Starley Boilers",
      faultType: "CODE",
      faultCode: "F13",
      faultCause: "Remote reset lockout"
    },
    {
      brand: "Johnson & Starley",
      model: "All Johnson & Starley Boilers",
      faultType: "CODE",
      faultCode: "F37",
      faultCause: "Low water pressure"
    },
    {
      brand: "Johnson & Starley",
      model: "All Johnson & Starley Boilers",
      faultType: "CODE",
      faultCode: "F40",
      faultCause: "Water pressure too high"
    },
    {
      brand: "Johnson & Starley",
      model: "All Johnson & Starley Boilers",
      faultType: "CODE",
      faultCode: "F47",
      faultCause: "Water pressure sensor not connected"
    },
    {
      brand: "Johnson & Starley",
      model: "All Johnson & Starley Boilers",
      faultType: "CODE",
      faultCode: "F52",
      faultCause: "Domestic hot water (DHW) sensor fault"
    },
    {
      brand: "Johnson & Starley",
      model: "All Johnson & Starley Boilers",
      faultType: "CODE",
      faultCode: "F53",
      faultCause: "Flue temperature sensor lockout"
    },
  ]
}