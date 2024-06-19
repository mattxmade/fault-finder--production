import { nanoid } from "nanoid"
import { BrandItem } from "../../../types"

"Valiant Boiler Fault Codes"

export const brand_vaillant: BrandItem = {
  id: nanoid(),
  name: "Vaillant",

  info: {
    website: "",
    manual: {page: 0, link: ""}
  },

  hasIcon: false,
  hasFlash: false,
  hasFaultCode: true,
  hasFaultNote: false,

  faultCodes: [
    //"Vaillant Turbomax Plus 824/828E"
    {
      brand: "Vaillant",
      model: "Turbomax Plus 824/828E",
      faultType: "CODE",
      faultCode: "F.00",
      faultCause: "NTC FAULTS",
      faultCheck: "This means that your Flow NTC (Negative Temperature Coefficient Thermostat) \ncable is either defective or broken and needs to be replaced"
    },
    {
      brand: "Vaillant",
      model: "Turbomax Plus 824/828E",
      faultType: "CODE",
      faultCode: "F.01",
      faultCause: "NTC FAULTS (feed temperature sensor)\n – faulty connection and open circuit.",
      faultCheck: "This means that your Flow NTC (Negative Temperature Coefficient Thermostat) \ncable is either defective or broken and needs to be replaced"
    },
    {
      brand: "Vaillant",
      model: "Turbomax Plus 824/828E",
      faultType: "CODE",
      faultCode: "F.10",
      faultCause: "NTC FAULTS (feed temperature sensor) – short circuit",
    },
    {
      brand: "Vaillant",
      model: "Turbomax Plus 824/828E",
      faultType: "CODE",
      faultCode: "F.11",
      faultCause: "NTC Thermistor fault",
    },
    {
      brand: "Vaillant",
      model: "Turbomax Plus 824/828E",
      faultType: "CODE",
      faultCode: "F.13",
      faultCause: "NTC FAULTS (feed temperature sensor) – short circuit"
    },
    {
      brand: "Vaillant",
      model: "Turbomax Plus 824/828E",
      faultType: "CODE",
      faultCode: "F.20",
      faultCause: "NTC FAULTS (feed temperature sensor)",
      faultCheck: "Your boiler has exceeded the maximum temperature \nand needs to be allowed to cool down"
    },
    {
      brand: "Vaillant",
      model: "Turbomax Plus 824/828E",
      faultType: "CODE",
      faultCode: "F.22",
      faultCause: "DRY FIRE, LOW WATER IN SYSTEM/OVERHEAT",
      faultCheck: "This means that there’s either no water in your system,\n you have a defective pump or the pump lead is defective"
    },
    {
      brand: "Vaillant",
      model: "Turbomax Plus 824/828E",
      faultType: "CODE",
      faultCode: "F.24",
      faultCause: "LOW WATER, OR PUMP FAILURE/BLOCKAGE",
      faultCheck: "Your pump could be obstructed, running at low capacity, \nor there could be air trapped in your appliance. \nAdditionally, the pressure in your system might be too low."
    },
    {
      brand: "Vaillant",
      model: "Turbomax Plus 824/828E",
      faultType: "CODE",
      faultCode: "F.28",
      faultCause: "NO IGNITION/IGNITION PROBLEM",
      faultCheck: "This means there’s either insufficient gas in the system, a defective electrode, \nignition lead or electronic ignitor"
    },
    {
      brand: "Vaillant",
      model: "Turbomax Plus 824/828E",
      faultType: "CODE",
      faultCode: "F.29",
      faultCause: "FLAME EXTINGUISHED. FAN/FLUE PROBLEM/GAS",
      faultCheck: "Your flame, or pilot light has gone out. Check your flue duct or gas supply to \nsee if there is a problem there."
    },
    {
      brand: "Vaillant",
      model: "Turbomax Plus 824/828E",
      faultType: "CODE",
      faultCode: "F.60",
      faultCause: "GAS VALVE CONTROL – DEFECTIVE",
      faultCheck: "Your cable loom which connects to your gas valve might have short circuited. \nAlternatively, you could have a defective gas valve assembly or electronic control system."
    },
    {
      brand: "Vaillant",
      model: "Turbomax Plus 824/828E",
      faultType: "CODE",
      faultCode: "F.61",
      faultCause: "GAS VALVE CONTROL – DEFECTIVE",
      faultCheck: "Your cable loom which connects to your gas valve may have short circuited. \nAlternatively, you could have a defective gas valve assembly or electronic control system."
    },
    {
      brand: "Vaillant",
      model: "Turbomax Plus 824/828E",
      faultType: "CODE",
      faultCode: "F.62",
      faultCause: "DEFECTIVE GAS VALVE CLOSURE MECHANISM",
      faultCheck: "Your boiler has exceeded the maximum temperature and needs to be allowed to cool down"
    },
    {
      brand: "Vaillant",
      model: "Turbomax Plus 824/828E",
      faultType: "CODE",
      faultCode: "F.63",
      faultCause: "EEPROM (Electrically Erasable Programmable Read-Only Memory) ERROR",
      faultCheck: "This is an electronic fault within your system."
    },
    {
      brand: "Vaillant",
      model: "Turbomax Plus 824/828E",
      faultType: "CODE",
      faultCode: "F.64",
      faultCause: "ELECTRONIC SYSTEM/SENSOR FAULT",
      faultCheck: "Your flow or back flow NTC has suffered a short circuit, or an electronic fault"
    },
    {
      brand: "Vaillant",
      model: "Turbomax Plus 824/828E",
      faultType: "CODE",
      faultCode: "F.65",
      faultCause: "ELECTRONIC SYSTEM TEMPERATURE TOO HIGH",
      faultCheck: "This can happen because of an external heat source or an electrical fault"
    },
    {
      brand: "Vaillant",
      model: "Turbomax Plus 824/828E",
      faultType: "CODE",
      faultCode: "F.67",
      faultCause: "ELECTRONIC FAULT IN FLAME SYSTEM",
    },

    //"Vaillant EcoMax Pro 18/28E"
    {
      brand: "Vaillant",
      model: "EcoMax Pro 18/28E",
      faultType: "CODE",
      faultCode: "F.1",
      faultCause: "Lack of gas, a fault with the ignition or flue or you may need to adjust the \ngas valve or replace a defective electrode lead."
    },
    {
      brand: "Vaillant",
      model: "EcoMax Pro 18/28E",
      faultType: "CODE",
      faultCode: "F.4",
      faultCause: "Ignition fault."
    },
    {
      brand: "Vaillant",
      model: "EcoMax Pro 18/28E",
      faultType: "CODE",
      faultCode: "F.5",
      faultCause: "The system has suffered a fault due to overheating."
    },
    {
      brand: "Vaillant",
      model: "EcoMax Pro 18/28E",
      faultType: "CODE",
      faultCode: "F.6",
      faultCause: "Your flow NTC has developed a fault."
    },
    {
      brand: "Vaillant",
      model: "EcoMax Pro 18/28E",
      faultType: "CODE",
      faultCode: "F.17",
      faultCause: "Check the polarity of your system."
    },
    {
      brand: "Vaillant",
      model: "EcoMax Pro 18/28E",
      faultType: "CODE",
      faultCode: "F.24",
      faultCause: "Pump-related faults – the pump could have failed, it may have over run or\n there could be an issue with the airlock"
    },

    //"Vaillant Ecomax Pro 828E Boiler Error Codes"
    {
      brand: "Vaillant",
      model: "Ecomax Pro 828E",
      faultType: "CODE",
      faultCode: "F.00, .04, .05, .10, .14, .15",
      faultCause: "All of these are NTC faults, and are best resolved by first changing all NTC \nto make diagnosis earlier."
    },
    {
      brand: "Vaillant",
      model: "Ecomax Pro 828E",
      faultType: "CODE",
      faultCode: "F.21",
      faultCause: "The pilot flame has failed."
    },
    {
      brand: "Vaillant",
      model: "Ecomax Pro 828E",
      faultType: "CODE",
      faultCode: "F.22",
      faultCause: "There is insufficient water in your system."
    },
    {
      brand: "Vaillant",
      model: "Ecomax Pro 828E",
      faultType: "CODE",
      faultCode: "F.11",
      faultCause: "A blockage in the appliance is preventing the system from flowing as it \nshould."
    },
    {
      brand: "Vaillant",
      model: "Ecomax Pro 828E",
      faultType: "CODE",
      faultCode: "F.12",
      faultCause: "A blockage in the appliance is affecting the system’s pressure."
    },
    {
      brand: "Vaillant",
      model: "Ecomax Pro 828E",
      faultType: "CODE",
      faultCode: "F.13",
      faultCause: "The appliance is blocked because of a water deficiency."
    },

    //"Vaillant EcoTEC 65kW Error Codes"
    {
      brand: "Vaillant",
      model: "EcoTEC 65kW",
      faultType: "CODE",
      faultCode: "S.O",
      faultCause: "Heating issue, no heat demand"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC 65kW",
      faultType: "CODE",
      faultCode: "S.1",
      faultCause: "Fan start-up error"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC 65kW",
      faultType: "CODE",
      faultCode: "S.2",
      faultCause: "Pump flow error"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC 65kW",
      faultType: "CODE",
      faultCode: "S.3",
      faultCause: "Heating mode error – ignition problem"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC 65kW",
      faultType: "CODE",
      faultCode: "S.4",
      faultCause: "Heat mode – burner on error"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC 65kW",
      faultType: "CODE",
      faultCode: "S.6",
      faultCause: "Heating mode – fan overrun error"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC 65kW",
      faultType: "CODE",
      faultCode: "S.7",
      faultCause: "Heating mode – pump overrun error"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC 65kW",
      faultType: "CODE",
      faultCode: "S.8",
      faultCause: "Heating remaining cut off for XX amount of time"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC 65kW",
      faultType: "CODE",
      faultCode: "S.31",
      faultCause: "No heat demand summer operating mode"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC 65kW",
      faultType: "CODE",
      faultCode: "S.34",
      faultCause: "Heating mode frost protection error"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC 65kW",
      faultType: "CODE",
      faultCode: "S.20",
      faultCause: "Hot water requirement error"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC 65kW",
      faultType: "CODE",
      faultCode: "S.22",
      faultCause: "Hot water handling pump flow error"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC 65kW",
      faultType: "CODE",
      faultCode: "S.24",
      faultCause: "Hot water operation burner is on"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC 65kW",
      faultType: "CODE",
      faultCode: "S.85",
      faultCause: "Service message quantity of circulation water"
    },

    //"Vaillant EcoTEC Pro / EcoTEC Plus Error Codes"
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "F.00 / F.0",
      faultCause: "Flow temperature sensor interruption"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "F.01 / F.1",
      faultCause: "Return temperature sensor interruption"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "F.10",
      faultCause: "Flow NTC short circuit"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "F.11",
      faultCause: "Return NTC short circuit"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "F.20",
      faultCause: "Safety switch off temperature limiter"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "F.22",
      faultCause: "Safety switch off low water pressure"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "F.23",
      faultCause: "Safety switch off temperature difference too great"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "F.24",
      faultCause: "Safety switch off temperature is rising to fast"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "F.25",
      faultCause: "Safety switch off flue gas temperature too high"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "F.26",
      faultCause: "Error with gas valve – possible no function"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "F.27",
      faultCause: "Safety switch off flame simulation"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "F.28",
      faultCause: "Failure during start up – ignition unsuccessful to start"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "F.29",
      faultCause: "Failure during operation – re-ignition unsuccessful"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "F.32",
      faultCause: "Fan error"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "F.49",
      faultCause: "eBUS error – possible short circuit"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "F.61",
      faultCause: "Error with gas valve regulation"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "F.62",
      faultCause: "Error with gas valve – switch off delay"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "F.63",
      faultCause: "EEPROM error"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "F.64",
      faultCause: "Electronics / NTC error"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "F.65",
      faultCause: "Electronic temperature error could be overheating due to external \ninfluences"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "F.67",
      faultCause: "Electronics flame signal error"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "F.68",
      faultCause: "Unstable flame signal error air in gas"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "F.70",
      faultCause: "Invalid device specific number (DSN)"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "F.71",
      faultCause: "Flow NTC error – flow temperature sensor signal constant value"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "F.72",
      faultCause: "Flow return NTC error – temperature difference too great"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "F.73",
      faultCause: "Water pressure sensor signal in the wrong range, it is too low"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "F.74",
      faultCause: "Water pressure sensor signal outside correct range, the sensor signal is \ntoo high"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "F.75",
      faultCause: "Error with pressure – no pressure change detection when starting the\n pump"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "F.76",
      faultCause: "Overheating protection on – primary heat exchanger has responded"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "F.77",
      faultCause: "Flue non return flap condensate pump error"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "F.78",
      faultCause: "Interruption to DHW outlet sensor at external controller"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "F.83",
      faultCause: "Flow and or return temperature sensor error"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "F.84",
      faultCause: "Error with flow/return temperature sensor temperature changing error"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "F.85",
      faultCause: "Error with flow and return temperature, sensor incorrectly fitted"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "CONNECTION",
      faultCause: "No communication with the PCB"
    },

    //"Vaillant EcoTEC Pro / EcoTEC Plus Error Codes"
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "S.00",
      faultCause: "Heating mode error – no heat demand"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "S.01",
      faultCause: "Heating mode fan start-up"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "S.02",
      faultCause: "Heating mode error – water pump running"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "S.03",
      faultCause: "Heating mode – ignition sequence error"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "S.04",
      faultCause: "Heating mode – burner ignited"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "S.06",
      faultCause: "Heating mode – fan overrun error"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "S.07",
      faultCause: "Heating mode – pump overrun error"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "S.08",
      faultCause: "Heating remaining cut off time xx minutes"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "S.10",
      faultCause: "Hot water demand via impeller sensor"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "S.11",
      faultCause: "DHW mode fan start up error"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "S13",
      faultCause: "DHW mode ignition error"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "S.14",
      faultCause: "Hot water demand via fan sensor error"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "S.15",
      faultCause: "DHW mode pump and fan overrun"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "S.16",
      faultCause: "DHW mode – fan overrun error"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "S.17",
      faultCause: "DHW mode – pump overrun error"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "S.20",
      faultCause: "DHW mode – burner on error"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "S.21",
      faultCause: "DHW mode – fan start up error"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "S.22",
      faultCause: "DHW demand – error pump running"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "S.23",
      faultCause: "DHW ignition error"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "S.24",
      faultCause: "DHW mode – burner error"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "S.25",
      faultCause: "DHW mode – pump or fan overrun error"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "S.26",
      faultCause: "DHW mode – fan overrun"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "S.27",
      faultCause: "DHW mode – pump overrun"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "S.28",
      faultCause: "Hot water burner anti-cycling time"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "S.30",
      faultCause: "Room thermostat is blocking heating mode"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "S.31",
      faultCause: "No heat demand boiler in summer operating mode"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "S.32",
      faultCause: "Waiting period because of fan speed deviation"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "S.34",
      faultCause: "Heating mode frost protection error"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "S.39",
      faultCause: "Burner off contact has been triggered this could be because of contact \nthermostat or condensate pump"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "S.40",
      faultCause: "Comfort safety mode active"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "S.41",
      faultCause: "Water pressure > 2.8 bar"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "S.42",
      faultCause: "Flue non return flap return signal blocks burner operation"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "S.46",
      faultCause: "Comfort safety mode flame loss at minimum load"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "S.53",
      faultCause: "Boiler is in waiting period of modulation f block function due to water\n shortage"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "S.54",
      faultCause: "Boiler is in waiting period of operation, blocking function as a result"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "S.57",
      faultCause: "Waiting period comfort safety mode"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "S.58",
      faultCause: "Modulation limitation due to noise / wind error"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Pro / EcoTEC Plus",
      faultType: "CODE",
      faultCode: "S.61",
      faultCause: "Gas family check unsuccessful"
    },

    //"Vaillant EcoTEC Plus Regular Gas Boiler Error Codes"
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "S.20",
      faultCause: "Warnstar demand"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "S.21",
      faultCause: "Fan running"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "S.22",
      faultCause: "Pump running"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "S.23",
      faultCause: "Ignition sequence"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "S.24",
      faultCause: "Burner ignited"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "S.25",
      faultCause: "Fan and water pump running"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "S.26",
      faultCause: "Fan overrun"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "S.27",
      faultCause: "Pump overrun"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "S.28",
      faultCause: "Anti-cycling mode"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "S.30",
      faultCause: "No heating demand from external controls"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "S.31",
      faultCause: "Central heating thermostat knob turned off"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "S.32",
      faultCause: "Heat exchanger antifreeze active as fan speed variation is too high"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "S.34",
      faultCause: "Anti-frost mode is active"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "S.36",
      faultCause: "Not heating demand form low voltage"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "S.41",
      faultCause: "Water pressure greater than 2.9 bar"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "S.42",
      faultCause: "Response from accessory module or defective condensate pump is \nblocking burner operation"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "S.53",
      faultCause: "Appliance is within the waiting period of the block operation function due \nto water shortage"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "S.54",
      faultCause: "Appliance is within the waiting period of the block operation due to water \nshortage"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "S.96",
      faultCause: "Return sensor error"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "S.98",
      faultCause: "Flow return sensor check is running demand is block"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "D.0",
      faultCause: "Heating part load error"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "D.1",
      faultCause: "Water pump overrun – time for heat mode"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "D.2",
      faultCause: "Max burner anti-cycling period at 20c flow temperature"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "D.3",
      faultCause: "Hot water flow temperature reading"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "D.4",
      faultCause: "Current temperature for warm stat sensor"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "D.7",
      faultCause: "Warm start temperature target value"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "D.8",
      faultCause: "External controls heat demand"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "D.9",
      faultCause: "Flow target temperature from external analogue regulator terminal"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "D.10",
      faultCause: "Status internal heating pump error"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "D.11",
      faultCause: "Status external heating pump error"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "D.12",
      faultCause: "Cylinder charging pump via accessory module"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "D.13",
      faultCause: "Hot water circulation pump"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "D.22",
      faultCause: "Hot water demand"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "D.23",
      faultCause: "Summer/Winter function"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "D.25",
      faultCause: "Hot water activation via ebus control"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "D.30",
      faultCause: "Control signal for both gas valves"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "D.33",
      faultCause: "Fan speed target value"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "D.34",
      faultCause: "Fan speed actual value"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "D.36",
      faultCause: "Hot water flow sensor"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "D.40",
      faultCause: "Flow temperature target value"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "D.41",
      faultCause: "Return temperature actual value"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "D.44",
      faultCause: "Digitised ionisation potential error"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "D.47",
      faultCause: "Outside temperature with weather compensator – Vaillant controller only"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "D.76",
      faultCause: "Remaining burner anti-cycling time in min"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "D.90",
      faultCause: "Digital regulator status"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "D.91",
      faultCause: "DCF status with connected external probe"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "D.97",
      faultCause: "Activation of the second diagnostic level"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "D.17",
      faultCause: "Heating glow return regulation"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "D.18",
      faultCause: "Pump mode return"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "D.19",
      faultCause: "Operating modes of the two speed heating pump"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "D.20",
      faultCause: "Maximum set value for target cylinder"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "D.27",
      faultCause: "Switching accessory relay 1"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "D.28",
      faultCause: "Switching accessory relay 2"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "D.50",
      faultCause: "Offset for minimum speed"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "D.51",
      faultCause: "Offset for maximum speed"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "D.58",
      faultCause: "Activation of solar reheating"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "D.60",
      faultCause: "Number of safety temperature cut off"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "D.61",
      faultCause: "Number of unsuccessful lockouts"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "D.64",
      faultCause: "Average ignition times"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "D.65",
      faultCause: "Maximum ignition time"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "D.68",
      faultCause: "Unsuccessful ignitions in the first attempt"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "D.69",
      faultCause: "Unsuccessful ignition for the second time"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "D.70",
      faultCause: "Set diverter valve position"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "D.71",
      faultCause: "Maximum setting of heater control knob"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "D.72",
      faultCause: "Pump overrun time after warm start"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "D.73",
      faultCause: "Off set for warm start target value"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "D.75",
      faultCause: "Maximum charging time for a storage without own controller"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "D.77",
      faultCause: "Limitation of cylinder charging in output in kW"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "D.78",
      faultCause: "Limitation of cylinder charging temperature in c"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "D.80",
      faultCause: "Operating hours heating"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "D.81",
      faultCause: "Operating hours hot water generation"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "D.82",
      faultCause: "Burner start up in heating mode"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "D.83",
      faultCause: "Burner start up in hot water mode"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "D.84",
      faultCause: "Maintenance indicator – number of hours until the next maintenance"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "D.93",
      faultCause: "DSN appliance variant setting"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus Regular",
      faultType: "CODE",
      faultCode: "D.96",
      faultCause: "Factory setting"
    },

    //"Vaillant EcoTEC Plus Gas Boiler Error Codes"
    {
      brand: "Vaillant",
      model: "EcoTEC Plus",
      faultType: "CODE",
      faultCode: "P.00",
      faultCause: "The heating circuit and hot water circuit are purged"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus",
      faultType: "CODE",
      faultCode: "P.01",
      faultCause: "Maximum load test program error"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus",
      faultType: "CODE",
      faultCode: "P.02",
      faultCause: "Minimum load test program"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC Plus",
      faultType: "CODE",
      faultCode: "P.06",
      faultCause: "Filling mode test program"
    },

    //"Vaillant EcoTEC Gas Boiler Error Codes"
    {
      brand: "Vaillant",
      model: "EcoTEC",
      faultType: "CODE",
      faultCode: "D.0",
      faultCause: "Heating part load error"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC",
      faultType: "CODE",
      faultCode: "D.1",
      faultCause: "Water pump overrun – time for heat mode"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC",
      faultType: "CODE",
      faultCode: "D.2",
      faultCause: "Max burner anti-cycling period at 20c flow temperature"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC",
      faultType: "CODE",
      faultCode: "D.3",
      faultCause: "Hot water flow temperature reading"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC",
      faultType: "CODE",
      faultCode: "D.4",
      faultCause: "Current temperature for warm stat sensor"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC",
      faultType: "CODE",
      faultCode: "D.5",
      faultCause: "Set value of flow temperature or target value of return"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC",
      faultType: "CODE",
      faultCode: "D.7",
      faultCause: "Warm start temperature target value"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC",
      faultType: "CODE",
      faultCode: "D.8",
      faultCause: "External controls heat demand"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC",
      faultType: "CODE",
      faultCode: "D.9",
      faultCause: "Flow target temperature from external analogue regulator terminal"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC",
      faultType: "CODE",
      faultCode: "D.10",
      faultCause: "Status internal heating pump error"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC",
      faultType: "CODE",
      faultCode: "D.11",
      faultCause: "Status external heating pump error"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC",
      faultType: "CODE",
      faultCode: "D.12",
      faultCause: "Cylinder charging pump via accessory module"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC",
      faultType: "CODE",
      faultCode: "D.13",
      faultCause: "Hot water circulation pump"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC",
      faultType: "CODE",
      faultCode: "D.15",
      faultCause: "Pump speed actual value"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC",
      faultType: "CODE",
      faultCode: "D.22",
      faultCause: "Hot water demand"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC",
      faultType: "CODE",
      faultCode: "D.23",
      faultCause: "Summer/Winter function"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC",
      faultType: "CODE",
      faultCode: "D.24",
      faultCause: "Not relevant"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC",
      faultType: "CODE",
      faultCode: "D.25",
      faultCause: "Hot water activation via eBus control"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC",
      faultType: "CODE",
      faultCode: "D.30",
      faultCause: "Control signal for both gas valves"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC",
      faultType: "CODE",
      faultCode: "D.33",
      faultCause: "Fan speed target value"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC",
      faultType: "CODE",
      faultCode: "D.34",
      faultCause: "Fan speed actual value"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC",
      faultType: "CODE",
      faultCode: "D.35",
      faultCause: "Not relevant"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC",
      faultType: "CODE",
      faultCode: "D.40",
      faultCause: "Flow temperature target value"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC",
      faultType: "CODE",
      faultCode: "D.41",
      faultCause: "Return temperature actual value"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC",
      faultType: "CODE",
      faultCode: "D.44",
      faultCause: "Digitised ionisation – potential error"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC",
      faultType: "CODE",
      faultCode: "D.47",
      faultCause: "Outside temperature with weather compensator – Vaillant controller only"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC",
      faultType: "CODE",
      faultCode: "D.76",
      faultCause: "Remaining burner anti-cycling time in min"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC",
      faultType: "CODE",
      faultCode: "D.90",
      faultCause: "Digital regulator status"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC",
      faultType: "CODE",
      faultCode: "D.91",
      faultCause: "DCF status with connected external probe"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC",
      faultType: "CODE",
      faultCode: "D.97",
      faultCause: "Activation of the second diagnostic level"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC",
      faultType: "CODE",
      faultCode: "D.98",
      faultCause: "Telephone a heating engineer"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC",
      faultType: "CODE",
      faultCode: "D.14",
      faultCause: "Pump speed target value"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC",
      faultType: "CODE",
      faultCode: "D.17",
      faultCause: "Heating flow return regulation"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC",
      faultType: "CODE",
      faultCode: "D.18",
      faultCause: "Pump operating mode"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC",
      faultType: "CODE",
      faultCode: "D.20",
      faultCause: "Maximum set value for target cylinder"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC",
      faultType: "CODE",
      faultCode: "D.26",
      faultCause: "Additional relay control ecoTec"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC",
      faultType: "CODE",
      faultCode: "D.27",
      faultCause: "Switching accessory relay 1"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC",
      faultType: "CODE",
      faultCode: "D.28",
      faultCause: "Switching accessory relay 2"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC",
      faultType: "CODE",
      faultCode: "D.50",
      faultCause: "Offset for minimum speed"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC",
      faultType: "CODE",
      faultCode: "D.51",
      faultCause: "Offset for maximum speed"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC",
      faultType: "CODE",
      faultCode: "D.60",
      faultCause: "Number of safety temperature cut offs"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC",
      faultType: "CODE",
      faultCode: "D.61",
      faultCause: "Number of unsuccessful lockouts"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC",
      faultType: "CODE",
      faultCode: "D.64",
      faultCause: "Average ignition times"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC",
      faultType: "CODE",
      faultCode: "D.65",
      faultCause: "Maximum ignition time"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC",
      faultType: "CODE",
      faultCode: "D.67",
      faultCause: "Remaining burner anti-cycling time"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC",
      faultType: "CODE",
      faultCode: "D.68",
      faultCause: "Unsuccessful ignitions in the first attempt"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC",
      faultType: "CODE",
      faultCode: "D.69",
      faultCause: "Unsuccessful ignition for the second time"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC",
      faultType: "CODE",
      faultCode: "D.70",
      faultCause: "Set diverter valve position"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC",
      faultType: "CODE",
      faultCode: "D.71",
      faultCause: "Maximum setting of heater control knob"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC",
      faultType: "CODE",
      faultCode: "D.72",
      faultCause: "Pump overrun time after warm start"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC",
      faultType: "CODE",
      faultCode: "D.75",
      faultCause: "Maximum charging time for a storage without own controller"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC",
      faultType: "CODE",
      faultCode: "D.77",
      faultCause: "Limitation of cylinder charging in output in kW"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC",
      faultType: "CODE",
      faultCode: "D.78",
      faultCause: "Limitation of cylinder charging temperature in celsius"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC",
      faultType: "CODE",
      faultCode: "D.80",
      faultCause: "Operating hours heating"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC",
      faultType: "CODE",
      faultCode: "D.81",
      faultCause: "Operating hours hot water generation"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC",
      faultType: "CODE",
      faultCode: "D.82",
      faultCause: "Burner start up in heating mode"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC",
      faultType: "CODE",
      faultCode: "D.83",
      faultCause: "Burner start up in hot water mode"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC",
      faultType: "CODE",
      faultCode: "D.84",
      faultCause: "Maintenance indicator – number of hours until the next maintenance"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC",
      faultType: "CODE",
      faultCode: "D.93",
      faultCause: "DSN appliance variant setting"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC",
      faultType: "CODE",
      faultCode: "D.96",
      faultCause: "Factory setting"
    },
    {
      brand: "Vaillant",
      model: "EcoTEC",
      faultType: "CODE",
      faultCode: "F28 and F29",
      faultCause: "Frozen condensate pipe."
    },
  ]
}

