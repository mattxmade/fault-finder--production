import { nanoid } from "nanoid"
import { BrandItem } from "../../../types"

"Worcester Bosch Boiler Fault Codes"

export const brand_worcester_bosch: BrandItem = {
  id: nanoid(),
  name: "Worcester Bosch",

  info: {
    website: "",
    manual: { page: 0, link: ""}
  },

  hasIcon: false,
  hasFlash: true,
  hasFaultCode: true,
  hasFaultNote: true,

  faultCodes: [
    //"Worcester Bosch CDI Classic Combi Boiler Fault Codes"
    {
      brand: "Worcester Bosch",
      model: "CDI Classic Combi",
      faultType: "CODE",
      faultCode: "A1",
      faultCause: "Water is leaking or the pump needs replacing or freeing due to the pump running dry."
    },
    {
      brand: "Worcester Bosch",
      model: "CDI Classic Combi",
      faultType: "CODE",
      faultCode: "A7",
      faultCause: "The hot water negative thermistor coefficient (NTC) sensor is defective – the hot water sensor or connecting leads need checking."
    },
    {
      brand: "Worcester Bosch",
      model: "CDI Classic Combi",
      faultType: "CODE",
      faultCode: "A8",
      faultCause: "Break communication to FX sensor controls electrical connections need checking."
    },
    {
      brand: "Worcester Bosch",
      model: "CDI Classic Combi",
      faultType: "CODE",
      faultCode: "B1",
      faultCause: "Code plug not detected ."
    },
    {
      brand: "Worcester Bosch",
      model: "CDI Classic Combi",
      faultType: "CODE",
      faultCode: "C6",
      faultCause: "Fan speed too low – the fan lead and connector need checking and may need replacing."
    },
    {
      brand: "Worcester Bosch",
      model: "CDI Classic Combi",
      faultType: "CODE",
      faultCode: "E2",
      faultCause: "Central heating (CH) water flow negative thermistor coefficient (NTC) sensor defective check CH flow NTC sensor and connection leads."
    },
    {
      brand: "Worcester Bosch",
      model: "CDI Classic Combi",
      faultType: "CODE",
      faultCode: "E9",
      faultCause: "Safety temperature limiter in central heating (CH) flow has tripped the system pressure or safety temperature limiter needs checking"
    },
    {
      brand: "Worcester Bosch",
      model: "CDI Classic Combi",
      faultType: "CODE",
      faultCode: "EA",
      faultCause: "Flame not detected due to a gas issue – the gas supply, power supply or igniter, electrode and lead need checking – contact a Gas Safe installer."
    },
    {
      brand: "Worcester Bosch",
      model: "CDI Classic Combi",
      faultType: "CODE",
      faultCode: "F0",
      faultCause: "Internal error – electrical connector contacts or programmer interface module – check ignition leads are not loose."
    },
    {
      brand: "Worcester Bosch",
      model: "CDI Classic Combi",
      faultType: "CODE",
      faultCode: "F7",
      faultCause: "Flame detected even though the appliance is switched off – check the electrode assembly is dry and the pcb and flue are clear."
    },
    {
      brand: "Worcester Bosch",
      model: "CDI Classic Combi",
      faultType: "CODE",
      faultCode: "FA",
      faultCause: "Flame detected after gas shut off – the gas valve needs checking – hire a Gas Safe installer."
    },
    {
      brand: "Worcester Bosch",
      model: "CDI Classic Combi",
      faultType: "CODE",
      faultCode: "FD",
      faultCause: "Reset button pressed by mistake – press reset button again."
    },

    //"Worcester Bosch CDI Highflow Combi Boiler Fault Codes"
    {
      brand: "Worcester Bosch",
      model: "CDI Highflow Combi",
      faultType: "CODE",
      faultCode: "A1",
      faultCause: "Pump dry run detection or pump is running in air the system pressure needs checking"
    },
    {
      brand: "Worcester Bosch",
      model: "CDI Highflow Combi",
      faultType: "CODE",
      faultCode: "A5",
      faultCause: "Tank negative thermistor coefficient (NTC) defect"
    },
    {
      brand: "Worcester Bosch",
      model: "CDI Highflow Combi",
      faultType: "CODE",
      faultCode: "A7",
      faultCause: "Domestic hot water (DHW) negative thermistor coefficient (NTC) defect"
    },
    {
      brand: "Worcester Bosch",
      model: "CDI Highflow Combi",
      faultType: "CODE",
      faultCode: "A8",
      faultCause: "Energy Management System (EMS) communication error"
    },
    {
      brand: "Worcester Bosch",
      model: "CDI Highflow Combi",
      faultType: "CODE",
      faultCode: "B1",
      faultCause: "Code plug not detected"
    },
    {
      brand: "Worcester Bosch",
      model: "CDI Highflow Combi",
      faultType: "CODE",
      faultCode: "B2, B3, B4, B5, B6",
      faultCause: "Data error"
    },
    {
      brand: "Worcester Bosch",
      model: "CDI Highflow Combi",
      faultType: "CODE",
      faultCode: "B7",
      faultCause: "Burner control error"
    },
    {
      brand: "Worcester Bosch",
      model: "CDI Highflow Combi",
      faultType: "CODE",
      faultCode: "C6",
      faultCause: "Fan defect"
    },
    {
      brand: "Worcester Bosch",
      model: "CDI Highflow Combi",
      faultType: "CODE",
      faultCode: "D3",
      faultCause: "External temperature limiter"
    },
    {
      brand: "Worcester Bosch",
      model: "CDI Highflow Combi",
      faultType: "CODE",
      faultCode: "D5",
      faultCause: "Condensate pump failure"
    },
    {
      brand: "Worcester Bosch",
      model: "CDI Highflow Combi",
      faultType: "CODE",
      faultCode: "D6",
      faultCause: "Internal heat bank overflow"
    },
    {
      brand: "Worcester Bosch",
      model: "CDI Highflow Combi",
      faultType: "CODE",
      faultCode: "EA",
      faultCause: "Flame not detected"
    },
    {
      brand: "Worcester Bosch",
      model: "CDI Highflow Combi",
      faultType: "CODE",
      faultCode: "E2",
      faultCause: "Primary negative thermistor coefficient (NTC) defect"
    },
    {
      brand: "Worcester Bosch",
      model: "CDI Highflow Combi",
      faultType: "CODE",
      faultCode: "E9",
      faultCause: "Safety temperature limiter in central heating (CH) flow stat tripped"
    },
    {
      brand: "Worcester Bosch",
      model: "CDI Highflow Combi",
      faultType: "CODE",
      faultCode: "F0",
      faultCause: "Internal error"
    },
    {
      brand: "Worcester Bosch",
      model: "CDI Highflow Combi",
      faultType: "CODE",
      faultCode: "F1",
      faultCause: "ROM fault"
    },
    {
      brand: "Worcester Bosch",
      model: "CDI Highflow Combi",
      faultType: "CODE",
      faultCode: "F7",
      faultCause: "Flame detected after appliance has been shut off"
    },
    {
      brand: "Worcester Bosch",
      model: "CDI Highflow Combi",
      faultType: "CODE",
      faultCode: "FA",
      faultCause: "Flame detected after gas shut off"
    },
    {
      brand: "Worcester Bosch",
      model: "CDI Highflow Combi",
      faultType: "CODE",
      faultCode: "FD",
      faultCause: "Reset button pressed – try pressing the reset button again"
    },

    //"Worcester Bosch CDi Compact / Greenstar 25/30 Si Combi / Greenstar 27/30 I system Boiler Fault Codes"
    {
      brand: "Worcester Bosch",
      model: "CDi Compact / Greenstar 25/30 Si Combi / Greenstar 27/30 I system",
      faultType: "CODE",
      faultCode: "T1",
      faultCause: "Ignition test – checking the igniter spark"
    },
    {
      brand: "Worcester Bosch",
      model: "CDi Compact / Greenstar 25/30 Si Combi / Greenstar 27/30 I system",
      faultType: "CODE",
      faultCode: "T2",
      faultCause: "Fan test – checking the basic fan"
    },
    {
      brand: "Worcester Bosch",
      model: "CDi Compact / Greenstar 25/30 Si Combi / Greenstar 27/30 I system",
      faultType: "CODE",
      faultCode: "T3",
      faultCause: "Pump test – checking the basic pump"
    },
    {
      brand: "Worcester Bosch",
      model: "CDi Compact / Greenstar 25/30 Si Combi / Greenstar 27/30 I system",
      faultType: "CODE",
      faultCode: "T4",
      faultCause: "Three way valve test"
    },
    {
      brand: "Worcester Bosch",
      model: "CDi Compact / Greenstar 25/30 Si Combi / Greenstar 27/30 I system",
      faultType: "CODE",
      faultCode: "T6",
      faultCause: "Ionisation oscillator test"
    },
    {
      brand: "Worcester Bosch",
      model: "CDi Compact / Greenstar 25/30 Si Combi / Greenstar 27/30 I system",
      faultType: "CODE",
      faultCode: "9A 362",
      faultCause: "error – incorrect HCM fitted"
    },
    {
      brand: "Worcester Bosch",
      model: "CDi Compact / Greenstar 25/30 Si Combi / Greenstar 27/30 I system",
      faultType: "CODE",
      faultCode: "9U 233",
      faultCause: "Heat Control Module (HCM) error – problem with code plug"
    },
    {
      brand: "Worcester Bosch",
      model: "CDi Compact / Greenstar 25/30 Si Combi / Greenstar 27/30 I system",
      faultType: "CODE",
      faultCode: "B7 257",
      faultCause: "Internal error – possible control board problem"
    },
    {
      brand: "Worcester Bosch",
      model: "CDi Compact / Greenstar 25/30 Si Combi / Greenstar 27/30 I system",
      faultType: "CODE",
      faultCode: "C6 215",
      faultCause: "Fan problem – fan running too fast"
    },
    {
      brand: "Worcester Bosch",
      model: "CDi Compact / Greenstar 25/30 Si Combi / Greenstar 27/30 I system",
      faultType: "CODE",
      faultCode: "C7 214",
      faultCause: "Fan problem – fan not running"
    },
    {
      brand: "Worcester Bosch",
      model: "CDi Compact / Greenstar 25/30 Si Combi / Greenstar 27/30 I system",
      faultType: "CODE",
      faultCode: "D1 240",
      faultCause: "Return sensor error – sensor may be wet or damaged"
    },
    {
      brand: "Worcester Bosch",
      model: "CDi Compact / Greenstar 25/30 Si Combi / Greenstar 27/30 I system",
      faultType: "CODE",
      faultCode: "E2 222",
      faultCause: "Flow sensor short circuit error"
    },
    {
      brand: "Worcester Bosch",
      model: "CDi Compact / Greenstar 25/30 Si Combi / Greenstar 27/30 I system",
      faultType: "CODE",
      faultCode: "E5 218",
      faultCause: "Flow temperature too high"
    },
    {
      brand: "Worcester Bosch",
      model: "CDi Compact / Greenstar 25/30 Si Combi / Greenstar 27/30 I system",
      faultType: "CODE",
      faultCode: "E9 219",
      faultCause: "Safety sensor fault – temperature too high, sensor short circuit or open circuit"
    },
    {
      brand: "Worcester Bosch",
      model: "CDi Compact / Greenstar 25/30 Si Combi / Greenstar 27/30 I system",
      faultType: "CODE",
      faultCode: "EA 227",
      faultCause: "No flame detected or flame signal loss during operation"
    },
    {
      brand: "Worcester Bosch",
      model: "CDi Compact / Greenstar 25/30 Si Combi / Greenstar 27/30 I system",
      faultType: "CODE",
      faultCode: "F0 237",
      faultCause: "Internal error"
    },
    {
      brand: "Worcester Bosch",
      model: "CDi Compact / Greenstar 25/30 Si Combi / Greenstar 27/30 I system",
      faultType: "CODE",
      faultCode: "F7 228",
      faultCause: "Flame error – false flame or flame detected before burner started"
    },
    {
      brand: "Worcester Bosch",
      model: "CDi Compact / Greenstar 25/30 Si Combi / Greenstar 27/30 I system",
      faultType: "CODE",
      faultCode: "FA 306",
      faultCause: "False flame fault – flame detected after burner stop"
    },
    {
      brand: "Worcester Bosch",
      model: "CDi Compact / Greenstar 25/30 Si Combi / Greenstar 27/30 I system",
      faultType: "CODE",
      faultCode: "FD 231",
      faultCause: "Mains power fault – electrical power interruption"
    },
    {
      brand: "Worcester Bosch",
      model: "CDi Compact / Greenstar 25/30 Si Combi / Greenstar 27/30 I system",
      faultType: "CODE",
      faultCode: "FA 364",
      faultCause: "Gas valve EV2 leak test failed – gas valve leak"
    },
    {
      brand: "Worcester Bosch",
      model: "CDi Compact / Greenstar 25/30 Si Combi / Greenstar 27/30 I system",
      faultType: "CODE",
      faultCode: "FB 365",
      faultCause: "Gas valve EV1 leak test failed"
    },
    {
      brand: "Worcester Bosch",
      model: "CDi Compact / Greenstar 25/30 Si Combi / Greenstar 27/30 I system",
      faultType: "CODE",
      faultCode: "A1 281",
      faultCause: "Pump stuck or running with air in the system"
    },
    {
      brand: "Worcester Bosch",
      model: "CDi Compact / Greenstar 25/30 Si Combi / Greenstar 27/30 I system",
      faultType: "CODE",
      faultCode: "C1 264",
      faultCause: "Airflow stopped during operation"
    },
    {
      brand: "Worcester Bosch",
      model: "CDi Compact / Greenstar 25/30 Si Combi / Greenstar 27/30 I system",
      faultType: "CODE",
      faultCode: "C4 273",
      faultCause: "Airflow present during last 24 hour"
    },
    {
      brand: "Worcester Bosch",
      model: "CDi Compact / Greenstar 25/30 Si Combi / Greenstar 27/30 I system",
      faultType: "CODE",
      faultCode: "D1 240",
      faultCause: "Return sensor short circuit"
    },
    {
      brand: "Worcester Bosch",
      model: "CDi Compact / Greenstar 25/30 Si Combi / Greenstar 27/30 I system",
      faultType: "CODE",
      faultCode: "D4 271",
      faultCause: "Temperature difference between flow and safety sensor exceeds limit"
    },
    {
      brand: "Worcester Bosch",
      model: "CDi Compact / Greenstar 25/30 Si Combi / Greenstar 27/30 I system",
      faultType: "CODE",
      faultCode: "E9 224",
      faultCause: "Max thermostat activated – flue gas thermostat overheat"
    },
    {
      brand: "Worcester Bosch",
      model: "CDi Compact / Greenstar 25/30 Si Combi / Greenstar 27/30 I system",
      faultType: "CODE",
      faultCode: "EA 227",
      faultCause: "No ionisation detected after ignition"
    },
    {
      brand: "Worcester Bosch",
      model: "CDi Compact / Greenstar 25/30 Si Combi / Greenstar 27/30 I system",
      faultType: "CODE",
      faultCode: "EF 349",
      faultCause: "Central heating boil detected – boiler operating at minimum burner load with temperature difference greater than 18°C between Flow &amp; Return."
    },
    {
      brand: "Worcester Bosch",
      model: "CDi Compact / Greenstar 25/30 Si Combi / Greenstar 27/30 I system",
      faultType: "CODE",
      faultCode: "NO CODE 212",
      faultCause: "Safety or flow temperature rising too fast"
    },

    //"Worcester Bosch CDi Classic Regular Boiler Fault Codes"
    {
      brand: "Worcester Bosch",
      model: "CDi Classic Regular",
      faultType: "CODE",
      faultCode: "B1",
      faultCause: "Code plug not detected"
    },
    {
      brand: "Worcester Bosch",
      model: "CDi Classic Regular",
      faultType: "CODE",
      faultCode: "C6",
      faultCause: "Fan speed too low"
    },
    {
      brand: "Worcester Bosch",
      model: "CDi Classic Regular",
      faultType: "CODE",
      faultCode: "E2",
      faultCause: "Central heating (CH) flow negative thermistor coefficient (NTC) sensor defective"
    },
    {
      brand: "Worcester Bosch",
      model: "CDi Classic Regular",
      faultType: "CODE",
      faultCode: "E9",
      faultCause: "Safety temperature limiter in central heating (CH) flow has tripped"
    },
    {
      brand: "Worcester Bosch",
      model: "CDi Classic Regular",
      faultType: "CODE",
      faultCode: "EA",
      faultCause: "Flame not detected"
    },
    {
      brand: "Worcester Bosch",
      model: "CDi Classic Regular",
      faultType: "CODE",
      faultCode: "F0",
      faultCause: "Internal error"
    },
    {
      brand: "Worcester Bosch",
      model: "CDi Classic Regular",
      faultType: "CODE",
      faultCode: "F7",
      faultCause: "Flame detected even though appliance switched off"
    },
    {
      brand: "Worcester Bosch",
      model: "CDi Classic Regular",
      faultType: "CODE",
      faultCode: "FA",
      faultCause: "Flame detected after gas shut off"
    },
    {
      brand: "Worcester Bosch",
      model: "CDi Classic Regular",
      faultType: "CODE",
      faultCode: "FD",
      faultCause: "Reset button pressed by mistake"
    },

    //"Worcester Bosch Greenstar I System / Combi Boiler Fault Codes"
    {
      brand: "Worcester Bosch",
      model: "Greenstar I System / Combi",
      faultType: "CODE",
      faultCode: "226",
      faultCause: "Service tool has been connected in the blocking error history menu"
    },
    {
      brand: "Worcester Bosch",
      model: "Greenstar I System / Combi",
      faultType: "CODE",
      faultCode: "FD 231",
      faultCause: "The power has been interrupted during a lockout"
    },
    {
      brand: "Worcester Bosch",
      model: "Greenstar I System / Combi",
      faultType: "CODE",
      faultCode: "C7 214",
      faultCause: "Fan does not run during the start up phase – fan harness connector needs checking"
    },
    {
      brand: "Worcester Bosch",
      model: "Greenstar I System / Combi",
      faultType: "CODE",
      faultCode: "C6 215",
      faultCause: "Fan speed too high – check the fan harness and connector"
    },
    {
      brand: "Worcester Bosch",
      model: "Greenstar I System / Combi",
      faultType: "CODE",
      faultCode: "C7 216",
      faultCause: "Fan speed too low – check the fan harness and connector"
    },
    {
      brand: "Worcester Bosch",
      model: "Greenstar I System / Combi",
      faultType: "CODE",
      faultCode: "C7 217",
      faultCause: "Fan has stopped during appliance operation"
    },
    {
      brand: "Worcester Bosch",
      model: "Greenstar I System / Combi",
      faultType: "CODE",
      faultCode: "C1 264",
      faultCause: "Fan stopped during operation"
    },
    {
      brand: "Worcester Bosch",
      model: "Greenstar I System / Combi",
      faultType: "CODE",
      faultCode: "C4 273",
      faultCause: "Continuous fan operation for the last 24 hours – appliance temporarily blocked"
    },
    {
      brand: "Worcester Bosch",
      model: "Greenstar I System / Combi",
      faultType: "CODE",
      faultCode: "E2 222",
      faultCause: "Flow temperature sensor shorted"
    },
    {
      brand: "Worcester Bosch",
      model: "Greenstar I System / Combi",
      faultType: "CODE",
      faultCode: "E2 233",
      faultCause: "Flow temperature sensor disconnected"
    },
    {
      brand: "Worcester Bosch",
      model: "Greenstar I System / Combi",
      faultType: "CODE",
      faultCode: "E9 276",
      faultCause: "Primary flow temperature exceeded 95°c"
    },
    {
      brand: "Worcester Bosch",
      model: "Greenstar I System / Combi",
      faultType: "CODE",
      faultCode: "E2 350",
      faultCause: "Flow temperature sensor shorted"
    },
    {
      brand: "Worcester Bosch",
      model: "Greenstar I System / Combi",
      faultType: "CODE",
      faultCode: "E2 351",
      faultCause: "Flow temperature sensor disconnected"
    },
    {
      brand: "Worcester Bosch",
      model: "Greenstar I System / Combi",
      faultType: "CODE",
      faultCode: "FA 306",
      faultCause: "Ionisation detected after the gas valve closed"
    },
    {
      brand: "Worcester Bosch",
      model: "Greenstar I System / Combi",
      faultType: "CODE",
      faultCode: "EA 227",
      faultCause: "No ionisation detected after ignition"
    },
    {
      brand: "Worcester Bosch",
      model: "Greenstar I System / Combi",
      faultType: "CODE",
      faultCode: "F7 228",
      faultCause: "Isioniation current detected before burner start"
    },
    {
      brand: "Worcester Bosch",
      model: "Greenstar I System / Combi",
      faultType: "CODE",
      faultCode: "EA 229",
      faultCause: "Loss of ionisation signal during operation"
    },
    {
      brand: "Worcester Bosch",
      model: "Greenstar I System / Combi",
      faultType: "CODE",
      faultCode: "EA 261",
      faultCause: "Heat control module (HCM) potentially defective – reset the appliance"
    },
    {
      brand: "Worcester Bosch",
      model: "Greenstar I System / Combi",
      faultType: "CODE",
      faultCode: "9U 233",
      faultCause: "Control box or heat control module (HCM) is defective or loose, the HCM needs to be checked"
    },
    {
      brand: "Worcester Bosch",
      model: "Greenstar I System / Combi",
      faultType: "CODE",
      faultCode: "C4 237",
      faultCause: "Control box or heat control module (HCM) is defective"
    },
    {
      brand: "Worcester Bosch",
      model: "Greenstar I System / Combi",
      faultType: "CODE",
      faultCode: "F0 238",
      faultCause: "Gas valve or control box error – gas valve coils need checking"
    },
    {
      brand: "Worcester Bosch",
      model: "Greenstar I System / Combi",
      faultType: "CODE",
      faultCode: "F0 239",
      faultCause: "Control box or the heat control module (HCM) is defective – the control box connections need checking"
    },
    {
      brand: "Worcester Bosch",
      model: "Greenstar I System / Combi",
      faultType: "CODE",
      faultCode: "F0 242",
      faultCause: "Control box or the heat control module (HCM) is defective – the HCM and control box connections need to be checked"
    },
    {
      brand: "Worcester Bosch",
      model: "Greenstar I System / Combi",
      faultType: "CODE",
      faultCode: "B7 257",
      faultCause: "Control box or the heat control module HCM) is defective- the HCM and control box connections need to be checked"
    },
    {
      brand: "Worcester Bosch",
      model: "Greenstar I System / Combi",
      faultType: "CODE",
      faultCode: "F0 258",
      faultCause: "Control box or the heat control module (HCM) is defective – HCM or control box connections need to be checked"
    },
    {
      brand: "Worcester Bosch",
      model: "Greenstar I System / Combi",
      faultType: "CODE",
      faultCode: "EH 258",
      faultCause: "Control box or the heat control module (HCM) is defective – HCM or control box connections need to be checked"
    },
    {
      brand: "Worcester Bosch",
      model: "Greenstar I System / Combi",
      faultType: "CODE",
      faultCode: "F1 259 ",
      faultCause: "Control box or the heat control module (HCM) is defective – HCM or control box connections need to be checked"
    },
    {
      brand: "Worcester Bosch",
      model: "Greenstar I System / Combi",
      faultType: "CODE",
      faultCode: "F0 262",
      faultCause: "Control box or the heat control module (HCM) is defective – HCM or control box connections need to be checked"
    },
    {
      brand: "Worcester Bosch",
      model: "Greenstar I System / Combi",
      faultType: "CODE",
      faultCode: "F1 263",
      faultCause: "Control box or the heat control module (HCM) is defective – HCM or control box connections need to be checked"
    },
    {
      brand: "Worcester Bosch",
      model: "Greenstar I System / Combi",
      faultType: "CODE",
      faultCode: "F0 272",
      faultCause: "Control box or the heat control module (HCM) is defective – control box and connections need checking or HCM might not be inserted properly and need replacing"
    },
    {
      brand: "Worcester Bosch",
      model: "Greenstar I System / Combi",
      faultType: "CODE",
      faultCode: "F0 280",
      faultCause: "Control box or the heat control module (HCM) is defective – control box and connections need checking or HCM might not be inserted properly and need replacing"
    },
    {
      brand: "Worcester Bosch",
      model: "Greenstar I System / Combi",
      faultType: "CODE",
      faultCode: "F0 290",
      faultCause: "Control box is defective – HCM needs checking as it might not be inserted properly or need replacing"
    },
    {
      brand: "Worcester Bosch",
      model: "Greenstar I System / Combi",
      faultType: "CODE",
      faultCode: "328",
      faultCause: "Internal error with the mains voltage – frequency may be inconsistent"
    },
    {
      brand: "Worcester Bosch",
      model: "Greenstar I System / Combi",
      faultType: "CODE",
      faultCode: "235",
      faultCause: "Incompatible heat control module (HCM) software versions – control box needs latest software"
    },
    {
      brand: "Worcester Bosch",
      model: "Greenstar I System / Combi",
      faultType: "CODE",
      faultCode: "356",
      faultCause: "Low mains voltage – the voltage may be interrupted or inconsistent and needs checking"
    },
    {
      brand: "Worcester Bosch",
      model: "Greenstar I System / Combi",
      faultType: "CODE",
      faultCode: "360",
      faultCause: "Heat control module (HCM) invalid – the inserted HCM does not correspond with the control box"
    },
    {
      brand: "Worcester Bosch",
      model: "Greenstar I System / Combi",
      faultType: "CODE",
      faultCode: "A8 362",
      faultCause: "Low mains voltage – the voltage may be interrupted, inconsistent or heat control module (HCM) invalid"
    },
    {
      brand: "Worcester Bosch",
      model: "Greenstar I System / Combi",
      faultType: "CODE",
      faultCode: "CC 800",
      faultCause: "Outdoor sensor defect available when accessory outdoor sensor is connected"
    },
    {
      brand: "Worcester Bosch",
      model: "Greenstar I System / Combi",
      faultType: "CODE",
      faultCode: "A1 281",
      faultCause: "Pump stock or running dry"
    },
    {
      brand: "Worcester Bosch",
      model: "Greenstar I System / Combi",
      faultType: "CODE",
      faultCode: "E9 224",
      faultCause: "Flue or high limit thermostat activated"
    },
    {
      brand: "Worcester Bosch",
      model: "Greenstar I System / Combi",
      faultType: "CODE",
      faultCode: "D4 341",
      faultCause: "Primary flow temperature rising too fast"
    },

    //"Worcester Bosch GB162 Boiler Fault Codes"
    {
      brand: "Worcester Bosch",
      model: "GB162",
      faultType: "CODE",
      faultCode: "208",
      faultCause: "The boiler is in chimney sweep mode"
    },
    {
      brand: "Worcester Bosch",
      model: "GB162",
      faultType: "CODE",
      faultCode: "200",
      faultCause: "The boiler is in heating mode"
    },
    {
      brand: "Worcester Bosch",
      model: "GB162",
      faultType: "CODE",
      faultCode: "201",
      faultCause: "The boiler is in domestic hot water (DHW) mode"
    },
    {
      brand: "Worcester Bosch",
      model: "GB162",
      faultType: "CODE",
      faultCode: "202",
      faultCause: "The boiler is waiting – there was a heat demand from the on off or modulating control"
    },
    {
      brand: "Worcester Bosch",
      model: "GB162",
      faultType: "CODE",
      faultCode: "203",
      faultCause: "The boiler is on standby"
    },
    {
      brand: "Worcester Bosch",
      model: "GB162",
      faultType: "CODE",
      faultCode: "204 ",
      faultCause: "The boiler is waiting – the actual temperature is higher than the calculated or selected boiler temperature"
    },
    {
      brand: "Worcester Bosch",
      model: "GB162",
      faultType: "CODE",
      faultCode: "212",
      faultCause: "The temperature recorded by the flow temperature sensor or the safety sensor is rising too quickly"
    },
    {
      brand: "Worcester Bosch",
      model: "GB162",
      faultType: "CODE",
      faultCode: "226",
      faultCause: "Diagnosis tool was connected and is now locked out"
    },
    {
      brand: "Worcester Bosch",
      model: "GB162",
      faultType: "CODE",
      faultCode: "260",
      faultCause: "The flow temperature sensor is not detecting a rise in temperature following a burner start"
    },
    {
      brand: "Worcester Bosch",
      model: "GB162",
      faultType: "CODE",
      faultCode: "265",
      faultCause: "The boiler is waiting in response to a heat demand – the boiler regularly switches to partial load"
    },
    {
      brand: "Worcester Bosch",
      model: "GB162",
      faultType: "CODE",
      faultCode: "268",
      faultCause: "Component test phase"
    },
    {
      brand: "Worcester Bosch",
      model: "GB162",
      faultType: "CODE",
      faultCode: "270",
      faultCause: "The boiler is modulating upwards"
    },
    {
      brand: "Worcester Bosch",
      model: "GB162",
      faultType: "CODE",
      faultCode: "283",
      faultCause: "The boiler is preparing for a burner start – the fan and pump are activated"
    },
    {
      brand: "Worcester Bosch",
      model: "GB162",
      faultType: "CODE",
      faultCode: "284",
      faultCause: "The gas valve is switched"
    },
    {
      brand: "Worcester Bosch",
      model: "GB162",
      faultType: "CODE",
      faultCode: "305",
      faultCause: "The boiler is waiting for domestic hot water (DHW) operation to end"
    },
    {
      brand: "Worcester Bosch",
      model: "GB162",
      faultType: "CODE",
      faultCode: "235",
      faultCause: "The KIM (boiler identification module) is too new for the burner control unit"
    },
    {
      brand: "Worcester Bosch",
      model: "GB162",
      faultType: "CODE",
      faultCode: "360",
      faultCause: "The KIM that has been fitted is not compatible with the burner control unit"
    },
    {
      brand: "Worcester Bosch",
      model: "GB162",
      faultType: "CODE",
      faultCode: "9A 361",
      faultCause: "The burner control unit that has been fitted is not compatible with the KIM (boiler identification module)"
    },
    {
      brand: "Worcester Bosch",
      model: "GB162",
      faultType: "CODE",
      faultCode: "9U 233",
      faultCause: "The burner control unit or KIM (boiler identification module) is faulty"
    },
    {
      brand: "Worcester Bosch",
      model: "GB162",
      faultType: "CODE",
      faultCode: "A3 317",
      faultCause: "Short circuit in the flue gas temperature sensor contacts"
    },
    {
      brand: "Worcester Bosch",
      model: "GB162",
      faultType: "CODE",
      faultCode: "B7 257",
      faultCause: "The burner control unit or the KIM (boiler identification module) is faulty"
    },
    {
      brand: "Worcester Bosch",
      model: "GB162",
      faultType: "CODE",
      faultCode: "C1 264",
      faultCause: "No control signal or power supply to the fan during operation"
    },
    {
      brand: "Worcester Bosch",
      model: "GB162",
      faultType: "CODE",
      faultCode: "C4 273",
      faultCause: "The boiler was switched off for a maximum of 2 minutes because it had been operating continuously for more than 24 hours"
    },
    {
      brand: "Worcester Bosch",
      model: "GB162",
      faultType: "CODE",
      faultCode: "C6 215 ",
      faultCause: "The fan speed is too high"
    },
    {
      brand: "Worcester Bosch",
      model: "GB162",
      faultType: "CODE",
      faultCode: "C6 216",
      faultCause: "The fan speed is too low"
    },
    {
      brand: "Worcester Bosch",
      model: "GB162",
      faultType: "CODE",
      faultCode: "C7 214",
      faultCause: "The fan does not run during the start phase"
    },
    {
      brand: "Worcester Bosch",
      model: "GB162",
      faultType: "CODE",
      faultCode: "C7 217",
      faultCause: "The fan speed is irregular when starting up"
    },
    {
      brand: "Worcester Bosch",
      model: "GB162",
      faultType: "CODE",
      faultCode: "CE 207",
      faultCause: "Water pressure is too low"
    },
    {
      brand: "Worcester Bosch",
      model: "GB162",
      faultType: "CODE",
      faultCode: "CE 266",
      faultCause: "Pump test failed"
    },
    {
      brand: "Worcester Bosch",
      model: "GB162",
      faultType: "CODE",
      faultCode: "D1 240",
      faultCause: "The contacts of the boiler return temperature sensor have been short circuited"
    },
    {
      brand: "Worcester Bosch",
      model: "GB162",
      faultType: "CODE",
      faultCode: "D1 241",
      faultCause: "The contacts of the boiler return temperature sensor have been interrupted"
    },
    {
      brand: "Worcester Bosch",
      model: "GB162",
      faultType: "CODE",
      faultCode: "D3 232",
      faultCause: "The external switching contact has opened"
    },
    {
      brand: "Worcester Bosch",
      model: "GB162",
      faultType: "CODE",
      faultCode: "D4 213",
      faultCause: "The actual temperature recorded by the flow temperature sensor or return temperature sensor is rising too quickly"
    },
    {
      brand: "Worcester Bosch",
      model: "GB162",
      faultType: "CODE",
      faultCode: "D4 271",
      faultCause: "Actual temperature differential between flow and safety temperature sensor is too high"
    },
    {
      brand: "Worcester Bosch",
      model: "GB162",
      faultType: "CODE",
      faultCode: "D4 286",
      faultCause: "The boiler return temperature sensor has detected a return temperature higher than 105°c"
    },
    {
      brand: "Worcester Bosch",
      model: "GB162",
      faultType: "CODE",
      faultCode: "E2 222",
      faultCause: "Short circuit in the flow temperature sensor contacts"
    },
    {
      brand: "Worcester Bosch",
      model: "GB162",
      faultType: "CODE",
      faultCode: "E2 223",
      faultCause: "The flow temperature sensor contacts have been interrupted"
    },
    {
      brand: "Worcester Bosch",
      model: "GB162",
      faultType: "CODE",
      faultCode: "E5 218",
      faultCause: "The temperature captured by the flow temperature sensor exceeded 105°c"
    },
    {
      brand: "Worcester Bosch",
      model: "GB162",
      faultType: "CODE",
      faultCode: "E9 210",
      faultCause: "The temperature measured by the flue gas sensor is too high and is open"
    },
    {
      brand: "Worcester Bosch",
      model: "GB162",
      faultType: "CODE",
      faultCode: "E9 219",
      faultCause: "The safety temperature sensor has captured a temperature in excess of 105°C"
    },
    {
      brand: "Worcester Bosch",
      model: "GB162",
      faultType: "CODE",
      faultCode: "E9 220",
      faultCause: "The contacts for the safety temperature sensor have shorted or the safety temperature sensor has detected a temperature higher than 130°c"
    },
    {
      brand: "Worcester Bosch",
      model: "GB162",
      faultType: "CODE",
      faultCode: "E9 224",
      faultCause: "The contacts of the safety temperature sensor have been interrupted"
    },
    {
      brand: "Worcester Bosch",
      model: "GB162",
      faultType: "CODE",
      faultCode: "E9 276",
      faultCause: "The temperature flow sensor has measured a temperature in excess of 95°c"
    },
    {
      brand: "Worcester Bosch",
      model: "GB162",
      faultType: "CODE",
      faultCode: "E9 277",
      faultCause: "The safety temperature sensor has measured temperature in excess of 95°c"
    },
    {
      brand: "Worcester Bosch",
      model: "GB162",
      faultType: "CODE",
      faultCode: "E9 285",
      faultCause: "The boiler return temperature sensor has measured a temperature higher than 95°c"
    },
    {
      brand: "Worcester Bosch",
      model: "GB162",
      faultType: "CODE",
      faultCode: "E9 318",
      faultCause: "The flue gas temperature sensor contacts have been interrupted"
    },
    {
      brand: "Worcester Bosch",
      model: "GB162",
      faultType: "CODE",
      faultCode: "EA 227",
      faultCause: "An insufficient ionisation current was measured following ignition of the burner"
    },
    {
      brand: "Worcester Bosch",
      model: "GB162",
      faultType: "CODE",
      faultCode: "EA 229",
      faultCause: "The ionisation current detected by the system during the burning phase was insufficient"
    },
    {
      brand: "Worcester Bosch",
      model: "GB162",
      faultType: "CODE",
      faultCode: "EA 234",
      faultCause: "The contacts of the gas valve have been interrupted"
    },
    {
      brand: "Worcester Bosch",
      model: "GB162",
      faultType: "CODE",
      faultCode: "EA 261",
      faultCause: "The burner control unit is faulty"
    },
    {
      brand: "Worcester Bosch",
      model: "GB162",
      faultType: "CODE",
      faultCode: "EA 269",
      faultCause: "The ignition device has been activated for too long"
    },
    {
      brand: "Worcester Bosch",
      model: "GB162",
      faultType: "CODE",
      faultCode: "F0 238",
      faultCause: "The burner control unit KIM (boiler identification module) is faulty"
    },
    {
      brand: "Worcester Bosch",
      model: "GB162",
      faultType: "CODE",
      faultCode: "F0 239",
      faultCause: "The burner control unit KIM (boiler identification module) has an error. Cabling might have poor contact breaks and pinching or \nthe plug and wiring of the burner control unit needs checking, also check the operating characteristics of the boiler by replacing the burner control unit."
    },
    {
      brand: "Worcester Bosch",
      model: "GB162",
      faultType: "CODE",
      faultCode: "F0 242, F0 243. F0 244. \nF0 245, F0 246. F0 247, F0 248,\n F0 249, F0 250, F0 251, F0 252, \nF0 253, F0 255, F0 259, F0 263,\n F0 267, F0 272",
      faultCause: "The burner control unit (KIM) is faulty – the wiring of the burner control unit needs checking, also \ncheck the operating characteristics of the boiler by replacing the burner control unit."
    },
    {
      brand: "Worcester Bosch",
      model: "GB162",
      faultType: "CODE",
      faultCode: "F0 278",
      faultCause: "The sensor test has failed – cabling and plug sensors need checking"
    },
    {
      brand: "Worcester Bosch",
      model: "GB162",
      faultType: "CODE",
      faultCode: "F0 279",
      faultCause: "The burner control unit, or KIM, is faulty – control unit may need replacing"
    },
    {
      brand: "Worcester Bosch",
      model: "GB162",
      faultType: "CODE",
      faultCode: "F0 280",
      faultCause: "The burner control unit is faulty"
    },
    {
      brand: "Worcester Bosch",
      model: "GB162",
      faultType: "CODE",
      faultCode: "F0 287",
      faultCause: "The burner control unit, or KIM, has an error"
    },
    {
      brand: "Worcester Bosch",
      model: "GB162",
      faultType: "CODE",
      faultCode: "F0 290",
      faultCause: "The burner control unit, or KIM, is faulty"
    },
    {
      brand: "Worcester Bosch",
      model: "GB162",
      faultType: "CODE",
      faultCode: "F7 228",
      faultCause: "An ionisation current was measured before the burner started"
    },
    {
      brand: "Worcester Bosch",
      model: "GB162",
      faultType: "CODE",
      faultCode: "F7 328",
      faultCause: "A brief power failure has occurred"
    },
    {
      brand: "Worcester Bosch",
      model: "GB162",
      faultType: "CODE",
      faultCode: "FA 306",
      faultCause: "An ionisation current was measured after the burner went out"
    },
    {
      brand: "Worcester Bosch",
      model: "GB162",
      faultType: "CODE",
      faultCode: "FD 231",
      faultCause: "The mains voltage was interrupted during an interlocking fault"
    },
    {
      brand: "Worcester Bosch",
      model: "GB162",
      faultType: "CODE",
      faultCode: "EC 256",
      faultCause: "The burner control unit has an error"
    },
    {
      brand: "Worcester Bosch",
      model: "GB162",
      faultType: "CODE",
      faultCode: "EH 258",
      faultCause: "The burner control unit is faulty – check the plug and wiring of the burner control unit."
    },
    {
      brand: "Worcester Bosch",
      model: "GB162",
      faultType: "CODE",
      faultCode: "H07",
      faultCause: "The current water pressure is too low, limiting the performance in heat mode as well as domestic hot water (DHW) mode"
    },
    {
      brand: "Worcester Bosch",
      model: "GB162",
      faultType: "CODE",
      faultCode: "HrE",
      faultCause: "The boiler keeps resetting"
    },
    {
      brand: "Worcester Bosch",
      model: "GB162",
      faultType: "CODE",
      faultCode: "rE",
      faultCause: "The boiler resets"
    },

    //"Worcester Bosch CDI Highflow Combi Boiler Fault Codes"
    //"A light on your boiler will flash to indicate that there is a fault. Depending on the type of fault, the light will flash in a different sequence."
    //"There will be 4 quick flashes followed by a 5 second gap when the light is off and finally a series of longer flashes. The number of long flashes tells you which fault the boiler has."

    {
      brand: "Worcester Bosch",
      model: "CDI Highflow Combi",
      faultType: "LED",
      faultCode: "Light off",
      faultCause: "No boiler demand"
    },
    {
      brand: "Worcester Bosch",
      model: "CDI Highflow Combi",
      faultType: "LED",
      faultCode: "Light on",
      faultCause: "Heating demand on boiler is OK"
    },
    {
      brand: "Worcester Bosch",
      model: "CDI Highflow Combi",
      faultType: "LED",
      faultCode: "1 flash 5 seconds off",
      faultCause: "No ionisation detected after ignition"
    },
    {
      brand: "Worcester Bosch",
      model: "CDI Highflow Combi",
      faultType: "LED",
      faultCode: "2 flashes 5 seconds off",
      faultCause: "Loss of ionisation signal during operation"
    },
    {
      brand: "Worcester Bosch",
      model: "CDI Highflow Combi",
      faultType: "LED",
      faultCode: "3 flashes 5 seconds off",
      faultCause: "Gas valve error"
    },
    {
      brand: "Worcester Bosch",
      model: "CDI Highflow Combi",
      faultType: "LED",
      faultCode: "4 flashes 5 seconds off",
      faultCause: "First safety timing error / ignition timing error"
    },
    {
      brand: "Worcester Bosch",
      model: "CDI Highflow Combi",
      faultType: "LED",
      faultCode: "5 flashes 5 seconds off",
      faultCause: "Ionisation detected after burner stopped\nGas valve EV2 leak test failed\nGas valve EV1 leak test failed\nIonisation current detected before burner start\nGas valve error\nIonisation sensor shorted"
    },
    {
      brand: "Worcester Bosch",
      model: "CDI Highflow Combi",
      faultType: "LED",
      faultCode: "4 flashes 5 second gap 1 long flash",
      faultCause: "Sensor test failed"
    },
    {
      brand: "Worcester Bosch",
      model: "CDI Highflow Combi",
      faultType: "LED",
      faultCode: "4 flashes, 5 second gap, 2 long flashes",
      faultCause: "Safety temperature too high"
    },
    {
      brand: "Worcester Bosch",
      model: "CDI Highflow Combi",
      faultType: "LED",
      faultCode: "4 flashes, 5 second gap, 3 long flashes",
      faultCause: "Max safety thermostat activated"
    },
    {
      brand: "Worcester Bosch",
      model: "CDI Highflow Combi",
      faultType: "LED",
      faultCode: "4 flashes, 5 second gap, 4 long flashes",
      faultCause: "Return temperature too high"
    },
    {
      brand: "Worcester Bosch",
      model: "CDI Highflow Combi",
      faultType: "LED",
      faultCode: "4 flashes, 5 second gap, 5 long flashes",
      faultCause: "Flow temperature too high – supply sensor exceeded 110°c"
    },
    {
      brand: "Worcester Bosch",
      model: "CDI Highflow Combi",
      faultType: "LED",
      faultCode: "1 long flash, 4 quick flashes, \n5 second gap, 1 long flash, 4 quick flashes",
      faultCause: "Heating control module (HCM) defective"
    },
    {
      brand: "Worcester Bosch",
      model: "CDI Highflow Combi",
      faultType: "LED",
      faultCode: "2 long flashes, 4 quick flashes, \n5 second gap, 2 long flashes, 4 quick flashes",
      faultCause: "Fan running too fast\nFan running too slow\nNo airflow after defined period of time\nFan not running"
    },
    {
      brand: "Worcester Bosch",
      model: "CDI Highflow Combi",
      faultType: "LED",
      faultCode: "3 long flashes, 4 quick flashes, \n5 second gap, 3 long flashes, 4 quick flashes",
      faultCause: "Mains voltage interrupted after locking error"
    },
    {
      brand: "Worcester Bosch",
      model: "CDI Highflow Combi",
      faultType: "LED",
      faultCode: "4 long flashes, 4 quick flashes, \n5 second gap, 4 long flash, 4 quick flashes",
      faultCause: "Internal control board faults"
    },
    {
      brand: "Worcester Bosch",
      model: "CDI Highflow Combi",
      faultType: "LED",
      faultCode: "5 long flashes, 4 quick flashes, \n5 second gap, 5 long flash, 4 quick flashes",
      faultCause: "All other miscellaneous faults – reset the boiler by turning the control knob anti-clockwise to the reset position"
    },

    //"Worcester Bosch Greenstar Ri Boiler Fault Codes"
    {
      brand: "Worcester Bosch",
      model: "Greenstar Ri",
      faultType: "LED",
      faultCode: "No light",
      faultCause: "No power at control board"
    },
    {
      brand: "Worcester Bosch",
      model: "Greenstar Ri",
      faultType: "LED",
      faultCode: "Light on",
      faultCause: "Appliance on but not operating during demand"
    },
    {
      brand: "Worcester Bosch",
      model: "Greenstar Ri",
      faultType: "LED",
      faultCode: "Slow flash ( mostly off flashes on)",
      faultCause: "Ignition lockout"
    },
    {
      brand: "Worcester Bosch",
      model: "Greenstar Ri",
      faultType: "LED",
      faultCode: "Slow flash ( mostly on flashes off)",
      faultCause: "Flue overheat or heat exchanger overheat"
    },
    {
      brand: "Worcester Bosch",
      model: "Greenstar Ri",
      faultType: "LED",
      faultCode: "Fast flash",
      faultCause: "Volatile lockout sensor fan or code plug"
    },
    {
      brand: "Worcester Bosch",
      model: "Greenstar Ri",
      faultType: "LED",
      faultCode: "2 pulses",
      faultCause: "Check service mode switch is in minimum position"
    },
    {
      brand: "Worcester Bosch",
      model: "Greenstar Ri",
      faultType: "LED",
      faultCode: "5 pulse s",
      faultCause: "Check service mode switch is in max position"
    },
    {
      brand: "Worcester Bosch",
      model: "Greenstar Ri",
      faultType: "LED",
      faultCode: "EA 229 or D5",
      faultCause: "Fozen condensate pipe"
    },
  ]
}

