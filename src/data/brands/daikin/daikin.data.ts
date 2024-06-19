import { nanoid } from "nanoid"
import { BrandItem } from "../../../types"

"Daikin Combi Gas Boiler Fault Codes"

export const brand_daikin: BrandItem = {
  id: nanoid(),
  name: "Daikin",

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
      brand: "Daikin",
      model: "Condensing Combi",
      faultType: "CODE",
      faultCode: "10-64",
      faultCause: "Gas valve circuit error, try resetting boiler"
    },
    {
      brand: "Daikin",
      model: "Condensing Combi",
      faultType: "CODE",
      faultCode: "10-65",
      faultCause: "Gas valve current fault, try resetting the boiler"
    },
    {
      brand: "Daikin",
      model: "Condensing Combi",
      faultType: "CODE",
      faultCode: "11-64",
      faultCause: "Ignition error – possible fault with valve on the gas line due to it being open. Try resetting the \nboiler after the third unsuccessful ignition."
    },
    {
      brand: "Daikin",
      model: "Condensing Combi",
      faultType: "CODE",
      faultCode: "11-65",
      faultCause: "Flame stabilisation error – wait for the boiler ignition trial"
    },
    {
      brand: "Daikin",
      model: "Condensing Combi",
      faultType: "CODE",
      faultCode: "11-66",
      faultCause: "Flame Signal loss in safety time – try to reset the boiler after 3rd unsuccessful ignition"
    },
    {
      brand: "Daikin",
      model: "Condensing Combi",
      faultType: "CODE",
      faultCode: "11-67",
      faultCause: "Flame loss during operation. This is a temporary error, wait for the boiler to re-ignite."
    },
    {
      brand: "Daikin",
      model: "Condensing Combi",
      faultType: "CODE",
      faultCode: "12-64",
      faultCause: "Ion control deviation is too big – try resetting the boiler"
    },
    {
      brand: "Daikin",
      model: "Condensing Combi",
      faultType: "CODE",
      faultCode: "12-65",
      faultCause: "Ignition scott actuators error – try resetting the boiler"
    },
    {
      brand: "Daikin",
      model: "Condensing Combi",
      faultType: "CODE",
      faultCode: "12-66",
      faultCause: "Ion base value lower than the upper factory limit, try resetting the boiler"
    },
    {
      brand: "Daikin",
      model: "Condensing Combi",
      faultType: "CODE",
      faultCode: "12-67",
      faultCause: "Ion base value exceeds the upper factory limit – try resetting the boiler"
    },
    {
      brand: "Daikin",
      model: "Condensing Combi",
      faultType: "CODE",
      faultCode: "12-68",
      faultCause: "Ion base value differs from the previous value – try resetting the boiler"
    },
    {
      brand: "Daikin",
      model: "Condensing Combi",
      faultType: "CODE",
      faultCode: "12-69",
      faultCause: "Offset adaptation at limit"
    },
    {
      brand: "Daikin",
      model: "Condensing Combi",
      faultType: "CODE",
      faultCode: "12-70",
      faultCause: "Offset adaption not executable"
    },
    {
      brand: "Daikin",
      model: "Condensing Combi",
      faultType: "CODE",
      faultCode: "13-64 / 13-65",
      faultCause: "Fan speed error – try resetting the boiler"
    },
    {
      brand: "Daikin",
      model: "Condensing Combi",
      faultType: "CODE",
      faultCode: "16-64",
      faultCause: "Flue temperature signals overheating, the flue gas discharge path needs checking. Try resetting \nthe boiler"
    },
    {
      brand: "Daikin",
      model: "Condensing Combi",
      faultType: "CODE",
      faultCode: "1J-64",
      faultCause: "High limit thermostat signalising overheating. Check the valve of the radiators in the heating, \ncheck if the Combi boiler water pressure is low, if it is then the heating circuit needs filling with \nwater"
    },
    {
      brand: "Daikin",
      model: "Condensing Combi",
      faultType: "CODE",
      faultCode: "80-01",
      faultCause: "Return temperature sensor error – reset the boiler"
    },
    {
      brand: "Daikin",
      model: "Condensing Combi",
      faultType: "CODE",
      faultCode: "81-01",
      faultCause: "Flow temperature sensor error – try resetting the boiler"
    },
    {
      brand: "Daikin",
      model: "Condensing Combi",
      faultType: "CODE",
      faultCode: "81-65",
      faultCause: "Domestic hot water (DHW) temperature sensor error. The boiler will continue in operation but \nsolar sensor has an error ."
    },
    {
      brand: "Daikin",
      model: "Condensing Combi",
      faultType: "CODE",
      faultCode: "8A-46",
      faultCause: "Freeze protection – the boiler won’t operate if flow temperature sensor reads a value that is less \nthan 1°c"
    },
    {
      brand: "Daikin",
      model: "Condensing Combi",
      faultType: "CODE",
      faultCode: "8H-65",
      faultCause: "Flow temperature steep rise – the radiator valves may not be open enough to circulate water"
    },
    {
      brand: "Daikin",
      model: "Condensing Combi",
      faultType: "CODE",
      faultCode: "E1-64",
      faultCause: "Flame detected before burner operation – try resetting the boiler"
    },
    {
      brand: "Daikin",
      model: "Condensing Combi",
      faultType: "CODE",
      faultCode: "E1-65",
      faultCause: "Internal SCOT system error. Perform reset if needed"
    },
    {
      brand: "Daikin",
      model: "Condensing Combi",
      faultType: "CODE",
      faultCode: "E1-66",
      faultCause: "Calibration condition error, wait for burner to restart"
    },
    {
      brand: "Daikin",
      model: "Condensing Combi",
      faultType: "CODE",
      faultCode: "E1-67",
      faultCause: "Missing calibration – try resetting the boiler"
    },
    {
      brand: "Daikin",
      model: "Condensing Combi",
      faultType: "CODE",
      faultCode: "E1-68",
      faultCause: "Ion base value is outside the factory limits or saved incorrectly – try resetting the boiler"
    },
    {
      brand: "Daikin",
      model: "Condensing Combi",
      faultType: "CODE",
      faultCode: "E1-69 / E1-70",
      faultCause: "Parameter CRC fault – try resetting the boiler"
    },
    {
      brand: "Daikin",
      model: "Condensing Combi",
      faultType: "CODE",
      faultCode: "E1-71",
      faultCause: "EK lockout failure – this is a permanent error"
    },
    {
      brand: "Daikin",
      model: "Condensing Combi",
      faultType: "CODE",
      faultCode: "E1-72",
      faultCause: "SCOT flame amplifier – reset the boiler"
    },
    {
      brand: "Daikin",
      model: "Condensing Combi",
      faultType: "CODE",
      faultCode: "E1-73",
      faultCause: "Printed circuit board (PCB) error – try resetting the boiler"
    },
    {
      brand: "Daikin",
      model: "Condensing Combi",
      faultType: "CODE",
      faultCode: "H9-01",
      faultCause: "Outside sensor fault – try resetting the boiler"
    },
    {
      brand: "Daikin",
      model: "Condensing Combi",
      faultType: "CODE",
      faultCode: "HC-01",
      faultCause: "Domestic hot water (DHW) temperature sensor error. The boiler will continue to operate but you \nneed to contact a heating engineer"
    },
    {
      brand: "Daikin",
      model: "Condensing Combi",
      faultType: "CODE",
      faultCode: "HJ-08",
      faultCause: "High system pressure – the boiler needs to discharge water down to 0.8 bar"
    },
    {
      brand: "Daikin",
      model: "Condensing Combi",
      faultType: "CODE",
      faultCode: "HJ-09",
      faultCause: "Low system pressure – increase the system pressure to 0.8 bar"
    },
    {
      brand: "Daikin",
      model: "Condensing Combi",
      faultType: "CODE",
      faultCode: "HJ-10",
      faultCause: "Water pressure sensor fault"
    },
    {
      brand: "Daikin",
      model: "Condensing Combi",
      faultType: "CODE",
      faultCode: "J6-01",
      faultCause: "Flow temperature sensor overheating due to a blocking fault or a lockout error – the valves of \nthe radiator heating circuit may have an issue or the water pressure is low and needs filling"
    },
    {
      brand: "Daikin",
      model: "Condensing Combi",
      faultType: "CODE",
      faultCode: "J6-20",
      faultCause: "Return temperature sensor overheating due to a blocking fault or a lockout error – try resetting \nthe boiler"
    },
    {
      brand: "Daikin",
      model: "Condensing Combi",
      faultType: "CODE",
      faultCode: "J6-21",
      faultCause: "Return temperature is higher than flow temperature. Burner operates itself after a small amount \nof time but if the problem repeats you need to contact a heating engineer"
    },
    {
      brand: "Daikin",
      model: "Condensing Combi",
      faultType: "CODE",
      faultCode: "JJ-64",
      faultCause: "Supply voltage is below low limit"
    },
    {
      brand: "Daikin",
      model: "Condensing Combi",
      faultType: "CODE",
      faultCode: "U2-01",
      faultCause: "Supply voltage is above high limit, your boiler should continue to operate but you need to \ncontact a heating engineer"
    },
    {
      brand: "Daikin",
      model: "Condensing Combi",
      faultType: "CODE",
      faultCode: "U4-65",
      faultCause: "OpenTherm room thermostat connection is defective – your boiler will continue to operation but \nthe thermostat is out of operation"
    },
    {
      brand: "Daikin",
      model: "Condensing Combi",
      faultType: "CODE",
      faultCode: "U4-66",
      faultCause: "CAN-bus timeout"
    },
    {
      brand: "Daikin",
      model: "Condensing Combi",
      faultType: "CODE",
      faultCode: "U4-67",
      faultCause: "Remote reset supervision, switch off the power at the mains – if problem repeats contact a \nheating engineer"
    },
    {
      brand: "Daikin",
      model: "Condensing Combi",
      faultType: "CODE",
      faultCode: "UA-64",
      faultCause: "Blocking during boiler chip card (BBC) update"
    },
    {
      brand: "Daikin",
      model: "Condensing Combi",
      faultType: "CODE",
      faultCode: "UA-65",
      faultCause: "Printed circuit board (PCB) requires a boiler chip card (BCC) update"
    },
    {
      brand: "Daikin",
      model: "Condensing Combi",
      faultType: "CODE",
      faultCode: "UA-66",
      faultCause: "Boiler chip card ID (BCC-iD) of internal Electrically Erasable Programmable Read-Only Memory \n(EEPROM) is inconsistent"
    },
    {
      brand: "Daikin",
      model: "Condensing Combi",
      faultType: "CODE",
      faultCode: "UA-67",
      faultCause: "Boiler chip card (BCC) is missing"
    },
  ]
}