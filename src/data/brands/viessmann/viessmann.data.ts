import { nanoid } from "nanoid"
import { BrandItem } from "../../../types"

// "Viessmann Boiler Fault Codes"

export const brand_viessmann: BrandItem = {
  id: nanoid(),
  name: "Viessman",

  info: {
    website: "",
    manual: {page: 0, link: ""}
  },

  hasIcon: false,
  hasFlash: false,
  hasFaultCode: true,
  hasFaultNote: false,

  faultCodes: [
    //"Vitodens 200 Boiler Fault Codes"
    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "2",
      model: "Vitodens 200",
      faultCause: "Burner control switches to lockout",
      faultCheck: "Safety chain was activated"
    },

    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "04, 05, 06, 08",
      model: "Vitodens 200",
      faultCause: "Burner control switches to lockout",
      faultCheck: "Fan speed too high/low at start"
    },

    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "07, 09",
      model: "Vitodens 200",
      faultCause: "Burner control switches to lockout",
      faultCheck: "Basic level of air pressure threshold in standby mode not correct"
    },

    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "0A",
      model: "Vitodens 200",
      faultCause: "Burner control switches to lockout",
      faultCheck: "Fault with fan speed"
    },

    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "0D",
      model: "Vitodens 200",
      faultCause: "Burner control switches to lockout",
      faultCheck: "Reset button pressed repeatedly or while burner is running"
    },

    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "1A, 1B",
      model: "Vitodens 200",
      faultCause: "Burner blocked",
      faultCheck: "Flow sensor 1, 2 faulty"
    },

    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "1F",
      model: "Vitodens 200",
      faultCause: "Burner blocked",
      faultCheck: "Differential flow rate too large"
    },

    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "25",
      model: "Vitodens 200",
      faultCause: "Boiler operates with high boiler water\n temperature",
      faultCheck: "Emissions test switch turned to “hand symbol” for 30 minutes already"
    },
    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "26",
      model: "Vitodens 200",
      faultCause: "Boiler operates with continuous relay test",
      faultCheck: "Setting mode for maximum or minimum rated input active for 30 minutes already"
    },
    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "35",
      model: "Vitodens 200",
      faultCause: "Boiler does not activate",
      faultCheck: "Reset button (pressed while burner is OFF) with emissions test switch turned to “hand symbol”"
    },
    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "A2",
      model: "Vitodens 200",
      faultCause: "KM-BUS fault to Vitocom",
    },
    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "",
      model: "Vitodens 200",
      faultCause: "Short circuit / open circuit",
    },

    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "0B",
      model: "Vitodens 200",
      faultCause: "Burner control switches to lockout, fan doesn’t idle after auto reset (incorrect fan rpm).",
      faultCheck: "Severe wind conditions in vent system"
    },
    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "0B",
      model: "Vitodens 100-W",
      faultCause: "Burner blocked",
      faultCheck: "Insufficient water flow, incorrect flow direction or defective flow switch."
    },

    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "0C",
      model: "Vitodens 100-W",
      faultCause: "Burner blocked",
      faultCheck: "Insufficient power supply"
    },

    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "0C",
      model: "Vitodens 200",
      faultCause: "Burner control switches to lockout",
      faultCheck: "Flame signal still present after switching off"
    },

    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "0F",
      model: "Vitodens 222-F",
      faultCause: "Control mode",
      faultCheck: "Displayed in the fault history"
    },
    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "0F",
      model: "Vitotronic 300 / Vitotronic 300-K, \nwith Vitotronic 300 / Vitodens 200-W / \nVitocontrol-S, with Vitotronic 100",
      faultCause: "Control mode / Controlled operation",
      faultCheck: "Boiler service required"
    },
    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "0F",
      model: "Vitotronic 200 / 300",
      faultCause: "Normal operation",
      faultCheck: "Boiler service required"
    },
    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "0F",
      model: "Vitocontrol-S, MW1 with Vitotronic 100 \n/ Vitotronic 300-K, \nMW1S with Vitotronic 100",
      faultCause: "Control mode",
      faultCheck: "Maintenance"
    },


    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "10",
      model: "Vitodens 200-W / 222-F / \nVitotronic 300 / 200/ 200-H / 050/200-H \n/ 300-K / vitocontrol-S",
      faultCause: "Boiler operates based on outdoor \ntemperature of 32°F / 0°C",
      faultCheck: "Short circuit – Outdoor temperature sensor"
    },
    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "10",
      model: "Vitotronic 300-K, \nMW2S with Vitotronic 100 / \nVitodens 100-W (combiPLUS) / 200-w / \nVitocontrol-S, WB2B with Vitotronic 100",
      faultCause: "Controls as if the outdoor temperature \n/ Constant Mode",
      faultCheck: "Outdoor temperature sensor shorted out"
    },

    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "Viessmann 10, 14, F3, F4",
      model: "Vitodens 200",
      faultCause: "Burner control switches to lockout",
      faultCheck: "No flame signal is present"
    },

    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "18, D1",
      model: "Vitodens 100 / 200-W / 222-F / Vitotronic 300-K With 100\n / Vitocontrol-S",
      faultCause: "Boiler operates based on outdoor temperature of 32°F \n/ 0°C / Constant Mode",
      faultCheck: "Outdoor temperature sensor cable broken"
    },
    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "18, D1",
      model: "Vitotronic / 100 / 200 / 300 / 050/200-H /300-K / \nVitocontrol-S, MW1 with Vitotronic 100",
      faultCause: "Operates on basis of 32°F / 0°C outdoor temperature",
      faultCheck: "Open circuit – Outdoor temperature sensor"
    },
    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "18, D1",
      model: "Vitotronic 200-H / Vitotronic 300-K, MW1B with \nVitotronic 300 / Vitotronic 300-K, MW2B with \nVitotronic 200",
      faultCause: "Controls as if the outdoor temperature",
      faultCheck: "Lead break, Outdoor temperature sensor"
    },
    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "18, D1",
      model: "Vitotronic 050/200-H",
      faultCause: "Activates after 0°C / 32°F outdoor temperature",
      faultCheck: "Cable break – Outdoor temperature sensor" 
    },
    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "18, D1",
      model: "Vitodens 100-W",
      faultCause: "Burner in fault mode",
      faultCheck: "DIP switch S2 is set to ON"
    },

    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "19",
      model: "Vitotronic 300",
      faultCause: "Activates after 0°C / 32°F outdoor temperature",
      faultCheck: "Communication fault, Wireless Outdoor temperature sensor"
    },

    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "20",
      model: "Vitocontrol-S with Vitotronic 100 / Vitotronic 300 \n/ 300-K / 200 / 100",
      faultCause: "Stand-alone control unit without supply temperature \nsensor (possibly supply temperature not high enough)",
      faultCheck: "short circuit – Common supply temperature sensor"
    },
    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "20",
      model: "Vitocontrol-S with Vitotronic 100 / Vitotronic 300-K, \nwith Vitotronic 200",
      faultCause: "Vitocontrol-S, controls in a stand-alone manner w/o supply \ntemperature sensor (supply temperature may not be\n high enough)",
      faultCheck: "Common supply temperature sensor shorted out"
    },
    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "20",
      model: "Vitocrossal 300",
      faultCause: "Regulates without supply temperature sensor \n(low-loss header)",
      faultCheck: "Short circuit – System Flow temperature sensor"
    },
    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "20",
      model: "Vitodens 200-W / 222-F",
      faultCause: "Regulates without supply temperature sensor \n(low-loss header)",
      faultCheck: "Short circuit – System supply temperature sensor"
    },
    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "20",
      model: "Vitotronic 050/200-H< / 200 / 200-H / 300",
      faultCause: "Mixing valve closes/ closed",
      faultCheck: "Short circuit – Supply temperature sensor / mixing valve circuit M1"
    },
    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "20",
      model: "Vitotronic 300-K, with Vitotronic 100",
      faultCause: "Vitotronic 300-K, MW1S controls in a stand-alone \nmanner w/o strap-on sensor (supply temperature may not\n be high enough)",
      faultCheck: "Short circuit – Strap-on temperature sensor"
    },
    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "20",
      model: "Vitodens 200-W",
      faultCause: "Regulates without supply temperature sensor \n(low-loss header)",
      faultCheck: "System supply temperature sensor shorted out"
    },

    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "2",
      model: "Vitotronic 200 / 300",
      faultCause: "operation without influence of return water temperature",
      faultCheck: "Short circuit – Return water temperature sensor"
    },

    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "28",
      model: "Vitocontrol-S with Vitotronic 100",
      faultCause: "Vitocontrol-S, VD2/CT3/CM2 controls in a stand-alone \nmanner w/o supply temperature sensor (supply \ntemperature may not be high enough)",
      faultCheck: "Open circuit – Common supply temperature sensor"
    },

    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "28",
      model: "Vitocontrol-S with Vitotronic 100 / \nVitotronic 300-K,with Vitotronic 100",
      faultCause: "Vitocontrol-S, WB2B controls in a stand-alone manner \nw/o supply temperature sensor (supply temperature may \nnot be high enough)",
      faultCheck: "Common supply temperature sensor cable broken"
    },
    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "28",
      model: "Vitocrossal 300 / Vitodens 200-W / 22-F",
      faultCause: "Regulates without supply temperature sensor \n(low-loss header)",
      faultCheck: "System supply temperature sensor cable broken"
    },
    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "28",
      model: "Vitotronic 050/200-H",
      faultCause: "Mixing valve closes",
      faultCheck: "Cable break – Supply temperature sensor"
    },
    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "28",
      model: "Vitotronic 050/200-H",
      faultCause: "Mixing valve is closed",
      faultCheck: "Open circuit – Supply temperature sensor of mixing valve circuit M1"
    },
    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "28",
      model: "Vitotronic 200-H / Vitotronic 200 / 300",
      faultCause: "Mixing valve is being closed",
      faultCheck: "Lead break, Supply temperature sensor, heating circuit with mixing valve M1 (heating circuit 1)"
    },
    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "28",
      model: "Vitotronic 300 Vitotronic / 300-K with Vitotronic 300 / 200",
      faultCause: "Stand-alone control unit without supply temperature \nsensor (possibly supply temperature not high enough)",
      faultCheck: "Lead break, Common supply temperature sensor"
    },
    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "28",
      model: "Vitotronic 300-K with Vitotronic 100",
      faultCause: "Vitotronic 300-K, MW1S controls in a stand-alone \nmanner w/o strap-on sensor (supply temperature may not \nbe high enough)",
      faultCheck: "Open circuit – Strap-on temperature sensor"
    },

    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "29, 41, 49, F80, F81",
      model: "Vitotronic 200 / 300",
      faultCause: "Normal operation without influence of return \nwater temperature",
      faultCheck: "Open circuit 1 or 2 – Return water temperature sensor (of mixing valve circuit 1)"
    },
    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "29, 41, 49, F80, F81",
      model: "Vitocontrol-S, with Vitotronic 100 / Vitocrossal 300 / \nVitodens 200-W / 222-F / Vitotronic 100 / 200 / 300",
      faultCause: "Burner is started and stopped via an adjustable high limit",
      faultCheck: "Short circuit – Boiler water temperature sensor"
    },
    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "29, 41, 49, F80, F81",
      model: "Vitocontrol-S with Vitotronic 100 / Vitodens 100-W\n (CombiPLUS)/ 200-1",
      faultCause: "Burner blocked",
      faultCheck: "Boiler water temperature sensor shorted out"
    },

    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "38",
      model: "Vitodens – 200-W, 222-F and COMBIPLUS",
      faultCause: "Burner blocked",
      faultCheck: "Boiler water temperature sensor cable broken"
    },
    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "38",
      model: "Vitotronic 100, 200 and 300\n– Vitocontrol-S with Vitotronic 100",
      faultCause: "Burner is switched on and off by the adjustable high limit",
      faultCheck: "Open circuit – Boiler temperature sensor" 
    },
    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "38",
      model: "Vitotronic 300-K with Vitotronic 300 / Vitotronic 300-K \nwith Vitotronic 300",
      faultCause: "The burner is started and stopped via a temperature \ncontroller",
      faultCheck: "Lead break, Boiler water temperature sensor"
    },
    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "38",
      model: "Vitodens 100-W",
      faultCause: "Burner blocked",
      faultCheck: "Boiler water temperature sensor lead broken"
    },

    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "40, 44",
      model: "All Viessmann boilers",
      faultCause: "Mixing valve closes",
      faultCheck: "Heating circuit 2 with mixing valve supply short circuit on temperature sensor"
    },

    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "4",
      model: "Vitotronic 300",
      faultCause: "Operation without accounting for return water temperature",
      faultCheck: "Short circuit – Return water temperature sensor of mixing valve circuit 2"
    },

    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "48, 4C",
      model: "All Viessmann boilers",
      faultCause: "Mixing valve closes / Closed",
      faultCheck: "Heating circuit 2 with mixing valve supply temperature sensor cable broken / open circuit"
    },

    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "50, 51, 58, 59",
      model: "Vitodens 200-W and 222-F",
      faultCause: "No domestic hot water (DHW) – fault with DHW",
      faultCheck: "Short circuit/open circuit, DHW tank temperature sensor or lead break"
    },

    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "52",
      model: "Vitotronic 300",
      faultCause: "Control mode",
      faultCheck: "Short circuit – supply temperature sensor low-loss header"
    },
    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "52",
      model: "Vitodens 100-W CombiPLUS",
      faultCause: "Burner blocked (with CombiPLUS only)",
      faultCheck: "Flow sensor shorted out (in CombiPLUS)"
    },

    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "55, 56, 57",
      model: "Vitotronic 300-K with Vitotronic 200",
      faultCause: "Control mode",
      faultCheck: "Maintenance or error on Vitotronic 100 of boiler 5-8"
    },

    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "5A, B7, B8",
      model: "All Viessmann boilers",
      faultCause: "Control mode",
      faultCheck: "Lead break, low-loss header Supply temperature sensor"
    },
    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "5A, B7, B8",
      model: "All Viessmann boilers",
      faultCause: "Burner blocked / control mode",
      faultCheck: "sensor cable broken"
    },

    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "5C, 5D, 5E, 5F",
      model: "Vitotronic 300-K with Vitotronic 200",
      faultCause: "Control mode",
      faultCheck: "Communication fault, Vitotronic 100 of boiler 5-8"
    },

    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "60, 68, 70, 78, BD, BE, BF",
      model: "All Viessmann boilers",
      faultCause: "– No output reduction\n– Return control Open\n– Boiler with maximum temperature",
      faultCheck: "Short/open circuit – Temperature sensor [17A]"
    },

    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "80, 81, 82, 83, FD",
      model: "All Viessmann boilers",
      faultCause: "Burner control unit in a fault state; system cools down; \nburner control unit locked out",
      faultCheck: "Short circuit – Boiler water temperature sensor, burner control unit"
    },

    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "88, 89, E6",
      model: "Vitotronic 300",
      faultCause: "Burner control unit in a fault state",
      faultCheck: "Lead break, Boiler water temperature sensor, burner control unit"
    },


    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "8C, 8D, 8E, 8F",
      model: "Vitocontrol-S with Vitotronic 100\n– Vitotronic 300-K with Vitotronic 100 / 200",
      faultCause: "Control mode",
      faultCheck: "Communication fault, Vitotronic 100 of boiler 1-4"
    },

    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "90, 91, 92, 93, 94, 98, 99, 9A, 9B , 9C, 9E, 9F, AB",
      model: "All Viessmann boilers",
      faultCause: "Control mode",
      faultCheck: "Short circuit – Temperature sensor [5] / [6] / [7] / [10]"
    },

    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "A0, A1, A2, AA, AC",
      model: "Vitotronic 300\n– Vitotronic 300-K with Vitotronic 300",
      faultCause: "Boiler cools down",
      faultCheck: "Fault, safety equipment at “X2 / X3 / X7” of plug-in adaptor 2 for external safety equipment"
    },
    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "A0, A1, A2, AA, AC",
      model: "Vitotronic 200",
      faultCause: " Boiler operates in emergency mode (after approx. 30 min)\n BUS fault\n– Boiler cools down",
      faultCheck: "Internal BUS fault\n– Open circuit – Internal BUS connection"
    },

    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "A3, B0, F1, FE1, FE2",
      model: "All Viessmann boilers",
      faultCause: "Burner blocked",
      faultCheck: "Flue gas temperature sensor not properly positioned – check Sensor"
    },

    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "A4",
      model: "Vitodens 200",
      faultCause: "Pump runs at maximum speed",
      faultCheck: "Open circuit – BUS connection with variable speed heating circuit pump"
    },

    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "A7",
      model: "Vitocrossal 300\n– Vitodens 200-W, 222-F, 300",
      faultCause: "Control mode (stays in factory default setting)",
      faultCheck: "Faulty Programming unit"
    },

    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "A8",
      model: "Vitodens 222-F",
      faultCause: "Burner blocked. The venting program is started \nautomatically",
      faultCheck: "Air lock in the Internal circulation pump or minimum flow rate not achieved"
    },

    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "A9, BA, BB, BC, FE0",
      model: "All Viessmann boilers",
      faultCause: "Control Mode",
      faultCheck: "Communication error"
    },

    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "AD",
      model: "Vitocontrol-S with Vitotronic 100\n-Vitotronic 100\n-Vitotronic 300-K with Vitotronic 300",
      faultCause: "Control mode",
      faultCheck: "Isolation valve configuration error: Coding OC:2, OC:3 or OC:4 set, and coding 4E:1 not set"
    },

    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "B1",
      model: "All Viessmann boilers",
      faultCause: "Control mode",
      faultCheck: "Communication error – programming unit"
    },

    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "B2",
      model: "Vitodens 200",
      faultCause: "Boiler cools down",
      faultCheck: "Sensor inputs are not read correctly"
    },

    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "B3, E5",
      model: "Vitodens 200",
      faultCause: "Setting via service level not possible",
      faultCheck: "Data points are not stored – internal fault VR20"
    },

    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "B4",
      model: "Vitocontrol-S with Vitotronic 100\n– Vitotronic 100, 200 and 300\n– Vitotronic 300-K with Vitotronic 100",
      faultCause: "Emissions test mode",
      faultCheck: "Internal electronics fault"
    },
    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "B4",
      model: "Vitocontrol-S with Vitotronic 100 / Vitodens 200-W",
      faultCause: "Regulates as if the outside temperature was 32°F (0°C)",
      faultCheck: "Internal fault"
    },
    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "B4",
      model: "Vitotronic 050/200-H",
      faultCause: "Undefined control characteristics",
      faultCheck: "Internal electronics fault"
    },


    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "B5",
      model: "All Viessmann boilers",
      faultCause: "Control mode",
      faultCheck: "Internal electronics fault"
    },
    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "B6",
      model: "All Viessmann boilers",
      faultCause: "Constant mode",
      faultCheck: "Invalid hardware recognised"
    },

    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "B9, ED, F0, FE5, FEC, FED, FEE, FEF, FFD, FFF",
      model: "All Viessmann boilers",
      faultCause: "Normal operation / fault around burner control unit",
      faultCheck: "Internal fault"
    },

    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "C1",
      model: "All Viessmann boilers",
      faultCause: "Control Mode",
      faultCheck: "External safety equipment"
    },

    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "C2-C8, CD-CF, D2-D8, DA-DF, E0",
      model: "All Viessmann boilers",
      faultCause: "Control mode",
      faultCheck: "Open circuit – KM BUS to solar control unit / Extension AM1 / DE1-DE3 M1 / \ncommunication fault"
    },

    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "C9, CA, CB",
      model: "Vitocontrol-S with Vitotronic 100 / Vitotronic 100 \n/ 300 / Vitotronic 300-K with Vitotronic 300",
      faultCause: "Boiler cools down",
      faultCheck: "Error: Maximum pressure limiter 1 2"
    },

    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "CC, F0",
      model: "Vitodens 200",
      faultCause: "Burner control unit switches to lockout \n(due to large line voltage fluctuations)",
      faultCheck: "Differential air pressure sensor / open circuit"
    },

    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "D4",
      model: "All Viessmann boilers",
      faultCause: "Boiler cools down",
      faultCheck: "Fixed high limit has responded or fuse F2 has blown."
    },

    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "D5",
      model: "All Viessmann boilers",
      faultCause: "Boiler drives up to electronic maximum limit",
      faultCheck: "Boiler does not log in at the cascade control unit"
    },

    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "E1, E7, E8, E9, EA, EB, EC, FF2",
      model: "All Viessmann boilers",
      faultCause: "Burner in fault mode",
      faultCheck: "Ionization current too high during calibration"
    },

    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "E2, E3",
      model: "Vitodens 200-W / 222-F / Vitotronic 300",
      faultCause: "Burner in fault mode",
      faultCheck: "Heating water flow rate too low during calibration; flow switch caused shutdown"
    },

    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "E4",
      model: "All Viessmann boilers",
      faultCause: "Burner blocked",
      faultCheck: "Fault, supply voltage 24V"
    },

    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "EE, EF",
      model: "Vitocontrol-S with Vitotronic 100 / Vitocrossal 300 / \nVitodens 200-W / 222-F / Vitotronic 300",
      faultCause: "Burner in fault mode",
      faultCheck: "At burner start, flame signal is missing or too weak"
    },

    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "F5",
      model: "Vitodens 100-W / 200 / 300 / Vitotronic 300",
      faultCause: "Burner blocked",
      faultCheck: "Faulty Air pressure switch"
    },

    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "F6, 58, F9, FE1, FE2, FF6",
      model: "All Viessmann boilers",
      faultCause: "Gas pressure switch shows no gas pressure / Electrical\n connection fault",
      faultCheck: "Gas shut-off valve closed; gas pressure switch faulty; multiple problems with gas supply"
    },

    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "FA, FB",
      model: "All Viessmann boilers",
      faultCause: "Burner in fault mode / Emergency operation",
      faultCheck: "Fan not at standstill / plug-in connection"
    },

    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "FB7, FF4, FF2, FF7, FF8, FF9",
      model: "Vitocrossal 200",
      faultCause: "Case A: Burner control unit in a fault state; system cools\n down; burner control unit locked out.\nCase B: Type of coding card",
      faultCheck: "Case A: Coding card not inserted in the burner control unit; incorrect or faulty coding card.\nCase B: Coding card does not match burner control unit."
    },

    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "FC",
      model: "All Viessmann boilers",
      faultCause: "Burner in fault mode",
      faultCheck: "Gas valve faulty, issue with modulation valve control or vent system blocked"
    },

    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "FE",
      model: "All Viessmann boilers",
      faultCause: "Burner blocked or in fault mode",
      faultCheck: "Strong interference (EMC) field nearby, or faulty main printed circuit board (PCB)"
    },

    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "FE4",
      model: "Vitocrossal 200",
      faultCause: "Burner shuts down",
      faultCheck: "Multiple detection of undervoltage"
    },

    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: "FFA, FFB, FR",
      model: "Vitocrossal 200 / 400-620 / 186-311",
      faultCause: "Fan runs without demand; burner control unit in a\n fault state",
      faultCheck: "Fan has not stopped, cable [100A] faulty, fan faulty, burner control unit faulty"
    },

    {
      brand: "Viessman",
      faultType: "CODE",
      faultCode: " F4 EE",
      model: "All Viessmann boilers",
      faultCause: "Frozen condensate pipe",
      faultCheck: "Thaw out the condensate pipe"
    },
  ]
}

