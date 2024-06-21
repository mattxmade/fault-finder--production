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
      faultCause: "Fault C: Chassis Code => Problem is controller area network wiring bus and modules.\n Fault two: MFG – Manufacturer Specific\n Fault four: BBV Sensor Circuit Low Voltage\n Fault eight: Ignition System Or Misfire\n Fault nine: Kick-Down Switch Failed Short"
    },
    {
      brand: "Grant",
      model: "All Grant Boilers",
      faultType: "CODE",
      faultCode: "U2453",
      faultCause: "Fault U: Network Code => Problem is climate control system, lighting, airbags, etc..\n Fault two: MFG – Manufacturer Specific\n Fault three: Transmission Control Module Reprogrammable Memory\n Fault four: Transmission\n Fault five: TP Sensor Learn Not Complete"
    },
    
    //"Grant Boiler Error Description"
    
    {
      brand: "Grant",
      model: "All Grant Boilers",
      faultType: "NOTE",
      faultCode: "Boiler Will Not Start",
      faultCause: "Low pressure cut-out activated\n No electrical supply to burner\n Check controls are switched on and calling for heat\n Boiler thermostat and/or overheat thermostat faulty"
    },
    {
      brand: "Grant",
      model: "All Grant Boilers",
      faultType: "NOTE",
      faultCode: "Burner lights but goes to lock-out",
      faultCause: "Fault with burner No fuel supply\n Oil tank empty Fire valve closed\n Fire valve closed\n Fuel line filter is blocked\n Oil supply line is air locked\n Excessivecombustion air\n Fault with burner"
    },
    {
      brand: "Grant",
      model: "All Grant Boilers",
      faultType: "NOTE",
      faultCode: "Burner fires but smoke visible from flue or high smoke number",
      faultCause: "Insufficient combustion air supply to burner\n Incorrect or faulty nozzle fitted Fuel pressure too high"
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
      faultCause: "Contaminated combustion air (balanced flue)\n Insufficient oil flow to burner due to restriction in supply line\n Excessive combustion air"
    },
    {
      brand: "Grant",
      model: "All Grant Boilers",
      faultType: "NOTE",
      faultCode: "Fumes and puffing on starting",
      faultCause: "Flue is blocked Insufficient flue draught\n Flue pipe or liner is too large or existing stack is unlined Insufficient combustion air supply to burner"
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
      faultCause: "Leak around boiler cleaning door Burner not correctly fitted on mounting flange\n Burner seal ‘O’ ring damaged or missing.\n Leakage around flue connection"
    },
    {
      brand: "Grant",
      model: "All Grant Boilers",
      faultType: "NOTE",
      faultCode: "Overheat thermostat operating",
      faultCause: "Faulty boiler thermostat\n Thermostat sensor not connected to printed circuit board (PCB) – Vortex Combi only \nFaulty overheat thermostat"
    },
    {
      brand: "Grant",
      model: "All Grant Boilers",
      faultType: "NOTE",
      faultCode: "No water flowing from hot tap",
      faultCause: "Mains water supply is not connected to cold water inlet of boiler \nOne or more isolating valves, stop cocks, etc. in the pipework are closed \nThe cold water isolating valve in the boiler is closed \nThere is a blockage (or blockages) in the pipework"
    },
    {
      brand: "Grant",
      model: "All Grant Boilers",
      faultType: "NOTE",
      faultCode: "No hot water operation",
      faultCause: "Hot tap is not connected to hot water outlet of boiler\n Insufficient flow of water through boiler Boiler cold water and hot water connections reversed \nThermostatic mixing valve incorrectly fitted \nPump is not operating in hot water mode\n Diverter valve microswitch(es) faulty \nDiverter valve microswitches not operated \nDiverter valve seized\n Diverter valve diaphragm failed"
    },
    {
      brand: "Grant",
      model: "All Grant Boilers",
      faultType: "NOTE",
      faultCode: "Low water temperature at tap",
      faultCause: "Flow of water through boiler too high\n Boiler thermostat incorrectly set \nThermostatic mixing valve incorrectly set\n Faulty boiler thermostat\n Pump speed setting too low Pump is incorrectly fitted"
    },
    {
      brand: "Grant",
      model: "All Grant Boilers",
      faultType: "NOTE",
      faultCode: "Hot water for short period only",
      faultCause: "Burner not firing for hot water (after a short time)\n Burner oil pressure set too low at oil pump Incorrect oil nozzle fitted to burner"
    },
    {
      brand: "Grant",
      model: "All Grant Boilers",
      faultType: "NOTE",
      faultCode: "No operation on heating",
      faultCause: "Timeswitch either not set, or not in an ‘ON’ period\n Timeswitch not operating\n Faulty timeswitch\n Faulty timeswitch switch contacts\n Timeswitch OK but not switching boiler on\n Heating switch set to ‘HOT WATER ONLY’\n Room thermostat not calling for heat\n Faulty room thermostat\n No room thermostat or external timeswitch connected to boiler"
    },
    {
      brand: "Grant",
      model: "All Grant Boilers",
      faultType: "NOTE",
      faultCode: "Flow temperature low",
      faultCause: "Boiler thermostat is set too low\n Boiler thermostat faulty\n Boiler is underfired\n Combustion setting of burner incorrect\n Boiler heat exchanger is sooted up"
    },
    
    
    //"Grant Vortex / Eco / Pro Boiler Fault Codes"
    {
      brand: "Grant",
      model: "Grant Vortex / Eco / Pro",
      faultType: "NOTE",
      faultCode: "No fuel supply",
      faultCause: "Insure that an adequate supply of fuel is available and that the fuel supply valve is open – check the condition of the fuel filter and clean if necessary, ensure fuel supply is reaching burner and vent pump"
    },
    {
      brand: "Grant",
      model: "Grant Vortex / Eco / Pro",
      faultType: "NOTE",
      faultCode: "No Electricity Supply",
      faultCause: "Ensure electricity supply to the boiler is switched on and that all controls are calling for heat – ensure that the overheat thermostat has not tripped, reset if necessary and check the mains supply"
    },
    {
      brand: "Grant",
      model: "Grant Vortex / Eco / Pro",
      faultType: "NOTE",
      faultCode: "Burner not starting – fuel and electricity supplies present",
      faultCause: "Reset boiler on the burner control box – if it is lit refer to burner fault finding charts"
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
      faultCause: "Insufficient air supply.\n Check the air damper setting and the condition of the fan check room ventilation, check the nozzle size and type, fuel pressure may be too high, check and adjust"
    },
    {
      brand: "Grant",
      model: "Grant Vortex / Eco / Pro",
      faultType: "NOTE",
      faultCode: "Burner pulses",
      faultCause: "Insufficient air supply – check the air damper setting and the condition of the fan, check room ventilation"
    },
    {
      brand: "Grant",
      model: "Grant Vortex / Eco / Pro",
      faultType: "NOTE",
      faultCode: "Flame slow to stabilise during start up",
      faultCause: "Insufficient air supply.\n Check the nozzle size and type as fuel pressure may be too low, check and adjust insufficient draught clean boiler heat exchanger and check condition of flue"
    },
    {
      brand: "Grant",
      model: "Grant Vortex / Eco / Pro",
      faultType: "NOTE",
      faultCode: "Water temperature low",
      faultCause: "Undersize nozzle and or low fuel pressure check condition of boiler heat exchanger and clean if necessary.\n Check the boiler thermostat, check the combustion setting, check the condition of the fuel filter"
    },
    {
      brand: "Grant",
      model: "Grant Vortex / Eco / Pro",
      faultType: "NOTE",
      faultCode: "Boiler operating an overheat thermostat",
      faultCause: "Faulty boiler thermostat – no circulation\n Check circulating pump\n Check for air lock"
    },
    {
      brand: "Grant",
      model: "Grant Vortex / Eco / Pro",
      faultType: "NOTE",
      faultCode: "Fumes and puffing during starting",
      faultCause: "Check the condition of the chimney to ensure it is not blocked and is high enough to produce the required draught.\n Check that there is an adequate air supply near the burner fan is not drawing products out of the burner"
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
      faultCause: "Check boiler cleaning cover and seal are correctly fitted\n Check burner is correctly fitted onto flange\n Check flue is correctly sealed into flue outlet of boiler\n Check the condensate pipe and trap are operating correctly"
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
      faultCause: "UV sensor defective or dirty oil valve defective fault\n Ignition transformer badly regulated\n Burner, oil fuel not present"
    },
    {
      brand: "Grant",
      model: "Vortex Blue",
      faultType: "LED",
      faultCode: "Red blinking light",
      faultCause: "Badly adjusted burner\n Oil valve defective or dirty\n UV sensor defective or dirty"
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
      faultCause: "Check presence of voltage\n Check the condition of the fuses\n Check that safety \nthermostat is not in lockout"
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
      faultCause: "Clear it\n Replace it\n Check the pressure and output of the fuel\n Check air output change nozzle\n Check the coil od solenoid valve"
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
      faultCause: "Check that fused spur for heating system and boiler is switched on\n Check that the electricity supply has not failed"
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
      faultCause: "Check boiler on/off switch is set to on\n Check that power indicator on and control panel is lit"
    },
    {
      brand: "Grant",
      model: "Vortex Pro Combi",
      faultType: "CODE",
      faultCode: "Burner",
      faultCause: "Check the burner lockout reset button is lit\n If yes press the reset button to start the burner if burner fails call an engineer"
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
      faultCause: "If the boiler is not lit it could be a problem with power supply to the boiler switched off or possibly blown a fuse"
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
      faultCause: "If the boiler is not lit when a hot tap is opened this could mean there is a lack of water flow or possible flow switch problem"
    },
    {
      brand: "Grant",
      model: "Vortex Pro Combi",
      faultType: "CODE",
      faultCode: "Demand",
      faultCause: "If not lit this indicates either timer or programmer is not calling for hot water / switch is not set to constant"
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

