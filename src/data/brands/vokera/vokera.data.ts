import { nanoid } from "nanoid"
import { BrandItem } from "../../../types"

// "Vokera Boiler Fault Codes"

export const brand_vokera: BrandItem = {
  id: nanoid(),
  name: "Vokera",

  info: {
    website: "",
    manual: {page: 40, link: ""}
  },

  hasIcon: false,
  hasFlash: false,
  hasFaultCode: true,
  hasFaultNote: false,

  faultCodes: [
    {
      brand: "Vokera",
      model: "All Vokera Boilers",
      faultType: "CODE",
      faultCode: "_St",
      faultCause: "Autostop"
    },    
    {
      brand: "Vokera",
      model: "All Vokera Boilers",
      faultType: "CODE",
      faultCode: "_CL",
      faultCause: "Call for service"
    },    
    {
      brand: "Vokera",
      model: "All Vokera Boilers",
      faultType: "CODE",
      faultCode: "A01",
      faultCause: "Ignition failure flame not sensed – internal fault"
    },    
    {
      brand: "Vokera",
      model: "All Vokera Boilers",
      faultType: "CODE",
      faultCode: "A02",
      faultCause: "Limit thermostat fault"
    },    
    {
      brand: "Vokera",
      model: "All Vokera Boilers",
      faultType: "CODE",
      faultCode: "A03",
      faultCause: "Fan fault"
    },    
    {
      brand: "Vokera",
      model: "All Vokera Boilers",
      faultType: "CODE",
      faultCode: "A04",
      faultCause: "Insufficient system water pressure"
    },    
    {
      brand: "Vokera",
      model: "All Vokera Boilers",
      faultType: "CODE",
      faultCode: "A06",
      faultCause: "Domestic how water (DHW) thermistor fault"
    },    
    {
      brand: "Vokera",
      model: "All Vokera Boilers",
      faultType: "CODE",
      faultCode: "A07",
      faultCause: "Primary flow thermistor fault – temperature of water is too high."
    },    
    {
      brand: "Vokera",
      model: "All Vokera Boilers",
      faultType: "CODE",
      faultCode: "A08",
      faultCause: "Return thermistor fault – water temperature too high."
    },    
    {
      brand: "Vokera",
      model: "All Vokera Boilers",
      faultType: "CODE",
      faultCode: "A09",
      faultCause: "Flue thermistor or ﬂue thermistor counter fault."
    },    
    {
      brand: "Vokera",
      model: "All Vokera Boilers",
      faultType: "CODE",
      faultCode: "A11",
      faultCause: "False flame"
    },    
    {
      brand: "Vokera",
      model: "All Vokera Boilers",
      faultType: "CODE",
      faultCode: "A77",
      faultCause: "Low temperature thermostat fault"
    },    
    {
      brand: "Vokera",
      model: "All Vokera Boilers",
      faultType: "CODE",
      faultCode: "ADJ",
      faultCause: "Calibration"
    },    
    {
      brand: "Vokera",
      model: "All Vokera Boilers",
      faultType: "CODE",
      faultCode: "ACO",
      faultCause: "Service operation"
    },

    {
      brand: "Vokera",
      model: "All Vokera Boilers",
      faultType: "CODE",
      faultCode: "N/A",
      faultCause: "Flame on"
    },    
    {
      brand: "Vokera",
      model: "All Vokera Boilers",
      faultType: "CODE",
      faultCode: "P",
      faultCause: "Preheating function active"
    },    
    {
      brand: "Vokera",
      model: "All Vokera Boilers",
      faultType: "CODE",
      faultCode: "P Blinking",
      faultCause: "Preheating function running"
    },    
    {
      brand: "Vokera",
      model: "All Vokera Boilers",
      faultType: "CODE",
      faultCode: "Hours",
      faultCause: "Stand-by"
    },    
    {
      brand: "Vokera",
      model: "All Vokera Boilers",
      faultType: "CODE",
      faultCode: "—",
      faultCause: "Off"
    },    
    {
      brand: "Vokera",
      model: "All Vokera Boilers",
      faultType: "CODE",
      faultCode: "01",
      faultCause: "Failure to ignite"
    },    
    {
      brand: "Vokera",
      model: "All Vokera Boilers",
      faultType: "CODE",
      faultCode: "02",
      faultCause: "Overheat"
    },    
    {
      brand: "Vokera",
      model: "All Vokera Boilers",
      faultType: "CODE",
      faultCode: "03",
      faultCause: "Problem with fan/flue"
    },    
    {
      brand: "Vokera",
      model: "All Vokera Boilers",
      faultType: "CODE",
      faultCode: "04",
      faultCause: "Insufficient water pressure"
    },    
    {
      brand: "Vokera",
      model: "All Vokera Boilers",
      faultType: "CODE",
      faultCode: "05",
      faultCause: "Reset as described for code 01"
    },    
    {
      brand: "Vokera",
      model: "All Vokera Boilers",
      faultType: "CODE",
      faultCode: "06",
      faultCause: "Hot water thermistor open circuit"
    },    
    {
      brand: "Vokera",
      model: "All Vokera Boilers",
      faultType: "CODE",
      faultCode: "07",
      faultCause: "Primary thermistor open circuit"
    },
    
    //"Vokera Mynute Boiler Fault Codes"
    {
      brand: "Vokera",
      model: "Mynute",
      faultType: "CODE",
      faultCode: "AL10, AL20, AL21, AL26, AL28, AL34",
      faultCause: "Try resetting the boiler, if the fault reoccurs you need to contact a heating engineer."
    },    
    {
      brand: "Vokera",
      model: "Mynute",
      faultType: "CODE",
      faultCode: "AL40",
      faultCause: "Check the system’s pressure and refill if necessary. Reset the boiler, if the fault reoccurs then you need to contact a heating engineer."
    },    
    {
      brand: "Vokera",
      model: "Mynute",
      faultType: "CODE",
      faultCode: "AL41",
      faultCause: "Check system pressure – refill if necessary. If fault reoccurs, contact a heating engineer."
    },
    {
      brand: "Vokera",
      model: "Mynute",
      faultType: "CODE",
      faultCode: "AL52, AL55, AL60, AL71,AL73, AL74, AL7 9 ",
      faultCause: "Contact a heating engineer."
    },
    {
      brand: "Vokera",
      model: "Mynute",
      faultType: "CODE",
      faultCode: "AL74, AL79",
      faultCause: "Reset the boiler. If the fault reoccurs, contact a heating engineer."
    },   
    
    //"Evolve Combi Evolve System Fault Codes"
    {
      brand: "Vokera",
      model: "Evolve Combi Evolve",
      faultType: "CODE",
      faultCode: "E10",
      faultCause: "Flame lockout"
    },    
    {
      brand: "Vokera",
      model: "Evolve Combi Evolve",
      faultType: "CODE",
      faultCode: "E011",
      faultCause: "Extraneous flame"
    },    
    {
      brand: "Vokera",
      model: "Evolve Combi Evolve",
      faultType: "CODE",
      faultCode: "E020",
      faultCause: "Limit thermostat"
    },    
    {
      brand: "Vokera",
      model: "Evolve Combi Evolve",
      faultType: "CODE",
      faultCode: "E030",
      faultCause: "Fan fault"
    },    
    {
      brand: "Vokera",
      model: "Evolve Combi Evolve",
      faultType: "CODE",
      faultCode: "E040",
      faultCause: "Water transducer – check system water pressure"
    },    
    {
      brand: "Vokera",
      model: "Evolve Combi Evolve",
      faultType: "CODE",
      faultCode: "E041",
      faultCause: "Water transducer – check system water pressure"
    },    
    {
      brand: "Vokera",
      model: "Evolve Combi Evolve",
      faultType: "CODE",
      faultCode: "E042",
      faultCause: "Water transducer fault"
    },    
    {
      brand: "Vokera",
      model: "Evolve Combi Evolve",
      faultType: "CODE",
      faultCode: "E060",
      faultCause: "Domestic hot water probe fault"
    },    
    {
      brand: "Vokera",
      model: "Evolve Combi Evolve",
      faultType: "CODE",
      faultCode: "4070",
      faultCause: "Fault flow sensor over temperature – flow sensor flow/return line probe differential alarm"
    },    
    {
      brand: "Vokera",
      model: "Evolve Combi Evolve",
      faultType: "CODE",
      faultCode: "E077",
      faultCause: "Main zone water thermostat"
    },    
    {
      brand: "Vokera",
      model: "Evolve Combi Evolve",
      faultType: "CODE",
      faultCode: "E080",
      faultCause: "Error with return line probe – over temperature outlet or differential alarm"
    },    
    {
      brand: "Vokera",
      model: "Evolve Combi Evolve",
      faultType: "CODE",
      faultCode: "E090",
      faultCause: "Flue gases over temperature probe"
    },    
    {
      brand: "Vokera",
      model: "Evolve Combi Evolve",
      faultType: "CODE",
      faultCode: "E091",
      faultCause: "Clean primary heat exchanger"
    },    
    {
      brand: "Vokera",
      model: "Evolve Combi Evolve",
      faultType: "CODE",
      faultCode: "—",
      faultCause: "Water pressure low"
    },    
    {
      brand: "Vokera",
      model: "Evolve Combi Evolve",
      faultType: "CODE",
      faultCode: "—",
      faultCause: "Water pressure high"
    },    
    {
      brand: "Vokera",
      model: "Evolve Combi Evolve",
      faultType: "CODE",
      faultCode: "—",
      faultCause: "Boiler board communication lost"
    },    
    {
      brand: "Vokera",
      model: "Evolve Combi Evolve",
      faultType: "CODE",
      faultCode: "—",
      faultCause: "BUS 485 communication lost"
    },    
    {
      brand: "Vokera",
      model: "Evolve Combi Evolve",
      faultType: "CODE",
      faultCode: "E021, E022, E023, E024, E067. E088, E097",
      faultCause: "Iono alarm"
    },    
    {
      brand: "Vokera",
      model: "Evolve Combi Evolve",
      faultType: "CODE",
      faultCode: "E085, E094, E095",
      faultCause: "Combustion fault/high CO"
    },    
    {
      brand: "Vokera",
      model: "Evolve Combi Evolve",
      faultType: "CODE",
      faultCode: "E058",
      faultCause: "Main voltage error"
    },    
    {
      brand: "Vokera",
      model: "Evolve Combi Evolve",
      faultType: "CODE",
      faultCode: "E065",
      faultCause: "Current modulation alarm"
    },    
    {
      brand: "Vokera",
      model: "Evolve Combi Evolve",
      faultType: "CODE",
      faultCode: "E086",
      faultCause: "Obstruction fumes alarm"
    },
  ]
}