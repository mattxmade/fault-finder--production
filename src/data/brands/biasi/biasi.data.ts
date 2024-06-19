import { nanoid } from "nanoid"
import { BrandItem } from "../../../types"

// "Biasi Boiler Fault Codes"

export const brand_biasi: BrandItem = {
  id: nanoid(),
  name: "Biasi",

  info: {
    website: "",
    manual: { page: 0, link: "" }
  },
  
  hasIcon: true,
  hasFlash: false,
  hasFaultCode: true,
  hasFaultNote: false,

  faultCodes: [
    { 
      brand: "Biasi",
      model: "All Biasi Boilers",
      faultType: "CODE",
      faultCode: "ER 01 + Reset",
      faultIcon: "N/A",
      faultCheck: "Lack of burner ignition on safety lockout"
    },
    { 
      brand: "Biasi",
      model: "All Biasi Boilers",
      faultType: "CODE",
      faultCode: "ER 02 + Reset",
      faultIcon: "N/A",
      faultCheck: "Safety thermostat intervention lockout"
    },
    { 
      brand: "Biasi",
      model: "All Biasi Boilers",
      faultType: "CODE",
      faultCode: "ER 03 + Reset",
      faultIcon: "N/A",
      faultCheck: "General lockout"
    },
    { 
      brand: "Biasi",
      model: "All Biasi Boilers",
      faultType: "CODE",
      faultCode: "ER 04 +",
      faultCheck: "Faulty primary circuit (no water or absence of flow)"
    },
    { 
      brand: "Biasi",
      model: "All Biasi Boilers",
      faultType: "CODE",
      faultCode: "ER 05 +",
      faultCheck: "Faulty fan control system"
    },
    { 
      brand: "Biasi",
      model: "All Biasi Boilers",
      faultType: "CODE",
      faultCode: "ER 06 +",
      faultCheck: "Faulty c.h. temp. probe NTC"
    },
    { 
      brand: "Biasi",
      model: "All Biasi Boilers",
      faultType: "CODE",
      faultCode: "ER 07 +",
      faultCheck: "Faulty d.h.w. temp. probe NTC"
    },
    { 
      brand: "Biasi",
      model: "All Biasi Boilers",
      faultType: "CODE",
      faultCode: "ER 08 +",
      faultCheck: "Faulty external temp. probe NTC"
    },
    { 
      brand: "Biasi",
      model: "All Biasi Boilers",
      faultType: "CODE",
      faultCode: "ER 09 +",
      faultCheck: "Faulty flue temp. probe NTC"
    },
    { 
      brand: "Biasi",
      model: "All Biasi Boilers",
      faultType: "CODE",
      faultCode: "ER 10 + reset",
      faultIcon: "N/A",
      faultCheck: "Flue probe intervention lockout"
    },
    { 
      brand: "Biasi",
      model: "All Biasi Boilers",
      faultType: "CODE",
      faultCode: "N/A",
      faultCheck: "Flame detection error (An flashing + number error flashing"
    },
    { 
      brand: "Biasi",
      model: "All Biasi Boilers",
      faultType: "CODE",
      faultCode: "ER + 14 + Reset",
      faultIcon: "N/A",
      faultCheck: "Faulty pump or primary temperature above 105°C"
    },
    { 
      brand: "Biasi",
      model: "All Biasi Boilers",
      faultType: "CODE",
      faultCode: "ER + 14 + Reset",
      faultIcon: "N/A",
      faultCheck: "Faulty pump or primary temperature above 105°C"
    },
    { 
      brand: "Biasi",
      model: "All Biasi Boilers",
      faultType: "CODE",
      faultCode: "ER + 14 +",
      faultCheck: "Absence of flow from temperature gradient (>2K/s)/td>"
    },
    { 
      brand: "Biasi",
      model: "All Biasi Boilers",
      faultType: "CODE",
      faultCode: "Li",
      faultIcon: "N/A",
      faultCheck: "Primary circuit temp. limit during d.h.w. operation"
    },
    { 
      brand: "Biasi",
      model: "All Biasi Boilers",
      faultType: "CODE",
      faultCode: "—",
      faultIcon: "N/A",
      faultCheck: "Boiler Stand-By, hyphens are turned on in sequence to simulate running /antifreeze protection activated)"
    },
    { 
      brand: "Biasi",
      model: "All Biasi Boilers",
      faultType: "CODE",
      faultCode: "N/A",
      faultCheck: "Boiler Stand-By, hyphens are turned on in sequence to simulate running /antifreeze protection activated)"
    },
    { 
      brand: "Biasi",
      model: "All Biasi Boilers",
      faultType: "CODE",
      faultCode: "N/A",
      faultCheck: "Filling request: The boiler works regularly and the display shows all the icons, but the signal FL is flashing every 1 sec."
    },
    { 
      brand: "Biasi",
      model: "All Biasi Boilers",
      faultType: "CODE",
      faultCode: "N/A",
      faultCheck: "Insufficient pressure: The boiler stops displaying the water lack error."
    },
    { 
      brand: "Biasi",
      model: "All Biasi Boilers",
      faultType: "CODE",
      faultCode: "30c",
      faultIcon: "N/A",
      faultCheck: "Boiler waiting for heat request"
    },
    { 
      brand: "Biasi",
      model: "All Biasi Boilers",
      faultType: "CODE",
      faultCode: "N/A",
      faultCheck: "Boiler in summer mode (d.h.w.). The primary circuit temperature is displayed."
    },
    { 
      brand: "Biasi",
      model: "All Biasi Boilers",
      faultType: "CODE",  
      faultCode: "N/A",
      faultCheck: "Boiler in winter mode (c.h.+ d.h.w.) The primary circuit temperature is displayed."
    },
    { 
      brand: "Biasi",
      model: "All Biasi Boilers",
      faultType: "CODE",
      faultCode: "N/A",
      faultCheck: "Boiler on demand for d.h.w. power. The d.h.w. temperature is displayed. / Boiler on demand for c.h. power."
    },
    { 
      brand: "Biasi",
      model: "All Biasi Boilers",
      faultType: "CODE",
      faultCode: "N/A",
      faultCheck: "Burner ignition (spark)"
    },
    { 
      brand: "Biasi",
      model: "All Biasi Boilers",
      faultType: "CODE",
      faultCode: "N/A",
      faultCheck: "Flame present (Burner on)"
    },
    { 
      brand: "Biasi",
      model: "All Biasi Boilers",
      faultType: "CODE",
      faultCode: "N/A",
      faultCheck: "Pre-heating function 3 stars DHW comfort. This information is not displayed. It will be possible to check its state in the\nsection “INFO” value “cF” (the signal “cF” is alternated to the CH temperature value until the end of this function). You \ncan enter the function pushing the buttons 12 and 13 together. The function is confirmed showing ON or OFF alternating\n for 5 sec. This function is always active at every hour (it’s not possible to set the time slots unless a remote control is \nconnected)."
    },
    { 
      brand: "Biasi",
      model: "All Biasi Boilers",
      faultType: "CODE",
      faultCode: "N/A",
      faultCheck: "Pre-heating function 3 stars DHW comfort. This information is not displayed. It will be possible to check its state in the \nsection “INFO” value “cF” (the signal “cF” is alternated to the CH temperature value until the end of this function). You \ncan enter the function pushing the buttons 12 and 13 together. The function is confirmed showing ON or OFF alternating \nfor 5 sec. This function is always active at every hour (it’s not possible to set the time slots unless a remote control is \nconnected)."
    },
    { 
      brand: "Biasi",
      model: "All Biasi Boilers",
      faultType: "CODE",
      faultCode: "N/A",
      faultCheck: "Boiler in anti-freeze phase (bP flashing + temperature flashing)"
    },
    { 
      brand: "Biasi",
      model: "All Biasi Boilers",
      faultType: "CODE",
      faultCode: "N/A",
      faultCheck: "Boiler in antifrost phase (AF flashing + temperature flashing)"
    },
    { 
      brand: "Biasi",
      model: "All Biasi Boilers",
      faultType: "CODE",
      faultCode: "N/A",
      faultCheck: "Set c.h. (all other symbols are disabled)"
    },
    { 
      brand: "Biasi",
      model: "All Biasi Boilers",
      faultType: "CODE",
      faultCode: "N/A",
      faultCheck: "Set d.h.w. (all other symbols are disabled)"
    },
    { 
      brand: "Biasi",
      model: "All Biasi Boilers",
      faultType: "CODE",
      faultCode: "N/A",
      faultCheck: "Pump activated for the post-circulation phase (Po flashing + temperature flashing)"
    },
    { 
      brand: "Biasi",
      model: "All Biasi Boilers",
      faultType: "CODE",
      faultCode: "N/A",
      faultCheck: "Delayed burner ignition for setting the system (uu flashing + temperature flashing)"
    },
    { 
      brand: "Biasi",
      model: "All Biasi Boilers",
      faultType: "CODE",
      faultCode: "N/A",
      faultCheck: "Maintenance required The wrench symbol is flashing (without showing any error)"
    },
    { 
      brand: "Biasi",
      model: "All Biasi Boilers",
      faultType: "CODE",
      faultCode: "LP",
      faultIcon: "N/A",
      faultCheck: "Boiler in chimney sweep in function. The activation of the chimney sweep occurs configuring the “parameter P09=01” \nand is visualized: LP= minimum dhw hP= minimum heating cP= maximum heating dP= maximum dhw. The transition \noccurs with keys 16 (increase) and 15 (decrease) dhw temperature. The writing on the display alternates."
    },
    { 
      brand: "Biasi",
      model: "All Biasi Boilers",
      faultType: "CODE",
      faultCode: "N/A",
      faultCheck: "Boiler in chimney sweep in function. The activation of the chimney sweep occurs configuring the “parameter P09=01”\n and is visualized: LP= minimum dhw hP= minimum heating cP= maximum heating dP= maximum dhw. The transition\noccurs with keys 16 (increase) and 15 (decrease) dhw temperature. The writing on the display alternates."
    },
  ]
}

