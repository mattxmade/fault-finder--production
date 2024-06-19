import { nanoid } from "nanoid"
import { BrandItem } from "../../../types"

// "Potterton Boiler Fault Codes"

export const brand_potterton: BrandItem = {
  id: nanoid(),
  name: "Potterton",

  info: {
    website: "",
    manual: { page: 0, link: "" },
  },

  hasIcon: false,
  hasFlash: false,
  hasFaultCode: true,
  hasFaultNote: false,

  faultCodes: [
    //"Promax Combi, System, and Store Fault Codes"
    {
      brand: "Potterton",
      model: "Promax Combi System Store",
      faultType: "CODE",
      faultCode: "E10",
      faultCause: "Outdoor sensor error"
    },
    {
      brand: "Potterton",
      model: "Promax Combi System Store",
      faultType: "CODE",
      faultCode: "E20",
      faultCause: "Central heating thermistor sensor fault"
    },
    {
      brand: "Potterton",
      model: "Promax Combi System Store",
      faultType: "CODE",
      faultCode: "E28",
      faultCause: "Flue thermistor fault"
    },
    {
      brand: "Potterton",
      model: "Promax Combi System Store",
      faultType: "CODE",
      faultCode: "E50",
      faultCause: "Domestic hot water sensor fault"
    },
    {
      brand: "Potterton",
      model: "Promax Combi System Store",
      faultType: "CODE",
      faultCode: "E110",
      faultCause: "Boiler overheat tripped"
    },
    {
      brand: "Potterton",
      model: "Promax Combi System Store",
      faultType: "CODE",
      faultCode: "E119",
      faultCause: "System pressure too low"
    },
    {
      brand: "Potterton",
      model: "Promax Combi System Store",
      faultType: "CODE",
      faultCode: "E125",
      faultCause: "Primary water circulation fault"
    },
    {
      brand: "Potterton",
      model: "Promax Combi System Store",
      faultType: "CODE",
      faultCode: "E130",
      faultCause: "Flue thermostat sensor tripped (lockout)"
    },
    {
      brand: "Potterton",
      model: "Promax Combi System Store",
      faultType: "CODE",
      faultCode: "E131",
      faultCause: "Flue overheat lockout"
    },
    {
      brand: "Potterton",
      model: "Promax Combi System Store",
      faultType: "CODE",
      faultCode: "E133",
      faultCause: "Ignition fault"
    },
    {
      brand: "Potterton",
      model: "Promax Combi System Store",
      faultType: "CODE",
      faultCode: "E151",
      faultCause: "Printed circuit board (PCB) error"
    },
    {
      brand: "Potterton",
      model: "Promax Combi System Store",
      faultType: "CODE",
      faultCode: "E152",
      faultCause: "PCB error"
    },
    {
      brand: "Potterton",
      model: "Promax Combi System Store",
      faultType: "CODE",
      faultCode: "E160",
      faultCause: "Fan fault"
    },
    {
      brand: "Potterton",
      model: "Promax Combi System Store",
      faultType: "CODE",
      faultCode: "E161",
      faultCause: "Fan fault"
    },
    {
      brand: "Potterton",
      model: "Promax Combi System Store",
      faultType: "CODE",
      faultCode: "E164",
      faultCause: "Domestic hot water sensor error – could be a heating flow switch error)"
    },
    {
      brand: "Potterton",
      model: "Promax Combi System Store",
      faultType: "CODE",
      faultCode: "E167",
      faultCause: "Printed circuit board (PCB) fault"
    },
    {
      brand: "Potterton",
      model: "Promax Combi System Store",
      faultType: "CODE",
      faultCode: "E168",
      faultCause: "Printed circuit board (PCB) lockout"
    },
    {
      brand: "Potterton",
      model: "Promax Combi System Store",
      faultType: "CODE",
      faultCode: "E193",
      faultCause: "Circulation"
    },

    //"Potterton Promax Ultra, Gold / Titanium Combi & System Boiler Fault Codes"
    {
      brand: "Potterton",
      model: "Promax Ultra, Gold / Titanium Combi & System",
      faultType: "CODE",
      faultCode: "E10",
      faultCause: "Outdoor sensor error"
    },
    {
      brand: "Potterton",
      model: "Promax Ultra, Gold / Titanium Combi & System",
      faultType: "CODE",
      faultCode: "E09",
      faultCause: "Gas valve wiring fault"
    },
    {
      brand: "Potterton",
      model: "Promax Ultra, Gold / Titanium Combi & System",
      faultType: "CODE",
      faultCode: "E10",
      faultCause: "Outdoor sensor error"
    },
    {
      brand: "Potterton",
      model: "Promax Ultra, Gold / Titanium Combi & System",
      faultType: "CODE",
      faultCode: "E15",
      faultCause: "Gas valve connection fault"
    },
    {
      brand: "Potterton",
      model: "Promax Ultra, Gold / Titanium Combi & System",
      faultType: "CODE",
      faultCode: "E20",
      faultCause: "Central heating thermistor sensor fault"
    },
    {
      brand: "Potterton",
      model: "Promax Ultra, Gold / Titanium Combi & System",
      faultType: "CODE",
      faultCode: "E28",
      faultCause: "Flue thermistor fault"
    },
    {
      brand: "Potterton",
      model: "Promax Ultra, Gold / Titanium Combi & System",
      faultType: "CODE",
      faultCode: "E40",
      faultCause: "Central heating return thermistor fault"
    },
    {
      brand: "Potterton",
      model: "Promax Ultra, Gold / Titanium Combi & System",
      faultType: "CODE",
      faultCode: "E50",
      faultCause: "Domestic hot water sensor fault"
    },
    {
      brand: "Potterton",
      model: "Promax Ultra, Gold / Titanium Combi & System",
      faultType: "CODE",
      faultCode: "E53",
      faultCause: "Flue obstruction"
    },
    {
      brand: "Potterton",
      model: "Promax Ultra, Gold / Titanium Combi & System",
      faultType: "CODE",
      faultCode: "E55",
      faultCause: "Calibration required"
    },
    {
      brand: "Potterton",
      model: "Promax Ultra, Gold / Titanium Combi & System",
      faultType: "CODE",
      faultCode: "E78",
      faultCause: "Water pressure sensor fault"
    },
    {
      brand: "Potterton",
      model: "Promax Ultra, Gold / Titanium Combi & System",
      faultType: "CODE",
      faultCode: "E83 / 84 / 85 / 86 / 87",
      faultCause: "No communication between room controller and boiler"
    },
    {
      brand: "Potterton",
      model: "Promax Ultra, Gold / Titanium Combi & System",
      faultType: "CODE",
      faultCode: "E92",
      faultCause: "Combustion test alarm during auto-setting"
    },
    {
      brand: "Potterton",
      model: "Promax Ultra, Gold / Titanium Combi & System",
      faultType: "CODE",
      faultCode: "E109",
      faultCause: "Poor circulation"
    },
    {
      brand: "Potterton",
      model: "Promax Ultra, Gold / Titanium Combi & System",
      faultType: "CODE",
      faultCode: "E110",
      faultCause: "Boiler overheat tripped"
    },
    {
      brand: "Potterton",
      model: "Promax Ultra, Gold / Titanium Combi & System",
      faultType: "CODE",
      faultCode: "E117",
      faultCause: "System pressure too high (>2.9 bar)"
    },
    {
      brand: "Potterton",
      model: "Promax Ultra, Gold / Titanium Combi & System",
      faultType: "CODE",
      faultCode: "E118",
      faultCause: "System pressure too low"
    },
    {
      brand: "Potterton",
      model: "Promax Ultra, Gold / Titanium Combi & System",
      faultType: "CODE",
      faultCode: "E125",
      faultCause: "Primary water circulation fault"
    },
    {
      brand: "Potterton",
      model: "Promax Ultra, Gold / Titanium Combi & System",
      faultType: "CODE",
      faultCode: "E128",
      faultCause: "Loss of flame during operation"
    },
    {
      brand: "Potterton",
      model: "Promax Ultra, Gold / Titanium Combi & System",
      faultType: "CODE",
      faultCode: "E129",
      faultCause: "Loss of flame during calibration"
    },
    {
      brand: "Potterton",
      model: "Promax Ultra, Gold / Titanium Combi & System",
      faultType: "CODE",
      faultCode: "E130",
      faultCause: "Flue thermostat sensor tripped (lockout)"
    },
    {
      brand: "Potterton",
      model: "Promax Ultra, Gold / Titanium Combi & System",
      faultType: "CODE",
      faultCode: "E133",
      faultCause: "Ignition fault"
    },
    {
      brand: "Potterton",
      model: "Promax Ultra, Gold / Titanium Combi & System",
      faultType: "CODE",
      faultCode: "E135",
      faultCause: "Internal error"
    },
    {
      brand: "Potterton",
      model: "Promax Ultra, Gold / Titanium Combi & System",
      faultType: "CODE",
      faultCode: "E154",
      faultCause: "Primary flow fault"
    },
    {
      brand: "Potterton",
      model: "Promax Ultra, Gold / Titanium Combi & System",
      faultType: "CODE",
      faultCode: "E160",
      faultCause: "Fan fault"
    },
    {
      brand: "Potterton",
      model: "Promax Ultra, Gold / Titanium Combi & System",
      faultType: "CODE",
      faultCode: "E270",
      faultCause: "Dry fire"
    },
    {
      brand: "Potterton",
      model: "Promax Ultra, Gold / Titanium Combi & System",
      faultType: "CODE",
      faultCode: "E317",
      faultCause: "Wrong power supply (HZ)"
    },
    {
      brand: "Potterton",
      model: "Promax Ultra, Gold / Titanium Combi & System",
      faultType: "CODE",
      faultCode: "E321",
      faultCause: "Hot water thermistor fault"
    },
    {
      brand: "Potterton",
      model: "Promax Ultra, Gold / Titanium Combi & System",
      faultType: "CODE",
      faultCode: "E384",
      faultCause: "Flame detected when gas valve off (false flame)"
    },
    {
      brand: "Potterton",
      model: "Promax Ultra, Gold / Titanium Combi & System",
      faultType: "CODE",
      faultCode: "E385",
      faultCause: "Low voltage (less than 195v)"
    },

    //"Potterton Assure Combi Boiler Fault Codes"
    {
      brand: "Potterton",
      model: "Assure Combi",
      faultType: "CODE",
      faultCode: "E09",
      faultCause: "Gas valve connection cable fault"
    },
    {
      brand: "Potterton",
      model: "Assure Combi",
      faultType: "CODE",
      faultCode: "E10",
      faultCause: "Gas valve connection cable fault",
    },
    {
      brand: "Potterton",
      model: "Assure Combi",
      faultType: "CODE",
      faultCode: "E11",
      faultCause: "External probe fault",
    },
    {
      brand: "Potterton",
      model: "Assure Combi",
      faultType: "CODE",
      faultCode: "E12",
      faultCause: "Differential water flow switch is still open"
    },
    {
      brand: "Potterton",
      model: "Assure Combi",
      faultType: "CODE",
      faultCode: "E13",
      faultCause: "Differential water flow switch is still closed"
    },
    {
      brand: "Potterton",
      model: "Assure Combi",
      faultType: "CODE",
      faultCode: "E15",
      faultCause: "fault with the gas valve command"
    },
    {
      brand: "Potterton",
      model: "Assure Combi",
      faultType: "CODE",
      faultCode: "E20",
      faultCause: "Central heating NTC fault"
    },
    {
      brand: "Potterton",
      model: "Assure Combi",
      faultType: "CODE",
      faultCode: "E28",
      faultCause: "Flue NTC fault"
    },
    {
      brand: "Potterton",
      model: "Assure Combi",
      faultType: "CODE",
      faultCode: "E40",
      faultCause: "Central heating return NTC fault"
    },
    {
      brand: "Potterton",
      model: "Assure Combi",
      faultType: "CODE",
      faultCode: "E50",
      faultCause: "Domestic hot water (DHW) Negative Temperature Coefficient (NTC) sensor \n(tank boiler) (s.c) or DHW NTC sensor (tank boiler) (o.c.) fault"
    },
    {
      brand: "Potterton",
      model: "Assure Combi",
      faultType: "CODE",
      faultCode: "E83 / E84 / E85 / E86 / E87",
      faultCause: "Communication error"
    },
    {
      brand: "Potterton",
      model: "Assure Combi",
      faultType: "CODE",
      faultCode: "E109",
      faultCause: "Pre-circulation fault"
    },
    {
      brand: "Potterton",
      model: "Assure Combi",
      faultType: "CODE",
      faultCode: "E110",
      faultCause: "Boiler max temperature exceeded for gradient (or overtemperature) \n– Probably a jammed pump, air in the circuit or safety thermostat sensor\n tripped"
    },
    {
      brand: "Potterton",
      model: "Assure Combi",
      faultType: "CODE",
      faultCode: "E118",
      faultCause: "Primary system water pressure too low"
    },
    {
      brand: "Potterton",
      model: "Assure Combi",
      faultType: "CODE",
      faultCode: "E125",
      faultCause: "Primary circulation fault"
    },
    {
      brand: "Potterton",
      model: "Assure Combi",
      faultType: "CODE",
      faultCode: "E128",
      faultCause: "Flame failure (12 times)"
    },
    {
      brand: "Potterton",
      model: "Assure Combi",
      faultType: "CODE",
      faultCode: "E129",
      faultCause: "Frequent loss of flame (safety error )"
    },
    {
      brand: "Potterton",
      model: "Assure Combi",
      faultType: "CODE",
      faultCode: "E130",
      faultCause: "Flue thermostat sensor tripped and locked out"
    },
    {
      brand: "Potterton",
      model: "Assure Combi",
      faultType: "CODE",
      faultCode: "E133",
      faultCause: "Possible gas supply issue (failure to light)."
    },
    {
      brand: "Potterton",
      model: "Assure Combi",
      faultType: "CODE",
      faultCode: "E134",
      faultCause: "Elapsed time gas valve open without gas",
    },
    {
      brand: "Potterton",
      model: "Assure Combi",
      faultType: "CODE",
      faultCode: "E135",
      faultCause: "Internal error (interruption of gas supply)"
    },
    {
      brand: "Potterton",
      model: "Assure Combi",
      faultType: "CODE",
      faultCode: "E154",
      faultCause: "Flow/return sensor temperature test"
    },
    {
      brand: "Potterton",
      model: "Assure Combi",
      faultType: "CODE",
      faultCode: "E160",
      faultCause: "Problem with fan (possible wiring fault)"
    },
    {
      brand: "Potterton",
      model: "Assure Combi",
      faultType: "CODE",
      faultCode: "E163",
      faultCause: "Domestic hot water (DHW) Negative thermistor coefficient (NTC) sensor \n(s.c.) or (o.c.) fault"
    },
    {
      brand: "Potterton",
      model: "Assure Combi",
      faultType: "CODE",
      faultCode: "E270",
      faultCause: "Dry fire"
    },
    {
      brand: "Potterton",
      model: "Assure Combi",
      faultType: "CODE",
      faultCode: "E317",
      faultCause: "Wrong power supply (HZ)"
    },
    {
      brand: "Potterton",
      model: "Assure Combi",
      faultType: "CODE",
      faultCode: "E321",
      faultCause: "Hot water fault"
    },
    {
      brand: "Potterton",
      model: "Assure Combi",
      faultType: "CODE",
      faultCode: "E384",
      faultCause: "False flame"
    },
    {
      brand: "Potterton",
      model: "Assure Combi",
      faultType: "CODE",
      faultCode: "E385",
      faultCause: "Under voltage"
    },
    {
      brand: "Potterton",
      model: "Assure Combi",
      faultType: "CODE",
      faultCode: "E430",
      faultCause: "Water pressure test"
    },
    {
      brand: "Potterton",
      model: "Assure Combi",
      faultType: "CODE",
      faultCode: "E430 + Flame crossed",
      faultCause: "Water pressure test failed"
    },
  ]
}