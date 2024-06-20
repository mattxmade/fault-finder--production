import { nanoid } from "nanoid"
import { BrandItem } from "../../../types"

// "Grant Boiler Fault Codes"

export const brand_grant: BrandItem = {
  id: nanoid(),
  name: "Grant",

  info: {
    website: "",
    manual: { page: 0, link: "" }
  },

  hasIcon: false,
  hasFlash: true,
  hasFaultCode: true,
  hasFaultNote: true,
  
  faultCodes: [
    {
      brand: "Grant",
      model: "All Grant Boilers",
      faultType: "CODE",
      faultCode: "No display",
      faultCause: "12V transformer failure"
    },
    {
      brand: "Grant",
      model: "All Grant Boilers",
      faultType: "CODE",
      faultCode: "PP1",
      faultCause: "Inlet (return) water temperature sensor failure"
    },
    {
      brand: "Grant",
      model: "All Grant Boilers",
      faultType: "CODE",
      faultCode: "PP1",
      faultCause: "Inlet (return) water temperature sensor failure"
    },
    {
      brand: "Grant",
      model: "All Grant Boilers",
      faultType: "CODE",
      faultCode: "PP2",
      faultCause: "Discharge gas sensor failure"
    },
    {
      brand: "Grant",
      model: "All Grant Boilers",
      faultType: "CODE",
      faultCode: "PP3",
      faultCause: "Coil temperature sensor failure"
    },
    {
      brand: "Grant",
      model: "All Grant Boilers",
      faultType: "CODE",
      faultCode: "PP4",
      faultCause: "Return gas sensor failure"
    },
    {
      brand: "Grant",
      model: "All Grant Boilers",
      faultType: "CODE",
      faultCode: "PP5",
      faultCause: "Ambient temperature sensor failure"
    },
    {
      brand: "Grant",
      model: "All Grant Boilers",
      faultType: "CODE",
      faultCode: "PP6",
      faultCause: "Discharge gas overheat protection"
    },
    {
      brand: "Grant",
      model: "All Grant Boilers",
      faultType: "CODE",
      faultCode: "PP7",
      faultCause: "Winter anti-freeze protection in operation"
    },
    {
      brand: "Grant",
      model: "All Grant Boilers",
      faultType: "CODE",
      faultCode: "EE1",
      faultCause: "High pressure – circulating pump failure orcircuit air locked"
    },
    {
      brand: "Grant",
      model: "All Grant Boilers",
      faultType: "CODE",
      faultCode: "EE2",
      faultCause: "Low pressure"
    },
    {
      brand: "Grant",
      model: "All Grant Boilers",
      faultType: "CODE",
      faultCode: "EE3",
      faultCause: "Open circuit between PCB terminals 23-24"
    },
    {
      brand: "Grant",
      model: "All Grant Boilers",
      faultType: "CODE",
      faultCode: "EE4",
      faultCause: "Supply L and N are reversed"
    },
    {
      brand: "Grant",
      model: "All Grant Boilers",
      faultType: "CODE",
      faultCode: "EE8",
      faultCause: "Communication failure"
    },
    {
      brand: "Grant",
      model: "All Grant Boilers",
      faultType: "LED",
      faultCode: "Flashing on and off",
      faultCause: "Defrosting"
    },
    {
      brand: "Grant",
      model: "All Grant Boilers",
      faultType: "CODE",
      faultCode: "E01",
      faultCause: "Internal control fault"
    },
    {
      brand: "Grant",
      model: "All Grant Boilers",
      faultType: "CODE",
      faultCode: "sHr",
      faultCause: "HP flow sensor short / HP return sensor short"
    },
    {
      brand: "Grant",
      model: "All Grant Boilers",
      faultType: "CODE",
      faultCode: "OPn",
      faultCause: "HP flow sensor open / HP return sensor open"
    },
    {
      brand: "Grant",
      model: "All Grant Boilers",
      faultType: "CODE",
      faultCode: "SUP",
      faultCause: "Supply sensor short / Supply sensor open"
    },
    {
      brand: "Grant",
      model: "All Grant Boilers",
      faultType: "CODE",
      faultCode: "OUTDR",
      faultCause: "Outdoor sensor short / Outdoor sensor open"
    },
    {
      brand: "Grant",
      model: "All Grant Boilers",
      faultType: "CODE",
      faultCode: "C2849",
      faultCause: "Fault C; Chassis Code\nProblem is controller area network wiring bus and modules.\nfault two; MFG – Manufacturer Specific\nFault eight; Ignition System Or Misfire\nfault four; BBV Sensor Circuit Low Voltage\nfault nine; Kick-Down Switch Failed Short"
    },
    {
      brand: "Grant",
      model: "All Grant Boilers",
      faultType: "CODE",
      faultCode: "U2453",
      faultCause: "Fault U: Network Code\nProblem is climate control system, lighting, airbags, etc..\nfault two; MFG – Manufacturer Specific\nfault four; Transmission\nfault five; TP Sensor Learn Not Complete\nfault three; Transmission Control Module Reprogrammable Memory"
    },
    
    //"Grant Boiler Error Description"
    
    {
      brand: "Grant",
      model: "All Grant Boilers",
      faultType: "NOTE",
      faultCode: "Boiler Will Not Start",
      faultCause: "Low pressure cut-out activated No electrical supply to burner Check \ncontrols are switched on and calling for heat Boiler thermostat and/or \noverheat thermostat faulty"
    },
    {
      brand: "Grant",
      model: "All Grant Boilers",
      faultType: "NOTE",
      faultCode: "Burner lights but goes to lock-out",
      faultCause: "Fault with burner No fuel supply Oil tank empty Fire valve closed Fire valve \nclosed. Fuel line filter is blocked Oil supply line is air locked Excessive \ncombustion air Fault with burner"
    },
    {
      brand: "Grant",
      model: "All Grant Boilers",
      faultType: "NOTE",
      faultCode: "Burner fires but smoke visible from flue or high \nsmoke number",
      faultCause: "Insufficient combustion air supply to burner Incorrect or faulty nozzle fitted\n Fuel pressure too high"
    },
    {
      brand: "Grant",
      model: "All Grant Boilers",
      faultType: "NOTE",
      faultCode: "Burner pulsates",
      faultCause: "Insufficient combustion air supply to burner"
    },
    {
      brand: "Grant",
      model: "All Grant Boilers",
      faultType: "NOTE",
      faultCode: "Burner cycles On and Off",
      faultCause: "Contaminated combustion air (balanced flue) Insufficient oil flow to burner \ndue to restriction in supply line Excessive combustion air"
    },
    {
      brand: "Grant",
      model: "All Grant Boilers",
      faultType: "NOTE",
      faultCode: "Fumes and puffing on starting",
      faultCause: "Flue is blocked Insufficient flue draught Flue pipe or liner is too large or \nexisting stack is unlined Insufficient combustion air supply to burner"
    },
    {
      brand: "Grant",
      model: "All Grant Boilers",
      faultType: "NOTE",
      faultCode: "Flame slow to stabilise on starting",
      faultCause: "Insufficient combustion air supply to burner Fuel pressure too low"
    },
    {
      brand: "Grant",
      model: "All Grant Boilers",
      faultType: "NOTE",
      faultCode: "Oil smells",
      faultCause: "Oil leak in supply line or burner"
    },
    {
      brand: "Grant",
      model: "All Grant Boilers",
      faultType: "NOTE",
      faultCode: "Combustion fume smells",
      faultCause: "Leak around boiler cleaning door Burner not correctly fitted on mounting\n flange Burner seal ‘O’ ring damaged or missing. Leakage around flue \nconnection"
    },
    {
      brand: "Grant",
      model: "All Grant Boilers",
      faultType: "NOTE",
      faultCode: "Overheat thermostat operating",
      faultCause: "Faulty boiler thermostat Thermostat sensor not connected to printed circuit \nboard (PCB) – Vortex Combi only Faulty overheat thermostat"
    },
    {
      brand: "Grant",
      model: "All Grant Boilers",
      faultType: "NOTE",
      faultCode: "No water flowing from hot tap",
      faultCause: "Mains water supply is not connected to cold water inlet of boiler One or \nmore isolating valves, stop cocks, etc. in the pipework are closed The cold \nwater isolating valve in the boiler is closed There is a blockage \n(or blockages) in the pipework"
    },
    {
      brand: "Grant",
      model: "All Grant Boilers",
      faultType: "NOTE",
      faultCode: "No hot water operation",
      faultCause: "Hot tap is not connected to hot water outlet of boiler Insufficient flow of\n water through boiler Boiler cold water and hot water connections reversed \nThermostatic mixing valve incorrectly fitted Pump is not operating in hot \nwater mode Diverter valve microswitch(es) faulty Diverter valve \nmicroswitches not operated Diverter valve seized Diverter valve diaphragm \nfailed"
    },
    {
      brand: "Grant",
      model: "All Grant Boilers",
      faultType: "NOTE",
      faultCode: "Low water temperature at tap",
      faultCause: "Flow of water through boiler too high Boiler thermostat incorrectly set \nThermostatic mixing valve incorrectly set Faulty boiler thermostat Pump \nspeed setting too low Pump is incorrectly fitted"
    },
    {
      brand: "Grant",
      model: "All Grant Boilers",
      faultType: "NOTE",
      faultCode: "Hot water for short period only",
      faultCause: "Burner not firing for hot water (after a short time) Burner oil pressure set \ntoo low at oil pump Incorrect oil nozzle fitted to burner"
    },
    {
      brand: "Grant",
      model: "All Grant Boilers",
      faultType: "NOTE",
      faultCode: "No operation on heating",
      faultCause: "Timeswitch either not set, or not in an ‘ON’ period Timeswitch not operating\n Faulty timeswitch Faulty timeswitch switch contacts Timeswitch OK but not \nswitching boiler on Heating switch set to ‘HOT WATER ONLY’ Room \nthermostat not calling for heat Faulty room thermostat No room thermostat \nor external timeswitch connected to boiler"
    },
    {
      brand: "Grant",
      model: "All Grant Boilers",
      faultType: "NOTE",
      faultCode: "Flow temperature low",
      faultCause: "Boiler thermostat is set too low Boiler thermostat faulty Boiler is underfired \nCombustion setting of burner incorrect Boiler heat exchanger is sooted up"
    },
    
    
    //"Grant Vortex / Eco / Pro Boiler Fault Codes"
    {
      brand: "Grant",
      model: "Grant Vortex / Eco / Pro",
      faultType: "NOTE",
      faultCode: "No fuel supply",
      faultCause: "Insure that an adequate supply of fuel is available and that the fuel supply \nvalve is open – check the condition of the fuel filter and clean if necessary, \nensure fuel supply is reaching burner and vent pump"
    },
    {
      brand: "Grant",
      model: "Grant Vortex / Eco / Pro",
      faultType: "NOTE",
      faultCode: "No Electricity Supply",
      faultCause: "Ensure electricity supply to the boiler is switched on and that all controls \nare calling for heat – ensure that the overheat thermostat has not tripped, \nreset if necessary and check the mains supply"
    },
    {
      brand: "Grant",
      model: "Grant Vortex / Eco / Pro",
      faultType: "NOTE",
      faultCode: "Burner not starting – fuel and electricity supplies \npresent",
      faultCause: "Reset boiler on the burner control box – if it is lit refer to burner fault finding\n charts"
    },
    {
      brand: "Grant",
      model: "Grant Vortex / Eco / Pro",
      faultType: "NOTE",
      faultCode: "Burner lights but goes to lock out",
      faultCause: "If the flame is unstable check the combustion setting"
    },
    {
      brand: "Grant",
      model: "Grant Vortex / Eco / Pro",
      faultType: "NOTE",
      faultCode: "Visible smoke from flue or high smoke number",
      faultCause: "Insufficient air supply. Check the air damper setting and the condition of \nthe fan check room ventilation, check the nozzle size and type, fuel pressure\n may be too high, check and adjust"
    },
    {
      brand: "Grant",
      model: "Grant Vortex / Eco / Pro",
      faultType: "NOTE",
      faultCode: "Burner pulses",
      faultCause: "Insufficient air supply – check the air damper setting and the condition of \nthe fan, check room ventilation"
    },
    {
      brand: "Grant",
      model: "Grant Vortex / Eco / Pro",
      faultType: "NOTE",
      faultCode: "Flame slow to stabilise during start up",
      faultCause: "Insufficient air supply – Check the nozzle size and type as fuel pressure may\n be too low, check and adjust insufficient draught clean boiler heat \nexchanger and check condition of flue"
    },
    {
      brand: "Grant",
      model: "Grant Vortex / Eco / Pro",
      faultType: "NOTE",
      faultCode: "Water temperature low",
      faultCause: "Undersize nozzle and or low fuel pressure check condition of boiler heat\n exchanger and clean if necessary. Check the boiler thermostat, check the \ncombustion setting, check the condition of the fuel filter"
    },
    {
      brand: "Grant",
      model: "Grant Vortex / Eco / Pro",
      faultType: "NOTE",
      faultCode: "Boiler operating an overheat thermostat",
      faultCause: "Faulty boiler thermostat – no circulation, check circulating pump, check for \nair lock"
    },
    {
      brand: "Grant",
      model: "Grant Vortex / Eco / Pro",
      faultType: "NOTE",
      faultCode: "Fumes and puffing during starting",
      faultCause: "Check the condition of the chimney to ensure it is not blocked and is high \nenough to produce the required draught – check that there is an adequate \nair supply near the burner fan is not drawing products out of the burner"
    },
    {
      brand: "Grant",
      model: "Grant Vortex / Eco / Pro",
      faultType: "NOTE",
      faultCode: "Oil odours",
      faultCause: "Check all fuel line connections and remake as necessary"
    },
    {
      brand: "Grant",
      model: "Grant Vortex / Eco / Pro",
      faultType: "NOTE",
      faultCode: "Combustion fumes smell",
      faultCause: "Check boiler cleaning cover and seal are correctly fitted, check burner is \ncorrectly fitted onto flange, check flue is correctly sealed into flue outlet of\nboiler, check the condensate pipe and trap are operating correctly"
    },
    
    
    //"Grant Vortex Blue Fault Codes"
    {
      brand: "Grant",
      model: "Vortex Blue",
      faultType: "LED",
      faultCode: "Red blinking light",
      faultCause: "Presence of a false flame signal before heat request"
    },
    {
      brand: "Grant",
      model: "Vortex Blue",
      faultType: "LED",
      faultCode: "Red blinking light",
      faultCause: "Presence of false flame signal during pre-purging"
    },
    {
      brand: "Grant",
      model: "Vortex Blue",
      faultType: "LED",
      faultCode: "Red blinking light",
      faultCause: "Presence of false flame signal during post-purging or pre-heating"
    },
    {
      brand: "Grant",
      model: "Vortex Blue",
      faultType: "LED",
      faultCode: "Red steady on",
      faultCause: "UV sensor defective or dirty oil valve defective fault – ignition transformer \nbadly regulated burner, oil fuel not present"
    },
    {
      brand: "Grant",
      model: "Vortex Blue",
      faultType: "LED",
      faultCode: "Red blinking light",
      faultCause: "Badly adjusted burner, oil valve defective or dirty UV sensor defective or dirty"
    },
    {
      brand: "Grant",
      model: "Vortex Blue",
      faultType: "LED",
      faultCode: "Red and orange blinking inverted",
      faultCause: "Error with oil valve internal control circuit that drives the oil valve error"
    },
    {
      brand: "Grant",
      model: "Vortex Blue",
      faultType: "LED",
      faultCode: "Red green blinking inverted",
      faultCause: "Internal memory error"
    },
    {
      brand: "Grant",
      model: "Vortex Blue",
      faultType: "LED",
      faultCode: "Orange green blinking inverted",
      faultCause: "Check presence of voltage, check the condition of the fuses, check that safety \nthermostat is not in lockout"
    },
    {
      brand: "Grant",
      model: "Vortex Blue",
      faultType: "LED",
      faultCode: "Off",
      faultCause: "Eliminate the extraneous light"
    },
    {
      brand: "Grant",
      model: "Vortex Blue",
      faultType: "LED",
      faultCode: "Off",
      faultCause: "Check that plugs and sockets are connected properly"
    },
    {
      brand: "Grant",
      model: "Vortex Blue",
      faultType: "LED",
      faultCode: "Red blinking light",
      faultCause: "Eliminate the extraneous light"
    },
    {
      brand: "Grant",
      model: "Vortex Blue",
      faultType: "LED",
      faultCode: "Red steady on",
      faultCause: "Clear it / replace it / check the pressure and output of the fuel / check air \noutput change nozzle check the coil od solenoid valve"
    },
    {
      brand: "Grant",
      model: "Vortex Blue",
      faultType: "LED",
      faultCode: "Green blinking light",
      faultCause: "Set the air according to the instructions of the manual or replace"
    },
    
    //"Grant Vortex Eco Fault Codes"
    {
      brand: "Grant",
      model: "Vortex Eco",
      faultType: "NOTE",
      faultCode: "Motor fails to run",
      faultCause: "No electrical supply to boiler check on/off switch is on – it should be neon lit"
    },
    {
      brand: "Grant",
      model: "Vortex Eco",
      faultType: "NOTE",
      faultCode: "Lock-out light not lit",
      faultCause: "Fuse has blown – check reason for failure"
    },
    {
      brand: "Grant",
      model: "Vortex Eco",
      faultType: "NOTE",
      faultCode: "Motor fails to run",
      faultCause: "No power to burner motor"
    },
    {
      brand: "Grant",
      model: "Vortex Eco",
      faultType: "NOTE",
      faultCode: "Burner lock out",
      faultCause: "Burner motor capacitor fault check and replace if necessary"
    },
    
    //"Grant Vortex Pro Combi Fault Codes"
    {
      brand: "Grant",
      model: "Vortex Pro Combi",
      faultType: "CODE",
      faultCode: "Power supply",
      faultCause: "Check that fused spur for heating system and boiler is switched on – check\n that the electricity supply has not failed"
    },
    {
      brand: "Grant",
      model: "Vortex Pro Combi",
      faultType: "CODE",
      faultCode: "Heating system controls",
      faultCause: "Check that the timer or programmer is working and set to an on period"
    },
    {
      brand: "Grant",
      model: "Vortex Pro Combi",
      faultType: "CODE",
      faultCode: "Boiler controls",
      faultCause: "Check boiler on/off switch is set to on – check that power indicator on and \ncontrol panel is lit"
    },
    {
      brand: "Grant",
      model: "Vortex Pro Combi",
      faultType: "CODE",
      faultCode: "Burner",
      faultCause: "Check the burner lockout reset button is lit, if yes press the reset button to \nstart the burner if burner fails call an engineer"
    },
    {
      brand: "Grant",
      model: "Vortex Pro Combi",
      faultType: "CODE",
      faultCode: "Heating system",
      faultCause: "Check the heating system water pressure"
    },
    {
      brand: "Grant",
      model: "Vortex Pro Combi",
      faultType: "CODE",
      faultCode: "Power",
      faultCause: "If the boiler is not lit it could be a problem with power supply to the boiler \nswitched off or possibly blown a fuse"
    },
    {
      brand: "Grant",
      model: "Vortex Pro Combi",
      faultType: "CODE",
      faultCode: "DHW pump",
      faultCause: "If flashing this indicates either a store thermistor or PCB fault"
    },
    {
      brand: "Grant",
      model: "Vortex Pro Combi",
      faultType: "CODE",
      faultCode: "Flow",
      faultCause: "If the boiler is not lit when a hot tap is opened this could mean there is a \nlack of water flow or possible flow switch problem"
    },
    {
      brand: "Grant",
      model: "Vortex Pro Combi",
      faultType: "CODE",
      faultCode: "Demand",
      faultCause: "If not lit this indicates either timer or programmer is not calling for hot water / \nswitch is not set to constant"
    },
    {
      brand: "Grant",
      model: "Vortex Pro Combi",
      faultType: "CODE",
      faultCode: "Burner",
      faultCause: "If flashing this indicates a PCB fault"
    },
  ]
}

