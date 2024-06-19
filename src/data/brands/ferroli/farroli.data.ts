import { nanoid } from "nanoid"
import { BrandItem } from "../../../types"

// "Ferroli iBoiler Fault Codes"

export const brand_farroli: BrandItem = {
  id: nanoid(),
  name: "Farroli",

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
      brand: "Ferroli",
      model: "iBoiler",
      faultType: "CODE",
      faultCode: "A01",
      faultCause: "Ignition error – possible electrode fault or power too low, no gas or excessive condensate level",
    },
    {
      brand: "Ferroli",
      model: "iBoiler",
      faultType: "CODE",
      faultCode: "A02",
      faultCause: "Electrode or card error",
    },
    {
      brand: "Ferroli",
      model: "iBoiler",
      faultType: "CODE",
      faultCode: "A03",
      faultCause: "Heating sensor damaged, no water circulation or air in system",
    },
    {
      brand: "Ferroli",
      model: "iBoiler",
      faultType: "CODE",
      faultCode: "F04",
      faultCause: "Wrong card parameter setting",
    },
    {
      brand: "Ferroli",
      model: "iBoiler",
      faultType: "CODE",
      faultCode: "F05",
      faultCause: "Air pressure switch contact error – wrong flue baffle obstructed or not correctly sized",
    },
    {
      brand: "Ferroli",
      model: "iBoiler",
      faultType: "CODE",
      faultCode: "A06",
      faultCause: "No flame after the ignition phase – low pressure in gas system burner minimum pressure setting",
    },
    {
      brand: "Ferroli",
      model: "iBoiler",
      faultType: "CODE",
      faultCode: "F07",
      faultCause: "Air pressure switch error – contacts closed on activation of fan",
    },
    {
      brand: "Ferroli",
      model: "iBoiler",
      faultType: "CODE",
      faultCode: "A09",
      faultCause: "Gas valve error – wiring could be disconnected or error with gas valve",
    },
    {
      brand: "Ferroli",
      model: "iBoiler",
      faultType: "CODE",
      faultCode: "F10",
      faultCause: "Delivery sensor error, sensor damaged wiring shorted or disconnected",
    },
    {
      brand: "Ferroli",
      model: "iBoiler",
      faultType: "CODE",
      faultCode: "F11",
      faultCause: "Domestic hot water (DHW) sensor error – sensor damaged, wiring shorted or disconnected",
    },
    {
      brand: "Ferroli",
      model: "iBoiler",
      faultType: "CODE",
      faultCode: "A15",
      faultCause: "Fault F05 generated 5 times within the last 24 hours – possible error with the air pressure switch",
    },
    {
      brand: "Ferroli",
      model: "iBoiler",
      faultType: "CODE",
      faultCode: "A16",
      faultCause: "Gas valve error – wiring disconnected or faulty gas valve",
    },
    {
      brand: "Ferroli",
      model: "iBoiler",
      faultType: "CODE",
      faultCode: "A23",
      faultCause: "Card parameter error – possibly wrong card parameter setting",
    },
    {
      brand: "Ferroli",
      model: "iBoiler",
      faultType: "CODE",
      faultCode: "A24",
      faultCause: "Card parameter error – possibly wrong card parameter setting",
    },
    {
      brand: "Ferroli",
      model: "iBoiler",
      faultType: "CODE",
      faultCode: "F3",
      faultCause: "Supply voltage under 170V – electric mains error"
    },
    {
      brand: "Ferroli",
      model: "iBoiler",
      faultType: "CODE",
      faultCode: "F35",
      faultCause: "Faulty mains frequency – electric mains error",
    },
    {
      brand: "Ferroli",
      model: "iBoiler",
      faultType: "CODE",
      faultCode: "F37",
      faultCause: "Error with system water pressure, possible pressure too low or water pressure switch is damaged",
    },
    {
      brand: "Ferroli",
      model: "iBoiler",
      faultType: "CODE",
      faultCode: "F43",
      faultCause: "Exchanger protection intervention – could be because no system water circulation or there’s air in \nthe system",
    },
    {
      brand: "Ferroli",
      model: "iBoiler",
      faultType: "CODE",
      faultCode: "F50",
      faultCause: "Controller DBM23B error – controller could have an internal error",
    },
    {
      brand: "Ferroli",
      model: "iBoiler",
      faultType: "CODE",
      faultCode: "F51",
      faultCause: "Controller DBM23B error – controller could have an internal error",
    },
    
    //"Ferroli Modena HE System Fault Codes"
    {
      brand: "Ferroli",
      model: "Modena HE System",
      faultType: "CODE",
      faultCode: "A01",
      faultCause: "No burner ignition – possible electrode error, defective gas valve or incorrect inlet gas pressure",
    },
    {
      brand: "Ferroli",
      model: "Modena HE System",
      faultType: "CODE",
      faultCode: "A02",
      faultCause: "Flame detected with the burner off – electrode defective main board defective",
    },
    {
      brand: "Ferroli",
      model: "Modena HE System",
      faultType: "CODE",
      faultCode: "A03",
      faultCause: "High limit protection – possible flow temperature sensor not active or incorrectly located,\n no system circulation",
    },
    {
      brand: "Ferroli",
      model: "Modena HE System",
      faultType: "CODE",
      faultCode: "A04",
      faultCause: "Flue gas fault – fault F07 happened 3 times in the last 24 hours",
    },
    {
      brand: "Ferroli",
      model: "Modena HE System",
      faultType: "CODE",
      faultCode: "A05",
      faultCause: "Fan error – tachometer signal interrupted for 1 hour or longer",
    },
    {
      brand: "Ferroli",
      model: "Modena HE System",
      faultType: "CODE",
      faultCode: "A06",
      faultCause: "No flame after the ignition phase – electrode error, flame unstable, incorrect valve gas offset or \nflue gas circuit obstructed",
    },
    {
      brand: "Ferroli",
      model: "Modena HE System",
      faultType: "CODE",
      faultCode: "A41",
      faultCause: "Flow sensor error – sensor disconnected",
    },
    {
      brand: "Ferroli",
      model: "Modena HE System",
      faultType: "CODE",
      faultCode: "A42",
      faultCause: "Flow sensor error – sensor damaged",
    },
    {
      brand: "Ferroli",
      model: "Modena HE System",
      faultType: "CODE",
      faultCode: "F07",
      faultCause: "High fume temperature – the exchanger probe detects an excessive temperature",
    },
    {
      brand: "Ferroli",
      model: "Modena HE System",
      faultType: "CODE",
      faultCode: "F10",
      faultCause: "Flow sensor error – sensor damaged, short circuited, sensor damaged or wiring broken",
    },
    {
      brand: "Ferroli",
      model: "Modena HE System",
      faultType: "CODE",
      faultCode: "F11",
      faultCause: "Return sensor error – t-sensor damaged, short circuited, sensor damaged or wiring broken",
    },
    {
      brand: "Ferroli",
      model: "Modena HE System",
      faultType: "CODE",
      faultCode: "F13",
      faultCause: "Exchanger probe error – t-sensor damaged, short circuited, sensor damaged or wiring broken",
    },
    {
      brand: "Ferroli",
      model: "Modena HE System",
      faultType: "CODE",
      faultCode: "F14",
      faultCause: "Flow sensor error – t-sensor damaged, short circuited, sensor damaged or wiring broken",
    },
    {
      brand: "Ferroli",
      model: "Modena HE System",
      faultType: "CODE",
      faultCode: "F15",
      faultCause: "Fan problem – tachometer signal interrupted fan connection or damaged debris in fan. \nYou need to check and clean fan debris",
    },
    {
      brand: "Ferroli",
      model: "Modena HE System",
      faultType: "CODE",
      faultCode: "F34",
      faultCause: "Supply voltage under 170v – electric supply error",
    },
    {
      brand: "Ferroli",
      model: "Modena HE System",
      faultType: "CODE",
      faultCode: "F35",
      faultCause: "Irregular mains frequency – electric supply problem",
    },
    {
      brand: "Ferroli",
      model: "Modena HE System",
      faultType: "CODE",
      faultCode: "F37",
      faultCause: "Incorrect system water pressure error – possible sensor damaged or pressure too low",
    },
    {
      brand: "Ferroli",
      model: "Modena HE System",
      faultType: "CODE",
      faultCode: "F43",
      faultCause: "Exchanger protection activation – no system circulation air in system",
    },
    {
      brand: "Ferroli",
      model: "Modena HE System",
      faultType: "CODE",
      faultCode: "F52",
      faultCause: "Flow sensor – fault sensor damaged",
    },
    {
      brand: "Ferroli",
      model: "Modena HE System",
      faultType: "CODE",
      faultCode: "A61",
      faultCause: "Controller ABM03B error – controller has an internal error",
    },
    {
      brand: "Ferroli",
      model: "Modena HE System",
      faultType: "CODE",
      faultCode: "A6",
      faultCause: "No communication between controller and gas valve – controller not connected or valve damaged",
    },
    {
      brand: "Ferroli",
      model: "Modena HE System",
      faultType: "CODE",
      faultCode: "A63 / A64 / F66",
      faultCause: "Controller ABM03B error – controller internal error",
    },
    
    //"Ferroli Modena HE Combi Fault Codes"
    {
      brand: "Ferroli",
      model: "Modena HE Combi",
      faultType: "CODE",
      faultCode: "A01",
      faultCause: "No burner ignition – possibly no gas, detection or ignition electrode fault, defective gas valve, \nincorrect inlet gas pressure",
    },
    {
      brand: "Ferroli",
      model: "Modena HE Combi",
      faultType: "CODE",
      faultCode: "A02",
      faultCause: "Flame detected with the burner off – possibly caused by ionisation, defective electrode or main\n board defective. Check the printed circuit board (PCB) or ionizing electrode wiring",
    },
    {
      brand: "Ferroli",
      model: "Modena HE Combi",
      faultType: "CODE",
      faultCode: "A03",
      faultCause: "High limit protection – flow temperature sensor not active, incorrectly located or no system \ncirculation. Check the position of the flow sensor or check pump and radiator valves",
    },
    {
      brand: "Ferroli",
      model: "Modena HE Combi",
      faultType: "CODE",
      faultCode: "A04",
      faultCause: "Flue gas fault – could be because F07 happened 3 times in the last 24 hours – check the flue",
    },
    {
      brand: "Ferroli",
      model: "Modena HE Combi",
      faultType: "CODE",
      faultCode: "A05",
      faultCause: "Fan problem – tachometer signal interrupted for 1 hour or longer – check the wiring and the fan",
    },
    {
      brand: "Ferroli",
      model: "Modena HE Combi",
      faultType: "CODE",
      faultCode: "A06",
      faultCause: "No flame after ignition phase – possible causes: detection electrode fault, flame unstable, incorrect \nvalve gas offset, flue gas circuit",
    },
    
    {
      brand: "Ferroli",
      model: "Modena HE Combi",
      faultType: "CODE",
      faultCode: "A41",
      faultCause: "Flow sensor disconnected – check the correct positioning and operation of the flow sensors",
    },
    
    {
      brand: "Ferroli",
      model: "Modena HE Combi",
      faultType: "CODE",
      faultCode: "A42",
      faultCause: "Flow sensor fault – sensor needs changing"
    },
    {
      brand: "Ferroli",
      model: "Modena HE Combi",
      faultType: "CODE",
      faultCode: "F07",
      faultCause: "High fume temperature – the exchanger probe detects an excessive temperature for over 2 minutes \n– check the exchanger."
    },
    {
      brand: "Ferroli",
      model: "Modena HE Combi",
      faultType: "CODE",
      faultCode: "F10",
      faultCause: "Flow sensor fault – possible causes: sensor damaged, short circuited or wiring broken check the\n wiring"
    },
    {
      brand: "Ferroli",
      model: "Modena HE Combi",
      faultType: "CODE",
      faultCode: "F11",
      faultCause: "Return sensor fault – sensor wiring shorted or broken – check the wiring"
    },
    {
      brand: "Ferroli",
      model: "Modena HE Combi",
      faultType: "CODE",
      faultCode: "F12",
      faultCause: "Domestic hot water (DHW) sensor fault – sensor damaged, wiring shorted or wiring disconnected \n– check the wiring"
    },
    {
      brand: "Ferroli",
      model: "Modena HE Combi",
      faultType: "CODE",
      faultCode: "F13",
      faultCause: "Exchange probe fault – wiring shorted or wiring broken – check wiring"
    },
    {
      brand: "Ferroli",
      model: "Modena HE Combi",
      faultType: "CODE",
      faultCode: "F14",
      faultCause: "Fan problem – tachometer signal interrupted fan connection. Fan damaged or debris in fan – \ncheck the wiring, the fan and clean debris"
    },
    {
      brand: "Ferroli",
      model: "Modena HE Combi",
      faultType: "CODE",
      faultCode: "F15",
      faultCause: "Supply voltage under 170v – electric supply problem – the electrical system needs checking"
    },
    {
      brand: "Ferroli",
      model: "Modena HE Combi",
      faultType: "CODE",
      faultCode: "F34",
      faultCause: "Irregular mains frequency – possible electric supply problem – the electrical system needs\n checking"
    },
    {
      brand: "Ferroli",
      model: "Modena HE Combi",
      faultType: "CODE",
      faultCode: "F35",
      faultCause: "Incorrect system water pressure – possible cause is pressure too low or sensor damaged – \nthe system may need filling or check the sensor"
    },
    {
      brand: "Ferroli",
      model: "Modena HE Combi",
      faultType: "CODE",
      faultCode: "F37",
      faultCause: "External probe fault sensor damaged or short circuited – check the wiring"
    },
    {
      brand: "Ferroli",
      model: "Modena HE Combi",
      faultType: "CODE",
      faultCode: "F39",
      faultCause: "Exchanger protection activation – possibly caused by no system circulation, air in the system or \nsensor damaged"
    },
    {
      brand: "Ferroli",
      model: "Modena HE Combi",
      faultType: "CODE",
      faultCode: "F43",
      faultCause: "Flow sensor fault – sensor damaged – sensor needs changing"
    },
    {
      brand: "Ferroli",
      model: "Modena HE Combi",
      faultType: "CODE",
      faultCode: "F52",
      faultCause: "Controller 041049G0 fault – controller internal error"
    },
    {
      brand: "Ferroli",
      model: "Modena HE Combi",
      faultType: "CODE",
      faultCode: "A61",
      faultCause: "No communication between controller and gas valve controller – could not be connected or valve \ndamaged"
    },
    {
      brand: "Ferroli",
      model: "Modena HE Combi",
      faultType: "CODE",
      faultCode: "A62",
      faultCause: "Controller 041049G – internal error"
    },
    {
      brand: "Ferroli",
      model: "Modena HE Combi",
      faultType: "CODE",
      faultCode: "A63 / A64 / F66",
      faultCause: "Controller DBM12 fault"
    },
    
    
    //"Ferroli Discontinued Boiler Fault Codes"
    //"DOMIcondens HE 26 C"
    //"OPTIMAX HE PLUS 31C boiler"
    //"OPTIMAX HE PLUS 38C boiler."
    
    //"DOMIcondens HE 26 C / OPTIMAX HE PLUS 31C"
    {
      brand: "Ferroli",
      model: "DOMIcondens HE 26 C / OPTIMAX HE PLUS 31C",
      faultType: "CODE",
      faultCode: "A01",
      faultCause: "No burner ignition",
    },
    
    
    //"OPTIMAX HE PLUS 38C"
    {
      brand: "Ferroli",
      model: "OPTIMAX HE PLUS 38C",
      faultType: "CODE",
      faultCode: "A01",
      faultCause: "The burner fails to light",
    },
    
    
    //"DOMIcondens HE 26 C \nOPTIMAX HE PLUS 31C boiler \n OPTIMAX HE PLUS 38C"
    {
      brand: "Ferroli",
      model: "DOMIcondens HE 26 C \nOPTIMAX HE PLUS 31C boiler \n OPTIMAX HE PLUS 38C",
      faultType: "CODE",
      faultCode: "A02",
      faultCause: "Flame present signal with burner off, possible electrical fault",
    },
    
    //"DOMIcondens HE 26 C \nOPTIMAX HE PLUS 31C boiler \nOPTIMAX HE PLUS 38C"
    {
      brand: "Ferroli",
      model: "DOMIcondens HE 26 C \nOPTIMAX HE PLUS 31C boiler \nOPTIMAX HE PLUS 38C",
      faultType: "CODE",
      faultCode: "A03",
      faultCause: "Over temperature protection activation",
    },
    
    //"DOMIcondens HE 26 C / OPTIMAX HE PLUS 31C"
    {
      brand: "Ferroli",
      model: "DOMIcondens HE 26 C / OPTIMAX HE PLUS 31C",
      faultType: "CODE",
      faultCode: "A04",
      faultCause: "Fume thermostat fault",
    },
    
    //"OPTIMAX HE PLUS 38C"
    {
      brand: "Ferroli",
      model: "OPTIMAX HE PLUS 38C",
      faultType: "CODE",
      faultCode: "A04",
      faultCause: "Fume extraction duct safety device activation",
    },
    //"DOMIcondens HE 26 C / OPTIMAX HE PLUS 31C"
    {
      brand: "Ferroli",
      model: "DOMIcondens HE 26 C / OPTIMAX HE PLUS 31C",
      faultType: "CODE",
      faultCode: "A05",
      faultCause: "Fan fault or fume pressure switch fault",
    },
    
    //"OPTIMAX HE PLUS 38C"
    {
      brand: "Ferroli",
      model: "OPTIMAX HE PLUS 38C",
      faultType: "CODE",
      faultCode: "A05",
      faultCause: "Fan protection activated",
    },
    
    //"DOMIcondens HE 26 C \nOPTIMAX HE PLUS 31C boiler \nOPTIMAX HE PLUS 38C"
    {
      brand: "Ferroli",
      model: "DOMIcondens HE 26 C \nOPTIMAX HE PLUS 31C boiler \nOPTIMAX HE PLUS 38C",
      faultType: "CODE",
      faultCode: "A06",
      faultCause: "No flame after the ignition phase",
    },
    
    //"OPTIMAX HE PLUS 31C boiler / \nOPTIMAX HE PLUS 38C"
    {
      brand: "Ferroli",
      model: "OPTIMAX HE PLUS 31C boiler / \nOPTIMAX HE PLUS 38C",
      faultType: "CODE",
      faultCode: "F07",
      faultCause: "High fume temperature",
    },
    
    //"DOMIcondens HE 26 C"
    {
      brand: "Ferroli",
      model: "DOMIcondens HE 26 C",
      faultType: "CODE",
      faultCode: "F07",
      faultCause: "Card parameter",
    },
    {
      brand: "Ferroli",
      model: "DOMIcondens HE 26 C",
      faultType: "CODE",
      faultCode: "A09",
      faultCause: "Gas value fault",
    },
    
    //"DOMIcondens HE 26 C / \nOPTIMAX HE PLUS 31C boiler / \nOPTIMAX HE PLUS 38C"
    {
      brand: "Ferroli",
      model: "DOMIcondens HE 26 C / \nOPTIMAX HE PLUS 31C boiler / \nOPTIMAX HE PLUS 38C",
      faultType: "CODE",
      faultCode: "F10",
      faultCause: "Delivery sensor 1 fault",
    },
    
    //"DOMIcondens HE 26 C"
    {
      brand: "Ferroli",
      model: "DOMIcondens HE 26 C",
      faultType: "CODE",
      faultCode: "F11",
      faultCause: "DHW sensor fault",
    },
    
    //"OPTIMAX HE PLUS 31C boiler / \nOPTIMAX HE PLUS 38C"
    {
      brand: "Ferroli",
      model: "OPTIMAX HE PLUS 31C boiler / \nOPTIMAX HE PLUS 38C",
      faultType: "CODE",
      faultCode: "F11",
      faultCause: "Return sensor fault",
    },
    
    //"OPTIMAX HE PLUS 31C boiler / \nOPTIMAX HE PLUS 38C"
    {
      brand: "Ferroli",
      model: "OPTIMAX HE PLUS 31C boiler / \nOPTIMAX HE PLUS 38C",
      faultType: "CODE",
      faultCode: "F13",
      faultCause: "Fume sensor fault",
    },
    
    //"DOMIcondens HE 26 C / \nOPTIMAX HE PLUS 31C boiler / \nOPTIMAX HE PLUS 38C"
    {
      brand: "Ferroli",
      model: "DOMIcondens HE 26 C / \nOPTIMAX HE PLUS 31C boiler / \nOPTIMAX HE PLUS 38C",
      faultType: "CODE",
      faultCode: "F14",
      faultCause: "Delivery sensor 2 fault",
    },
    
    //"OPTIMAX HE PLUS 31C boiler /\nOPTIMAX HE PLUS 38C"
    {
      brand: "Ferroli",
      model: "OPTIMAX HE PLUS 31C boiler /\nOPTIMAX HE PLUS 38C",
      faultType: "CODE",
      faultCode: "F15",
      faultCause: "Fan fault",
    },
    
    //"DOMIcondens HE 26 C"
    {
      brand: "Ferroli",
      model: "DOMIcondens HE 26 C",
      faultType: "CODE",
      faultCode: "A16",
      faultCause: "Gas valve fault",
    },
    {
      brand: "Ferroli",
      model: "DOMIcondens HE 26 C",
      faultType: "CODE",
      faultCode: "F20",
      faultCause: "Combustion control fault",
    },
    {
      brand: "Ferroli",
      model: "DOMIcondens HE 26 C",
      faultType: "CODE",
      faultCode: "A21",
      faultCause: "Poor combustion fail",
    },
    {
      brand: "Ferroli",
      model: "DOMIcondens HE 26 C",
      faultType: "CODE",
      faultCode: "A23",
      faultCause: "Set nominal system water pressure not reached within \n4 minutes",
    },
    {
      brand: "Ferroli",
      model: "DOMIcondens HE 26 C",
      faultType: "CODE",
      faultCode: "A24",
      faultCause: "4 fillings within 24 hours",
    },
    
    //"DOMIcondens HE 26 C / \nOPTIMAX HE PLUS 31C boiler / \nOPTIMAX HE PLUS 38C"
    {
      brand: "Ferroli",
      model: "DOMIcondens HE 26 C / \nOPTIMAX HE PLUS 31C boiler / \nOPTIMAX HE PLUS 38C",
      faultType: "CODE",
      faultCode: "A34",
      faultCause: "Supply voltage under 170V / 180V",
    },
    
    //"DOMIcondens HE 26 C"
    {
      brand: "Ferroli",
      model: "DOMIcondens HE 26 C",
      faultType: "CODE",
      faultCode: "A35",
      faultCause: "Faulty mains frequency",
    },
    
    //"OPTIMAX HE PLUS 31C boiler / \nOPTIMAX HE PLUS 38C"
    {
      brand: "Ferroli",
      model: "OPTIMAX HE PLUS 31C boiler / \nOPTIMAX HE PLUS 38C",
      faultType: "CODE",
      faultCode: "A35",
      faultCause: "Mains frequency anomaly",
    },
    
    //"DOMIcondens HE 26 C / \nOPTIMAX HE PLUS 31C boiler / \nOPTIMAX HE PLUS 38C"
    {
      brand: "Ferroli",
      model: "DOMIcondens HE 26 C / \nOPTIMAX HE PLUS 31C boiler / \nOPTIMAX HE PLUS 38C",
      faultType: "CODE",
      faultCode: "A37",
      faultCause: "Incorrect system water pressure",
    },
    {
      brand: "Ferroli",
      model: "DOMIcondens HE 26 C / \nOPTIMAX HE PLUS 31C boiler / \nOPTIMAX HE PLUS 38C",
      faultType: "CODE",
      faultCode: "A39",
      faultCause: "External probe fault",
    },
    {
      brand: "Ferroli",
      model: "DOMIcondens HE 26 C / \nOPTIMAX HE PLUS 31C boiler / \nOPTIMAX HE PLUS 38C",
      faultType: "CODE",
      faultCode: "A41",
      faultCause: "Sensor positioning",
    },
    {
      brand: "Ferroli",
      model: "DOMIcondens HE 26 C / \nOPTIMAX HE PLUS 31C boiler / \nOPTIMAX HE PLUS 38C",
      faultType: "CODE",
      faultCode: "F42",
      faultCause: "Heating sensor fault",
    },
    
    //"DOMIcondens HE 26 C"
    {
      brand: "Ferroli",
      model: "DOMIcondens HE 26 C",
      faultType: "CODE",
      faultCode: "A43",
      faultCause: "Exchange protection activation",
    },
    {
      brand: "Ferroli",
      model: "DOMIcondens HE 26 C",
      faultType: "CODE",
      faultCode: "A50",
      faultCause: "Gas valve fault",
    },
    {
      brand: "Ferroli",
      model: "DOMIcondens HE 26 C",
      faultType: "CODE",
      faultCode: "A51",
      faultCause: "Poor combustion fault",
    },
    
    //"OPTIMAX HE PLUS 31C boiler / \nOPTIMAX HE PLUS 38C"
    {
      brand: "Ferroli",
      model: "OPTIMAX HE PLUS 31C boiler / \nOPTIMAX HE PLUS 38C",
      faultType: "CODE",
      faultCode: "A62",
      faultCause: "No communication between electronic controller and gas valve",
    },
  ]
}