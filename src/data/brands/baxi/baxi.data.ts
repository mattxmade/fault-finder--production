import { nanoid } from "nanoid"
import { BrandItem } from "../../../types"

// "Baxi Platinum Fault Codes"

export const brand_baxi: BrandItem = {
  id: nanoid(),
  name: "Baxi",

  info: {
    website: "",
    manual: { page: 0, link: "" }
  },
  
  hasIcon: false,
  hasFlash: true,
  hasFaultCode: true,
  hasFaultNote: false,

  faultCodes: [
    { 
      faultCode: "E20",
      faultType: "CODE",
      brand: "Baxi",
      model: "All Baxi Boilers",
      faultCause: "Central heating NTC error",
    },
    { 
      faultCode: "E28",
      faultType: "CODE",
      brand: "Baxi",
      model: "All Baxi Boilers",
      faultCause: "Error with the NTC flue.",
      faultCheck:"Possible air pressure switch error. Blocked flue or condensate \nor wing fault"
    },
    { 
      faultCode: "E50",
      faultType: "CODE",
      brand: "Baxi",
      model: "All Baxi Boilers",
      faultCause: "Hot water NTC error",
    },

    { 
      faultCode: "E110",
      faultType: "CODE",
      brand: "Baxi",
      model: "All Baxi Boilers",
      faultCause: "Thermostat operated safety",
    },

    { 
      faultCode: "E119",
      faultType: "CODE",
      brand: "Baxi",
      model: "All Baxi Boilers",
      faultCause: "Water pressure switch error – Not operated.",
    },

    { 
      faultCode: "E125",
      faultType: "CODE",
      brand: "Baxi",
      model: "All Baxi Boilers",
      faultCause: "Primary circuit error circulation fault",
    },

    { 
      faultCode: "E130",
      faultType: "CODE",
      brand: "Baxi",
      model: "All Baxi Boilers",
      faultCause: "FLue NTC Operation error",
    },

    { 
      faultCode: "E133",
      faultType: "CODE",
      brand: "Baxi",
      model: "All Baxi Boilers",
      faultCause: "Gas supply Error or flame failure",
    },

    { 
      faultCode: "E160",
      faultType: "CODE",
      brand: "Baxi",
      model: "All Baxi Boilers",
      faultCause: "Fan Error / Fan Wiring Error",
    },

    { 
      faultCode: "E193",
      faultType: "CODE",
      brand: "Baxi",
      model: "All Baxi Boilers",
      faultCause: "Pre-circulation error",
    },

    //"Baxi EcoBlue Fault Codes"
    { 
      faultCode: "110",
      faultType: "CODE",
      brand: "Baxi",
      model: "EcoBlue",
      faultCause: "Overheated",
    },

    { 
      faultCode: "117",
      faultType: "CODE",
      brand: "Baxi",
      model: "EcoBlue",
      faultCause: "Water pressure too high",
    },

    { 
      faultCode: "118",
      faultType: "CODE",
      brand: "Baxi",
      model: "EcoBlue",
      faultCause: "Water pressure too low",
    },

    { 
      faultCode: "125",
      faultType: "CODE",
      brand: "Baxi",
      model: "EcoBlue",
      faultCause: "Water circulation fault",
    },

    { 
      faultCode: "133",
      faultType: "CODE",
      brand: "Baxi",
      model: "EcoBlue",
      faultCause: "Safety time to establish flame exceeded",
    },

    { 
      faultCode: "E10",
      faultType: "CODE",
      brand: "Baxi",
      model: "EcoBlue",
      faultCause: "Outdoor sensor error",
    },

    { 
      faultCode: "E20",
      faultType: "CODE",
      brand: "Baxi",
      model: "EcoBlue",
      faultCause: "Central heating thermistor sensor fault",
    },

    { 
      faultCode: "E28",
      faultType: "CODE",
      brand: "Baxi",
      model: "EcoBlue",
      faultCause: "Flue thermistor fault",
    },

    { 
      faultCode: "E54",
      faultType: "CODE",
      brand: "Baxi",
      model: "EcoBlue",
      faultCause: "Domestic hot water (DHW) flow sensor fault",
    },

    { 
      faultCode: "E78",
      faultType: "CODE",
      brand: "Baxi",
      model: "EcoBlue",
      faultCause: "Water pressure sensor fault",
    },

    { 
      faultCode: "E100",
      faultType: "CODE",
      brand: "Baxi",
      model: "EcoBlue",
      faultCause: "Internal clock time error on printed circuit board (PCB)",
    },

    { 
      faultCode: "E109",
      faultType: "CODE",
      brand: "Baxi",
      model: "EcoBlue",
      faultCause: "Poor circulation",
    },

    { 
      faultCode: "110",
      faultType: "CODE",
      brand: "Baxi",
      model: "EcoBlue",
      faultCause: "Overheat – try bleeding your radiators",
    },

    { 
      faultCode: "111",
      faultType: "CODE",
      brand: "Baxi",
      model: "EcoBlue",
      faultCause: "Maximum limit of flow temperature",
    },

    { 
      faultCode: "117",
      faultType: "CODE",
      brand: "Baxi",
      model: "EcoBlue",
      faultCause: "Water pressure too high",
    },

    { 
      faultCode: "118",
      faultType: "CODE",
      brand: "Baxi",
      model: "EcoBlue",
      faultCause: "Water pressure too low",
    },

    { 
      faultCode: "119",
      faultType: "CODE",
      brand: "Baxi",
      model: "EcoBlue",
      faultCause: "System pressure too low",
    },

    { 
      faultCode: "125",
      faultType: "CODE",
      brand: "Baxi",
      model: "EcoBlue",
      faultCause: "Water circulation fault",
    },

    { 
      faultCode: "127",
      faultType: "CODE",
      brand: "Baxi",
      model: "EcoBlue",
      faultCause: "Legionella (cause of Legionnaires’ disease) protection temperature not reached",
    },

    { 
      faultCode: "128",
      faultType: "CODE",
      brand: "Baxi",
      model: "EcoBlue",
      faultCause: "Loss of flame during operation",
    },

    { 
      faultCode: "133",
      faultType: "CODE",
      brand: "Baxi",
      model: "EcoBlue",
      faultCause: "Safety time to establish flame exceeded",
    },

    { 
      faultCode: "153",
      faultType: "CODE",
      brand: "Baxi",
      model: "EcoBlue",
      faultCause: "Forced reset unit unlocked",
    },

    { 
      faultCode: "160",
      faultType: "CODE",
      brand: "Baxi",
      model: "EcoBlue",
      faultCause: "Fan fault",
    },

    { 
      faultCode: "162",
      faultType: "CODE",
      brand: "Baxi",
      model: "EcoBlue",
      faultCause: "Air pressure switch error",
    },

    { 
      faultCode: "164",
      faultType: "CODE",
      brand: "Baxi",
      model: "EcoBlue",
      faultCause: "Pressure Sensor Error (UK) – Heating flow switch error (Ireland)",
    },

    { 
      faultCode: "166",
      faultType: "CODE",
      brand: "Baxi",
      model: "EcoBlue",
      faultCause: "Air pressure switch fault",
    },

    { 
      faultCode: "270",
      faultType: "CODE",
      brand: "Baxi",
      model: "EcoBlue",
      faultCause: "Dry fire",
    },

    { 
      faultCode: "432",
      faultType: "CODE",
      brand: "Baxi",
      model: "EcoBlue",
      faultCause: "Earth connector error",
    },

    { 
      faultCode: "433",
      faultType: "CODE",
      brand: "Baxi",
      model: "EcoBlue",
      faultCause: "Heat exchanger temperature exceeded (greater than 95 degrees)",
    },


    //"EcoBlue Advance / Ecoblue Regular Gas Boiler Flashing Light Fault Codes"
    { 
      faultCode: "1 green flash",
      faultType: "CODE",
      brand: "Baxi",
      model: "EcoBlue Advance / Ecoblue Regular",
      faultCause: "Boiler temperature reached. No action required." ,
    },

    { 
      faultCode: "3 green flashes",
      faultType: "CODE",
      brand: "Baxi",
      model: "EcoBlue Advance / Ecoblue Regular",
      faultCause: "Temporary flame loss. Boiler will self reset, if fault continues you will see 3 red flashes.",
    },

    { 
      faultCode: "4 green flashes",
      faultType: "CODE",
      brand: "Baxi",
      model: "EcoBlue Advance / Ecoblue Regular",
      faultCause: "Communication error between printed circuit board (PCB) and control. Temporary error, \nwill self reset.",
    },

    { 
      faultCode: "5 green flashes",
      faultType: "CODE",
      brand: "Baxi",
      model: "EcoBlue Advance / Ecoblue Regular",
      faultCause: "Parameter error on printed circuit board (PCB). Temporary error, will self reset",
    },

    { 
      faultCode: "6 green flashes",
      faultType: "CODE",
      brand: "Baxi",
      model: "EcoBlue Advance / Ecoblue Regular",
      faultCause: "Miscellaneous error. Temporary error, will self reset.",
    },

    { 
      faultCode: "1 red flash",
      faultType: "CODE",
      brand: "Baxi",
      model: "EcoBlue Advance / Ecoblue Regular",
      faultCause: "Sensor error, temperature fault or flow fault.",
    },

    { 
      faultCode: "2 red flashes",
      faultType: "CODE",
      brand: "Baxi",
      model: "EcoBlue Advance / Ecoblue Regular",
      faultCause: "Boiler overheat tripped",
    },

    { 
      faultCode: "3 red flashes",
      faultType: "CODE",
      brand: "Baxi",
      model: "EcoBlue Advance / Ecoblue Regular",
      faultCause: "Ignition fault. Boiler has attempted to light 5 times and failed.",
    },

    { 
      faultCode: "4 red flashes",
      faultType: "CODE",
      brand: "Baxi",
      model: "EcoBlue Advance / Ecoblue Regular",
      faultCause: "Fan fault",
    },

    { 
      faultCode: "5 red flashes",
      faultType: "CODE",
      brand: "Baxi",
      model: "EcoBlue Advance / Ecoblue Regular",
      faultCause: "Parameter storage unit (PSU) error.",
    },

    { 
      faultCode: "6 red flashes",
      faultType: "CODE",
      brand: "Baxi",
      model: "EcoBlue Advance / Ecoblue Regular",
      faultCause: "Miscellaneous error.",
    },


    //"Baxi Duo-tec/Megaflo Fault Codes"
    { 
      faultCode: "E10",
      faultType: "CODE",
      brand: "Baxi",
      model: "Duo-tec / Megaflo",
      faultCause: "Outdoor sensor fault",
    },

    { 
      faultCode: "E20",
      faultType: "CODE",
      brand: "Baxi",
      model: "Duo-tec / Megaflo",
      faultCause: "Central heating thermistor sensor error",
    },

    { 
      faultCode: "E28",
      faultType: "CODE",
      brand: "Baxi",
      model: "Duo-tec / Megaflo",
      faultCause: "Flue thermistor error",
    },

    { 
      faultCode: "E110",
      faultType: "CODE",
      brand: "Baxi",
      model: "Duo-tec / Megaflo",
      faultCause: "Boiler overheat error",
    },

    { 
      faultCode: "E119",
      faultType: "CODE",
      brand: "Baxi",
      model: "Duo-tec / Megaflo",
      faultCause: "Low water pressure error",
    },

    { 
      faultCode: "E125",
      faultType: "CODE",
      brand: "Baxi",
      model: "Duo-tec / Megaflo",
      faultCause: "Primary water circulation error",
    },

    { 
      faultCode: "E131",
      faultType: "CODE",
      brand: "Baxi",
      model: "Duo-tec / Megaflo",
      faultCause: "Flue overheat lockout error",
    },

    { 
      faultCode: "E133",
      faultType: "CODE",
      brand: "Baxi",
      model: "Duo-tec / Megaflo",
      faultCause: "Ignition error",
    },

    { 
      faultCode: "E160 / E161",
      faultType: "CODE",
      brand: "Baxi",
      model: "Duo-tec / Megaflo",
      faultCause: "Fan error",
    },

    { 
      faultCode: "E164",
      faultType: "CODE",
      brand: "Baxi",
      model: "Duo-tec / Megaflo",
      faultCause: "Pressure sensor fault",
    },

    { 
      faultCode: "E167",
      faultType: "CODE",
      brand: "Baxi",
      model: "Duo-tec / Megaflo",
      faultCause: "Printed circuit board (PCB) error",
    },

    { 
      faultCode: "E168",
      faultType: "CODE",
      brand: "Baxi",
      model: "Duo-tec / Megaflo",
      faultCause: "Printed circuit board (PCB) lockout error",
    },

    { 
      faultCode: "E193",
      faultType: "CODE",
      brand: "Baxi",
      model: "Duo-tec / Megaflo",
      faultCause: "Circulation error",
    },

    //"Baxi 200 / 400 Combi Gas Boiler Fault Codes"
    { 
      faultCode: "H.01 – .0 0",
      faultType: "CODE",
      brand: "Baxi",
      model: "200 / 400 Combi",
      faultCause: "Loss of communication between gas valve and boiler board.\n Possible fault in air/gas unit or loose connection to gas valve.",
    },
    { 
      faultCode: "H.01 – .0 5",
      faultType: "CODE",
      brand: "Baxi",
      model: "200 / 400 Combi",
      faultCause: "Difference between the flow and return temperature is too high, \nsensor error or insufficient circulation.",
    },
    { 
      faultCode: "H.01 – .08",
      faultType: "CODE",
      brand: "Baxi",
      model: "200 / 400 Combi",
      faultCause: "Sensor fault, flow temperature increasing too fast in heating mode or insufficient circulation.",
    },
    { 
      faultCode: "H.01 – .14",
      faultType: "CODE",
      brand: "Baxi",
      model: "200 / 400 Combi",
      faultCause: "Maximum flow temperature value exceeded or insufficient circulation – temporary fault.",
    },
    { 
      faultCode: "H.01 – .18",
      faultType: "CODE",
      brand: "Baxi",
      model: "200 / 400 Combi",
      faultCause: "No water circulation, insufficient circulation or sensor error.",
    },
    { 
      faultCode: "H.01 – .21",
      faultType: "CODE",
      brand: "Baxi",
      model: "200 / 400 Combi",
      faultCause: "Temporary error – flow temperature increasing too fast in domestic hot water (DHW) mode, \ninsufficient circulation or sensor error.",
    },
    { 
      faultCode: "H.02 – .02",
      faultType: "CODE",
      brand: "Baxi",
      model: "200 / 400 Combi",
      faultCause: "Temporary error – no input of parameters C1/C2. Printed circuit board (PCB) not configured.",
    },
    { 
      faultCode: "H.02 – .03",
      faultType: "CODE",
      brand: "Baxi",
      model: "200 / 400 Combi",
      faultCause: "Temporary error- incorrect configuration settings C1/C2.",
    },
    { 
      faultCode: "H.02 – .04",
      faultType: "CODE",
      brand: "Baxi",
      model: "200 / 400 Combi",
      faultCause: "Temporary error- parameter fault. Incorrect parameters.",
    },
    { 
      faultCode: "H.02 – .06",
      faultType: "CODE",
      brand: "Baxi",
      model: "200 / 400 Combi",
      faultCause: "Temporary error caused by system water pressure, water leak on boiler, water leak on system.",
    },
    { 
      faultCode: "H.03 -.00",
      faultType: "CODE",
      brand: "Baxi",
      model: "200 / 400 Combi",
      faultCause: "Temporary error with communication, negative temperature coefficient thermostat (NTC) \nor flue sensor. Sensor could also be unconnected or have a bad connection.",
    },
    { 
      faultCode: "H.03 – .01",
      faultType: "CODE",
      brand: "Baxi",
      model: "200 / 400 Combi",
      faultCause: "Communication error with the printed circuit board (PCB)",
    },
    { 
      faultCode: "H.03 – .02",
      faultType: "CODE",
      brand: "Baxi",
      model: "200 / 400 Combi",
      faultCause: "Flame error – no flame during operation.",
    },
    { 
      faultCode: "E.00 – .04",
      faultType: "CODE",
      brand: "Baxi",
      model: "200 / 400 Combi",
      faultCause: "Return temperature sensor open-circuit. Sensor not or badly connected.",
    },
    { 
      faultCode: "E.00 – .05",
      faultType: "CODE",
      brand: "Baxi",
      model: "200 / 400 Combi",
      faultCause: "Return temperature sensor short-circuit. Sensor not connected or badly connected.",
    },
    { 
      faultCode: "E.01 – .02",
      faultType: "CODE",
      brand: "Baxi",
      model: "200 / 400 Combi",
      faultCause: "Temperature measured by return sensor greater than flow sensor.",
    },
    { 
      faultCode: "E.01 – .04",
      faultType: "CODE",
      brand: "Baxi",
      model: "200 / 400 Combi",
      faultCause: "Loss of flame detected 5 times in 24 hours (with burner on).",
    },
    { 
      faultCode: "E.01 – .11",
      faultType: "CODE",
      brand: "Baxi",
      model: "200 / 400 Combi",
      faultCause: "Incorrect fan speed – external draught over the boiler or defective gas/air unit.",
    },
    { 
      faultCode: "E.01 – .12",
      faultType: "CODE",
      brand: "Baxi",
      model: "200 / 400 Combi",
      faultCause: "Requires reset – temperature measured by return sensor greater than flow temperature.",
    },
    { 
      faultCode: "E.01 – .17",
      faultType: "CODE",
      brand: "Baxi",
      model: "200 / 400 Combi",
      faultCause: "Reset the boiler – no circulation, sensor fault either not connected or has a bad connection.",
    },
    { 
      faultCode: "E.01 – .20",
      faultType: "CODE",
      brand: "Baxi",
      model: "200 / 400 Combi",
      faultCause: "Maximum flue gas temperature reached. No circulation or sensor fault.",
    },
    { 
      faultCode: "E.02 – .00",
      faultType: "CODE",
      brand: "Baxi",
      model: "200 / 400 Combi",
      faultCause: "Reset button has been pressed.",
    },
    { 
      faultCode: "E.02 – .07",
      faultType: "CODE",
      brand: "Baxi",
      model: "200 / 400 Combi",
      faultCause: "No or low system water pressure. system pressure less than 0.5bar",
    },
    { 
      faultCode: "E.02 – .16",
      faultType: "CODE",
      brand: "Baxi",
      model: "200 / 400 Combi",
      faultCause: "Permanent fault caused by channel service unit (CSU) time-out or printed circuit board \n(PCB) damage.",
    },
    { 
      faultCode: "E.02 – .17",
      faultType: "CODE",
      brand: "Baxi",
      model: "200 / 400 Combi",
      faultCause: "Loss of communication between gas valve and boiler printed circuit board (PCB) \nor fault in air/gas unit.",
    },
    { 
      faultCode: "E.02 – .19",
      faultType: "CODE",
      brand: "Baxi",
      model: "200 / 400 Combi",
      faultCause: "Jumper 1 changed – check position of jumper 1.",
    },
    { 
      faultCode: "E.02 – .20",
      faultType: "CODE",
      brand: "Baxi",
      model: "200 / 400 Combi",
      faultCause: "Jumper 2 changed – check position of jumper 2.",
    },
    { 
      faultCode: "E.02 – .21",
      faultType: "CODE",
      brand: "Baxi",
      model: "200 / 400 Combi",
      faultCause: "Jumper 3 changed – check position of jumper 3.",
    },
    { 
      faultCode: "E.02 – .47",
      faultType: "CODE",
      brand: "Baxi",
      model: "200 / 400 Combi",
      faultCause: "Wiring to external device error.",
    },
    { 
      faultCode: "E.02 – .48",
      faultType: "CODE",
      brand: "Baxi",
      model: "200 / 400 Combi",
      faultCause: "Configuration to external device unsuccessful – check pairing to external device.",
    },
    { 
      faultCode: "E.04 – .00",
      faultType: "CODE",
      brand: "Baxi",
      model: "200 / 400 Combi",
      faultCause: "Gas valve error – gas valve not detected.",
    },
    { 
      faultCode: "E.04 – .01",
      faultType: "CODE",
      brand: "Baxi",
      model: "200 / 400 Combi",
      faultCause: "Flow temperature sensor short-circuited. Sensor not or badly connected, bad connection \nor sensor fault.",
    },
    { 
      faultCode: "E.04 – .02",
      faultType: "CODE",
      brand: "Baxi",
      model: "200 / 400 Combi",
      faultCause: "Permanent fault. Flow temperature sensor open-circuited, sensor not or badly connected, \nbad connection or sensor fault.",
    },
    { 
      faultCode: "E.04 – .03",
      faultType: "CODE",
      brand: "Baxi",
      model: "200 / 400 Combi",
      faultCause: "Permanent fault. Critical flow temperature reached, non-existent or insufficient circulation.",
    },
    { 
      faultCode: "E.04 – .04",
      faultType: "CODE",
      brand: "Baxi",
      model: "200 / 400 Combi",
      faultCause: "Permanent fault. Flue temperature sensor short-circuited, sensor not or badly connected, \nbad connection or sensor fault.",
    },
    { 
      faultCode: "E.04 – .05",
      faultType: "CODE",
      brand: "Baxi",
      model: "200 / 400 Combi",
      faultCause: "Permanent fault. Flue temperature sensor short-circuited, sensor not or badly connected, \nbad connection or sensor fault.",
    },
    { 
      faultCode: "E.04 – .06",
      faultType: "CODE",
      brand: "Baxi",
      model: "200 / 400 Combi",
      faultCause: "Permanent fault. Critical flue gas temperature value reached, no circulation or sensor fault.",
    },
    { 
      faultCode: "E.04 – .08",
      faultType: "CODE",
      brand: "Baxi",
      model: "200 / 400 Combi",
      faultCause: "Permanent fault. Maximum safe temperature value reached, safety thermostat open-circuited, \nno circulation, sensor not or badly connected, bad connection or sensor fault.",
    },
    { 
      faultCode: "E.04 – .10",
      faultType: "CODE",
      brand: "Baxi",
      model: "200 / 400 Combi",
      faultCause: "Failure to light (could be gas supply issue).",
    },
    { 
      faultCode: "E.04 – .12",
      faultType: "CODE",
      brand: "Baxi",
      model: "200 / 400 Combi",
      faultCause: "Permanent fault. False flame signal, short-term fluctuation of the mains, ionization current\n present even though there is no flame, the burner remains very hot (CO2 too high) or defective \ngas/air unit.",
    },
    { 
      faultCode: "E.04 – .13",
      faultType: "CODE",
      brand: "Baxi",
      model: "200 / 400 Combi",
      faultCause: "Permanent fault. Fan rotor blocked, fan seized or wiring to fan damaged.",
    },
    { 
      faultCode: "E.04 – .17",
      faultType: "CODE",
      brand: "Baxi",
      model: "200 / 400 Combi",
      faultCause: "Permanent fault. Problem with gas valve or defective gas/air unit.",
    },


    //"Baxi 600 Combi Gas Boiler Fault Codes"
    { 
      faultCode: "E09",
      faultType: "CODE",
      brand: "Baxi",
      model: "600 Combi",
      faultCause: "Gas valve connection cable.",
    },
    { 
      faultCode: "E10",
      faultType: "CODE",
      brand: "Baxi",
      model: "600 Combi",
      faultCause: "External probe fault.",
    },
    { 
      faultCode: "E12",
      faultType: "CODE",
      brand: "Baxi",
      model: "600 Combi",
      faultCause: "Differential water flow switch fault (still open).",
    },
    { 
      faultCode: "E13",
      faultType: "CODE",
      brand: "Baxi",
      model: "600 Combi",
      faultCause: "Differential water flow switch fault (still closed).",
    },
    { 
      faultCode: "E15",
      faultType: "CODE",
      brand: "Baxi",
      model: "600 Combi",
      faultCause: "Gas valve command fault.",
    },
    { 
      faultCode: "E20",
      faultType: "CODE",
      brand: "Baxi",
      model: "600 Combi",
      faultCause: "Central heating negative temperature coefficient (NTC) thermostat fault.",
    },
    { 
      faultCode: "E28",
      faultType: "CODE",
      brand: "Baxi",
      model: "600 Combi",
      faultCause: "Flue negative temperature coefficient (NTC) thermostat fault.",
    },
    { 
      faultCode: "E40",
      faultType: "CODE",
      brand: "Baxi",
      model: "600 Combi",
      faultCause: "Central heating return negative temperature coefficient (NTC) thermostat fault.",
    },
    { 
      faultCode: "E50",
      faultType: "CODE",
      brand: "Baxi",
      model: "600 Combi",
      faultCause: "Domestic hot water (DHW) negative temperature coefficient (NTC) thermostat sensor fault \n(tank boiler) (s.c.) or DHW NTC sensor fault (tank boiler) (o.c.).",
    },
    { 
      faultCode: "E83/E84/E85/E86/E87",
      faultType: "CODE",
      brand: "Baxi",
      model: "600 Combi",
      faultCause: "No communication.",
    },
    { 
      faultCode: "E109",
      faultType: "CODE",
      brand: "Baxi",
      model: "600 Combi",
      faultCause: "Pre-circulation fault.",
    },
    { 
      faultCode: "E110",
      faultType: "CODE",
      brand: "Baxi",
      model: "600 Combi",
      faultCause: "Boiler max temperature exceeded for gradient (probable pump jammed or air in the circuit \nBoiler max temperature exceeded for overtemperature (probable pump jammed or air in the \ncircuit Safety thermostat sensor tripped.",
    },
    { 
      faultCode: "E118",
      faultType: "CODE",
      brand: "Baxi",
      model: "600 Combi",
      faultCause: "Primary system water pressure too low (< 0.5 bar).",
    },
    { 
      faultCode: "E125",
      faultType: "CODE",
      brand: "Baxi",
      model: "600 Combi",
      faultCause: "Circulation fault (primary).",
    },
    { 
      faultCode: "E128",
      faultType: "CODE",
      brand: "Baxi",
      model: "600 Combi",
      faultCause: "Frequent flame failure (12 times).",
    },
    { 
      faultCode: "E129",
      faultType: "CODE",
      brand: "Baxi",
      model: "600 Combi",
      faultCause: "Safety error for frequently loss of flame with max correction during the ignition during\n Calibration Function.",
    },
    { 
      faultCode: "E130",
      faultType: "CODE",
      brand: "Baxi",
      model: "600 Combi",
      faultCause: "Flue thermostat sensor tripped (lockout).",
    },
    { 
      faultCode: "E133",
      faultType: "CODE",
      brand: "Baxi",
      model: "600 Combi",
      faultCause: "Failure to light (could be a gas supply issue).",
    },
    { 
      faultCode: "E134",
      faultType: "CODE",
      brand: "Baxi",
      model: "600 Combi",
      faultCause: "Elapsed time gas valve open without gas\n(short request in a short period)",
    },
    { 
      faultCode: "E135",
      faultType: "CODE",
      brand: "Baxi",
      model: "600 Combi",
      faultCause: "Interruption of gas supply (internal error).",
    },
    { 
      faultCode: "E154",
      faultType: "CODE",
      brand: "Baxi",
      model: "600 Combi",
      faultCause: "Flow/return sensor temperature test.",
    },
    { 
      faultCode: "E160",
      faultType: "CODE",
      brand: "Baxi",
      model: "600 Combi",
      faultCause: "Fan or fan wiring fault.",
    },
    { 
      faultCode: "E163",
      faultType: "CODE",
      brand: "Baxi",
      model: "600 Combi",
      faultCause: "Domestic hot water (DHW) negative temperature coefficient (NTC) thermostat sensor fault (s.c.)\n or DHW NTC sensor fault (o.c.).",
    },
    { 
      faultCode: "E270",
      faultType: "CODE",
      brand: "Baxi",
      model: "600 Combi",
      faultCause: "Circulation fault (dry fire).",
    },
    { 
      faultCode: "E317",
      faultType: "CODE",
      brand: "Baxi",
      model: "600 Combi",
      faultCause: "Wrong power supply electrical frequency (Hz).",
    },
    { 
      faultCode: "E321",
      faultType: "CODE",
      brand: "Baxi",
      model: "600 Combi",
      faultCause: "Hot water negative temperature coefficient (NTC) fault.",
    },
    { 
      faultCode: "E384",
      faultType: "CODE",
      brand: "Baxi",
      model: "600 Combi",
      faultCause: "False flame.",
    },
    { 
      faultCode: "E385",
      faultType: "CODE",
      brand: "Baxi",
      model: "600 Combi",
      faultCause: "Under voltage.",
    },
    { 
      faultCode: "E430",
      faultType: "CODE",
      brand: "Baxi",
      model: "600 Combi",
      faultCause: "Water pressure temporary test.",
    },
    { 
      faultCode: "E430 + Flame ‘crossed’",
      faultType: "CODE",
      brand: "Baxi",
      model: "600 Combi",
      faultCause: "Water pressure test failed.",
    },


    //"Baxi Main Eco Fault Codes"
    { 
      faultCode: "1 Green Flash",
      faultType: "CODE",
      brand: "Baxi",
      model: "Main Eco",
      faultCause: "Boiler temperature reached – no action required",
    },
    { 
      faultCode: "3 Green Flashes",
      faultType: "CODE",
      brand: "Baxi",
      model: "Main Eco",
      faultCause: "Temporary flame loss – this is a temporary error, the system should reset on its own",
    },
    { 
      faultCode: "4 Green Flashes",
      faultType: "CODE",
      brand: "Baxi",
      model: "Main Eco",
      faultCause: "Communication error between printed circuit board (PCB) and Control – this is a temporary \nerror, the system should reset on its own",
    },
    { 
      faultCode: "5 Green Flashes",
      faultType: "CODE",
      brand: "Baxi",
      model: "Main Eco",
      faultCause: "Parameter error on parameter storage unit (PSU) or printed circuit board (PCB) – this is a \ntemporary error, the system should reset on its own.",
    },
    { 
      faultCode: "6 Green Flashes",
      faultType: "CODE",
      brand: "Baxi",
      model: "Main Eco",
      faultCause: "Miscellaneous error",
    },
    { 
      faultCode: "1 Red Flash",
      faultType: "CODE",
      brand: "Baxi",
      model: "Main Eco",
      faultCause: "Sensor error, sensor fault, temperature fault or flow fault – this is a temporary error, the system \nshould reset on it’s own.",
    },
    { 
      faultCode: "2 Red Flashes",
      faultType: "CODE",
      brand: "Baxi",
      model: "Main Eco",
      faultCause: "Boiler overheat tripped",
    },
    { 
      faultCode: "3 Red Flashes",
      faultType: "CODE",
      brand: "Baxi",
      model: "Main Eco",
      faultCause: "Ignition fault. Boiler has attempted to light 5 times and failed",
    },
    { 
      faultCode: "4 Red Flashes",
      faultType: "CODE",
      brand: "Baxi",
      model: "Main Eco",
      faultCause: "Fan Fault",
    },
    { 
      faultCode: "5 Red Flashes",
      faultType: "CODE",
      brand: "Baxi",
      model: "Main Eco",
      faultCause: "Parameter storage unit (PSU) error",
    },
    { 
      faultCode: "6 Red Flashes",
      faultType: "CODE",
      brand: "Baxi",
      model: "Main Eco",
      faultCause: "Miscellaneous",
    },


    //"Baxi Avanta Range Fault Codes"
    { 
      faultCode: "E0",
      faultType: "CODE",
      brand: "Baxi",
      model: "Avanta",
      faultCause: "Temperature sensor fault",
    },
    { 
      faultCode: "E1",
      faultType: "CODE",
      brand: "Baxi",
      model: "Avanta",
      faultCause: "Overheated – try bleeding your radiators",
    },
    { 
      faultCode: "E2",
      faultType: "CODE",
      brand: "Baxi",
      model: "Avanta",
      faultCause: "Poor circulation – try bleeding your radiators",
    },
    { 
      faultCode: "E3",
      faultType: "CODE",
      brand: "Baxi",
      model: "Avanta",
      faultCause: "Printed circuit board (PCB) fault",
    },
    { 
      faultCode: "E4",
      faultType: "CODE",
      brand: "Baxi",
      model: "Avanta",
      faultCause: "Ignition failure – try bleeding your radiators",
    },
    { 
      faultCode: "E10",
      faultType: "CODE",
      brand: "Baxi",
      model: "Avanta",
      faultCause: "Poor/No circulation",
    },
    { 
      faultCode: "E12",
      faultType: "CODE",
      brand: "Baxi",
      model: "Avanta",
      faultCause: "Printed circuit board (PCB) Fault",
    },
    { 
      faultCode: "E13",
      faultType: "CODE",
      brand: "Baxi",
      model: "Avanta",
      faultCause: "Heat exchanger thermal fuse tripped",
    },
    { 
      faultCode: "E83 / 84 / 85 / 86 / 87",
      faultType: "CODE",
      brand: "Baxi",
      model: "Avanta",
      faultCause: "Fan fault normally E8",
    },


    //"Baxi GA Range Fault Codes"
    { 
      faultCode: "E53",
      faultType: "CODE",
      brand: "Baxi",
      model: "GA",
      faultCause: "Poor combustion – flue terminal may be blocked",
    },
    { 
      faultCode: "E110",
      faultType: "CODE",
      brand: "Baxi",
      model: "GA",
      faultCause: "Overheated – try bleeding your radiators",
    },
    { 
      faultCode: "E117",
      faultType: "CODE",
      brand: "Baxi",
      model: "GA",
      faultCause: "System water pressure high – try bleeding water from your radiators",
    },
    { 
      faultCode: "E118",
      faultType: "CODE",
      brand: "Baxi",
      model: "GA",
      faultCause: "System water pressure low",
    },
    { 
      faultCode: "E125",
      faultType: "CODE",
      brand: "Baxi",
      model: "GA",
      faultCause: "Overheat – try bleeding your radiators",
    },
    { 
      faultCode: "E133",
      faultType: "CODE",
      brand: "Baxi",
      model: "GA",
      faultCause: "Gas supply fault",
    },
    { 
      faultCode: "E4",
      faultType: "CODE",
      brand: "Baxi",
      model: "GA",
      faultCause: "Ignition failure",
    },
    { 
      faultCode: "E09",
      faultType: "CODE",
      brand: "Baxi",
      model: "GA",
      faultCause: "Gas valve wiring fault",
    },
    { 
      faultCode: "E10",
      faultType: "CODE",
      brand: "Baxi",
      model: "GA",
      faultCause: "Outdoor sensor error",
    },
    {
    faultCode: "E15",
    faultType: "CODE",
    brand: "Baxi",
    model: "GA",
    faultCause: "Gas valve connection fault"
    },

    { 
      faultCode: "E20",
      faultType: "CODE",
      brand: "Baxi",
      model: "GA",
      faultCause: "Central heating thermistor sensor fault",
    },
    { 
      faultCode: "E28",
      faultType: "CODE",
      brand: "Baxi",
      model: "GA",
      faultCause: "Flue thermistor fault",
    },
    { 
      faultCode: "E40",
      faultType: "CODE",
      brand: "Baxi",
      model: "GA",
      faultCause: "Central heating return thermistor fault",
    },
    { 
      faultCode: "E53",
      faultType: "CODE",
      brand: "Baxi",
      model: "GA",
      faultCause: "Flue obstruction",
    },
    { 
      faultCode: "E55",
      faultType: "CODE",
      brand: "Baxi",
      model: "GA",
      faultCause: "Calibration required",
    },
    { 
      faultCode: "E78",
      faultType: "CODE",
      brand: "Baxi",
      model: "GA",
      faultCause: "Water pressure sensor fault",
    },
    { 
      faultCode: "E92",
      faultType: "CODE",
      brand: "Baxi",
      model: "GA",
      faultCause: "Combustion test alarm during auto-setting",
    },
    { 
      faultCode: "E109",
      faultType: "CODE",
      brand: "Baxi",
      model: "GA",
      faultCause: "Poor circulation",
    },
    { 
      faultCode: "E110",
      faultType: "CODE",
      brand: "Baxi",
      model: "GA",
      faultCause: "Boiler overheat tripped",
    },
    { 
      faultCode: "E117",
      faultType: "CODE",
      brand: "Baxi",
      model: "GA",
      faultCause: "System pressure high (>2.9 Bar)",
    },
    { 
      faultCode: "E118",
      faultType: "CODE",
      brand: "Baxi",
      model: "GA",
      faultCause: "System pressure low(< 0.5bar)",
    },
    { 
      faultCode: "E125",
      faultType: "CODE",
      brand: "Baxi",
      model: "GA",
      faultCause: "Primary water circulation fault",
    },
    { 
      faultCode: "E128",
      faultType: "CODE",
      brand: "Baxi",
      model: "GA",
      faultCause: "Loss of flame during operation",
    },
    { 
      faultCode: "E129",
      faultType: "CODE",
      brand: "Baxi",
      model: "GA",
      faultCause: "Loss of flame during calibration",
    },
    { 
      faultCode: "E133",
      faultType: "CODE",
      brand: "Baxi",
      model: "GA",
      faultCause: "Ignition fault",
    },
    { 
      faultCode: "E135",
      faultType: "CODE",
      brand: "Baxi",
      model: "GA",
      faultCause: "Internal error",
    },
    { 
      faultCode: "E154",
      faultType: "CODE",
      brand: "Baxi",
      model: "GA",
      faultCause: "Primary flow fault",
    },
    { 
      faultCode: "E160",
      faultType: "CODE",
      brand: "Baxi",
      model: "GA",
      faultCause: "Fan fault",
    },
    { 
      faultCode: "E270",
      faultType: "CODE",
      brand: "Baxi",
      model: "GA",
      faultCause: "Dry fire",
    },
    { 
      faultCode: "E317",
      faultType: "CODE",
      brand: "Baxi",
      model: "GA",
      faultCause: "Wrong power supply (Hz)",
    },
    { 
      faultCode: "E321",
      faultType: "CODE",
      brand: "Baxi",
      model: "GA",
      faultCause: "Not water thermistor fault",
    },
    { 
      faultCode: "E384",
      faultType: "CODE",
      brand: "Baxi",
      model: "GA",
      faultCause: "Flame detected when gas valve off",
    },
    { 
      faultCode: "E385",
      faultType: "CODE",
      brand: "Baxi",
      model: "GA",
      faultCause: "Low voltage (less than 195v)",
    },


    //"Baxi Solo Fault Codes"
    { 
      faultCode: "FLASH FLASH ON",
      faultType: "LED",
      brand: "Baxi",
      model: "Solo",
      faultCause: "Fan error",
    },
    { 
      faultCode: "FLASH OFF FLASH",
      faultType: "LED",
      brand: "Baxi",
      model: "Solo",
      faultCause: "Voltage less than 180V",
    },
    { 
      faultCode: "FLASH OFF ON",
      faultType: "LED",
      brand: "Baxi",
      model: "Solo",
      faultCause: "Overheat lockout",
    },
    { 
      faultCode: "FLASH ON FLASH",
      faultType: "LED",
      brand: "Baxi",
      model: "Solo",
      faultCause: "Printed circuit board (PCB) error",
    },
    { 
      faultCode: "FLASH ON ON",
      faultType: "LED",
      brand: "Baxi",
      model: "Solo",
      faultCause: "Printed circuit board (PCB) fault",
    },
    { 
      faultCode: "OFF OFF OFF",
      faultType: "LED",
      brand: "Baxi",
      model: "Solo",
      faultCause: "No power",
    },
    { 
      faultCode: "ON FLASH FLASH",
      faultType: "LED",
      brand: "Baxi",
      model: "Solo",
      faultCause: "Circulation error or dry fire",
    },
    { 
      faultCode: "ON FLASH ON",
      faultType: "LED",
      brand: "Baxi",
      model: "Solo",
      faultCause: "Thermistor error",
    },
    { 
      faultCode: "ON OFF FLASH",
      faultType: "LED",
      brand: "Baxi",
      model: "Solo",
      faultCause: "Live and neutral reversed error",
    },
    { 
      faultCode: "ON OFF ON",
      faultType: "LED",
      brand: "Baxi",
      model: "Solo",
      faultCause: "Ignition lockout error",
    },
    { 
      faultCode: "ON ON FLASH",
      faultType: "LED",
      brand: "Baxi",
      model: "Solo",
      faultCause: "Printed circuit board (PCB) error",
    },
    { 
      faultCode: "ON ON ON",
      faultType: "LED",
      brand: "Baxi",
      model: "Solo",
      faultCause: "Low voltage wiring harness error",
    },
    {
    faultCode: "Error Code E133 and E28",
    faultType: "CODE",
    brand: "Baxi",
    model: "Solo",
    faultCause: "Condensate \npipe being frozen."
    }
  ]
}
