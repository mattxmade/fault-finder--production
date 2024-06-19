import { nanoid } from "nanoid"
import { BrandItem } from "../../../types"

// "Warmhaus Boiler Fault Codes"

export const brand_warmhaus: BrandItem = {
  id: nanoid(),
  name: "Warmhaus",

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
      brand: "Warmhaus",
      model: "Enerwa | Priwa",
      faultType: "CODE",
      faultCode: "rE 02",
      faultCause: "Low water pressure in heating system – parameter is adjusted wrong"
    },
    {
      brand: "Warmhaus",
      model: "Enerwa | Priwa",
      faultType: "CODE",
      faultCode: "E 03",
      faultCause: "High water pressure due to excessive water pressure or safety valve error"
    },
    {
      brand: "Warmhaus",
      model: "Enerwa | Priwa",
      faultType: "CODE",
      faultCode: "E 04",
      faultCause: "Domestic hot water (DHW) temperature sensor failure – possible error with electronic card or the NTC sensor."
    },
    {
      brand: "Warmhaus",
      model: "Enerwa | Priwa",
      faultType: "CODE",
      faultCode: "E 05",
      faultCause: "Temperature sensor from radiator error – electronic card detecting a failure."
    },
    {
      brand: "Warmhaus",
      model: "Enerwa | Priwa",
      faultType: "CODE",
      faultCode: "E 13",
      faultCause: "Exhaust gas temperature sensor error – excessive temperature alarm."
    },
    {
      brand: "Warmhaus",
      model: "Enerwa | Priwa",
      faultType: "CODE",
      faultCode: "E 14",
      faultCause: "Exhaust gas temperature sensor error – electronic card detecting an anomaly in the gas exhaust gas sensor."
    },
    {
      brand: "Warmhaus",
      model: "Enerwa | Priwa",
      faultType: "CODE",
      faultCode: "E 15",
      faultCause: "Fan error – a fan being blocked or excessive external air pressure."
    },
    {
      brand: "Warmhaus",
      model: "Enerwa | Priwa",
      faultType: "CODE",
      faultCode: "rE 06 / rE 08",
      faultCause: "No ignition – control gas supply line valves could be open"
    },
    {
      brand: "Warmhaus",
      model: "Enerwa | Priwa",
      faultType: "CODE",
      faultCode: "rE 07",
      faultCause: "Safety thermostat intervention from dual sensor – excessive heating occuring due to any failure during \nnormal operation, try resetting the boiler."
    },
    {
      brand: "Warmhaus",
      model: "Enerwa | Priwa",
      faultType: "CODE",
      faultCode: "E 10",
      faultCause: "AUX output sensor error"
    },
    {
      brand: "Warmhaus",
      model: "Enerwa | Priwa",
      faultType: "CODE",
      faultCode: "E 16",
      faultCause: "AUX return sensor failure"
    },
    {
      brand: "Warmhaus",
      model: "Enerwa | Priwa",
      faultType: "CODE",
      faultCode: "E 11",
      faultCause: "Gas valve modulator connection is broken – could be due to an internal failure."
    },
    {
      brand: "Warmhaus",
      model: "Enerwa | Priwa",
      faultType: "CODE",
      faultCode: "E 17 / E 19",
      faultCause: "Maximum difference failure between 2 NTC temperature sensor – poor circulation."
    },
    {
      brand: "Warmhaus",
      model: "Enerwa | Priwa",
      faultType: "CODE",
      faultCode: "rE 28",
      faultCause: "Maximum locking number reached – boiler has reached the maximum reset number (5 times in an hour) \n– attempt 1 reset each hour thereafter."
    },
    {
      brand: "Warmhaus",
      model: "Enerwa | Priwa",
      faultType: "CODE",
      faultCode: "E 37",
      faultCause: "Low voltage error – voltage required for operation is too low."
    },
    {
      brand: "Warmhaus",
      model: "Enerwa | Priwa",
      faultType: "CODE",
      faultCode: "E 40",
      faultCause: "Electricity network frequency error – fluctuation in electricity frequency."
    },
    {
      brand: "Warmhaus",
      model: "Enerwa | Priwa",
      faultType: "CODE",
      faultCode: "rE 41",
      faultCause: "Flame loss after 6 successive ignitions – gas supply line valve being open."
    },
    {
      brand: "Warmhaus",
      model: "Enerwa | Priwa",
      faultType: "CODE",
      faultCode: "E 42",
      faultCause: "Error with pushbutton"
    },
    {
      brand: "Warmhaus",
      model: "Enerwa | Priwa",
      faultType: "CODE",
      faultCode: "E 43",
      faultCause: "Room thermostat communication error – disconnection or communication loss in room thermostat."
    },
    {
      brand: "Warmhaus",
      model: "Enerwa | Priwa",
      faultType: "CODE",
      faultCode: "rE 44",
      faultCause: "Gas valve error due to opening period without flame – try resetting the boiler."
    },
    {
      brand: "Warmhaus",
      model: "Enerwa | Priwa",
      faultType: "CODE",
      faultCode: "E 62",
      faultCause: "Calibration request – boiler has detected an absence of calibration control."
    },
    {
      brand: "Warmhaus",
      model: "Enerwa | Priwa",
      faultType: "CODE",
      faultCode: "rE 72",
      faultCause: "Delta T error – boiler failing to ignite. Could be due to a gas line valve being closed or a flue error."
    },
    {
      brand: "Warmhaus",
      model: "Enerwa | Priwa",
      faultType: "CODE",
      faultCode: "E 74",
      faultCause: "Temperature sensor error."
    },
    {
      brand: "Warmhaus",
      model: "Enerwa | Priwa",
      faultType: "CODE",
      faultCode: "E 77",
      faultCause: "Current values reached – check combustion values and CO2 calibration, try resetting the boiler if this fails. \nEither the board or the valve will need replacing."
    },
    {
      brand: "Warmhaus",
      model: "Enerwa | Priwa",
      faultType: "CODE",
      faultCode: "E 78",
      faultCause: "Regulation current value has been reached. Try resetting the boiler, check the gas pressure and check the \ncombustion values and CO2 calibration – if this doesn’t work the board or valve needs replacing."
    },
    {
      brand: "Warmhaus",
      model: "Enerwa | Priwa",
      faultType: "CODE",
      faultCode: "E 79",
      faultCause: "Minimum regulation current reached – try resetting the boiler – checking the gas pressure and checking the \ncombustion values and CO2 calibration – the board or valve might need replacing."
    },
    {
      brand: "Warmhaus",
      model: "Enerwa | Priwa",
      faultType: "CODE",
      faultCode: "rE 80",
      faultCause: "Gas valve driver error – due to an internal failure."
    },
    {
      brand: "Warmhaus",
      model: "Enerwa | Priwa",
      faultType: "CODE",
      faultCode: "rE 81",
      faultCause: "Ignition problem at the first start – this could be due the flue line, possible flue blockage or chimney gasket."
    },
    {
      brand: "Warmhaus",
      model: "Enerwa | Priwa",
      faultType: "CODE",
      faultCode: "rE 82",
      faultCause: "Burning problem – due to the flue line either being blocked or chimney gasket."
    },
    {
      brand: "Warmhaus",
      model: "Enerwa | Priwa",
      faultType: "CODE",
      faultCode: "E 83",
      faultCause: "Temporary mis-burning error – could be due to a gas pressure or flue line issue."
    },
    {
      brand: "Warmhaus",
      model: "Enerwa | Priwa",
      faultType: "CODE",
      faultCode: "E 84",
      faultCause: "Capacity reduction for detected low gas inlet pressure – check the CO2 calibration values."
    },
    {
      brand: "Warmhaus",
      model: "Enerwa | Priwa",
      faultType: "CODE",
      faultCode: "rE 88",
      faultCause: "Error in gas line cycle – possible gas valve component error."
    },
    {
      brand: "Warmhaus",
      model: "Enerwa | Priwa",
      faultType: "CODE",
      faultCode: "E 89",
      faultCause: "Problem on combustion feedback signal – gas pressure needs checking."
    },
    {
      brand: "Warmhaus",
      model: "Enerwa | Priwa",
      faultType: "CODE",
      faultCode: "E 90",
      faultCause: "Error in regulating combustion – possible error with the calibration values chimney gas valve and board."
    },
    {
      brand: "Warmhaus",
      model: "Enerwa | Priwa",
      faultType: "CODE",
      faultCode: "E 92",
      faultCause: "Air compensation active – the CO2 values need checking, possible error with the wind presence."
    },
    {
      brand: "Warmhaus",
      model: "Enerwa | Priwa",
      faultType: "CODE",
      faultCode: "E 93",
      faultCause: "Unable to regulate combustion – possible calibration value issue, chimney gas valve or board."
    },
    {
      brand: "Warmhaus",
      model: "Enerwa | Priwa",
      faultType: "CODE",
      faultCode: "E 94",
      faultCause: "Low gas pressure or exhaust recirculation that could be an issue with gas pressure."
    },
    {
      brand: "Warmhaus",
      model: "Enerwa | Priwa",
      faultType: "CODE",
      faultCode: "E 95",
      faultCause: "Intermittent combustion value caused by a possible error with electrode position or electrical connection \nstability."
    },
    {
      brand: "Warmhaus",
      model: "Enerwa | Priwa",
      faultType: "CODE",
      faultCode: "E 96",
      faultCause: "Flue blockage – due to chimney and combustion values – the boiler may need a calibration."
    },
    {
      brand: "Warmhaus",
      model: "Enerwa | Priwa",
      faultType: "CODE",
      faultCode: "rE 80",
      faultCause: "Gas valve error – possible internal error."
    },
    {
      brand: "Warmhaus",
      model: "Enerwa | Priwa",
      faultType: "CODE",
      faultCode: "rE 81",
      faultCause: "Ignition problem at the first start – could be due to a problem with a flue line."
    },
    {
      brand: "Warmhaus",
      model: "Enerwa | Priwa",
      faultType: "CODE",
      faultCode: "rE 82",
      faultCause: "Burning problem error – flue line error."
    },
    {
      brand: "Warmhaus",
      model: "Enerwa | Priwa",
      faultType: "CODE",
      faultCode: "E 83",
      faultCause: "Temporary mis-burning error that may be caused by the gas pressure or flue line."
    },
    {
      brand: "Warmhaus",
      model: "Enerwa | Priwa",
      faultType: "CODE",
      faultCode: "rE 88",
      faultCause: "Gas line cycle error – could be due to a gas valve component error."
    },
    {
      brand: "Warmhaus",
      model: "Enerwa | Priwa",
      faultType: "CODE",
      faultCode: "rE 98",
      faultCause: "Electronic card start error."
    },
    {
      brand: "Warmhaus",
      model: "Enerwa | Priwa",
      faultType: "CODE",
      faultCode: "rE 99",
      faultCause: "An error has been detected in the Combi, try resetting the boiler."
    },
  ]
}

