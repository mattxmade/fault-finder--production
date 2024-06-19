import { nanoid } from "nanoid"
import { BrandItem } from "../../../types"

"Ravenheat Boiler Fault Codes"

export const brand_ravenheat: BrandItem = {
  id: nanoid(),
  name: "Ravenheat",
  
  info: { 
    website: "", 
    manual: { page: 0, link: "", } 
  },

  hasIcon: false,
  hasFlash: false,
  hasFaultCode: true,
  hasFaultNote: false,

  faultCodes: [
    // All Ravenheat Boilers
    {
      brand: "Ravenheat",
      model: "All Ravenheat Boilers",
      faultType: "CODE",
      faultCode: "F73",
      faultCause: "Heating circuit pressure sensor fault"
    },
    {
      brand: "Ravenheat",
      model: "All Ravenheat Boilers",
      faultType: "CODE",
      faultCode: "F74",
      faultCause: "Heating circuit pressure sensor fault"
    },
    {
      brand: "Ravenheat",
      model: "All Ravenheat Boilers",
      faultType: "CODE",
      faultCode: "F76",
      faultCause: "Thermal fuse fault"
    },
    {
      brand: "Ravenheat",
      model: "All Ravenheat Boilers",
      faultType: "CODE",
      faultCode: "F77",
      faultCause: "Fault in gas valve motor"
    },
    {
      brand: "Ravenheat",
      model: "All Ravenheat Boilers",
      faultType: "CODE",
      faultCode: "F83",
      faultCause: "No water in the installation – the temperature does not increase when the burner is lit"
    },
    {
      brand: "Ravenheat",
      model: "All Ravenheat Boilers",
      faultType: "CODE",
      faultCode: "F84",
      faultCause: "Permanent temperature difference betweenF flow and return heating sensors"
    },
    {
      brand: "Ravenheat",
      model: "All Ravenheat Boilers",
      faultType: "CODE",
      faultCode: "F85",
      faultCause: "Flow and return heating sensors fault"
    },
    {
      brand: "Ravenheat",
      model: "All Ravenheat Boilers",
      faultType: "CODE",
      faultCode: "F86",
      faultCause: "Underfloor heating contact fault"
    },
    {
      brand: "Ravenheat",
      model: "All Ravenheat Boilers",
      faultType: "CODE",
      faultCode: "ERR",
      faultCause: "User interface fault"
    },
    {
      brand: "Ravenheat",
      model: "All Ravenheat Boilers",
      faultType: "CODE",
      faultCode: "4",
      faultCause: "Domestic hot water (DHW) sensor faulty"
    },
    
    //"Ravenheat CSI 120 Boiler Fault Codes"
    {
      brand: "Ravenheat",
      model: "CSI 120",
      faultType: "CODE",
      faultCode: "17",
      faultCause: "Possible issue with fan voltage"
    },
    {
      brand: "Ravenheat",
      model: "CSI 120",
      faultType: "CODE",
      faultCode: "1",
      faultCause: "Boiler failed to ignite – problem with gas valve operation, fan failing to start, ignition control board \nand cables"
    },
    {
      brand: "Ravenheat",
      model: "CSI 120",
      faultType: "CODE",
      faultCode: "28",
      faultCause: "Failed low water – pressure switch or pump, possible issue with pump, incorrect system pressure \nor the low water switch pressure needs replacing"
    },
    {
      brand: "Ravenheat",
      model: "CSI 120",
      faultType: "CODE",
      faultCode: "12",
      faultCause: "Failed heating sensor – issue with heating sensor and could need replacing"
    },
    {
      brand: "Ravenheat",
      model: "CSI 120",
      faultType: "CODE",
      faultCode: "4",
      faultCause: "Failed overheat – the overheat thermostat needs checking"
    },
    {
      brand: "Ravenheat",
      model: "CSI 120",
      faultType: "CODE",
      faultCode: "30",
      faultCause: "Failed flue temperature – check operating system"
    },
    {
      brand: "Ravenheat",
      model: "CSI 120",
      faultType: "CODE",
      faultCode: "31",
      faultCause: "Failed flue temperature – the flue sensor needs checking or replacing"
    },
    {
      brand: "Ravenheat",
      model: "CSI 120",
      faultType: "CODE",
      faultCode: "2",
      faultCause: "Failed temperature – try resetting the boiler"
    },
    
    //"Ravenheat CS 80/90, WH System, WH 80/90 Boiler Fault Codes"
    {
      brand: "Ravenheat",
      model: "CS 80/90, WH System, WH 80/90",
      faultType: "CODE",
      faultCode: "E02",
      faultCause: "Problem with the pump circulation"
    },
    {
      brand: "Ravenheat",
      model: "CS 80/90, WH System, WH 80/90",
      faultType: "CODE",
      faultCode: "E03",
      faultCause: "Flow sensor damaged"
    },
    {
      brand: "Ravenheat",
      model: "CS 80/90, WH System, WH 80/90",
      faultType: "CODE",
      faultCode: "E04",
      faultCause: "Domestic hot water (DHW) sensor damaged"
    },
    {
      brand: "Ravenheat",
      model: "CS 80/90, WH System, WH 80/90",
      faultType: "CODE",
      faultCode: "E05",
      faultCause: "Problem with fan – possibly no signal"
    },
    {
      brand: "Ravenheat",
      model: "CS 80/90, WH System, WH 80/90",
      faultType: "CODE",
      faultCode: "E06",
      faultCause: "Central heating (CH) sensor is overheating"
    },
    {
      brand: "Ravenheat",
      model: "CS 80/90, WH System, WH 80/90",
      faultType: "CODE",
      faultCode: "E08",
      faultCause: "Low water pressure"
    },
    {
      brand: "Ravenheat",
      model: "CS 80/90, WH System, WH 80/90",
      faultType: "CODE",
      faultCode: "E09",
      faultCause: "Overheat sensor overheating"
    },
    {
      brand: "Ravenheat",
      model: "CS 80/90, WH System, WH 80/90",
      faultType: "CODE",
      faultCode: "E10",
      faultCause: "High water pressure"
    },
    {
      brand: "Ravenheat",
      model: "CS 80/90, WH System, WH 80/90",
      faultType: "CODE",
      faultCode: "E13",
      faultCause: "Software error"
    },
    {
      brand: "Ravenheat",
      model: "CS 80/90, WH System, WH 80/90",
      faultType: "CODE",
      faultCode: "E21",
      faultCause: "Central heating (CH) return sensor overheating"
    },
    {
      brand: "Ravenheat",
      model: "CS 80/90, WH System, WH 80/90",
      faultType: "CODE",
      faultCode: "E22",
      faultCause: "Flue sensor overheating"
    },
    {
      brand: "Ravenheat",
      model: "CS 80/90, WH System, WH 80/90",
      faultType: "CODE",
      faultCode: "E23",
      faultCause: "Flue sensor damaged"
    },
    {
      brand: "Ravenheat",
      model: "CS 80/90, WH System, WH 80/90",
      faultType: "CODE",
      faultCode: "E24",
      faultCause: "Central heating return sensor error – possibly damaged"
    },
    {
      brand: "Ravenheat",
      model: "CS 80/90, WH System, WH 80/90",
      faultType: "CODE",
      faultCode: "E25",
      faultCause: "Main heat exchanger frozen"
    },
    {
      brand: "Ravenheat",
      model: "CS 80/90, WH System, WH 80/90",
      faultType: "CODE",
      faultCode: "E29",
      faultCause: "Domestic hot water (DHW) sensor overheating error"
    },
    {
      brand: "Ravenheat",
      model: "CS 80/90, WH System, WH 80/90",
      faultType: "CODE",
      faultCode: "E31",
      faultCause: "OpenTherm communication error"
    },
    {
      brand: "Ravenheat",
      model: "CS 80/90, WH System, WH 80/90",
      faultType: "CODE",
      faultCode: "E41",
      faultCause: "Different flow/return temperatures"
    },
    {
      brand: "Ravenheat",
      model: "CS 80/90, WH System, WH 80/90",
      faultType: "CODE",
      faultCode: "E42",
      faultCause: "Different temperature error"
    },
    {
      brand: "Ravenheat",
      model: "CS 80/90, WH System, WH 80/90",
      faultType: "CODE",
      faultCode: "E43",
      faultCause: "Different temperature error"
    },
    {
      brand: "Ravenheat",
      model: "CS 80/90, WH System, WH 80/90",
      faultType: "CODE",
      faultCode: "E44",
      faultCause: "Different temperature error"
    },
    {
      brand: "Ravenheat",
      model: "CS 80/90, WH System, WH 80/90",
      faultType: "CODE",
      faultCode: "E46",
      faultCause: "Water pressure sensor error – could be open or short"
    },
    
    //"Ravenheat HE 80/90 HE 25-30S, HE 80-98S, HE 8-98S or HE 25-30S compact"
    {
      brand: "Ravenheat",
      model: "HE 80/90 HE 25-30S, HE 80-98, HE 8-98S, HE 25-30S Compact",
      faultType: "CODE",
      faultCode: "02E",
      faultCause: "Problem with the pump circulation"
    },
    {
      brand: "Ravenheat",
      model: "HE 80/90 HE 25-30S, HE 80-98, HE 8-98S, HE 25-30S Compact",
      faultType: "CODE",
      faultCode: "03E",
      faultCause: "Flow sensor damaged"
    },
    {
      brand: "Ravenheat",
      model: "HE 80/90 HE 25-30S, HE 80-98, HE 8-98S, HE 25-30S Compact",
      faultType: "CODE",
      faultCode: "04E",
      faultCause: "Domestic hot water (DHW) sensor damaged"
    },
    {
      brand: "Ravenheat",
      model: "HE 80/90 HE 25-30S, HE 80-98, HE 8-98S, HE 25-30S Compact",
      faultType: "CODE",
      faultCode: "05E",
      faultCause: "Problem with fan, possibly no signal"
    },
    {
      brand: "Ravenheat",
      model: "HE 80/90 HE 25-30S, HE 80-98, HE 8-98S, HE 25-30S Compact",
      faultType: "CODE",
      faultCode: "06E",
      faultCause: "Central heating sensor is overheating"
    },
    {
      brand: "Ravenheat",
      model: "HE 80/90 HE 25-30S, HE 80-98, HE 8-98S, HE 25-30S Compact",
      faultType: "CODE",
      faultCode: "08E",
      faultCause: "Low water pressure"
    },
    {
      brand: "Ravenheat",
      model: "HE 80/90 HE 25-30S, HE 80-98, HE 8-98S, HE 25-30S Compact",
      faultType: "CODE",
      faultCode: "09E",
      faultCause: "Overheat sensor overheating"
    },
    {
      brand: "Ravenheat",
      model: "HE 80/90 HE 25-30S, HE 80-98, HE 8-98S, HE 25-30S Compact",
      faultType: "CODE",
      faultCode: "10E",
      faultCause: "High water pressure error"
    },
    {
      brand: "Ravenheat",
      model: "HE 80/90 HE 25-30S, HE 80-98, HE 8-98S, HE 25-30S Compact",
      faultType: "CODE",
      faultCode: "13E",
      faultCause: "Software error"
    },
    {
      brand: "Ravenheat",
      model: "HE 80/90 HE 25-30S, HE 80-98, HE 8-98S, HE 25-30S Compact",
      faultType: "CODE",
      faultCode: "21E",
      faultCause: "Central heating return sensor overheating"
    },
    {
      brand: "Ravenheat",
      model: "HE 80/90 HE 25-30S, HE 80-98, HE 8-98S, HE 25-30S Compact",
      faultType: "CODE",
      faultCode: "22E",
      faultCause: "Flue sensor overheating"
    },
    {
      brand: "Ravenheat",
      model: "HE 80/90 HE 25-30S, HE 80-98, HE 8-98S, HE 25-30S Compact",
      faultType: "CODE",
      faultCode: "23E",
      faultCause: "Flue sensor damaged"
    },
    {
      brand: "Ravenheat",
      model: "HE 80/90 HE 25-30S, HE 80-98, HE 8-98S, HE 25-30S Compact",
      faultType: "CODE",
      faultCode: "24E",
      faultCause: "Central heating return sensor error, possibly damaged"
    },
    {
      brand: "Ravenheat",
      model: "HE 80/90 HE 25-30S, HE 80-98, HE 8-98S, HE 25-30S Compact",
      faultType: "CODE",
      faultCode: "25E",
      faultCause: "Main heat exchanger frozen"
    },
    {
      brand: "Ravenheat",
      model: "HE 80/90 HE 25-30S, HE 80-98, HE 8-98S, HE 25-30S Compact",
      faultType: "CODE",
      faultCode: "29E",
      faultCause: "D.H/W sensor overheating error"
    },
    {
      brand: "Ravenheat",
      model: "HE 80/90 HE 25-30S, HE 80-98, HE 8-98S, HE 25-30S Compact",
      faultType: "CODE",
      faultCode: "31E",
      faultCause: "OpenTherm (OT) communication error"
    },
    {
      brand: "Ravenheat",
      model: "HE 80/90 HE 25-30S, HE 80-98, HE 8-98S, HE 25-30S Compact",
      faultType: "CODE",
      faultCode: "41E",
      faultCause: "Different temperature between flow and return"
    },
    {
      brand: "Ravenheat",
      model: "HE 80/90 HE 25-30S, HE 80-98, HE 8-98S, HE 25-30S Compact",
      faultType: "CODE",
      faultCode: "42E",
      faultCause: "Different temperature error"
    },
    {
      brand: "Ravenheat",
      model: "HE 80/90 HE 25-30S, HE 80-98, HE 8-98S, HE 25-30S Compact",
      faultType: "CODE",
      faultCode: "43E",
      faultCause: "Different temperature error"
    },
    {
      brand: "Ravenheat",
      model: "HE 80/90 HE 25-30S, HE 80-98, HE 8-98S, HE 25-30S Compact",
      faultType: "CODE",
      faultCode: "44E",
      faultCause: "Different temperature error"
    },
    {
      brand: "Ravenheat",
      model: "HE 80/90 HE 25-30S, HE 80-98, HE 8-98S, HE 25-30S Compact",
      faultType: "CODE",
      faultCode: "46E",
      faultCause: "Water pressure sensor error, could be open or short"
    },
  ]
}

