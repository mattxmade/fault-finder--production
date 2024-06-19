import { nanoid } from "nanoid"
import { BrandItem } from "../../../types"

// "Intergas Boiler Fault Codes"

export const brand_intergas: BrandItem = {
  id: nanoid(),
  name: "Intergas",

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
      brand: "Intergas",
      model: "All Intergas Boilers",
      faultType: "CODE",
      faultCode: "10, 11, 12, 13, 14",
      faultCause: "Sensor fault S1"
    },
    {
      brand: "Intergas",
      model: "All Intergas Boilers",
      faultType: "CODE",
      faultCode: "20, 21, 22, 23, 24",
      faultCause: "Sensor fault S2"
    },
    {
      brand: "Intergas",
      model: "All Intergas Boilers",
      faultType: "CODE",
      faultCode: "0",
      faultCause: "Low system pressure"
    },
    {
      brand: "Intergas",
      model: "All Intergas Boilers",
      faultType: "CODE",
      faultCode: "0",
      faultCause: "Sensor fault after self check"
    },
    {
      brand: "Intergas",
      model: "All Intergas Boilers",
      faultType: "CODE",
      faultCode: "1",
      faultCause: "Temperature too high"
    },
    {
      brand: "Intergas",
      model: "All Intergas Boilers",
      faultType: "CODE",
      faultCode: "2",
      faultCause: "S1 and S2 interchanged"
    },
    {
      brand: "Intergas",
      model: "All Intergas Boilers",
      faultType: "CODE",
      faultCode: "4",
      faultCause: "No flame signal"
    },
    {
      brand: "Intergas",
      model: "All Intergas Boilers",
      faultType: "CODE",
      faultCode: "5",
      faultCause: "Poor flame signal"
    },
    {
      brand: "Intergas",
      model: "All Intergas Boilers",
      faultType: "CODE",
      faultCode: "6",
      faultCause: "Flame detection fault"
    },
    {
      brand: "Intergas",
      model: "All Intergas Boilers",
      faultType: "CODE",
      faultCode: "8",
      faultCause: "Incorrect fan speed"
    },
    {
      brand: "Intergas",
      model: "All Intergas Boilers",
      faultType: "CODE",
      faultCode: "2",
      faultCause: "Shortcut outside sensor temperature"
    },
    {
      brand: "Intergas",
      model: "All Intergas Boilers",
      faultType: "CODE",
      faultCode: "29, 30",
      faultCause: "Gas valve relay faulty"
    },
    
    //"Intergas Xtreme and Xclusive Boiler Fault Codes"
    {
      brand: "Intergas",
      model: "Xtreme / Xclusive",
      faultType: "CODE",
      faultCode: "F000",
      faultCause: "Sensor defect",
      faultCheck: "Heat exchanger sensor needs replacing."
    },
    {
      brand: "Intergas",
      model: "Xtreme / Xclusive",
      faultType: "CODE",
      faultCode: "F001",
      faultCause: "Temperature too high during central heating\n demand",
      faultCheck: "Air could be in system, central heating system needs bleeding. There could be an error \nwith the pump &amp; it could need replacing."
    },
    {
      brand: "Intergas",
      model: "Xtreme / Xclusive",
      faultType: "CODE",
      faultCode: "F002",
      faultCause: "Temperature too high during domestic hot water \n(DHW) demand",
      faultCheck: "The wiring of DHW sensor needs checking, possible breakage."
    },
    {
      brand: "Intergas",
      model: "Xtreme / Xclusive",
      faultType: "CODE",
      faultCode: "F003",
      faultCause: "Flue gas temperature too high",
      faultCheck: "Heat exchanger needs checking for contamination."
    },
    {
      brand: "Intergas",
      model: "Xtreme / Xclusive",
      faultType: "CODE",
      faultCode: "F004",
      faultCause: "No flame during startup",
      faultCheck: "Gas valve is closed. Condensation drain is blocked and ignition needs checking."
    },
    {
      brand: "Intergas",
      model: "Xtreme / Xclusive",
      faultType: "CODE",
      faultCode: "F005",
      faultCause: "Flame disappears during operation",
      faultCheck: "Condensation drain could be blocked, the air supply duct and flue needs checking for \npossible recirculation or blockage of flue gases."
    },
    {
      brand: "Intergas",
      model: "Xtreme / Xclusive",
      faultType: "CODE",
      faultCode: "F006",
      faultCause: "Flame simulation error",
      faultCheck: "Gas valve could need replacing or burner controller could need replacing."
    },
    {
      brand: "Intergas",
      model: "Xtreme / Xclusive",
      faultType: "CODE",
      faultCode: "F007",
      faultCause: "No or insufficient ionisation flow",
      faultCheck: "Wiring of ionisation/ignition pin could have a breakage shut down and could need \nreplacing."
    },
    {
      brand: "Intergas",
      model: "Xtreme / Xclusive",
      faultType: "CODE",
      faultCode: "F008",
      faultCause: "Fan speed incorrect",
      faultCheck: "Fan cable needs checking, fan or burner controller could need replacing."
    },
    {
      brand: "Intergas",
      model: "Xtreme / Xclusive",
      faultType: "CODE",
      faultCode: "F009",
      faultCause: "Bunner controller has internal fault",
      faultCheck: "Burner controller needs replacing."
    },
    {
      brand: "Intergas",
      model: "Xtreme / Xclusive",
      faultType: "CODE",
      faultCode: "F010, F011",
      faultCause: "Sensor fault",
      faultCheck: "Possible issue with heat exchanger sensor, breakage or not connected properly."
    },
    {
      brand: "Intergas",
      model: "Xtreme / Xclusive",
      faultType: "CODE",
      faultCode: "F012",
      faultCause: "Sensor 5 fault",
      faultCheck: "Wiring for flue gas sensor needs checking, possible breakage."
    },
    {
      brand: "Intergas",
      model: "Xtreme / Xclusive",
      faultType: "CODE",
      faultCode: "F014",
      faultCause: "Mounting fault sensor",
      faultCheck: "Heat exchanger sensor is not mounted correctly and needs to be mounted properly."
    },
    {
      brand: "Intergas",
      model: "Xtreme / Xclusive",
      faultType: "CODE",
      faultCode: "F015",
      faultCause: "Mounting fault sensor S1",
      faultCheck: "Central heating flow sensor is not mounted correctly and needs mounting properly."
    },
  ]
}