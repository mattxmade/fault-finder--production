import { nanoid } from "nanoid"
import { BrandItem } from "../../../types"

"Minstral Boiler Fault Codes"

export const brand_minstral: BrandItem = {
  id: nanoid(),
  name: "Minstral",

  info: {
    website: "",
    manual: { page: 40, link: "https://www.mistralboilers.com/wp-content/uploads/2020/11/Mistral-Boiler-Manual-December-2020-web-min.pdf" }
  },

  hasIcon: false,
  hasFlash: false,
  hasFaultCode: false,
  hasFaultNote: true,

  faultCodes: [
    {
      brand: "Minstral",
      model: "All Minstral Boilers",
      faultType: "NOTE",
      faultCode: "Burner does not start",
      faultCause: "Air locks, supply lines blocked or tank vent blocked (no fuel getting into tank)"
    },
    {
      brand: "Minstral",
      model: "All Minstral Boilers",
      faultType: "NOTE",
      faultCode: "Restriction suspected / fuel supply fault",
      faultCause: "Power supply to the boiler failed, burner control box locked out, burner motor fault or pump seized"
    },
    {
      brand: "Minstral",
      model: "All Minstral Boilers",
      faultType: "NOTE",
      faultCode: "Burner fault locks out after 15 seconds",
      faultCause: "Photocell fault, restricted oil supply, combustion setting out of specification"
    },
    {
      brand: "Minstral",
      model: "All Minstral Boilers",
      faultType: "NOTE",
      faultCode: "No flame established (burner fault)",
      faultCause: "Ignition failure, oil restricted or nozzle locked"
    },
    {
      brand: "Minstral",
      model: "All Minstral Boilers",
      faultType: "NOTE",
      faultCode: "Burner fault runs but continually pulsates",
      faultCause: "Condensate trap blocked or flue system blocked"
    },
    {
      brand: "Minstral",
      model: "All Minstral Boilers",
      faultType: "NOTE",
      faultCode: "Lock-out",
      faultCause: "Losing oil in the supply suction line or oil level in tank below minimum level"
    },
    {
      brand: "Minstral",
      model: "All Minstral Boilers",
      faultType: "NOTE",
      faultCode: "Burner running but smokes",
      faultCause: "Tank topped with wrong fuel/ Air supply restricted/ Dust build up"
    },
    {
      brand: "Minstral",
      model: "All Minstral Boilers",
      faultType: "NOTE",
      faultCode: "Burner flame shuts down slowly",
      faultCause: "Balanced flue system leaking/ Combustion leaks/ Suction line drawing air into fuel"
    },
    {
      brand: "Minstral",
      model: "All Minstral Boilers",
      faultType: "NOTE",
      faultCode: "Burner fails to reach working temperature",
      faultCause: "Burner output restricted/ Low efficiency/ Control thermostat fault"
    },
    {
      brand: "Minstral",
      model: "All Minstral Boilers",
      faultType: "NOTE",
      faultCode: "Oil smells",
      faultCause: "Oil leakage at connection"
    },
    {
      brand: "Minstral",
      model: "All Minstral Boilers",
      faultType: "NOTE",
      faultCode: "No hot water",
      faultCause: "Circulating pump seized/ Programmer channel off"
    },
    {
      brand: "Minstral",
      model: "All Minstral Boilers",
      faultType: "NOTE",
      faultCode: "Flow and water temperature low",
      faultCause: "Programmer for central heating or domestic hot water are off, debris build-up or low water supply pressure"
    },
    {
      brand: "Minstral",
      model: "All Minstral Boilers",
      faultType: "NOTE",
      faultCode: "No central heating or hot water",
      faultCause: "Programmer channels are off, thermostat fault or turned off"
    },
    {
      brand: "Minstral",
      model: "All Minstral Boilers",
      faultType: "NOTE",
      faultCode: "Thermostat trips off",
      faultCause: "Fault circulating pump"
    },
    {
      brand: "Minstral",
      model: "All Minstral Boilers",
      faultType: "NOTE",
      faultCode: "No central heating",
      faultCause: "Spring fault or return valve not moving or operating properly – room stat error"
    },
    {
      brand: "Minstral",
      model: "All Minstral Boilers",
      faultType: "NOTE",
      faultCode: "No domestic hot water",
      faultCause: "Spring fault, jammed in how water mode, flow switch blocked or faulty"
    },
    {
      brand: "Minstral",
      model: "All Minstral Boilers",
      faultType: "NOTE",
      faultCode: "Discharges on pressure relief valve",
      faultCause: "Pressure vessel has lost charge, insufficient expansion volume"
    },
  ]
}