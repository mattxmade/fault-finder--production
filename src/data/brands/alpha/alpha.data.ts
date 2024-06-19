import { nanoid } from "nanoid"
import { BrandItem } from "../../../types"

"Alpha Boiler Fault Codes"

export const brand_alpha: BrandItem = {
  id: nanoid(),
  name: "Alpha",

  info: {
    website: "",
    manual: { page: 0, link: "" }
  },

  hasIcon: false,
  hasFlash: true,
  hasFaultCode: true,
  hasFaultNote: false,

  faultCodes: [
    { 
      faultCode: "1",
      faultType: "CODE",
      brand: "Alpha",
      model: "All Alpha Boilers",
      faultCause: "Ignition failure",
      faultCheck: "Gas supply, pressure tubes, ignition electrode, flame sensor electrode, ignition \ngenerator, lead flame sensor, electrode lead, gas valve setting, gas valve printed \ncircuit board (PCB)"
    },
    { 
      faultCode: "2",
      faultType: "CODE",
      brand: "Alpha",
      model: "All Alpha Boilers",
      faultCause: "Overheat boiler lock out",
      faultCheck: "Pump or flow problem, blocked heat exchanger, air in heat exchanger, \noverheat thermostat, thermal fuse (if open circuit then replace primary heat \nexchanger)"
    },
    { 
      faultCode: "3",
      faultType: "CODE",
      brand: "Alpha",
      model: "All Alpha Boilers",
      faultCause: "High flue thermostat temperature",
      faultCheck: "Blocked or restricted primary flow, heat exchanger air flow blocked, flue restriction, \nflue sensor fault"
    },
    { 
      faultCode: "4",
      faultType: "CODE",
      brand: "Alpha",
      model: "All Alpha Boilers",
      faultCause: "Gas valve electrical connection fault",
      faultCheck: "Gas valve lead connection fault, faulty gas valve or faulty printed circuit board (PCB)"
    },
    { 
      faultCode: "5",
      faultType: "CODE",
      brand: "Alpha",
      model: "All Alpha Boilers",
      faultCause: "Heating flow sensor fault",
      faultCheck: "Flow sensor wire connections, flow sensor faulty"
    },
    { 
      faultCode: "6",
      faultType: "CODE",
      brand: "Alpha",
      model: "All Alpha Boilers",
      faultCause: "Domestic how water (DHW) sensor fault",
      faultCheck: "DHW sensor wiring connection or DHW sensor faulty"
    },
    { 
      faultCode: "8",
      faultType: "CODE",
      brand: "Alpha",
      model: "All Alpha Boilers",
      faultCause: "Maximum number of resets",
      faultCheck: "Refer to fault history codes"
    },
    { 
      faultCode: "10",
      faultType: "CODE",
      brand: "Alpha",
      model: "All Alpha Boilers",
      faultCause: "Primary system pressure low",
      faultCheck: "Check expansion vessel pressure (1 bar), leak in system, expansion relief valve \noperated or primary pressure switch"
    },
    { 
      faultCode: "12",
      faultType: "CODE",
      brand: "Alpha",
      model: "All Alpha Boilers",
      faultCause: "Cylinder sensor fault (FlowSmart only)",
      faultCheck: "Cylinder sensor wiring connections or cylinder sensor faulty"
    },
    { 
      faultCode: "15",
      faultType: "CODE",
      brand: "Alpha",
      model: "All Alpha Boilers",
      faultCause: "Internal wiring error",
      faultCheck: "Check internal wiring connections to printed circuit board (PCB), Combi boiler \ndomestic hot water (DHW) sensor X4, System boiler link X14"
    },
    { 
      faultCode: "16",
      faultType: "CODE",
      brand: "Alpha",
      model: "All Alpha Boilers",
      faultCause: "Fan fault",
      faultCheck: "Fan wiring connections, fan fault or printed circuit board (PCB) fault"
    },
    { 
      faultCode: "20",
      faultType: "CODE",
      brand: "Alpha",
      model: "All Alpha Boilers",
      faultCause: "Flame sensing fault",
      faultCheck: "Check flame sensing electrode and lead printed circuit board (PCB) fault"
    },
    { 
      faultCode: "24",
      faultType: "CODE",
      brand: "Alpha",
      model: "All Alpha Boilers",
      faultCause: "Control panel button fault",
      faultCheck: "Jammed control panel or printed circuit board (PCB) buttons"
    },
    { 
      faultCode: "25",
      faultType: "CODE",
      brand: "Alpha",
      model: "All Alpha Boilers",
      faultCause: "Overheat lock out",
      faultCheck: "Air in heat exchanger, blocked or restricted primary flow, heat exchanger air flow \nblocked, flue restriction, flue sensor fault, pump fault, boiler or heating circuit valve \nclosed"
    },
    { 
      faultCode: "27",
      faultType: "CODE",
      brand: "Alpha",
      model: "All Alpha Boilers",
      faultCause: "Insufficient primary flow",
      faultCheck: "Blocked or restricted primary flow, air in heat exchanger, boiler or heating circuit \nvalve closed, pump fault or primary flow sensor fault"
    },
    { 
      faultCode: "29",
      faultType: "CODE",
      brand: "Alpha",
      model: "All Alpha Boilers",
      faultCause: "Flue sensor fault",
      faultCheck: "Sensor wiring connection or flue sensor faulty"
    },
    { 
      faultCode: "31",
      faultType: "CODE",
      brand: "Alpha",
      model: "All Alpha Boilers",
      faultCause: "Loss of communication with external \ncontrol (Alpha Climatic)",
      faultCheck: "Remote control or receiver connection wiring"
    },
    { 
      faultCode: "37",
      faultType: "CODE",
      brand: "Alpha",
      model: "All Alpha Boilers",
      faultCause: "Low supply voltage",
      faultCheck: "Check mains power supply"
    },
    { 
      faultCode: "38",
      faultType: "CODE",
      brand: "Alpha",
      model: "All Alpha Boilers",
      faultCause: "Loss of flame rectification",
      faultCheck: "Flame sensing electrode and lead, check flue gas recirculation, check the gas \nvalve settings and Check the fan speed settings"
    },
    { 
      faultCode: "43",
      faultType: "CODE",
      brand: "Alpha",
      model: "All Alpha Boilers",
      faultCause: "Loss of flame rectification",
      faultCheck: "Check gas supply working, check flame sensing electrode and lead, check for flue \ngas recirculation, check the gas valve settings, check the fan speed settings"
    },
    { 
      faultCode: "44",
      faultType: "CODE",
      brand: "Alpha",
      model: "All Alpha Boilers",
      faultCause: "Safety lock out",
      faultCheck: "Check external control (room thermostat) requests and rapid on/off hot tap requests"
    },
    { 
      faultCode: "46",
      faultType: "CODE",
      brand: "Alpha",
      model: "All Alpha Boilers",
      faultCause: "External sensor intervention",
      faultCheck: "External sensor and cable damaged or wet, continuity of external sensor and\n circuit, check connection at X19 on printed circuit board (PCB) and sensor \nconnecting block"
    },
    { 
      faultCode: "47",
      faultType: "CODE",
      brand: "Alpha",
      model: "All Alpha Boilers",
      faultCause: "Reduced burner output",
      faultCheck: "Air in heat exchanger, restricted primary flow, heat exchanger air flow blocked, \nflue restriction, flue sensor fault or pump fault"
    },
    { 
      faultCode: "51",
      faultType: "CODE",
      brand: "Alpha",
      model: "All Alpha Boilers",
      faultCause: "Climatic RF communication fault",
      faultCheck: "Batteries need replacing, distance between boiler and climatic control too great, \ninterference object blocking signal (metallic)"
    },

    // "E-Tec, E-Tec Plus, Evoke Combi Boilers Error Codes"
    { 
      faultCode: "60",
      faultType: "CODE",
      brand: "Alpha",
      model: "E-Tec, E-Tec Plus, Evoke Combi",
      faultCause: "Pump error (stuck or there is an electrical\n pump fault)",
      faultCheck: "Pump operation (may need to free the pump shaft), issue with pump wiring or \npump replacement needed."
    },
    { 
      faultCode: "61",
      faultType: "CODE",
      brand: "Alpha",
      model: "E-Tec, E-Tec Plus, Evoke Combi",
      faultCause: "Air in the pump (restricted central heating \nflow)",
      faultCheck: "Flow and Return valves may not be open, iIncorrect system pressure, system not\n purged properly or flow return valves are open."
    },
    { 
      faultCode: "70",
      faultType: "CODE",
      brand: "Alpha",
      model: "E-Tec, E-Tec Plus, Evoke Combi",
      faultCause: "Return/flow sensor\nExchange from possible wiring fault",
      faultCheck: "Issues with sensor wiring and connections.\nIssues with sensor resistance."
    },
    { 
      faultCode: "75 / 76",
      faultType: "CODE",
      brand: "Alpha",
      model: "E-Tec, E-Tec Plus, Evoke Combi",
      faultCause: "Return/flow sensor fault from possible \nfailure of one or both sensors",
      faultCheck: "Issues with sensor resistance."
    },

    { 
      faultCode: "SR",
      faultType: "CODE",
      brand: "Alpha",
      model: "E-Tec, E-Tec Plus, Evoke Combi",
      faultCause: "Service reminder",
      faultCheck: "Service reminder countdown has reached 0 (this will not stop boiler from working)\n – boiler needs servicing."
    },


    // "Protec Plus Error Codes"
    { 
      faultCode: "0A1",
      faultType: "CODE",
      brand: "Alpha",
      model: "Protec Plus",
      faultCause: "Ignition failure",
      faultCheck: "Issue with gas supply.\nIgnition electrode position and spark issues."
    },
    { 
      faultCode: "0A2",
      faultType: "CODE",
      brand: "Alpha",
      model: "Protec Plus",
      faultCause: "Flame detection fault",
      faultCheck: "Flame sensing electrode connections.\nA short circuit to the electrode or wires."
    },
    { 
      faultCode: "0A3",
      faultType: "CODE",
      brand: "Alpha",
      model: "Protec Plus",
      faultCause: "Overheat thermostat lock-out",
      faultCheck: "Flame sensing electrode connections.\nA short circuit to the electrode or wires."
    },
    { 
      faultCode: "0A5",
      faultType: "CODE",
      brand: "Alpha",
      model: "Protec Plus",
      faultCause: "Fan speed fault",
      faultCheck: "Problem with flue /ventilation.\nIssue with air inlet manifold and pipe.\nDamage or fault with fan.\nFan wire connections."
    },
    { 
      faultCode: "0A7",
      faultType: "CODE",
      brand: "Alpha",
      model: "Protec Plus",
      faultCause: "High flue temperature fault",
      faultCheck: "Air in the primary heat exchanger.\nSystem restrictions causing overheating.\nFlue run may have restrictions or blockages."
    },
    { 
      faultCode: "0A8",
      faultType: "CODE",
      brand: "Alpha",
      model: "Protec Plus",
      faultCause: "Flame circuit fault",
      faultCheck: "Incorrect gas supply.\nIgnition electrode position and spark.\nIssues with flame sensing electrode gap and connections."
    },
    { 
      faultCode: "0A9",
      faultType: "CODE",
      brand: "Alpha",
      model: "Protec Plus",
      faultCause: "Gas valve electrical error",
      faultCheck: "Valve connection issues.\nMain PCB.\nGas valve operation issues.\nGas contamination."
    },
    { 
      faultCode: "0A15",
      faultType: "CODE",
      brand: "Alpha",
      model: "Protec Plus",
      faultCause: "Flow and return sensor anomaly detected.\n(incorrect temperature value shown on\n sensor.)",
      faultCheck: "Poor or incorrect circulation.\nExternal circuit influences.\nProblem with resistances of flow and return sensors."
    },
    { 
      faultCode: "0A16",
      faultType: "CODE",
      brand: "Alpha",
      model: "Protec Plus",
      faultCause: "Flow sensor temperature rise incorrect\n(time taken for flow temperature to rise is \ntoo long.)",
      faultCheck: "System circulation issues.\nSystem volume or flow is too high.\nBoiler output is insufficient for the system."
    },
    { 
      faultCode: "0A17",
      faultType: "CODE",
      brand: "Alpha",
      model: "Protec Plus",
      faultCause: "Return sensor temperature rise incorrect \n(time taken for flow temperature to rise\nis too long.)",
      faultCheck: "System circulation issues.\nSystem volume or flow is too high.\nBoiler output is insufficient for the system."
    },
    { 
      faultCode: "0A18",
      faultType: "CODE",
      brand: "Alpha",
      model: "Protec Plus",
      faultCause: "Flow and return sensor anomaly detected. \nSudden temperature change detected on \nthe flow or return sensor.",
      faultCheck: "System circulation issues.\nProblem with operation of zone valves.\nResistances and function of flow and return sensors needs faultChecking."
    },
    { 
      faultCode: "0A21",
      faultType: "CODE",
      brand: "Alpha",
      model: "Protec Plus",
      faultCause: "Main PCB fault",
      faultCheck: "Electrical connections.\nWater ingress in connections."
    },
    { 
      faultCode: "0A30",
      faultType: "CODE",
      brand: "Alpha",
      model: "Protec Plus",
      faultCause: "Flow sensor short circuit",
      faultCheck: "Flow sensor connections and wires need faultChecking.\nWater ingress in connections."
    },
    { 
      faultCode: "0A31",
      faultType: "CODE",
      brand: "Alpha",
      model: "Protec Plus",
      faultCause: "Flow sensor out of range. \n(sensor measures a temperature not in \nnormal range.)",
      faultCheck: "Problem with flow sensor connections and damaged wires.\nSensor resistance values wrong."
    },
    { 
      faultCode: "0A37 – Pro Tec 50",
      faultType: "CODE",
      brand: "Alpha",
      model: "Protec Plus",
      faultCause: "Insufficient system flow (if the system flow\n is too low for a certain length of time\n boiler will switch off)",
      faultCheck: "Flow switch reading needs faultChecking.\nRestrictions or shut valves in system.\nPump function issues.\nSystem pressure issues."
    },
    { 
      faultCode: "0A37 – Pro tec 70, 90, 115",
      faultType: "CODE",
      brand: "Alpha",
      model: "Protec Plus",
      faultCause: "Insufficient system pressure (if the system\n pressure is too low the boiler switches \noff.)",
      faultCheck: "System pressure needs to be 1 – 2 bar if its not the pressure needs refilling to the \ncorrect amount"
    },
    { 
      faultCode: "0A43",
      faultType: "CODE",
      brand: "Alpha",
      model: "Protec Plus",
      faultCause: "Return sensor short circuit",
      faultCheck: "Problem with return sensor connections and wires.\nWater ingress in connections"
    },
    { 
      faultCode: "0A44",
      faultType: "CODE",
      brand: "Alpha",
      model: "Protec Plus",
      faultCause: "Return sensor out of range.\nSensor measures a temperature outside \nnormal working range",
      faultCheck: "Return sensor connections and damaged wires.\nReturn sensor resistance values need faultChecking."
    },
    { 
      faultCode: "0A80",
      faultType: "CODE",
      brand: "Alpha",
      model: "Protec Plus",
      faultCause: "Flow and return sensor connection fault \n(may occur after several minutes of boiler \noperation.)",
      faultCheck: "Wires are not connected to the correct sensors."
    },
    { 
      faultCode: "0.00E+00",
      faultType: "CODE",
      brand: "Alpha",
      model: "Protec Plus",
      faultCause: "Flame sensing fault.",
      faultCheck: "Flame sensing electrode connections need faultChecking.\nShort circuit to the electrode or wire."
    },
    { 
      faultCode: "0.00E+00",
      faultType: "CODE",
      brand: "Alpha",
      model: "Protec Plus",
      faultCause: "Maximum number of resets reached. \n(Over 5 reset attempts have been reached \nwithin 15 minutes.)",
      faultCheck: "Investigate initial fault code displayed.\nPower supply needs to be turned Off/On to clear this code"
    },
    { 
      faultCode: "0.00E+00",
      faultType: "CODE",
      brand: "Alpha",
      model: "Protec Plus",
      faultCause: "Main PCB fault",
      faultCheck: "All electrical connections need to be faultChecked.\nWater ingress in connections."
    },
    { 
      faultCode: "0.00E+00",
      faultType: "CODE",
      brand: "Alpha",
      model: "Protec Plus",
      faultCause: "DHW sensor out of range (measures a\n temperature outside normal working \nrange.)",
      faultCheck: "DHW sensor connections and damaged cables.\nIssues with DHW sensor resistance values"
    },
    { 
      faultCode: "0.00E+00",
      faultType: "CODE",
      brand: "Alpha",
      model: "Protec Plus",
      faultCause: "Low power supply voltage",
      faultCheck: "Electrical socket connection issues.\nProblem with external power supply.\nPossible power disruptions"
    },
    { 
      faultCode: "0.00E+00",
      faultType: "CODE",
      brand: "Alpha",
      model: "Protec Plus",
      faultCause: "Insufficient system pressure",
      faultCheck: "System needs faultChecking for circulation and restrictions.\nSystem pressure and gauge needs faultChecking.\nPressure switch and connections need faultChecking."
    },
    { 
      faultCode: "0.00E+00",
      faultType: "CODE",
      brand: "Alpha",
      model: "Protec Plus",
      faultCause: "Flue sensor short circuit",
      faultCheck: "Flue sensor connections and wires need faultChecking.\nWater ingress in connections"
    },
    { 
      faultCode: "0.00E+00",
      faultType: "CODE",
      brand: "Alpha",
      model: "Protec Plus",
      faultCause: "Flue sensor out of range (measures a\n temperature outside of normal working \nrange)",
      faultCheck: "Flue sensor connections, wires and flue sensor resistance values need faultChecking."
    },
    { 
      faultCode: "0.00E+00",
      faultType: "CODE",
      brand: "Alpha",
      model: "Protec Plus",
      faultCause: "Flow and return sensor anomaly detected \n(the sensor shows an incorrect \ntemperature value)",
      faultCheck: "Poor or incorrect circulation / external circuit influences resistance of flow return\n sensors need faultChecking"
    },
    { 
      faultCode: "0.00E+00",
      faultType: "CODE",
      brand: "Alpha",
      model: "Protec Plus",
      faultCause: "Flow and return sensor anomaly detected \n(sensor shows incorrect temperature \nvalue)",
      faultCheck: "M to O Connections need faultChecking\nCompatible software on PCB needs faultChecking"
    },
    { 
      faultCode: "0.00E+00",
      faultType: "CODE",
      brand: "Alpha",
      model: "Protec Plus",
      faultCause: "Simple cascade communication error",
      faultCheck: "Wiring connections needs faultChecking on all boilers.\nConfiguration, parameter 38."
    },
    { 
      faultCode: "FE94",
      faultType: "CODE",
      brand: "Alpha",
      model: "Protec Plus",
      faultCause: "Display PCB fault.",
      faultCheck: "Electrical connections to display board need faultChecking.\nWater ingress in connections.\nDamage to buttons or LCD screen."
    },
    { 
      faultCode: "FE95",
      faultType: "CODE",
      brand: "Alpha",
      model: "Protec Plus",
      faultCause: "External flow sensor out of range or short\n circuit/ External flow sensor measures a\n temperature outside of normal working\nrange.",
      faultCheck: "External flow sensor connections and wires need faultChecking for damage. \nExternal flow sensor resistance values need faultChecking to make sure they are \nbetween 5 and 0"
    },
    { 
      faultCode: "FE96",
      faultType: "CODE",
      brand: "Alpha",
      model: "Protec Plus",
      faultCause: "External sensor fault",
      faultCheck: "External sensor connections and wires need faultChecking.\nWater ingress in connections.\nBoiler parameter settings are incorrect."
    },
    { 
      faultCode: "FE97",
      faultType: "CODE",
      brand: "Alpha",
      model: "Protec Plus",
      faultCause: "Boiler PCB configuration error \n(may occur if the main PCB or display \nPCB is changed.)",
      faultCheck: "All electrical connections.\nIncorrect parameter settings on PCB.\nPress ‘-‘ CH button until ‘AUTO’ appears, then press and\nhold ‘RESET’ button until ‘bu1’ appears"
    },


    //"Alpha Flashing Light Errors Codes"
    {
      faultCode: "No lights on",
      faultType: "LED",
      brand: "Alpha",
      model: "",
      faultCause: "Electricity fault",
      faultCheck: "Check your electricity supply"
    },

    { 
      faultCode: "Illuminated red A or B",
      faultType: "LED",
      brand: "Alpha",
      model: "",
      faultCause: "Burner has failed to light",
      faultCheck: "Rotate selector switch to the reset position (3) and the ignition sequence will restart \nafter a delay of about 30 seconds"
    },

    { 
      faultCode: "Illuminated yellow B or C",
      faultType: "LED",
      brand: "Alpha",
      model: "",
      faultCause: "Burner is alight",
      faultCheck: "No action required"
    },

    { 
      faultCode: "Flashing red A or B",
      faultType: "LED",
      brand: "Alpha",
      model: "",
      faultCause: "Overheat thermostat has operated / \nTemperature sensor fault",
      faultCheck: "Rotate selector switch to the reset position (3) to reset"
    },

    { 
      faultCode: "Flashing yellow every 5 \nseconds or illuminated green D",
      faultType: "LED",
      brand: "Alpha",
      model: "",
      faultCause: "Electrical supply to the boiler is on",
      faultCheck: "No Action Required"
    },

    { 
      faultCode: "Flashing yellow B or flashing \nRed A",
      faultType: "LED",
      brand: "Alpha",
      model: "",
      faultCause: "Temperature sensor fault",
      faultCheck: "",
    },
    { 
      faultCode: "Illuminated red A and flashing\nyellow B or Flashing red A and\nflashing red B",
      faultType: "LED",
      brand: "Alpha",
      model: "",
      faultCause: "Blocked flue or fan fault",
      faultCheck: ""
    },
    { 
      faultCode: "Flashing yellow or flashing \nRed A or Flashing (alternating)\n red A and flashing (alternating) \nyellow B",
      faultType: "LED",
      brand: "Alpha",
      model: "",
      faultCause: "System pressure is very low and \nre-pressurisation is required",
      faultCheck: ""
    },
    { 
      faultCode: "Illuminated red A and \nflashing yellow B",
      faultType: "LED",
      brand: "Alpha",
      model: "",
      faultCause: "Pump fault or restricted flow",
      faultCheck: ""
    },
    { 
      faultCode: "Flashing red A and Flashing\n red B and flashing yellow C",
      faultType: "LED",
      brand: "Alpha",
      model: "",
      faultCause: "Temperature sensor wiring or flow and \nreturn connections incorrect",
      faultCheck: ""
    },
    { 
      faultCode: "Flashing red A and flashing\n red B and flashing yellow C \nindicators",
      faultType: "LED",
      brand: "Alpha",
      model: "",
      faultCause: "Flue temperature too high \n(air in the heat exchanger, heat exchanger\nblocked",
      faultCheck: ""
    },

    // "Alpha E-Tec Regular Gas Boiler Error Codes"
    { 
      faultCode: "1",
      faultType: "CODE",
      brand: "Alpha",
      model: "E-Tec Regular",
      faultCause: "Ignition failure",
      faultCheck: "Check the gas supply, pressure tubes, ignition electrode, flame sensor electrode, \nignition generator or lead flame sensor, gas valve setting and PCB."
    },
    { 
      faultCode: "2",
      faultType: "CODE",
      brand: "Alpha",
      model: "E-Tec Regular",
      faultCause: "Overheat boiler lockout",
      faultCheck: "Pump or flow problem. Caused by a blocked heat exchanger, air in heat exchanger, \noverheated thermostat, thermal fuse (if open circuit then replace primary heat\n exchanger)."
    },
    { 
      faultCode: "3",
      faultType: "CODE",
      brand: "Alpha",
      model: "E-Tec Regular",
      faultCause: "High flue thermostat temperature",
      faultCheck: "Blocked or restricted primary flow. Heat exchanger air flow blocked, flue restriction, \nflue sensor fault."
    },
    { 
      faultCode: "4",
      faultType: "CODE",
      brand: "Alpha",
      model: "E-Tec Regular",
      faultCause: "Gas valve electrical connection fault",
      faultCheck: "Gas valve lead connection fault. Faulty gas valve or faulty PCB."
    },
    { 
      faultCode: "5",
      faultType: "CODE",
      brand: "Alpha",
      model: "E-Tec Regular",
      faultCause: "Heating flow sensor fault",
      faultCheck: "Flow sensor wire connections. Flow sensor faulty."
    },
    { 
      faultCode: "6",
      faultType: "CODE",
      brand: "Alpha",
      model: "E-Tec Regular",
      faultCause: "Internal wiring error",
      faultCheck: "Incorrect wiring configuration detected. Internal wiring connections to PCB \nneed faultChecking."
    },
    { 
      faultCode: "7",
      faultType: "CODE",
      brand: "Alpha",
      model: "E-Tec Regular",
      faultCause: "Chimney sweep function is active",
      faultCheck: "Chimney sweep function is active. E07 is displayed on the climatic remote control."
    },
    { 
      faultCode: "8",
      faultType: "CODE",
      brand: "Alpha",
      model: "E-Tec Regular",
      faultCause: "Maximum number of resets",
      faultCheck: "Refer to fault history codes (INFO menud9)"
    },
    { 
      faultCode: "12",
      faultType: "CODE",
      brand: "Alpha",
      model: "E-Tec Regular",
      faultCause: "Cylinder sensor fault (FlowSmart only)",
      faultCheck: "Cylinder sensor wiring connection – cylinder sensor faulty."
    },
    { 
      faultCode: "16",
      faultType: "CODE",
      brand: "Alpha",
      model: "E-Tec Regular",
      faultCause: "Fan fault",
      faultCheck: "Check fan wiring connection, fan fault or PCB fault."
    },
    { 
      faultCode: "20",
      faultType: "CODE",
      brand: "Alpha",
      model: "E-Tec Regular",
      faultCause: "Flame sensing fault",
      faultCheck: "Check flame sensing electrode and lead PCB for faults."
    },
    { 
      faultCode: "23",
      faultType: "CODE",
      brand: "Alpha",
      model: "E-Tec Regular",
      faultCause: "Heating return sensor fault",
      faultCheck: "Incorrect return sensor resistance value – return sensor wire connections or \nsensor could be faulty."
    },
    { 
      faultCode: "24",
      faultType: "CODE",
      brand: "Alpha",
      model: "E-Tec Regular",
      faultCause: "Control panel button fault",
      faultCheck: "Control panel button is stuck in the ‘on’ position – Check for jammed control panel \nbuttons or jammed PCB button."
    },
    { 
      faultCode: "27",
      faultType: "CODE",
      brand: "Alpha",
      model: "E-Tec Regular",
      faultCause: "Insufficient primary flow",
      faultCheck: "Blocked or restricted primary flow. Air in heat exchanger, boiler or heating circuit \nvalve closed, pump fault or primary flow sensor fault."
    },
    { 
      faultCode: "29",
      faultType: "CODE",
      brand: "Alpha",
      model: "E-Tec Regular",
      faultCause: "Flue sensor fault",
      faultCheck: "Check sensor wiring connection – flue sensor faulty."
    },
    { 
      faultCode: "31",
      faultType: "CODE",
      brand: "Alpha",
      model: "E-Tec Regular",
      faultCause: "Loss of communication with external \ncontrol (Alpha Climatic)",
      faultCheck: "Remote control or receiver connection wiring."
    },
    { 
      faultCode: "37",
      faultType: "CODE",
      brand: "Alpha",
      model: "E-Tec Regular",
      faultCause: "Low supply voltage",
      faultCheck: "Check mains power supply."
    },
    { 
      faultCode: "38",
      faultType: "CODE",
      brand: "Alpha",
      model: "E-Tec Regular",
      faultCause: "Loss of flame rectification",
      faultCheck: "Check flame sensing electrode and lead and for flue gas recirculation. Check or \nadjust the gas valve settings. Check or adjust the fan speed settings."
    },
    { 
      faultCode: "43",
      faultType: "CODE",
      brand: "Alpha",
      model: "E-Tec Regular",
      faultCause: "Loss of flame rectification",
      faultCheck: "Check gas supply/working pressure, flame sensing electrode and lead, check for \nflue gas recirculation, faultCheck/adjust the gas valve settings, faultCheck/adjust the fan \nspeed settings."
    },
    { 
      faultCode: "44",
      faultType: "CODE",
      brand: "Alpha",
      model: "E-Tec Regular",
      faultCause: "Safety lockout",
      faultCheck: "Check external control (room thermostat) requests. Rapid on/off hot tap requests."
    },
    { 
      faultCode: "45",
      faultType: "CODE",
      brand: "Alpha",
      model: "E-Tec Regular",
      faultCause: "High-temperature difference",
      faultCheck: "The boiler is detecting an unexpected increase between the system flow and \nreturn sensors. Boiler output is limited for boiler protection and once restored the \nboiler resumes regular operation."
    },
    { 
      faultCode: "46",
      faultType: "CODE",
      brand: "Alpha",
      model: "E-Tec Regular",
      faultCause: "Optional thermostat intervention",
      faultCheck: "No continuity of optional thermostat circuit – Check the optional thermostat and \ncable are not damaged or wet."
    },
    { 
      faultCode: "47",
      faultType: "CODE",
      brand: "Alpha",
      model: "E-Tec Regular",
      faultCause: "Reduced burner output",
      faultCheck: "Flue thermostat has sensed high flue gas temperature and reduced the burner \noutput to prevent damage. If the temperature continues to rise the boiler will \nlockout and the E03 error code will be displayed. This could be due to air in the \nheat exchanger, restricted primary flow or heat exchanger air blocked."
    },
    { 
      faultCode: "49",
      faultType: "CODE",
      brand: "Alpha",
      model: "E-Tec Regular",
      faultCause: "Return sensor high temperature \nintervention",
      faultCheck: "Return sensor has detected a high temperature on the exchanger return circuit."
    },
    { 
      faultCode: "51",
      faultType: "CODE",
      brand: "Alpha",
      model: "E-Tec Regular",
      faultCause: "Climatic RF communication fault",
      faultCheck: "The error between the communication of the climatic transmitter and boiler\n receiver. Could mean the batteries need replacing or the distance between the \nboiler and climatic control is too great or a metal object is blocking the signal."
    },
    { 
      faultCode: "70",
      faultType: "CODE",
      brand: "Alpha",
      model: "E-Tec Regular",
      faultCause: "Return flow sensor error",
      faultCheck: "Possible wiring faults sensor is incorrectly fitted or the system is blocked –\n Check the sensor wiring and connections, also Check sensor resistance and \ncirculation."
    },
    { 
      faultCode: "71",
      faultType: "CODE",
      brand: "Alpha",
      model: "E-Tec Regular",
      faultCause: "No primary temperature increase detected",
      faultCheck: "From ignition the boiler detects no temperature rise in the primary circuit – \nCheck system filling and venting, air locks preventing flow faultCheck, blocked flow or \nclosed valves."
    },
  ]
}
