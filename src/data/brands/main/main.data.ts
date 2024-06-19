import { nanoid } from "nanoid"
import { BrandItem } from "../../../types"

// "Main Boiler Fault Codes"

export const brand_main: BrandItem = {
  id: "iXR6rablptXsUf370xM8u",
  name: "Main",

  hasIcon: false,
  hasFlash: false,
  hasFaultCode: true,
  hasFaultNote: false,
    
  faultCodes: [
    {
      brand: "Main",
      model: "All Main Boilers",
      faultType: "CODE",
      faultCode: "E168",
      faultCause: "Detected a problem with boiler - unknown cause"
    },
    {
      brand: "Main",
      model: "All Main Boilers",
      faultType: "CODE",
      faultCode: "E20",
      faultCause: "Central Heating NTC Fault"
    },
    {
      brand: "Main",
      model: "All Main Boilers",
      faultType: "CODE",
      faultCode: "E28",
      faultCause: "PCB Fault"
    },
    {
      brand: "Main",
      model: "All Main Boilers",
      faultType: "CODE",
      faultCode: "E50",
      faultCause: "Hot Water NTC Fault"
    },
    {
      brand: "Main",
      model: "All Main Boilers",
      faultType: "CODE",
      faultCode: "E110",
      faultCause: "Safety Thermostat operated – water pressure is less than 0.5 bar"
    },
    {
      brand: "Main",
      model: "All Main Boilers",
      faultType: "CODE",
      faultCode: "E119",
      faultCause: "Water pressure switch not operated – water pressure is less than 0.5 bar"
    },
    {
      brand: "Main",
      model: "All Main Boilers",
      faultType: "CODE",
      faultCode: "E33",
      faultCause: "Gas supply interrupted, ignition failed or flame has not been detected. "
    },
    {
      brand: "Main",
      model: "All Main Boilers",
      faultType: "CODE",
      faultCode: "E60",
      faultCause: "Fan or fan wiring fault"
    },
    {
      brand: "Main",
      model: "All Main Boilers",
      faultType: "CODE",
      faultCode: "E133",
      faultCause: "Gas supply has been interrupted, ignition has failed or the flame has not been detected"
    },
  ]
}