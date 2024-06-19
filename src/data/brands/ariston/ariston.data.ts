import { nanoid } from "nanoid"
import { BrandItem } from "../../../types"

// "Ariston Fault Codes"

export const brand_ariston: BrandItem = {
  id: nanoid(),
  name: "Ariston",

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
      brand: "Ariston",
      faultType: "CODE",
      faultCode: "101",
      model: "All Ariston Boilers",
      faultCause: "Overheat",
      faultCheck: "Central Heating Circuit" 
    },
    { 
      brand: "Ariston",
      faultType: "CODE",
      faultCode: "102",
      model: "E-Combi Evo\nE-System Evo\nClas He Evo (Combi and system)",
      faultCause: "Pressure sensor error",
      faultCheck: "Central Heating Circuit" 
    },
    { 
      brand: "Ariston",
      faultType: "CODE",
      faultCode: "103",
      model: "All Ariston Boilers",
      faultCause: "Insufficient circulation",
      faultCheck: "Central Heating Circuit" 
    },
    { 
      brand: "Ariston",
      faultType: "CODE",
      faultCode: "104",
      model: "All Ariston Boilers",
      faultCause: "Insufficient circulation",
      faultCheck: "Central Heating Circuit" 
    },
    { 
      brand: "Ariston",
      faultType: "CODE",
      faultCode: "105",
      model: "All Ariston Boilers",
      faultCause: "Insufficient circulation",
      faultCheck: "Central Heating Circuit" 
    },
    { 
      brand: "Ariston",
      faultType: "CODE",
      faultCode: "106",
      model: "All Ariston Boilers",
      faultCause: "Insufficient circulation",
      faultCheck: "Central Heating Circuit" 
    },
    { 
      brand: "Ariston",
      faultType: "CODE",
      faultCode: "107",
      model: "All Ariston Boilers",
      faultCause: "Insufficient circulation",
      faultCheck: "Central Heating Circuit" 
    },
    { 
      brand: "Ariston",
      faultType: "CODE",
      faultCode: "108",
      model: "All Combi Boilers",
      faultCause: "Insufficient water (request filling)",
      faultCheck: "Central Heating Circuit" 
    },
    { 
      brand: "Ariston",
      faultType: "CODE",
      faultCode: "109",
      model: "Clas Net One / Clas One Combi\nClas system one",
      faultCause: "System pressure greater than 3 bar",
      faultCheck: "Central Heating Circuit" 
    },
    { 
      brand: "Ariston",
      faultType: "CODE",
      faultCode: "110",
      model: "All Ariston Boilers",
      faultCause: "Central heating Flow temperature probe circuit open / short circuit",
      faultCheck: "Central Heating Circuit" 
    },
    { 
      brand: "Ariston",
      faultType: "CODE",
      faultCode: "112",
      model: "All Ariston Boilers",
      faultCause: "Central heating return temperature probe circuit open / short circuit",
      faultCheck: "Central Heating Circuit" 
    },
    { 
      brand: "Ariston",
      faultType: "CODE",
      faultCode: "114",
      model: "All Ariston Boilers",
      faultCause: "External sensor circuit open / short circuit",
      faultCheck: "Central Heating Circuit" 
    },
    { 
      brand: "Ariston",
      faultType: "CODE",
      faultCode: "116",
      model: "All Combi and System Boilers",
      faultCause: "Floor thermostat contact open",
      faultCheck: "Central Heating Circuit" 
    },
    { 
      brand: "Ariston",
      faultType: "CODE",
      faultCode: "118",
      model: "All Ariston Boilers",
      faultCause: "Heating delivery probe problem",
      faultCheck: "Central Heating Circuit" 
    },
    { 
      brand: "Ariston",
      faultType: "CODE",
      faultCode: "1p1",
      model: "All Ariston Boilers",
      faultCause: "Insufficient circulation indication",
      faultCheck: "Central Heating Circuit" 
    },
    { 
      brand: "Ariston",
      faultType: "CODE",
      faultCode: "1p2",
      model: "All Ariston Boilers",
      faultCause: "Insufficient circulation indication",
      faultCheck: "Central Heating Circuit" 
    },
    { 
      brand: "Ariston",
      faultType: "CODE",
      faultCode: "1p3",
      model: "All Ariston Boilers",
      faultCause: "Insufficient circulation indication",
      faultCheck: "Central Heating Circuit" 
    },
    { 
      brand: "Ariston",
      faultType: "CODE",
      faultCode: "1p4",
      model: "Clas Net One Combi\nClas One Combi\nClas System one",
      faultCause: "Insufficient circulation indication",
      faultCheck: "Central Heating Circuit" 
    },


    // "D.H.W Circuit"
    { 
      brand: "Ariston",
      faultType: "CODE",
      faultCode: "202",
      model: "Clas HE evo\nClas HE Evo System\nE-Combi evo\nE-system evo",
      faultCause: "2 bottom storage temperature probe open/short circuit",
      faultCheck: "D.H.W Circuit" 
    },
    { 
      brand: "Ariston",
      faultType: "CODE",
      faultCode: "204",
      model: "Clas HE evo\nClas HE Evo System\nE-Combi evo\nE-system evo",
      faultCause: "Solar collector temperature probe open/short circuit",
      faultCheck: "D.H.W Circuit" 
    },
    { 
      brand: "Ariston",
      faultType: "CODE",
      faultCode: "205",
      model: "E-Combi one\nE-System one\nClas Net One Combi\nClas One Combi",
      faultCause: "Domestic hot water in probe open circuit",
      faultCheck: "D.H.W Circuit" 
    },
    { 
      brand: "Ariston",
      faultType: "CODE",
      faultCode: "207",
      model: "Clas HE evo\nClas HE Evo System\nE-Combi evo\nE-system evo",
      faultCause: "Solar collector overheating",
      faultCheck: "D.H.W Circuit" 
    },
    { 
      brand: "Ariston",
      faultType: "CODE",
      faultCode: "208",
      model: "Clas HE evo\nClas HE Evo System\nE-Combi evo\nE-system evo",
      faultCause: "Collector frost protection temperature",
      faultCheck: "D.H.W Circuit" 
    },


    // "Internal printed circuit board (PCB)"
    { 
      brand: "Ariston",
      faultType: "CODE",
      faultCode: "301",
      model: "All Ariston Boilers",
      faultCause: "EEPROM error",
      faultCheck: "Internal printed circuit board (PCB)" 
    },
    { 
      brand: "Ariston",
      faultType: "CODE",
      faultCode: "302",
      model: "All Ariston Boilers",
      faultCause: "Communication error",
      faultCheck: "Internal printed circuit board (PCB)" 
    },
    { 
      brand: "Ariston",
      faultType: "CODE",
      faultCode: "303",
      model: "All Ariston Boilers",
      faultCause: "Main printed circuit board (PCB) error",
      faultCheck: "Internal printed circuit board (PCB)" 
    },
    { 
      brand: "Ariston",
      faultType: "CODE",
      faultCode: "304",
      model: "All Ariston Boilers",
      faultCause: "Too many resets (> 5) in 15 minutes",
      faultCheck: "Internal printed circuit board (PCB)" 
    },
    { 
      brand: "Ariston",
      faultType: "CODE",
      faultCode: "305",
      model: "All Ariston Boilers",
      faultCause: "Main printed circuit board (PCB) error",
      faultCheck: "Internal printed circuit board (PCB)" 
    },
    { 
      brand: "Ariston",
      faultType: "CODE",
      faultCode: "306",
      model: "All Ariston Boilers",
      faultCause: "Main printed circuit board (PCB) error",
      faultCheck: "Internal printed circuit board (PCB)" 
    },
    { 
      brand: "Ariston",
      faultType: "CODE",
      faultCode: "307",
      model: "All Ariston Boilers",
      faultCause: "Main printed circuit board (PCB) error",
      faultCheck: "Internal printed circuit board (PCB)" 
    },
    { 
      brand: "Ariston",
      faultType: "CODE",
      faultCode: "3P9",
      model: "E-Combi one\nE-System one\nClas Net One Combi\nClas One Combi\nClas System one",
      faultCause: "Schedule service",
      faultCheck: "Internal printed circuit board (PCB)" 
    },


    // "External printed circuit board (PCB)"
    { 
      brand: "Ariston",
      faultType: "CODE",
      faultCode: "407",
      model: "Clas HE evo\nClas HE Evo System\nE-Combi evo\nE-system evo",
      faultCause: "7 Room sensor circuit open/short circuit",
      faultCheck: "External printed circuit board (PCB)" 
    },


    // "Ignition and Detection"
    { 
      brand: "Ariston",
      faultType: "CODE",
      faultCode: "501",
      model: "All Ariston Boilers",
      faultCause: "No flame detection",
      faultCheck: "Ignition and Detection" 
    },

    { 
      brand: "Ariston",
      faultType: "CODE",
      faultCode: "502",
      model: "All Ariston Boilers",
      faultCause: "Flame detected with gas valve closed",
      faultCheck: "Ignition and Detection" 
    },

    { 
      brand: "Ariston",
      faultType: "CODE",
      faultCode: "504",
      model: "All Ariston Boilers",
      faultCause: "Flame lift",
      faultCheck: "Ignition and Detection" 
    },

    { 
      brand: "Ariston",
      faultType: "CODE",
      faultCode: "5P1",
      model: "All Ariston Boilers",
      faultCause: "1st ignition failed",
      faultCheck: "Ignition and Detection" 
    },

    { 
      brand: "Ariston",
      faultType: "CODE",
      faultCode: "5P2",
      model: "All Ariston boilers",
      faultCause: "2nd ignition failed",
      faultCheck: "Ignition and Detection" 
    },

    { 
      brand: "Ariston",
      faultType: "CODE",
      faultCode: "5P3",
      model: "All Ariston Boilers",
      faultCause: "Flame cut-of",
      faultCheck: "Ignition and Detection" 
    },

    // "Air Inlet / Flue gas"
    { 
      brand: "Ariston",
      faultType: "CODE",
      faultCode: "604",
      model: "CLAS HE R\nE-Combi Evo\nE-System EVO\nClas HE Evo Combi\nClas HE Evo System",
      faultCause: "Insufficient fan speed",
      faultCheck: "Air Inlet / Flue gas" 
    },

    { 
      brand: "Ariston",
      faultType: "CODE",
      faultCode: "610",
      model: "All Ariston Boilers",
      faultCause: "Thermofuse open",
      faultCheck: "Air Inlet / Flue gas" 
    },

    { 
      brand: "Ariston",
      faultType: "CODE",
      faultCode: "612",
      model: "Clas HE Evo Combi\nClas HE Evo System\nE-Combi Evo\nE-system Evo\nClas Net One combi\nClas One combi\nClas system one",
      faultCause: "Fan speed has incorrect measurement",
      faultCheck: "Air Inlet / Flue gas" 
    },

    // "Multi-zone Heating"
    { 
      brand: "Ariston",
      faultType: "CODE",
      faultCode: "701",
      model: "E-Combi Evo\nE-System EVO\nClas HE Evo Combi\nClas HE Evo System",
      faultCause: "Zone 2 outgoing sensor defective",
      faultCheck: "Air Inlet / Flue gas" 
    },
    { 
      brand: "Ariston",
      faultType: "CODE",
      faultCode: "702",
      model: "E-Combi Evo\nE-System EVO\nClas HE Evo Combi\nClas HE Evo System",
      faultCause: "Zone 2 return sensor defective",
      faultCheck: "Air Inlet / Flue gas" 
    },
    { 
      brand: "Ariston",
      faultType: "CODE",
      faultCode: "703",
      model: "E-Combi Evo\nE-System EVO\nClas HE Evo Combi\nClas HE Evo System",
      faultCause: "Zone 3 outgoing sensor defective",
      faultCheck: "Air Inlet / Flue gas" 
    },
    { 
      brand: "Ariston",
      faultType: "CODE",
      faultCode: "704",
      model: "E-Combi Evo\nE-System EVO\nClas HE Evo Combi\nClas HE Evo System",
      faultCause: "Zone 3 return sensor defective",
      faultCheck: "Air Inlet / Flue gas" 
    },
    { 
      brand: "Ariston",
      faultType: "CODE",
      faultCode: "705",
      model: "E-Combi Evo\nE-System EVO\nClas HE Evo Combi\nClas HE Evo System",
      faultCause: "Hydraulic separation sensor defective",
      faultCheck: "Air Inlet / Flue gas" 
    },
    { 
      brand: "Ariston",
      faultType: "CODE",
      faultCode: "706",
      model: "E-Combi Evo\nE-System EVO\nClas HE Evo Combi\nClas HE Evo System",
      faultCause: "Zone 2 overheating",
      faultCheck: "Air Inlet / Flue gas" 
    },
    { 
      brand: "Ariston",
      faultType: "CODE",
      faultCode: "707",
      model: "E-Combi Evo\nE-System EVO\nClas HE Evo Combi\nClas HE Evo System",
      faultCause: "Zone 3 overheating",
      faultCheck: "Air Inlet / Flue gas" 
    },

    // "External printed circuit board (PCB)"
    // faultCheck: "External printed circuit board (PCB)"
    { 
      brand: "Ariston",
      faultType: "CODE",
      faultCode: "411",
      model: "Clas Net One, Clas One, E-Combi and E-System",
      faultCause: "Room sensor circuit open or short circuit zone 1",
      faultCheck: "External printed circuit board (PCB)" 
    },
    { 
      brand: "Ariston",
      faultType: "CODE",
      faultCode: "412",
      model: "Clas Net One, Clas One, E-Combi and E-System",
      faultCause: "Room sensor circuit open or short circuit zone 2",
      faultCheck: "External printed circuit board (PCB)" 
    },
    { 
      brand: "Ariston",
      model: "Clas Net One, Clas One, E-Combi and E-System",
      faultType: "CODE",
      faultCode: "414",
      faultCause: "Room sensor circuit open or short circuit   zone 3",
      faultCheck: "External printed circuit board (PCB)",  
    },

    // "Multi-zone Heating"
    // faultCheck: "Multi-zone Heating"

    { 
      brand: "Ariston",
      faultType: "CODE",
      faultCode: "701",
      model: "Clas Net One, Clas One, E-Combi and E-System",
      faultCause: "Send sensor defective (Zone 1)",
      faultCheck: "Multi-zone Heating" 
    },
    { 
      brand: "Ariston",
      faultType: "CODE",
      faultCode: "702",
      model: "Clas Net One, Clas One, E-Combi and E-System",
      faultCause: "Send sensor defective (Zone 2)",
      faultCheck: "Multi-zone Heating" 
    },
    { 
      brand: "Ariston",
      faultType: "CODE",
      faultCode: "703",
      model: "Clas Net One, Clas One, E-Combi and E-System",
      faultCause: "Send sensor defective (Zone 3)",
      faultCheck: "Multi-zone Heating" 
    },
    { 
      brand: "Ariston",
      faultType: "CODE",
      faultCode: "711",
      model: "Clas Net One, Clas One, E-Combi and E-System",
      faultCause: "Return sensor defective (zone 1)",
      faultCheck: "Multi-zone Heating" 
    },
    { 
      brand: "Ariston",
      faultType: "CODE",
      faultCode: "712",
      model: "Clas Net One, Clas One, E-Combi and E-System",
      faultCause: "Return sensor defective (zone 2)",
      faultCheck: "Multi-zone Heating" 
    },
    { 
      brand: "Ariston",
      faultType: "CODE",
      faultCode: "713",
      model: "Clas Net One, Clas One, E-Combi and E-System",
      faultCause: "Return sensor defective (zone 3)",
      faultCheck: "Multi-zone Heating" 
    },
    { 
      brand: "Ariston",
      faultType: "CODE",
      faultCode: "722",
      model: "Clas Net One, Clas One, E-Combi and E-System",
      faultCause: "Overheating in zone 2",
      faultCheck: "Multi-zone Heating" 
    },
    { 
      brand: "Ariston",
      faultType: "CODE",
      faultCode: "723",
      model: "Clas Net One, Clas One, E-Combi and E-System",
      faultCause: "Overheating in zone 3",
      faultCheck: "Multi-zone Heating" 
    },
    { 
      brand: "Ariston",
      faultType: "CODE",
      faultCode: "750",
      model: "Clas Net One, Clas One, E-Combi and E-System",
      faultCause: "All heating zones locked",
      faultCheck: "Multi-zone Heating"
    },
  ]
}