import { FaultItem } from "../../../types"

// "ATAG Boiler Fault Codes"

export const atag_faultCodes: FaultItem[] = [
  {
    model: "All ATAG Boilers",
    faultType: "CODE", 
    faultCode: "10",
    brand: "ATAG",
    faultCause: "Outside sensor error"
  },
  {
    model: "All ATAG Boilers",
    faultType: "CODE", 
    faultCode: "20",
    brand: "ATAG",
    faultCause: "Flow sensor error"
  },
  {
    model: "All ATAG Boilers",
    faultType: "CODE", 
    faultCode: "40",
    brand: "ATAG",
    faultCause: "Return sensor error"
  },
  {
    model: "All ATAG Boilers",
    faultType: "CODE", 
    faultCode: "61",
    brand: "ATAG",
    faultCause: "Bus communication error"
  },
  {
    model: "All ATAG Boilers",
    faultType: "CODE", 
    faultCode: "78",
    brand: "ATAG",
    faultCause: "Water pressure out of range"
  },
  {
    model: "All ATAG Boilers",
    faultType: "CODE", 
    faultCode: "105",
    brand: "ATAG",
    faultCause: "Venting program active when power turned on / interrupted (runs for 7 mins)"
  },
  {
    model: "All ATAG Boilers",
    faultType: "CODE", 
    faultCode: "110",
    brand: "ATAG",
    faultCause: "Exceeded safety temperature"
  },
  {
    model: "All ATAG Boilers",
    faultType: "CODE", 
    faultCode: "111",
    brand: "ATAG",
    faultCause: "Exceeded maximum pressure"
  },
  {
    model: "All ATAG Boilers",
    faultType: "CODE", 
    faultCode: "119",
    brand: "ATAG",
    faultCause: "X2 link position 4 and 5 missing"
  },
  {
    model: "All ATAG Boilers",
    faultType: "CODE", 
    faultCode: "129",
    brand: "ATAG",
    faultCause: "Fan doesn’t start"
  },
  {
    model: "All ATAG Boilers",
    faultType: "CODE", 
    faultCode: "133",
    brand: "ATAG",
    faultCause: "No flame after 5 ignition attempts"
  },
  {
    model: "All ATAG Boilers",
    faultType: "CODE", 
    faultCode: "151",
    brand: "ATAG",
    faultCause: "Fan error or control unit defective (speed control is not achieved)"
  },
  {
    model: "All ATAG Boilers",
    faultType: "CODE", 
    faultCode: "154",
    brand: "ATAG",
    faultCause: "Return greater than flow – flow temperature increases too fast"
  },
  {
    model: "All ATAG Boilers",
    faultType: "CODE", 
    faultCode: "101",
    brand: "ATAG",
    faultCause: "Overheat error"
  },
  {
    model: "All ATAG Boilers",
    faultType: "CODE", 
    faultCode: "102",
    brand: "ATAG",
    faultCause: "Pressure sensor fault"
  },
  {
    model: "All ATAG Boilers",
    faultType: "CODE", 
    faultCode: "104",
    brand: "ATAG",
    faultCause: "Flow check failed"
  },
  {
    model: "All ATAG Boilers",
    faultType: "CODE", 
    faultCode: "108",
    brand: "ATAG",
    faultCause: "Pressure needs filling to < 0.5 bar"
  },
  {
    model: "All ATAG Boilers",
    faultType: "CODE", 
    faultCode: "1P4",
    brand: "ATAG",
    faultCause: "Pressure needs filling to 0.5 – 0.8 bar"
  },
  {
    model: "All ATAG Boilers",
    faultType: "CODE", 
    faultCode: "109",
    brand: "ATAG",
    faultCause: "Pressure > Pmax error"
  },
  {
    model: "All ATAG Boilers",
    faultType: "CODE", 
    faultCode: "110",
    brand: "ATAG",
    faultCause: "Send probe damaged"
  },
  {
    model: "All ATAG Boilers",
    faultType: "CODE", 
    faultCode: "112",
    brand: "ATAG",
    faultCause: "Return probe error – could be damanged"
  },
  {
    model: "All ATAG Boilers",
    faultType: "CODE", 
    faultCode: "114",
    brand: "ATAG",
    faultCause: "Outdoor sensor error – could be damaged"
  },
  {
    model: "All ATAG Boilers",
    faultType: "CODE", 
    faultCode: "141",
    brand: "ATAG",
    faultCause: "Central heating flow switch is open"
  },
  {
    model: "All ATAG Boilers",
    faultType: "CODE", 
    faultCode: "201",
    brand: "ATAG",
    faultCause: "Domestic hot water (DHW) probe damaged"
  },
  {
    model: "All ATAG Boilers",
    faultType: "CODE", 
    faultCode: "203",
    brand: "ATAG",
    faultCause: "Tank probe damaged"
  },
  {
    model: "All ATAG Boilers",
    faultType: "CODE", 
    faultCode: "303",
    brand: "ATAG",
    faultCause: "Printed circuit board (PCB) error"
  },
  {
    model: "All ATAG Boilers",
    faultType: "CODE", 
    faultCode: "304",
    brand: "ATAG",
    faultCause: "Too many resets have occured"
  },
  {
    model: "All ATAG Boilers",
    faultType: "CODE", 
    faultCode: "501",
    brand: "ATAG",
    faultCause: "No flame detected"
  },
  {
    model: "All ATAG Boilers",
    faultType: "CODE", 
    faultCode: "612",
    brand: "ATAG",
    faultCause: "Fan fault – fan isn’t starting up"
  },

  // "IC &amp; IS Combi Boiler Fault Codes"
  {
    faultType: "CODE", 
    faultCode: "50",
    brand: "ATAG",
    model: "IC Series",
    faultCause: "Domestic hot water (DHW) sensor error"
  },
  {
    faultType: "CODE", 
    faultCode: "117",
    brand: "ATAG",
    model: "IC Series",
    faultCause: "Pressure greater than 3 bar or pump pressure increase is too high"
  },
  {
    faultType: "CODE", 
    faultCode: "118",
    brand: "ATAG",
    model: "IC Series",
    faultCause: "Pressure less than 1 bar or pump pressure increase too low (no pump detection)."
  },
  {
    faultType: "CODE",
    faultCode: "Spanner Symbol",
    brand: "ATAG",
    model: "IC Series",
    faultCause: "Boiler in service mode Or Blocking."
  },
  {
    faultType: "CODE", 
    faultCode: "133",
    brand: "ATAG",
    model: "IC Series",
    faultCause: "If you are seeing the error code 133, your boilers flame is failing after 5 ignition \nattempts. This could be down to your condensate drain pipe freezing. A frozen \ncondensate pipe is something that is often easily fixed, you can find out how in this \nguide to defrosting a condensate pipe."
  },
]