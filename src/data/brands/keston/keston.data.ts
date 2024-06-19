import { nanoid } from "nanoid"
import { BrandItem } from "../../../types"

// "Keston Boiler Fault Codes"

export const brand_keston: BrandItem = {
  id: nanoid(),
  name: "Keston",

  info: {
    website: "",
    manual: { page: 0, link: "" }
  },

  hasIcon: false,
  hasFlash: false,
  hasFaultCode: true,
  hasFaultNote: false,

  faultCodes: [
    //"C36 Combi Gas Boiler Fault Codes"
    {
      brand: "Keston",
      model: "C36 Combi",
      faultType: "CODE",
      faultCode: "E01",
      faultCause: "Ignition failure – the boiler has attempted to light 5 times and not succeeded – check the gas supply is on"
    },
    {
      brand: "Keston",
      model: "C36 Combi",
      faultType: "CODE",
      faultCode: "E02",
      faultCause: "False flame – possibly a problem with the power supply"
    },
    {
      brand: "Keston",
      model: "C36 Combi",
      faultType: "CODE",
      faultCode: "E03",
      faultCause: "Boiler overheat – check that any valves to the heating circuit have not been shut down, no air in the system and that \nthe water pressure is correct"
    },
    {
      brand: "Keston",
      model: "C36 Combi",
      faultType: "CODE",
      faultCode: "E05",
      faultCause: "Fan failure – boiler cannot detect fan rotation – check fan operation and both connectors onto fan"
    },
    {
      brand: "Keston",
      model: "C36 Combi",
      faultType: "CODE",
      faultCode: "E07",
      faultCause: "Flue overheat – check combustion and flue temperature vs. return temperature – the flue temperature should be no \nmore than 10C above return temperature. Possible heat exchanger fault."
    },
    {
      brand: "Keston",
      model: "C36 Combi",
      faultType: "CODE",
      faultCode: "E08",
      faultCause: "Flame circuit error – possible control box fault"
    },
    {
      brand: "Keston",
      model: "C36 Combi",
      faultType: "CODE",
      faultCode: "E09",
      faultCause: "Valve drive error – possible gas valve or control box fault"
    },
    {
      brand: "Keston",
      model: "C36 Combi",
      faultType: "CODE",
      faultCode: "E10",
      faultCause: "Control box errors – possible faulty control box"
    },
    {
      brand: "Keston",
      model: "C36 Combi",
      faultType: "CODE",
      faultCode: "E11",
      faultCause: "The automatic test for calibration of flow and return sensors has failed – check both flow and return sensors are \nlocated on the correct pipes and are producing the correct readings"
    },
    {
      brand: "Keston",
      model: "C36 Combi",
      faultType: "CODE",
      faultCode: "E12 to E22",
      faultCause: "Control box errors – possible faulty control box"
    },
    {
      brand: "Keston",
      model: "C36 Combi",
      faultType: "CODE",
      faultCode: "E23",
      faultCause: "Water filling error – check water pressure sensor"
    },
    {
      brand: "Keston",
      model: "C36 Combi",
      faultType: "CODE",
      faultCode: "E24",
      faultCause: "Water pressure lost 4 times in 24 hours – possible leak, check system and boiler"
    },
    {
      brand: "Keston",
      model: "C36 Combi",
      faultType: "CODE",
      faultCode: "E25",
      faultCause: "Control box errors – possible faulty control box"
    },
    {
      brand: "Keston",
      model: "C36 Combi",
      faultType: "CODE",
      faultCode: "E26",
      faultCause: "Flame drop out – check for obstruction of the flue and/or air terminals, blockage/freezing of the drain pipe or a low\n gas supply (LPG)."
    },
    {
      brand: "Keston",
      model: "C36 Combi",
      faultType: "CODE",
      faultCode: "E30",
      faultCause: "Flow sensor short circuit – check connections to flow sensor"
    },
    {
      brand: "Keston",
      model: "C36 Combi",
      faultType: "CODE",
      faultCode: "E31",
      faultCause: "Flow sensor open circuit – check connections to flow sensor are in place"
    },
    {
      brand: "Keston",
      model: "C36 Combi",
      faultType: "CODE",
      faultCode: "E32",
      faultCause: "DHW sensor short circuit – check connections to domestic hot water (DHW) sensor"
    },
    {
      brand: "Keston",
      model: "C36 Combi",
      faultType: "CODE",
      faultCode: "E33",
      faultCause: "Domestic hot water (DHW) sensor short circuit – check connections to DHW sensor are in place"
    },
    {
      brand: "Keston",
      model: "C36 Combi",
      faultType: "CODE",
      faultCode: "E34",
      faultCause: "Mains supply voltage < 180V – may be a problem with your power supply"
    },
    {
      brand: "Keston",
      model: "C36 Combi",
      faultType: "CODE",
      faultCode: "E35",
      faultCause: "Mains supply frequency incorrect – may be a problem with the power supply"
    },
    {
      brand: "Keston",
      model: "C36 Combi",
      faultType: "CODE",
      faultCode: "E37",
      faultCause: "Water pressure error – increase the system water pressure"
    },
    {
      brand: "Keston",
      model: "C36 Combi",
      faultType: "CODE",
      faultCode: "E38",
      faultCause: "Reset key fault – replace fascia PCB"
    },
    {
      brand: "Keston",
      model: "C36 Combi",
      faultType: "CODE",
      faultCode: "E40",
      faultCause: "Water pressure too high"
    },
    {
      brand: "Keston",
      model: "C36 Combi",
      faultType: "CODE",
      faultCode: "E41",
      faultCause: "Communication error between fascia and control box – check cables"
    },
    {
      brand: "Keston",
      model: "C36 Combi",
      faultType: "CODE",
      faultCode: "E43",
      faultCause: "Return sensor short circuit – check connections to return sensor"
    },
    {
      brand: "Keston",
      model: "C36 Combi",
      faultType: "CODE",
      faultCode: "E44",
      faultCause: "Return sensor open circuit – check connections to return sensor are in place"
    },
    {
      brand: "Keston",
      model: "C36 Combi",
      faultType: "CODE",
      faultCode: "E45",
      faultCause: "Flue sensor short circuit – check connections to flue sensor"
    },
    {
      brand: "Keston",
      model: "C36 Combi",
      faultType: "CODE",
      faultCode: "E46",
      faultCause: "Communication error between fascia and control box – check cables"
    },
    {
      brand: "Keston",
      model: "C36 Combi",
      faultType: "CODE",
      faultCode: "E99",
      faultCause: "Flue sensor short circuit – check connections to flue sensor are in place"
    },


    //"S30 System Gas Boiler Fault Codes"
    {
      brand: "Keston",
      model: "S30 System",
      faultType: "CODE",
      faultCode: "0",
      faultCause: "The boiler is in standby mode awaiting either a central heating call or hot water demand"
    },
    {
      brand: "Keston",
      model: "S30 System",
      faultType: "CODE",
      faultCode: "C",
      faultCause: "The boiler has a call for central heating / hot water but the appliance has reached the desired temperature set on\n the boiler"
    },
    {
      brand: "Keston",
      model: "S30 System",
      faultType: "CODE",
      faultCode: "C And Burner Light",
      faultCause: "The boiler is operating for central heating / hot water"
    },
    {
      brand: "Keston",
      model: "S30 System",
      faultType: "CODE",
      faultCode: "F And Burner Light",
      faultCause: "The boiler is operating in frost mode"
    },
    {
      brand: "Keston",
      model: "S30 System",
      faultType: "CODE",
      faultCode: "F0",
      faultCause: "Boiler Chip Card (BCC) not fitted"
    },
    {
      brand: "Keston",
      model: "S30 System",
      faultType: "CODE",
      faultCode: "F6",
      faultCause: "Outside sensor failure"
    },
    {
      brand: "Keston",
      model: "S30 System",
      faultType: "CODE",
      faultCode: "F7",
      faultCause: "Low mains voltage"
    },
    {
      brand: "Keston",
      model: "S30 System",
      faultType: "CODE",
      faultCode: "F9",
      faultCause: "Printed circuit board (PCB) Fault"
    },
    {
      brand: "Keston",
      model: "S30 System",
      faultType: "CODE",
      faultCode: "L5",
      faultCause: "5 boiler resets in 15 minutes"
    },
    {
      brand: "Keston",
      model: "S30 System",
      faultType: "CODE",
      faultCode: "L6",
      faultCause: "False flame lockout"
    },
    {
      brand: "Keston",
      model: "S30 System",
      faultType: "CODE",
      faultCode: "C0",
      faultCause: "Boiler Chip Card (BCC) activation fault"
    },
    {
      brand: "Keston",
      model: "S30 System",
      faultType: "CODE",
      faultCode: "C2",
      faultCause: "Boiler Chip Card (BCC) fault"
    },
    {
      brand: "Keston",
      model: "S30 System",
      faultType: "CODE",
      faultCode: "F1",
      faultCause: "Low water pressure"
    },
    {
      brand: "Keston",
      model: "S30 System",
      faultType: "CODE",
      faultCode: "L1",
      faultCause: "Flow temperature overheat"
    },
    {
      brand: "Keston",
      model: "S30 System",
      faultType: "CODE",
      faultCode: "F2",
      faultCause: "Flame loss"
    },
    {
      brand: "Keston",
      model: "S30 System",
      faultType: "CODE",
      faultCode: "L2",
      faultCause: "Flame loss"
    },
    {
      brand: "Keston",
      model: "S30 System",
      faultType: "CODE",
      faultCode: "F3",
      faultCause: "Fan fault"
    },
    {
      brand: "Keston",
      model: "S30 System",
      faultType: "CODE",
      faultCode: "F4",
      faultCause: "Control / No flow thermistor"
    },
    {
      brand: "Keston",
      model: "S30 System",
      faultType: "CODE",
      faultCode: "F5",
      faultCause: "Return thermistor"
    },

    //"C40 C55 Combi Gas Boiler"
    {
      brand: "Keston",
      model: "C40 C55 Combi",
      faultType: "CODE",
      faultCode: "Enn",
      faultCause: "Fault causing a boiler shutdown"
    },
    {
      brand: "Keston",
      model: "C40 C55 Combi",
      faultType: "CODE",
      faultCode: "E00",
      faultCause: "Flame detected when not expected – check boiler earth and probe condition"
    },
    {
      brand: "Keston",
      model: "C40 C55 Combi",
      faultType: "CODE",
      faultCode: "E02",
      faultCause: "No ignition after restart – check gas supply, gas valve operation and ignitor electrode spark generation"
    },
    {
      brand: "Keston",
      model: "C40 C55 Combi",
      faultType: "CODE",
      faultCode: "E03",
      faultCause: "Gas valve faulty or not connected"
    },
    {
      brand: "Keston",
      model: "C40 C55 Combi",
      faultType: "CODE",
      faultCode: "E04",
      faultCause: "Power has been reset whilst boiler was in lockout"
    },
    {
      brand: "Keston",
      model: "C40 C55 Combi",
      faultType: "CODE",
      faultCode: "E11",
      faultCause: "Internal electronics error – rest or replace control box"
    },
    {
      brand: "Keston",
      model: "C40 C55 Combi",
      faultType: "CODE",
      faultCode: "E18",
      faultCause: "Flow overheat – check water circulation"
    },
    {
      brand: "Keston",
      model: "C40 C55 Combi",
      faultType: "CODE",
      faultCode: "E19",
      faultCause: "Maximum return temperature exceeded – check circulation"
    },
    {
      brand: "Keston",
      model: "C40 C55 Combi",
      faultType: "CODE",
      faultCode: "E25",
      faultCause: "Flow temperature increased too quickly – check water circulation"
    },
    {
      brand: "Keston",
      model: "C40 C55 Combi",
      faultType: "CODE",
      faultCode: "E30",
      faultCause: "Difference between flow and return temperatures too high – check circulation."
    },
    {
      brand: "Keston",
      model: "C40 C55 Combi",
      faultType: "CODE",
      faultCode: "E31",
      faultCause: "Flow thermistor short circuit – check/replace connections/thermistor"
    },
    {
      brand: "Keston",
      model: "C40 C55 Combi",
      faultType: "CODE",
      faultCode: "E32",
      faultCause: "Return thermistor short circuit – check/replace connections/thermistor"
    },
    {
      brand: "Keston",
      model: "C40 C55 Combi",
      faultType: "CODE",
      faultCode: "E36",
      faultCause: "Flow thermistor open circuit – check/replace connections/thermistor"
    },
    {
      brand: "Keston",
      model: "C40 C55 Combi",
      faultType: "CODE",
      faultCode: "E37",
      faultCause: "Return thermistor open circuit – check/replace connections/thermistor"
    },
    {
      brand: "Keston",
      model: "C40 C55 Combi",
      faultType: "CODE",
      faultCode: "E44",
      faultCause: "Low water pressure"
    },
  ]
}