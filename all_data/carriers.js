 const carriers = [
  {
    IATA_CD: "X7",
    CARR_NAME: "Challenge Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "9B",
    CARR_NAME: "Accesrail Inc.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "GZ",
    CARR_NAME: "Air Rarotonga",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "8T",
    CARR_NAME: "Air Tindi Ltd",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "J5",
    CARR_NAME: "Alaska Seaplanes",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "2V",
    CARR_NAME: "Amtrak",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "EV",
    CARR_NAME: "ExpressJet Airlines, Inc.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "2A",
    CARR_NAME: "Deutsche Bahn AG",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "9F",
    CARR_NAME: "Eurostar International",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "HR",
    CARR_NAME: "Hahn Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "2O",
    CARR_NAME: "Island Air Service",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "QJ",
    CARR_NAME: "Jet Airways Inc.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "4X",
    CARR_NAME: "Mercury World Cargo",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "HI",
    CARR_NAME: "Papillon Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "P1",
    CARR_NAME: "PublicCharters.com",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "2E",
    CARR_NAME: "Smokey Bay Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "CR",
    CARR_NAME: "Prevalidate Test carrier Do not use",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "X4",
    CARR_NAME: "Air Excursions, LLC",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "Y6",
    CARR_NAME: "AB Aviation",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "Q9",
    CARR_NAME: "Green Africa Airways Limited",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "GD",
    CARR_NAME: "Aviair",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "SH",
    CARR_NAME: "Sharp Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "D3",
    CARR_NAME: "Daallo Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "XB",
    CARR_NAME: "Forward Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "1X",
    CARR_NAME: "Branson AirExpress",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "4T",
    CARR_NAME: "Rise Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "HS",
    CARR_NAME: "Heli Securite Helicopter Airline",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "L3",
    CARR_NAME: "DHL de Guatemala, S.A.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "5I",
    CARR_NAME: "Alsa Grupo Slu",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "DG",
    CARR_NAME: "Cebgo",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "H1",
    CARR_NAME: "Hahn Air Systems",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "9T",
    CARR_NAME: "ACT Airlines Inc",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "3X",
    CARR_NAME: "Premier Trans Aire",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "BU",
    CARR_NAME: "Compagnie Africaine d'Aviation",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "CB",
    CARR_NAME: "Trans Caribbean Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "NP",
    CARR_NAME: "Nile Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "GC",
    CARR_NAME: "Global Feeder Services",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "6V",
    CARR_NAME: "AVANZA",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "QM",
    CARR_NAME: "Monacair",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "BS",
    CARR_NAME: "US-Bangla Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "V6",
    CARR_NAME: "VI Airlink",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "UK",
    CARR_NAME: "Vistara",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "4R",
    CARR_NAME: "Renfe Viajeros",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "FC",
    CARR_NAME: "Link Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "W1",
    CARR_NAME: "World Ticket Ltd",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "FP",
    CARR_NAME: "Flypelican",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "S2",
    CARR_NAME: "Serve Air S.A.R.L.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "3G",
    CARR_NAME: "World Cargo Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "E6",
    CARR_NAME: "Bringer Air Cargo Taxi Aereo",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "3A",
    CARR_NAME: "Chu Kong Passenger Transport Co Ltd.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "MC",
    CARR_NAME: "Air Mobility Command",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "ZR",
    CARR_NAME: "Aviacon Zitotrans Air Company",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "YD",
    CARR_NAME: "Synergy Aviation",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "RH",
    CARR_NAME: "Hong Kong Air Cargo Carrier Limited",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "AO",
    CARR_NAME: "Air Juan",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "K2",
    CARR_NAME: "Yute Commuter Service",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "A4",
    CARR_NAME: "AZIMUTH Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "FO",
    CARR_NAME: "Flybondi",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "4P",
    CARR_NAME: "Regional Sky",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "RR",
    CARR_NAME: "Buzz",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "R0",
    CARR_NAME: "Tantalus Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "VV",
    CARR_NAME: "Viva Air Peru",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "HC",
    CARR_NAME: "Air Senegal",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "YH",
    CARR_NAME: "Sunsplash Aviation LLC",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "TZ",
    CARR_NAME: "Tsaradia",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "HT",
    CARR_NAME: "Tianjin Air Cargo Co., Ltd",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "7C8",
    CARR_NAME: "Cargolux Italia S.p.A.",
    CARGO_IND: "Y"
  },
  {
    IATA_CD: "QD",
    CARR_NAME: "JC (Cambodia) International Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "7T",
    CARR_NAME: "Trenitalia S.p.A.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "1L",
    CARR_NAME: "CitizenPlane",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "ZU",
    CARR_NAME: "Ethiopian Mozambique Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "ZB",
    CARR_NAME: "Air Albania",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "2H",
    CARR_NAME: "Thalys International",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "8S",
    CARR_NAME: "TurboJET",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "EX",
    CARR_NAME: "Regional Express Americas SAS",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "HG",
    CARR_NAME: "Hibernian Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "LE",
    CARR_NAME: "Norwegian Air Sweden AB",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "X1",
    CARR_NAME: "Hahn Air Technologies",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "WC",
    CARR_NAME: "Meregrass",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "JA",
    CARR_NAME: "Jetsmart",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "VG",
    CARR_NAME: "Vipper BV",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "RK",
    CARR_NAME: "Ryanair UK Ltd",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "NN",
    CARR_NAME: "China Travel Tours Transp Services",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "H8",
    CARR_NAME: "Sky Airlines Peru S.A.C",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "LZ",
    CARR_NAME: "Air Link",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "LL",
    CARR_NAME: "China General Aviation LTD",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "S8",
    CARR_NAME: "Sounds Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "A1",
    CARR_NAME: "A.P.G. Distribution Systems",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "9A",
    CARR_NAME: "Gran Colombia de Aviacion",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "YB",
    CARR_NAME: "Harbour Air Seaplanes",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "JK",
    CARR_NAME: "Aerolinea Del Caribe S.A.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "I9",
    CARR_NAME: "China Central Airlines CO. Ltd.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "YF",
    CARR_NAME: "Department of National Defence",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "8A",
    CARR_NAME: "Panama Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "HK",
    CARR_NAME: "Skippers Aviation",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "ZN",
    CARR_NAME: "Zambia Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "DU",
    CARR_NAME: "Sky Jet M.G. Inc",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "3Q",
    CARR_NAME: "Royal Air Charters",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "L5",
    CARR_NAME: "RED AIR SRL",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "JN",
    CARR_NAME: "Alaska Air Transit",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "L8",
    CARR_NAME: "Lulutai Airlines Limited",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "L4",
    CARR_NAME: "The Landline Company",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "WM",
    CARR_NAME: "WINAIR",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "EA",
    CARR_NAME: "Atlantis-Air Link Ltd.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "GW",
    CARR_NAME: "Costa Rica Green Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "S9",
    CARR_NAME: "flybig",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "TI",
    CARR_NAME: "Tropic Ocean Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "CO",
    CARR_NAME: "North-Western Cargo International",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "0C",
    CARR_NAME: "Cobra Aviation (Pty) Ltd",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "RD",
    CARR_NAME: "Sky Cana",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "EG",
    CARR_NAME: "Aer Lingus UK Limited",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "I6",
    CARR_NAME: "Intermodalidad de Levante S.A.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "RI",
    CARR_NAME: "PT Rimbun Abadi Aviasi",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "EQ",
    CARR_NAME: "Fly Angola",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "MW",
    CARR_NAME: "Waltzing Matilda Aviation LLC",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "BD",
    CARR_NAME: "Air Inter Transport Co. Ltd",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "KR",
    CARR_NAME: "Cambodia Airways Co. Ltd",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "WE",
    CARR_NAME: "Thai Smile Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "IL",
    CARR_NAME: "PT Trigana Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "VJ",
    CARR_NAME: "Vietjet",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "ZK",
    CARR_NAME: "Aircompany ZetAvia",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "GQ",
    CARR_NAME: "Sky Express S.A.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "V7",
    CARR_NAME: "Volotea",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "7I",
    CARR_NAME: "Air Libya",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "TV",
    CARR_NAME: "Tibet Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "AP",
    CARR_NAME: "Alba Star",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "C4",
    CARR_NAME: "Conquest Air Inc.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "PF",
    CARR_NAME: "Air Sial",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "F0",
    CARR_NAME: "Fly Jordan",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "H7",
    CARR_NAME: "HiSky",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "XR",
    CARR_NAME: "Corendon Airlines Europe",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "XO",
    CARR_NAME: "SEAIR International",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "SI",
    CARR_NAME: "Blue Islands",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "XC",
    CARR_NAME: "Corendon Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "CE",
    CARR_NAME: "Chalair",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "CT",
    CARR_NAME: "Alitalia CityLiner S.p.A.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "D0",
    CARR_NAME: "DHL Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "ZX",
    CARR_NAME: "Pivot Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "TB",
    CARR_NAME: "TUI fly Belgium",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "4L",
    CARR_NAME: "Lineas Aereas Suramericanas",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "YC",
    CARR_NAME: "Yamal Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "LM",
    CARR_NAME: "Loganair",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "7PE",
    CARR_NAME: "Pacific Air Express",
    CARGO_IND: "Y"
  },
  {
    IATA_CD: "NI",
    CARR_NAME: "Portugalia",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "7P",
    CARR_NAME: "Air Panama",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "2Z",
    CARR_NAME: "Passaredo",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "FA",
    CARR_NAME: "Safair",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "7O",
    CARR_NAME: "Travel Service Hungary",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "VI",
    CARR_NAME: "Volga-Dnepr Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "ZQ",
    CARR_NAME: "German Airways GmbH & Co.KG",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "WI",
    CARR_NAME: "White Airways S.A.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "WU",
    CARR_NAME: "Western Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "DB",
    CARR_NAME: "Maleth-Aero",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "6N",
    CARR_NAME: "Niger Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "P9",
    CARR_NAME: "Asia Pacific Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "K8",
    CARR_NAME: "InterJet West",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "VB",
    CARR_NAME: "VivaAerobus",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "V4",
    CARR_NAME: "Vieques Air Link",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "5R",
    CARR_NAME: "RUTACA",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "Y9",
    CARR_NAME: "Enerjet",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "AA",
    CARR_NAME: "American Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "OZ",
    CARR_NAME: "Asiana Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "8U",
    CARR_NAME: "Afriqiyah Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "G4",
    CARR_NAME: "Allegiant Air LLC",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "GB",
    CARR_NAME: "ABX Air, Inc.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "G9",
    CARR_NAME: "Air Arabia",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "AC",
    CARR_NAME: "Air Canada",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "78V",
    CARR_NAME: "Astral Aviation",
    CARGO_IND: "Y"
  },
  {
    IATA_CD: "HD",
    CARR_NAME: "AirDo",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "UX",
    CARR_NAME: "Air Europa",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "A3",
    CARR_NAME: "Aegean Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "7KO",
    CARR_NAME: "Alaska Central Express Inc",
    CARGO_IND: "Y"
  },
  {
    IATA_CD: "FG",
    CARR_NAME: "Ariana Afghan Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "SU",
    CARR_NAME: "Aeroflot Russian Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "AF",
    CARR_NAME: "Air France",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "LD",
    CARR_NAME: "AHK Air Hong Kong",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "J2",
    CARR_NAME: "Azerbaijan Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "AI",
    CARR_NAME: "Air India",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "3H",
    CARR_NAME: "Air Inuit",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "5A",
    CARR_NAME: "Alpine Aviation Inc.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "FD",
    CARR_NAME: "Thai AirAsia",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "IZ",
    CARR_NAME: "Arkia - Israeli Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "M6",
    CARR_NAME: "Amerijet International, Inc.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "NQ",
    CARR_NAME: "Air Japan",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "EH",
    CARR_NAME: "ANA Wings Co., Ltd",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "UL",
    CARR_NAME: "SriLankan Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "KM",
    CARR_NAME: "Air Malta",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "NX",
    CARR_NAME: "Air Macau",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "AM",
    CARR_NAME: "Aeromexico",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "NH",
    CARR_NAME: "All Nippon Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "PX",
    CARR_NAME: "Air Niugini",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "TL",
    CARR_NAME: "Airnorth Regional",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "OY",
    CARR_NAME: "Andes Lineas Aereas",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "4N",
    CARR_NAME: "Air North",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "NZ",
    CARR_NAME: "Air New Zealand",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "W3",
    CARR_NAME: "Arik Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "AR",
    CARR_NAME: "Aerolineas Argentinas",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "AS",
    CARR_NAME: "Alaska Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "4D",
    CARR_NAME: "Air Sinai",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "YV",
    CARR_NAME: "Mesa Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "TC",
    CARR_NAME: "Air Tanzania",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "OS",
    CARR_NAME: "Austrian Airlines AG dba Austrian",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "PS",
    CARR_NAME: "Ukraine International Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "5N",
    CARR_NAME: "Smartavia",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "GR",
    CARR_NAME: "Aurigny Air Services",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "AV",
    CARR_NAME: "Avianca",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "NF",
    CARR_NAME: "Air Vanuatu",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "ZW",
    CARR_NAME: "Air Wisconsin",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "QZ",
    CARR_NAME: "Indonesia AirAsia",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "7E",
    CARR_NAME: "Sylt Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "IX",
    CARR_NAME: "Air India Express",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "XU",
    CARR_NAME: "African Express Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "AK",
    CARR_NAME: "AirAsia",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "NS",
    CARR_NAME: "Hebei Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "AZ",
    CARR_NAME: "Alitalia - Societa Aerea Italiana S.p.A",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "Z8",
    CARR_NAME: "Amaszonas",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "UM",
    CARR_NAME: "Air Zimbabwe",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "BA",
    CARR_NAME: "British Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "BG",
    CARR_NAME: "Biman Bangladesh Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "WX",
    CARR_NAME: "City Jet",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "7BZ",
    CARR_NAME: "Blue Dart Aviation Limited",
    CARGO_IND: "Y"
  },
  {
    IATA_CD: "UP",
    CARR_NAME: "Bahamasair",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "PG",
    CARR_NAME: "Bangkok Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "JV",
    CARR_NAME: "Perimeter Aviation LP dba Bearskin A/L",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "CH",
    CARR_NAME: "Bemidji Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "BP",
    CARR_NAME: "Air Botswana",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "BV",
    CARR_NAME: "Blue Panorama Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "8E",
    CARR_NAME: "Bering Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "UZ",
    CARR_NAME: "Buraq Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "B2",
    CARR_NAME: "Belavia",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "BT",
    CARR_NAME: "Air Baltic Corporation",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "J8",
    CARR_NAME: "Berjaya Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "BW",
    CARR_NAME: "Caribbean Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "CI",
    CARR_NAME: "China Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "MO",
    CARR_NAME: "Calm Air Intl Ltd",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "MN",
    CARR_NAME: "Comair",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "KX",
    CARR_NAME: "Cayman Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "CA",
    CARR_NAME: "Air China",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "SC",
    CARR_NAME: "Shandong Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "5J",
    CARR_NAME: "Cebu Pacific Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "C2",
    CARR_NAME: "CEIBA Intercontinental",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "MU",
    CARR_NAME: "China Eastern Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "DE",
    CARR_NAME: "Condor Flugdienst",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "HU",
    CARR_NAME: "Hainan Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "NA",
    CARR_NAME: "Nesma Airlines Company Ltd",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "W8",
    CARR_NAME: "Cargojet Airways Ltd.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "CK",
    CARR_NAME: "China Cargo Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "RP",
    CARR_NAME: "BASe Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "K4",
    CARR_NAME: "Kalitta Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "CL",
    CARR_NAME: "Lufthansa Cityline Gmbh",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "CV",
    CARR_NAME: "Cargolux Airlines International",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "CM",
    CARR_NAME: "COPA Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "OH",
    CARR_NAME: "PSA Airlines, Inc.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "77C",
    CARR_NAME: "Coyne Airways",
    CARGO_IND: "Y"
  },
  {
    IATA_CD: "77C",
    CARR_NAME: "Coyne Airways",
    CARGO_IND: "Y"
  },
  {
    IATA_CD: "CX",
    CARR_NAME: "Cathay Pacific Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "9Q",
    CARR_NAME: "Caicos Express Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "9C",
    CARR_NAME: "Spring Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "HX",
    CARR_NAME: "Hong Kong Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "SS",
    CARR_NAME: "Corsair",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "YN",
    CARR_NAME: "Air Creebec (1994) Inc.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "OK",
    CARR_NAME: "Czech Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "3U",
    CARR_NAME: "Sichuan Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "FM",
    CARR_NAME: "Shanghai Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "ZH",
    CARR_NAME: "Shenzhen Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "OU",
    CARR_NAME: "Croatia Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "KN",
    CARR_NAME: "China United Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "CU",
    CARR_NAME: "Cubana de Aviacion S.A",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "3C",
    CARR_NAME: "Air Chathams",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "MF",
    CARR_NAME: "Xiamen Airlines Company",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "XP",
    CARR_NAME: "Avelo Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "CF",
    CARR_NAME: "China Postal Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "D5",
    CARR_NAME: "Dhl Aero Expreso S.A.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "AH",
    CARR_NAME: "Air Algerie",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "DL",
    CARR_NAME: "Delta Air Lines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "SN",
    CARR_NAME: "Brussels Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "JD",
    CARR_NAME: "Beijing Capital Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "EM",
    CARR_NAME: "Empire Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "HO",
    CARR_NAME: "Juneyao Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "EN",
    CARR_NAME: "Air Dolomiti S.p.A L.A.R.E",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "Q2",
    CARR_NAME: "Maldivian",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "KB",
    CARR_NAME: "Royal Bhutan Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "DT",
    CARR_NAME: "TAAG Angola Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "DX",
    CARR_NAME: "DAT",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "WK",
    CARR_NAME: "Edelweiss Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "MQ",
    CARR_NAME: "Envoy Air Inc",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "EI",
    CARR_NAME: "Aer Lingus",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "LY",
    CARR_NAME: "El Al Israel Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "B8",
    CARR_NAME: "Eritrean Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "EY",
    CARR_NAME: "Etihad Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "ET",
    CARR_NAME: "Ethiopian Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "BR",
    CARR_NAME: "EVA Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "EW",
    CARR_NAME: "Eurowings",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "LS",
    CARR_NAME: "Jet2.com",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "B5",
    CARR_NAME: "East African Safari Air Express",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "T3",
    CARR_NAME: "Eastern Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "DS",
    CARR_NAME: "easyjet Switzerland SA",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "U2",
    CARR_NAME: "easyJet",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "7F",
    CARR_NAME: "First Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "FY",
    CARR_NAME: "Firefly",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "F9",
    CARR_NAME: "Frontier Airlines Inc.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "5H",
    CARR_NAME: "Five Forty Aviation",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "AY",
    CARR_NAME: "Finnair",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "FJ",
    CARR_NAME: "Fiji Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "5M",
    CARR_NAME: "FlyMontserrat",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "9E",
    CARR_NAME: "Endeavor Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "RC",
    CARR_NAME: "Atlantic Airways Faroe Islands",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "5O",
    CARR_NAME: "ASL Airlines France",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "TX",
    CARR_NAME: "Air Caraibes",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "3M",
    CARR_NAME: "SILVER AIRWAYS LLC",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "2P",
    CARR_NAME: "PAL Express",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "GS",
    CARR_NAME: "TianJin Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "CN",
    CARR_NAME: "Grand China Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "GF",
    CARR_NAME: "Gulf Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "GA",
    CARR_NAME: "Garuda Indonesia",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "G7",
    CARR_NAME: "GoJet Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "2K",
    CARR_NAME: "AVIANCA-Ecuador",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "9M",
    CARR_NAME: "Central Mountain Air Ltd.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "G8",
    CARR_NAME: "Go Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "GL",
    CARR_NAME: "Air Greenland",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "5Y",
    CARR_NAME: "Atlas Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "GU",
    CARR_NAME: "Aviateca",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "GV",
    CARR_NAME: "Grant Aviation, Inc.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "3S",
    CARR_NAME: "Air Antilles",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "4U",
    CARR_NAME: "germanwings",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "4G",
    CARR_NAME: "Gazpromavia",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "H6",
    CARR_NAME: "Hageland Aviation Services Inc",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "HA",
    CARR_NAME: "Hawaiian Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "UO",
    CARR_NAME: "HK Express",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "X3",
    CARR_NAME: "TUIfly",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "VN",
    CARR_NAME: "Vietnam Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "G5",
    CARR_NAME: "China Express Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "V8",
    CARR_NAME: "Iliamna Air Taxi",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "NT",
    CARR_NAME: "Binter Canarias",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "IB",
    CARR_NAME: "Iberia",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "FW",
    CARR_NAME: "IBEX Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "FI",
    CARR_NAME: "Icelandair",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "75C",
    CARR_NAME: "C.A.L. Cargo Airlines",
    CARGO_IND: "Y"
  },
  {
    IATA_CD: "6E",
    CARR_NAME: "IndiGo",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "IR",
    CARR_NAME: "Iran Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "B9",
    CARR_NAME: "Iran Airtour Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "EP",
    CARR_NAME: "Iran Aseman Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "W5",
    CARR_NAME: "Mahan Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "6H",
    CARR_NAME: "Israir",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "JY",
    CARR_NAME: "Intercaribbean Airways Ltd",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "IY",
    CARR_NAME: "Yemenia Yemen Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "JL",
    CARR_NAME: "Japan Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "3Z",
    CARR_NAME: "Smartwings Poland Sp. z o.o.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "B6",
    CARR_NAME: "Jetblue Airways Corporation",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "7C",
    CARR_NAME: "Jeju Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "T6",
    CARR_NAME: "AirSWIFT",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "3K",
    CARR_NAME: "Jetstar Asia",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "JQ",
    CARR_NAME: "Jetstar Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "NU",
    CARR_NAME: "Japan Transocean Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "QK",
    CARR_NAME: "Air Canada Jazz",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "J9",
    CARR_NAME: "Jazeera Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "KU",
    CARR_NAME: "Kuwait Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "KE",
    CARR_NAME: "Korean Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "9K",
    CARR_NAME: "Cape Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "M5",
    CARR_NAME: "Kenmore Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "RE",
    CARR_NAME: "Stobart Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "WA",
    CARR_NAME: "KLM Cityhopper",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "KL",
    CARR_NAME: "KLM-Royal Dutch Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "RQ",
    CARR_NAME: "Kam Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "8K",
    CARR_NAME: "K-Mile Air Co",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "JS",
    CARR_NAME: "Air Koryo",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "KQ",
    CARR_NAME: "Kenya Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "V3",
    CARR_NAME: "Carpatair",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "KC",
    CARR_NAME: "Air Astana",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "LN",
    CARR_NAME: "Libyan Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "TM",
    CARR_NAME: "LAM-Linhas Aereas de Mocambique",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "LA",
    CARR_NAME: "LATAM Airlines Group",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "QV",
    CARR_NAME: "Lao Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "PZ",
    CARR_NAME: "LATAM Airlines Paraguay",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "BJ",
    CARR_NAME: "Nouvelair",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "UC",
    CARR_NAME: "LATAM Cargo Chile",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "QL",
    CARR_NAME: "LASER Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "LG",
    CARR_NAME: "Luxair",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "0B",
    CARR_NAME: "Blue Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "4Z",
    CARR_NAME: "South African Airlink",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "AX",
    CARR_NAME: "Trans States Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "LO",
    CARR_NAME: "LOT - Polish Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "LP",
    CARR_NAME: "LATAM Airlines Peru",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "LR",
    CARR_NAME: "Avianca Costa Rica S.A.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "RZ",
    CARR_NAME: "SANSA Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "YX",
    CARR_NAME: "Republic Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "L2",
    CARR_NAME: "Lynden Air Cargo",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "MH",
    CARR_NAME: "Malaysia Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "MK",
    CARR_NAME: "Air Mauritius",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "YO",
    CARR_NAME: "Heli Air Monaco",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "AE",
    CARR_NAME: "Mandarin Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "MD",
    CARR_NAME: "Air Madagascar",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "ME",
    CARR_NAME: "Middle East Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "OM",
    CARR_NAME: "MIAT - Mongolian Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "Q5",
    CARR_NAME: "40 Mile Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "9U",
    CARR_NAME: "Air Moldova",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "8M",
    CARR_NAME: "Myanmar Airways International",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "MB",
    CARR_NAME: "MNG Airlines Cargo",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "JE",
    CARR_NAME: "Mango",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "SG",
    CARR_NAME: "SpiceJet",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "5T",
    CARR_NAME: "Canadian North",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "MP",
    CARR_NAME: "Martinair Holland",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "M9",
    CARR_NAME: "Motor Sich PJSC",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "MS",
    CARR_NAME: "Egyptair",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "NC",
    CARR_NAME: "Northern Air Cargo, Inc.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "DY",
    CARR_NAME: "Norwegian Air Shuttle",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "KZ",
    CARR_NAME: "Nippon Cargo Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "NK",
    CARR_NAME: "Spirit Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "DD",
    CARR_NAME: "Nok Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "9R",
    CARR_NAME: "Satena",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "S0",
    CARR_NAME: "AeroLineas Sosa",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "HW",
    CARR_NAME: "North-Wright Airways Ltd.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "2L",
    CARR_NAME: "Helvetic Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "BK",
    CARR_NAME: "Okay Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "PO",
    CARR_NAME: "Polar Air Cargo",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "PR",
    CARR_NAME: "Philippine Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "OL",
    CARR_NAME: "Samoa Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "8P",
    CARR_NAME: "Pacific Coastal Airlines Limited",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "P0",
    CARR_NAME: "Proflight Zambia",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "PC",
    CARR_NAME: "Pegasus Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "PK",
    CARR_NAME: "Pakistan International Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "BL",
    CARR_NAME: "Pacific Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "FV",
    CARR_NAME: "Rossiya Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "EB",
    CARR_NAME: "Wamos Air S.A.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "J3",
    CARR_NAME: "Northwestern Air Lease Ltd.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "PD",
    CARR_NAME: "Porter Airlines Inc.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "PW",
    CARR_NAME: "Precision Air Services Plc",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "QF",
    CARR_NAME: "Qantas Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "QR",
    CARR_NAME: "Qatar Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "QX",
    CARR_NAME: "Horizon Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "AT",
    CARR_NAME: "Royal Air Maroc",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "BI",
    CARR_NAME: "Royal Brunei Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "3N",
    CARR_NAME: "Air Urga",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "UU",
    CARR_NAME: "Air Austral",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "RJ",
    CARR_NAME: "Royal Jordanian",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "A5",
    CARR_NAME: "HOP!",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "RA",
    CARR_NAME: "Nepal Airlines Corporation",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "9V",
    CARR_NAME: "Avior Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "ON",
    CARR_NAME: "Nauru Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "RO",
    CARR_NAME: "Tarom",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "P5",
    CARR_NAME: "Aero Republica",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "WB",
    CARR_NAME: "RwandAir",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "7S",
    CARR_NAME: "Ryan Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "FR",
    CARR_NAME: "Ryanair",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "S4",
    CARR_NAME: "SATA International-Azores Airlines S.A.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "SA",
    CARR_NAME: "South African Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "SK",
    CARR_NAME: "SAS Scandinavian Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "SP",
    CARR_NAME: "SATA Air Acores",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "S7",
    CARR_NAME: "S7 Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "BB",
    CARR_NAME: "Seaborne Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "PV",
    CARR_NAME: "Saint Barth Commuter",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "TF",
    CARR_NAME: "Braathens Regional Aviation",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "SY",
    CARR_NAME: "Sun Country Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "HM",
    CARR_NAME: "Air Seychelles",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "7G",
    CARR_NAME: "Star Flyer",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "HZ",
    CARR_NAME: "JSC Aurora Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "SQ",
    CARR_NAME: "Singapore Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "SJ",
    CARR_NAME: "Sriwijaya Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "OO",
    CARR_NAME: "SkyWest Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "BC",
    CARR_NAME: "Skymark Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "MI",
    CARR_NAME: "SilkAir",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "PY",
    CARR_NAME: "Surinam Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "PL",
    CARR_NAME: "Southern Air Charter",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "IE",
    CARR_NAME: "Solomon Airlines Limited",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "PJ",
    CARR_NAME: "Air Saint-Pierre",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "2I",
    CARR_NAME: "Star Peru",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "D2",
    CARR_NAME: "Severstal Aircompany",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "8F",
    CARR_NAME: "STP Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "SD",
    CARR_NAME: "Sudan Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "EZ",
    CARR_NAME: "Sun Air Of Scandinavia",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "SV",
    CARR_NAME: "Saudi Arabian Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "U6",
    CARR_NAME: "Ural Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "WN",
    CARR_NAME: "Southwest Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "WG",
    CARR_NAME: "Sunwing Airlines Inc.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "LX",
    CARR_NAME: "SWISS",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "XQ",
    CARR_NAME: "SunExpress",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "R3",
    CARR_NAME: "Yakutia",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "RB",
    CARR_NAME: "Syrian Arab Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "TA",
    CARR_NAME: "Taca International Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "JJ",
    CARR_NAME: "LATAM Airlines Brasil",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "B4",
    CARR_NAME: "ZanAir",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "VW",
    CARR_NAME: "Transportes Aeromar S.A. de C.V.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "TP",
    CARR_NAME: "TAP Air Portugal",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "TU",
    CARR_NAME: "Tunisair",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "3V",
    CARR_NAME: "ASL Airlines Belgium",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "VR",
    CARR_NAME: "TACV Cabo Verde Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "OR",
    CARR_NAME: "TUI fly Netherlands",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "TR",
    CARR_NAME: "Scoot",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "A9",
    CARR_NAME: "Georgian Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "TG",
    CARR_NAME: "Thai Airways International",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "TN",
    CARR_NAME: "Air Tahiti Nui",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "TK",
    CARR_NAME: "Turkish Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "7J",
    CARR_NAME: "Tajik Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "T7",
    CARR_NAME: "Twin Jet",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "76R",
    CARR_NAME: "Aerounion",
    CARGO_IND: "Y"
  },
  {
    IATA_CD: "Z3",
    CARR_NAME: "Tanana Air Service",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "CG",
    CARR_NAME: "PNG Air Limited",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "TY",
    CARR_NAME: "Air Caledonie",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "K3",
    CARR_NAME: "Taquan Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "HV",
    CARR_NAME: "transavia.com",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "TS",
    CARR_NAME: "Air Transat A.T.Inc.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "TH",
    CARR_NAME: "Raya Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "T5",
    CARR_NAME: "Turkmenistan Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "QS",
    CARR_NAME: "Smartwings",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "EK",
    CARR_NAME: "Emirates",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "UA",
    CARR_NAME: "United Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "C5",
    CARR_NAME: "CommutAir",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "EU",
    CARR_NAME: "Chengdu Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "B7",
    CARR_NAME: "UNI Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "5X",
    CARR_NAME: "United Parcel Service Co.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "UT",
    CARR_NAME: "UTair Aviation",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "HY",
    CARR_NAME: "Uzbekistan Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "2J",
    CARR_NAME: "Air Burkina",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "V0",
    CARR_NAME: "Conviasa",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "7V4",
    CARR_NAME: "Vensecar Internacional, C.A.",
    CARGO_IND: "Y"
  },
  {
    IATA_CD: "0V",
    CARR_NAME: "Vietnam Air Service Company",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "VS",
    CARR_NAME: "Virgin Atlantic Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "VY",
    CARR_NAME: "Vueling Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "Y4",
    CARR_NAME: "Volaris",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "DV",
    CARR_NAME: "Air Company Scat",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "VT",
    CARR_NAME: "Air Tahiti",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "5V",
    CARR_NAME: "Everts Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "4W",
    CARR_NAME: "Warbelow's Air Ventures Inc.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "WF",
    CARR_NAME: "Wideroe's Flyveselskap",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "WS",
    CARR_NAME: "WestJet",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "IW",
    CARR_NAME: "Wings Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "8V",
    CARR_NAME: "Wright Air Service",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "W6",
    CARR_NAME: "Wizz Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "P2",
    CARR_NAME: "AirKenya Express",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "Y8",
    CARR_NAME: "Suparna Airlines Co",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "P8",
    CARR_NAME: "Sprintair",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "5D",
    CARR_NAME: "Aeromexico Connect",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "NY",
    CARR_NAME: "Air Iceland Connect",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "LH",
    CARR_NAME: "Deutsche Lufthansa AG",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "IN",
    CARR_NAME: "NAM Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "A7",
    CARR_NAME: "Calafia Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "P4",
    CARR_NAME: "Air Peace",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "IU",
    CARR_NAME: "PT. Super Air Jet",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "2F",
    CARR_NAME: "Two Taxi Aereo Ltda",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "9H",
    CARR_NAME: "Changan Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "LT",
    CARR_NAME: "LongJiang Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "OQ",
    CARR_NAME: "Chongqing Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "GT",
    CARR_NAME: "Air Guilin Co. Ltd",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "6J",
    CARR_NAME: "Solaseed",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "8Z",
    CARR_NAME: "Congo Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "P6",
    CARR_NAME: "Pascan Aviation Inc.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "RY",
    CARR_NAME: "Jiangxi Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "IT",
    CARR_NAME: "Tigerair Taiwan Co. Ltd",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "MX",
    CARR_NAME: "Breeze Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "FE",
    CARR_NAME: "Fly 748",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "OG",
    CARR_NAME: "Fly Play",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "FL",
    CARR_NAME: "Air Leap",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "XK",
    CARR_NAME: "Air Corsica",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "5L",
    CARR_NAME: "Transportes Aereos Costarricenses",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "7B",
    CARR_NAME: "Bees Airline",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "BX",
    CARR_NAME: "Air Busan",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "0J",
    CARR_NAME: "Premium Jet AG",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "6O",
    CARR_NAME: "Orbest",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "M7",
    CARR_NAME: "Mas Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "N7",
    CARR_NAME: "Nordic Regional Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "YT",
    CARR_NAME: "Yeti Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "TJ",
    CARR_NAME: "Tradewind Aviation",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "5S",
    CARR_NAME: "Global Aviation and Service Group",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "D9",
    CARR_NAME: "Daallo Airlines(Somalia)",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "FS",
    CARR_NAME: "Flyr",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "HJ",
    CARR_NAME: "Tasman Cargo Airlines Pty Ltd",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "H4",
    CARR_NAME: "HiSky Europe SRL",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "4S",
    CARR_NAME: "Solar Cargo",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "W2",
    CARR_NAME: "FlexFlight ApS",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "UB",
    CARR_NAME: "Myanmar National Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "YK",
    CARR_NAME: "Avia Traffic Company",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "OX",
    CARR_NAME: "One Airways, S.A.U",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "X9",
    CARR_NAME: "Avion Express",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "KO",
    CARR_NAME: "Komiaviatrans",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "IM",
    CARR_NAME: "LLP Air Company Jupiter Jet",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "KH",
    CARR_NAME: "Aloha Air Cargo",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "JH",
    CARR_NAME: "Fuji Dream Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "FN",
    CARR_NAME: "Fastjet Zimbabwe",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "ND",
    CARR_NAME: "Nordica",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "QT",
    CARR_NAME: "Tampa Cargo S.A.S",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "D7",
    CARR_NAME: "AirAsia X",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "BO",
    CARR_NAME: "Bluebird Cargo",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "LJ",
    CARR_NAME: "Jin Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "KY",
    CARR_NAME: "Kunming Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "3O",
    CARR_NAME: "Air Arabia Maroc",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "2M",
    CARR_NAME: "Maya Island Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "SZ",
    CARR_NAME: "Somon Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "PP",
    CARR_NAME: "Jet Aviation Business Jets AG",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "UJ",
    CARR_NAME: "Al Masria Universal Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "3T",
    CARR_NAME: "Tarco Aviation",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "QQ",
    CARR_NAME: "Alliance Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "PN",
    CARR_NAME: "West Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "LU",
    CARR_NAME: "LanExpress",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "FZ",
    CARR_NAME: "flydubai",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "Y7",
    CARR_NAME: "NordStar",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "XY",
    CARR_NAME: "FLYNAS",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "R6",
    CARR_NAME: "DAT LT",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "VA",
    CARR_NAME: "Virgin Australia International",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "FX",
    CARR_NAME: "Fedex",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "PA",
    CARR_NAME: "Airblue",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "YQ",
    CARR_NAME: "TAR Aerolineas",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "6L",
    CARR_NAME: "CargoLogic Germany GmbH",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "8H",
    CARR_NAME: "BH Air Ltd",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "E5",
    CARR_NAME: "Air Arabia Egypt",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "O3",
    CARR_NAME: "SF Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "M0",
    CARR_NAME: "Aero Mongolia",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "7ZP",
    CARR_NAME: "Silk Way Airlines",
    CARGO_IND: "Y"
  },
  {
    IATA_CD: "L6",
    CARR_NAME: "Mauritanian Airlines International",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "7R",
    CARR_NAME: "Joint Stock Aviation Company RusLine",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "U8",
    CARR_NAME: "TUS Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "G2",
    CARR_NAME: "Gullivair",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "XE",
    CARR_NAME: "JSX",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "L7",
    CARR_NAME: "LATAM Cargo Colombia",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "8L",
    CARR_NAME: "Lucky Air Co. Ltd.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "J4",
    CARR_NAME: "Badr Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "F8",
    CARR_NAME: "Flair Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "J6",
    CARR_NAME: "Seawings",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "2Q",
    CARR_NAME: "Air Cargo Carriers",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "F2",
    CARR_NAME: "SafariLink",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "H2",
    CARR_NAME: "Sky Airline",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "CJ",
    CARR_NAME: "BA Cityflyer",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "CZ",
    CARR_NAME: "China Southern Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "6D",
    CARR_NAME: "Smartwings Slovakia s.r.o",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "PE",
    CARR_NAME: "People's",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "I8",
    CARR_NAME: "Izhavia",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "IK",
    CARR_NAME: "Air Kiribati",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "AW",
    CARR_NAME: "Africa World Airlines Limited",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "8Q",
    CARR_NAME: "Onur Air Tasimacilik A.S.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "TE",
    CARR_NAME: "SkyTaxi",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "K7",
    CARR_NAME: "Air KBZ",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "NE",
    CARR_NAME: "Nesma Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "Q3",
    CARR_NAME: "Anguilla Air Services",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "2G",
    CARR_NAME: "Angara Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "QB",
    CARR_NAME: "Faraz Qeshm Airline",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "ES",
    CARR_NAME: "Estelar Latinoamerica C.A.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "MM",
    CARR_NAME: "Peach Aviation Limited",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "IO",
    CARR_NAME: "IrAero",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "3J",
    CARR_NAME: "Jubba Airways Ltd",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "VP",
    CARR_NAME: "Flyme",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "AD",
    CARR_NAME: "Azul Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "JT",
    CARR_NAME: "Lion Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "V9",
    CARR_NAME: "Citywing",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "RG",
    CARR_NAME: "Rotanajet Aviation",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "TW",
    CARR_NAME: "T'way Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "4M",
    CARR_NAME: "LATAM Airlines Argentina",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "5K",
    CARR_NAME: "Hi Fly Transportes Aereos",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "TO",
    CARR_NAME: "Transavia.com France",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "XL",
    CARR_NAME: "LATAM Airlines Ecuador",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "4C",
    CARR_NAME: "LATAM Airlines Colombia",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "WT",
    CARR_NAME: "Swiftair",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "LF",
    CARR_NAME: "Contour Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "X5",
    CARR_NAME: "Air Europa Express",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "NO",
    CARR_NAME: "Neos Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "FB",
    CARR_NAME: "Bulgaria Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "E7",
    CARR_NAME: "Equaflight",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "MY",
    CARR_NAME: "MASWings",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "QA",
    CARR_NAME: "Queen Bilqis Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "ED",
    CARR_NAME: "Air Explore",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "C7",
    CARR_NAME: "Cinnamon Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "6I",
    CARR_NAME: "Air Alsie",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "UI",
    CARR_NAME: "Auric Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "PT",
    CARR_NAME: "Piedmont Airlines Inc.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "B3",
    CARR_NAME: "Bhutan Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "IA",
    CARR_NAME: "Iraqi Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "O2",
    CARR_NAME: "Linear Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "E9",
    CARR_NAME: "Iberojet Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "YU",
    CARR_NAME: "Euroatlantic Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "ZF",
    CARR_NAME: "AZUR air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "5Z",
    CARR_NAME: "Cemair",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "UG",
    CARR_NAME: "TunisAir Express",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "7.00E+07",
    CARR_NAME: "Estafeta Carga Aerea",
    CARGO_IND: "Y"
  },
  {
    IATA_CD: "F4",
    CARR_NAME: "Air Flamenco",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "N9",
    CARR_NAME: "Shree Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "X8",
    CARR_NAME: "AirMax Cargo S.A",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "OA",
    CARR_NAME: "Olympic Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "3E",
    CARR_NAME: "Multi-Aero, Inc. d/b/a Air Choice One",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "PB",
    CARR_NAME: "PAL Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "RU",
    CARR_NAME: "AirBridgeCargo",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "4E",
    CARR_NAME: "Stabo Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "9I",
    CARR_NAME: "Alliance Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "GJ",
    CARR_NAME: "Zhejiang Loong Airlines Co. Ltd",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "OI",
    CARR_NAME: "Hinterland Aviation",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "9D",
    CARR_NAME: "Genghis Khan Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "MT",
    CARR_NAME: "Malta MedAir",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "7L",
    CARR_NAME: "Silk Way West Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "77T",
    CARR_NAME: "Trans Am Aero Exp. del Ecuador Cia.Ltda",
    CARGO_IND: "Y"
  },
  {
    IATA_CD: "7U",
    CARR_NAME: "Commercial Aviation Services, LLC",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "7W",
    CARR_NAME: "Wind Rose Aviation",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "8N",
    CARR_NAME: "Regional Air Services",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "9J",
    CARR_NAME: "Dana Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "9N",
    CARR_NAME: "Tropic Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "A8",
    CARR_NAME: "Aerolink Uganda Ltd",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "AG",
    CARR_NAME: "Aruba Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "DZ",
    CARR_NAME: "Donghai Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "HF",
    CARR_NAME: "Air Cote d'Ivoire",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "I4",
    CARR_NAME: "Scott Air LLC",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "JR",
    CARR_NAME: "Joy Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "KP",
    CARR_NAME: "ASKY Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "MR",
    CARR_NAME: "Hunnu Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "OB",
    CARR_NAME: "Boliviana de Aviacion - BoA",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "PM",
    CARR_NAME: "Canaryfly",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "QG",
    CARR_NAME: "Citilink",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "QW",
    CARR_NAME: "Qingdao Airline Co, Ltd",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "QY",
    CARR_NAME: "European Air Transport Leipzig GmbH",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "IQ",
    CARR_NAME: "Qazaq Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "S6",
    CARR_NAME: "Sunrise Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "SL",
    CARR_NAME: "Thai Lion Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "SM",
    CARR_NAME: "Air Cairo",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "UW",
    CARR_NAME: "Uni-top Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "VQ",
    CARR_NAME: "NovoAir",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "Y5",
    CARR_NAME: "Golden Myanmar Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "YE",
    CARR_NAME: "Yanair",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "YW",
    CARR_NAME: "Air Nostrum",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "ZA",
    CARR_NAME: "Sky Angkor Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "ZD",
    CARR_NAME: "EWA Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "ZM",
    CARR_NAME: "Air Manas",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "73S",
    CARR_NAME: "Aerologic GmbH",
    CARGO_IND: "Y"
  },
  {
    IATA_CD: "KJ",
    CARR_NAME: "Air Incheon",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "B0",
    CARR_NAME: "La Compagnie",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "PI",
    CARR_NAME: "Polar Airlines Ltd",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "6Y",
    CARR_NAME: "SMARTLYNX AIRLINES Ltd",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "N8",
    CARR_NAME: "National Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "OC",
    CARR_NAME: "Oriental Air Bridge Co., Ltd. (ORC)",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "WY",
    CARR_NAME: "Oman Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "7V",
    CARR_NAME: "Federal Airlines (Pty) Ltd",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "Z2",
    CARR_NAME: "Philippines AirAsia Inc.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "K6",
    CARR_NAME: "Cambodia Angkor Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "G3",
    CARR_NAME: "GOL Linhas Aereas S.A.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "C3",
    CARR_NAME: "Trade Air Ltd",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "FH",
    CARR_NAME: "Freebird Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "U3",
    CARR_NAME: "Sky Gates Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "UQ",
    CARR_NAME: "Urumqi Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "7K3",
    CARR_NAME: "SAC (K) Limited",
    CARGO_IND: "Y"
  },
  {
    IATA_CD: "HP",
    CARR_NAME: "Amapola Flyg AB",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "SF",
    CARR_NAME: "Tassili Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "JC",
    CARR_NAME: "Japan Air Commuter",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "74W",
    CARR_NAME: "Allied Air Cargo",
    CARGO_IND: "Y"
  },
  {
    IATA_CD: "E8",
    CARR_NAME: "Tayaran Jet",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "FU",
    CARR_NAME: "Fuzhou Airlines Co., Ltd",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "5B",
    CARR_NAME: "Bassaka Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "VH",
    CARR_NAME: "Viva Air Colombia",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "RV",
    CARR_NAME: "Air Canada Rouge",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "AJ",
    CARR_NAME: "Aztec Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "VC",
    CARR_NAME: "ViaAir",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "GK",
    CARR_NAME: "Jetstar Japan",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "OD",
    CARR_NAME: "Malindo Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "GP",
    CARR_NAME: "APG Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "DK",
    CARR_NAME: "Sunclass Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "2D",
    CARR_NAME: "Eastern Airlines, LLC",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "ST",
    CARR_NAME: "Air Thanlwin",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "3R",
    CARR_NAME: "Divi Divi Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "GG",
    CARR_NAME: "Skylease",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "CS",
    CARR_NAME: "Comlux Aruba NV",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "WR",
    CARR_NAME: "Westjet Encore",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "V5",
    CARR_NAME: "Aerovias DAP S.A.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "D8",
    CARR_NAME: "Norwegian",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "NR",
    CARR_NAME: "Manta Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "8B",
    CARR_NAME: "TransNusa",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "AL",
    CARR_NAME: "Malta Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "VZ",
    CARR_NAME: "Thai Vietjet Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "UE",
    CARR_NAME: "BizAir op by Ultimate JetCharters LLC",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "YL",
    CARR_NAME: "Libyan Wings",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "W9",
    CARR_NAME: "Wizz Air UK",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "FK",
    CARR_NAME: "KF Cargo",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "6Q",
    CARR_NAME: "Cham Wings Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "8J",
    CARR_NAME: "Ecojet",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "3W",
    CARR_NAME: "Malawian Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "4B",
    CARR_NAME: "Boutique Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "6R",
    CARR_NAME: "ALROSA Air Company",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "7H",
    CARR_NAME: "Corvus Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "7Y",
    CARR_NAME: "Mann Yadanarpon Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "DP",
    CARR_NAME: "Pobeda",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "DR",
    CARR_NAME: "Ruili Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "EL",
    CARR_NAME: "Ellinair S.A.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "GM",
    CARR_NAME: "Chair Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "GX",
    CARR_NAME: "Guangxi Beibu Gulf Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "ID",
    CARR_NAME: "Batik Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "IJ",
    CARR_NAME: "Spring Airlines Japan",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "U4",
    CARR_NAME: "Buddha Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "ZL",
    CARR_NAME: "Regional Express",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "5U",
    CARR_NAME: "TAG Airlines (T A Guatemaltecos)",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "PQ",
    CARR_NAME: "SKYUP AIRLINES",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "AQ",
    CARR_NAME: "9 Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "CQ",
    CARR_NAME: "Coastal Aviation",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "NL",
    CARR_NAME: "Amelia International",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "I5",
    CARR_NAME: "AirAsia India",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "JU",
    CARR_NAME: "Air Serbia",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "M8",
    CARR_NAME: "Magnum.Air, Inc dba Skyjet",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "QC",
    CARR_NAME: "Camair-Co",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "QU",
    CARR_NAME: "Azur Air Ukraine",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "XJ",
    CARR_NAME: "Thai Air Asia X",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "I2",
    CARR_NAME: "Iberia Express",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "DO",
    CARR_NAME: "Sky High Aviation Services",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "7Q",
    CARR_NAME: "Elite Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "2Y",
    CARR_NAME: "MY Indo Airlines, PT",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "N5",
    CARR_NAME: "Nolinor Aviation",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "WZ",
    CARR_NAME: "Red Wings Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "RF",
    CARR_NAME: "Aero k Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "M4",
    CARR_NAME: "Poste Air Cargo",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "LK",
    CARR_NAME: "Lao Skyway Comm Air Trans & charter",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "FT",
    CARR_NAME: "FlyEgypt",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "ZP",
    CARR_NAME: "Paranair",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "J7",
    CARR_NAME: "AFRIJET",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "H9",
    CARR_NAME: "Himalaya Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "GY",
    CARR_NAME: "Colorful Guizhou Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "PU",
    CARR_NAME: "Plus Ultra Lineas Aereas S. A.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "2B",
    CARR_NAME: "Albawings",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "8Y",
    CARR_NAME: "Astro Air Int dba Pan Pacific Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "2C",
    CARR_NAME: "SNCF",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "EO",
    CARR_NAME: "Pegas Fly",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "9L",
    CARR_NAME: "AirTanker Services Limited",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "BZ",
    CARR_NAME: "Blue Bird Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "E2",
    CARR_NAME: "Eurowings Europe",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "VE",
    CARR_NAME: "Easyfly S. A.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "N6",
    CARR_NAME: "TCA Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "5F",
    CARR_NAME: "Fly One",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "MZ",
    CARR_NAME: "Amakusa Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "RS",
    CARR_NAME: "Air Seoul, Inc",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "9X",
    CARR_NAME: "Southern Airways Express",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "YG",
    CARR_NAME: "YTO Cargo Airlines Co. Ltd",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "OW",
    CARR_NAME: "Skyward Express",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "QN",
    CARR_NAME: "Skytrans Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "G0",
    CARR_NAME: "Albatros Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "II",
    CARR_NAME: "IBC Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "T2",
    CARR_NAME: "MCS Aerocarga de Mexico",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "6W",
    CARR_NAME: "FlyBosnia",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "BM",
    CARR_NAME: "Bakhtar Afghan Airline",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "QE",
    CARR_NAME: "Express Freighters Australia",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "7N",
    CARR_NAME: "MetroJets",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "8R",
    CARR_NAME: "Regourd Aviation (dba AMELIA)",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "WP",
    CARR_NAME: "Air Antwerp",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "YR",
    CARR_NAME: "Scenic Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "R2",
    CARR_NAME: "Transair Senegal",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "UY",
    CARR_NAME: "Sky Pearl",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "BF",
    CARR_NAME: "French Bee",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "2U",
    CARR_NAME: "Sun d'Or International Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "SO",
    CARR_NAME: "Syphax Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "8D",
    CARR_NAME: "FITS Aviation (Pvt) Ltd",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "8W",
    CARR_NAME: "Fly Always N.V.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "N3",
    CARR_NAME: "Vuela El Salvador",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "DH",
    CARR_NAME: "Norwegian Air Norway AS",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "AB",
    CARR_NAME: "KAP.KG Aircompany LLC",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "EE",
    CARR_NAME: "Regional Jet",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "A6",
    CARR_NAME: "Air Travel Co. Ltd",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "DI",
    CARR_NAME: "Norwegian Air UK ltd",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "KW",
    CARR_NAME: "LLC Air Company AeroStan",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "F5",
    CARR_NAME: "Aerotranscargo",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "OV",
    CARR_NAME: "SalamAir",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "GO",
    CARR_NAME: "ULS Airlines Cargo",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "IF",
    CARR_NAME: "Fly Baghdad Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "K9",
    CARR_NAME: "Kalitta Charters, L.L.C.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "KG",
    CARR_NAME: "Key Lime Air dba Denver Air Connection",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "O7",
    CARR_NAME: "Omni-Blu",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "N4",
    CARR_NAME: "Nord Wind",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "S5",
    CARR_NAME: "Abakan Air LLC",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "ZG",
    CARR_NAME: "ZIPAIR Tokyo Inc.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "P3",
    CARR_NAME: "Cargologicair",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "RL",
    CARR_NAME: "Royal Flight Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "T4",
    CARR_NAME: "Rhoades Aviation Inc.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "U7",
    CARR_NAME: "Uniworld Air Cargo Corp.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "UV",
    CARR_NAME: "Universal Airways, Inc.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "V2",
    CARR_NAME: "Avialeasing Aviation Co",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "VM",
    CARR_NAME: "Max Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "Y2",
    CARR_NAME: "Air Century",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "XM",
    CARR_NAME: "Zimex Aviation",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "7A",
    CARR_NAME: "Express Air Cargo",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "OF",
    CARR_NAME: "Overland Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "RM",
    CARR_NAME: "Aircompany Armenia",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "GI",
    CARR_NAME: "Guangdong Longhao Airlines Co., Ltd",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "ER",
    CARR_NAME: "Serene Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "CY",
    CARR_NAME: "Cyprus Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "MV",
    CARR_NAME: "Air Mediterranean",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "EF",
    CARR_NAME: "Aerolinea Del Caribe - Peru S.A.C.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "3L",
    CARR_NAME: "Air Arabia Abu Dhabi",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "4J",
    CARR_NAME: "JetAir Caribbean",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "3B",
    CARR_NAME: "Transportes Interilhas de Cabo Verde",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "Q6",
    CARR_NAME: "Volaris Costa Rica",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "AN",
    CARR_NAME: "Advanced Air, LLC",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "T9",
    CARR_NAME: "Turpial Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "N2",
    CARR_NAME: "Aero Contractors Company of Nigeria",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "OJ",
    CARR_NAME: "NyxAir OU",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "LQ",
    CARR_NAME: "Lanmei Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "JO",
    CARR_NAME: "Jonika Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "WL",
    CARR_NAME: "World Atlantic Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "M3",
    CARR_NAME: "LATAM Cargo Brasil",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "F3",
    CARR_NAME: "flyadeal",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "BH",
    CARR_NAME: "Bismillah Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "GE",
    CARR_NAME: "Global Aviation Operations",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "SR",
    CARR_NAME: "SundAir",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "LB",
    CARR_NAME: "Bul Air Ltd.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "7M",
    CARR_NAME: "MAP Linhas Aereas",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "WO",
    CARR_NAME: "Swoop",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "WV",
    CARR_NAME: "Westair Aviation",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "US",
    CARR_NAME: "Puerto Rico International Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "WD",
    CARR_NAME: "Modern Transtport Aereo de Caarga SA",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "DN",
    CARR_NAME: "Norwegian Air Argentina",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "C8",
    CARR_NAME: "Cronosair",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "MJ",
    CARR_NAME: "Myway Airlines Co.,LTD",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "NG",
    CARR_NAME: "NOVAIR Limited Liability Company",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "Q4",
    CARR_NAME: "Euroairlines, S.L.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "KF",
    CARR_NAME: "Air Belgium",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "MG",
    CARR_NAME: "EZNIS AIRWAYS LLC",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "EC",
    CARR_NAME: "easyJet Europe Airline",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "7ZF",
    CARR_NAME: "Safari Express Cargo",
    CARGO_IND: "Y"
  },
  {
    IATA_CD: "IH",
    CARR_NAME: "Southern Sky Airlines JSC",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "UF",
    CARR_NAME: "Petroleum Air Services",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "QH",
    CARR_NAME: "Bamboo Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "VU",
    CARR_NAME: "Vietravel Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "4F",
    CARR_NAME: "Freedom Airline Express",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "JM",
    CARR_NAME: "Jambojet",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "4A",
    CARR_NAME: "ATSA Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "6A",
    CARR_NAME: "Armenia Airways Aircompany CJSC",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "R9",
    CARR_NAME: "Trans Executive Airlines of Hawaii",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "Q8",
    CARR_NAME: "Trans Air Congo",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "1I",
    CARR_NAME: "NetJets Aviation, Inc.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "E4",
    CARR_NAME: "Enter Air Spolka z.o.o.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "IS",
    CARR_NAME: "Sepehran Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "XF",
    CARR_NAME: "Mongolian Airways Cargo",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "DQ",
    CARR_NAME: "Alexandria Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "VO",
    CARR_NAME: "Voyage Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "PH",
    CARR_NAME: "Pionair Australia Pty Ltd",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "T8",
    CARR_NAME: "CA Terra Avia SRL",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "DW",
    CARR_NAME: "Great Dane Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "2T",
    CARR_NAME: "Turbo Megha Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "L9",
    CARR_NAME: "Lumiwings",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "UD",
    CARR_NAME: "UR Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "F6",
    CARR_NAME: "Fly2Sky",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "7Z",
    CARR_NAME: "EZAir",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "QI",
    CARR_NAME: "Ibom Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "SX",
    CARR_NAME: "flyGTA Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "BE",
    CARR_NAME: "Flybe",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "4H",
    CARR_NAME: "Hi Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "UR",
    CARR_NAME: "Uganda Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "ZO",
    CARR_NAME: "Colorful Yunnan General Aviation",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "F7",
    CARR_NAME: "LTD I Fly",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "7N7",
    CARR_NAME: "My Jet Xpress",
    CARGO_IND: "Y"
  },
  {
    IATA_CD: "E3",
    CARR_NAME: "Ego Airways S.p.A",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "WJ",
    CARR_NAME: "Jetsmart Airlines S.A.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "LC",
    CARR_NAME: "Skyway CR",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "OT",
    CARR_NAME: "Tchadia Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "5Q",
    CARR_NAME: "Holiday Europe",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "JX",
    CARR_NAME: "STARLUX Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "6G",
    CARR_NAME: "Go2Sky",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "0A",
    CARR_NAME: "Asta Linhas Aereas Ltda",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "RW",
    CARR_NAME: "Royal Air Charter Services Inc",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "D4",
    CARR_NAME: "Airline GEO SKY LLC",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "4V",
    CARR_NAME: "Fly Gangwon",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "A2",
    CARR_NAME: "Anima Wings Aviation",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "6M",
    CARR_NAME: "Maximus Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "KD",
    CARR_NAME: "Western Global Airlines LLC",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "VF",
    CARR_NAME: "Fly Armenia Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "IG",
    CARR_NAME: "Air Italy S.p.A.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "ML",
    CARR_NAME: "Sky Mali",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "R8",
    CARR_NAME: "Puer General Aviation",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "YJ",
    CARR_NAME: "Asian Express Aviation",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "LW",
    CARR_NAME: "Lauda Europe",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "IV",
    CARR_NAME: "GP Aviation Ltd",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "SB",
    CARR_NAME: "Air Caledonie International",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "5W",
    CARR_NAME: "Wizz Air Abu Dhabi",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "6T",
    CARR_NAME: "Longtail Aviation International",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "NB",
    CARR_NAME: "Berniq Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "D6",
    CARR_NAME: "Servicios Aereos GECA S.A.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "RT",
    CARR_NAME: "UVT aero",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "OP",
    CARR_NAME: "PassionAir",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "9S",
    CARR_NAME: "Southern Air Inc.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "CC",
    CARR_NAME: "CM Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "2W",
    CARR_NAME: "World 2 Fly, S.L",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "8I",
    CARR_NAME: "ITA",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "R5",
    CARR_NAME: "Jordan Aviation",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "M2",
    CARR_NAME: "MHS Aviation",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "4Y",
    CARR_NAME: "EW Discover GmbH",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "LI",
    CARR_NAME: "ETF Airways d.o.o",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "GH",
    CARR_NAME: "Galistair Trading Ltd",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "BN",
    CARR_NAME: "Luxwing Ltd",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "HN",
    CARR_NAME: "UAB Heston Airlines JSC Heston Airl",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "WW",
    CARR_NAME: "M Jets International",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "YP",
    CARR_NAME: "Air Premia Inc.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "HH",
    CARR_NAME: "LLC Qanot Sha",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "BIC",
    CARR_NAME: "Alphaland Aviation, Inc",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "TMW",
    CARR_NAME: "Trans Maldivian",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "KAB",
    CARR_NAME: "Air Pohang",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "LLC",
    CARR_NAME: "Small Planet Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "RIH",
    CARR_NAME: "Rahila Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "TAK",
    CARR_NAME: "Transfrican Air Ltd.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "FGG",
    CARR_NAME: "flyglobal charter Sdn. Bhd.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "ALC",
    CARR_NAME: "American Linehaul Corporation",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "BMR",
    CARR_NAME: "BMI Regional",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "BSK",
    CARR_NAME: "Miami Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "CNK",
    CARR_NAME: "Sunwest Aviation",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "TUY",
    CARR_NAME: "Linea Turistica Aerotuy",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "FAT",
    CARR_NAME: "Farnair Switzerland AG",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "IOS",
    CARR_NAME: "Isles of Scilly Skybus",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "LTR",
    CARR_NAME: "Lufttransport A/S",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "LYD",
    CARR_NAME: "Lydd Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "NIS",
    CARR_NAME: "La Costena",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "OPN",
    CARR_NAME: "Air Open Sky",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "PTI",
    CARR_NAME: "Privatair",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "QNZ",
    CARR_NAME: "Jetconnect",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "RGN",
    CARR_NAME: "Cygnus Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "RHL",
    CARR_NAME: "Air Archipels",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "RNX",
    CARR_NAME: "1time",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "RSE",
    CARR_NAME: "SNAS Aviation",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "SOP",
    CARR_NAME: "Solinair",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "SSQ",
    CARR_NAME: "Sunstate Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "SXG",
    CARR_NAME: "Sterling Transportation, Inc.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "TAH",
    CARR_NAME: "Air Moorea",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "TOM",
    CARR_NAME: "TUI Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "TRD",
    CARR_NAME: "Trans Island Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "TTL",
    CARR_NAME: "Total Linhas Aereas",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "VAS",
    CARR_NAME: "Atran",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "WEW",
    CARR_NAME: "Express Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "WIG",
    CARR_NAME: "Wiggins Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "GBJ",
    CARR_NAME: "Wisdom Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "AGV",
    CARR_NAME: "Air Glaciers",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "AAF",
    CARR_NAME: "Aigle Azur",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "ABV",
    CARR_NAME: "Antrak Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "AIJ",
    CARR_NAME: "Interjet",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "AUT",
    CARR_NAME: "Austral",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "BHP",
    CARR_NAME: "Belair Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "BLF",
    CARR_NAME: "Blue1",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "CHQ",
    CARR_NAME: "Chautauqua Airlines, Inc.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "CIM",
    CARR_NAME: "Cimber A/S",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "CJC",
    CARR_NAME: "Colgan Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "EGU",
    CARR_NAME: "Eagle Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "EXY",
    CARR_NAME: "South African Express Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "FDM",
    CARR_NAME: "Freedom Airlines, Inc",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "FEA",
    CARR_NAME: "Far Eastern Air Transport",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "FTA",
    CARR_NAME: "Frontier Flying Service",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "GLA",
    CARR_NAME: "Great Lakes Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "HDA",
    CARR_NAME: "Cathay Dragon",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "INC",
    CARR_NAME: "Insel Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "ISV",
    CARR_NAME: "Islena Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "JAB",
    CARR_NAME: "Air Bagan",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "JAI",
    CARR_NAME: "Jet Airways (India) Ltd",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "JBA",
    CARR_NAME: "Helijet International Inc",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "KBA",
    CARR_NAME: "Kenn Borek Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "LAL",
    CARR_NAME: "Air Labrador",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "LGW",
    CARR_NAME: "Luftfahrt Gesellschaft Walter",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "LIA",
    CARR_NAME: "LIAT (1974)",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "LID",
    CARR_NAME: "Alidaunia",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "LYN",
    CARR_NAME: "Air Kyrgyzstan",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "MGX",
    CARR_NAME: "Montenegro Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "MNA",
    CARR_NAME: "Merpati Nusantara Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "CWM",
    CARR_NAME: "Air Marshall Islands",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "NMB",
    CARR_NAME: "Air Namibia",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "NRR",
    CARR_NAME: "NatureAir",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "OCA",
    CARR_NAME: "Aserca Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "OEA",
    CARR_NAME: "Orient Thai Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "ONE",
    CARR_NAME: "Avianca Brasil",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "OZW",
    CARR_NAME: "Skywest Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "NLA",
    CARR_NAME: "PenAir",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "RSI",
    CARR_NAME: "Air Sunshine",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "SAI",
    CARR_NAME: "Shaheen Air International",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "SFW",
    CARR_NAME: "Safi Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "JLL",
    CARR_NAME: "JetKonnect",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "SNB",
    CARR_NAME: "Sterling",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "SOV",
    CARR_NAME: "Saratov Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "FQA",
    CARR_NAME: "Quikjet Cargo Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "TAE",
    CARR_NAME: "TAME Linea Aerea del Ecuador",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "TCF",
    CARR_NAME: "Shuttle America",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "TNA",
    CARR_NAME: "Transasia Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "TPU",
    CARR_NAME: "Avianca Peru S.A.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "TRS",
    CARR_NAME: "AirTran Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "UKM",
    CARR_NAME: "Ukrainian-Mediterranean Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "VRD",
    CARR_NAME: "Virgin America",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "WSG",
    CARR_NAME: "Wasaya Airways LP",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "FXX",
    CARR_NAME: "Felix Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "JTG",
    CARR_NAME: "JetTime",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "OLY",
    CARR_NAME: "Olympus Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "FNA",
    CARR_NAME: "Norlandair",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "GHN",
    CARR_NAME: "Air Ghana",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "IIA",
    CARR_NAME: "Inter Iles Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "AJA",
    CARR_NAME: "Afghan Jet International",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "AKN",
    CARR_NAME: "Alkan Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "BOS",
    CARR_NAME: "LEVEL operated by OpenSkies (LV)",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "HGB",
    CARR_NAME: "Greater Bay Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "ERF",
    CARR_NAME: "Erofey Limited Liability Company",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "KRU",
    CARR_NAME: "Karun Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "GMT",
    CARR_NAME: "Magnicharters",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "LLX",
    CARR_NAME: "Small Planet Airlines GmbH",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "AFD",
    CARR_NAME: "Unity Air (Ghana)",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "QLK",
    CARR_NAME: "QANTASLINK",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "FYN",
    CARR_NAME: "PT. Flyindo Aviasi Nusantara",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "ABT",
    CARR_NAME: "Air Taxi Benin",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "DKN",
    CARR_NAME: "Air Deccan",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "HOG",
    CARR_NAME: "Mahogany Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "FVJ",
    CARR_NAME: "ValueJet",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "LBQ",
    CARR_NAME: "Quest Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "GJT",
    CARR_NAME: "GetJet Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "ALV",
    CARR_NAME: "Aeropostal Alas de Venezuela S.A.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "MDO",
    CARR_NAME: "Mediterranean Aviation Company Ltd",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "AYS",
    CARR_NAME: "Madagasikara Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "PSW",
    CARR_NAME: "Pskovavia Airlines Company",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "DTO",
    CARR_NAME: "AERODESIERTO SA",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "VRH",
    CARR_NAME: "Varesh Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "NWC",
    CARR_NAME: "Aircompany North-West LTD",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "QJE",
    CARR_NAME: "Cobham Aviation Services Australia",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "NWA",
    CARR_NAME: "Niger Airways SA",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "ZOM",
    CARR_NAME: "Zoom Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "WAN",
    CARR_NAME: "Wataniya Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "RSB",
    CARR_NAME: "Rubystar Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "AMB",
    CARR_NAME: "Deutsche Rettungsflugwacht",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "CRN",
    CARR_NAME: "Aerocaribbean",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "MYI",
    CARR_NAME: "Mayair, S.A. de C.V.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "NYS",
    CARR_NAME: "Ulendo Airlink",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "OLS",
    CARR_NAME: "SOL S.A Lineas Aereas",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "BFL",
    CARR_NAME: "Buffalo Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "ATM",
    CARR_NAME: "Airlines of Tasmania",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "LUR",
    CARR_NAME: "Atlantis European Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "ROM",
    CARR_NAME: "Encompass Aviation, LLC",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "NOV",
    CARR_NAME: "Nova Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "RFJ",
    CARR_NAME: "Royal Falcon",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "TBN",
    CARR_NAME: "Taban Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "WOW",
    CARR_NAME: "WOW Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "ESJ",
    CARR_NAME: "Eastern SkyJets",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "DCT",
    CARR_NAME: "Directflight",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "AUZ",
    CARR_NAME: "Amaszonas Uruguay",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "GMI",
    CARR_NAME: "Germania",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "WSF",
    CARR_NAME: "Westair Benin",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "TBZ",
    CARR_NAME: "ATA Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "OTT",
    CARR_NAME: "OTT Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "EAK",
    CARR_NAME: "Euro-Asia Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "HBR",
    CARR_NAME: "Hebridean Air Services",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "IZG",
    CARR_NAME: "Zagros Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "AMV",
    CARR_NAME: "AMC Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "PRO",
    CARR_NAME: "Propair",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "TWC",
    CARR_NAME: "Canadian Airways Congo",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "BRP",
    CARR_NAME: "Aerobratsk",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "AZI",
    CARR_NAME: "Astra Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "KND",
    CARR_NAME: "Kan Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "NAL",
    CARR_NAME: "Northway Aviation Ltd",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "CND",
    CARR_NAME: "Corendon DUTCH Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "PEA",
    CARR_NAME: "Pan Europeenne Air Service",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "PNP",
    CARR_NAME: "Pineapple Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "EHN",
    CARR_NAME: "East Horizon Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "VUR",
    CARR_NAME: "VIP S.A.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "AWM",
    CARR_NAME: "Asian Wings Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "VIT",
    CARR_NAME: "PT Aviastar Mandiri",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "CPN",
    CARR_NAME: "Caspian Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "BEK",
    CARR_NAME: "Bek Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "AWN",
    CARR_NAME: "Air Niamey",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "OAE",
    CARR_NAME: "Omni Air International",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "FRN",
    CARR_NAME: "First Nation Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "RER",
    CARR_NAME: "Aeroregional",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "AMY",
    CARR_NAME: "Air Mandalay Ltd",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "RLT",
    CARR_NAME: "REAL Tonga",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "APP",
    CARR_NAME: "Aeroperlas",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "CCO",
    CARR_NAME: "China Air Cargo",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "PVG",
    CARR_NAME: "Privilege",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "VGO",
    CARR_NAME: "NewGen Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "RVP",
    CARR_NAME: "Sevenair (Portugal)",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "TWI",
    CARR_NAME: "Tailwind Hava Yollari A.S",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "PFY",
    CARR_NAME: "Pel-Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "SGB",
    CARR_NAME: "Songbird Airways, Inc.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "OTJ",
    CARR_NAME: "TEN AIRWAYS",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "CPZ",
    CARR_NAME: "Compass Airlines, Inc.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "FJM",
    CARR_NAME: "Fly Jamaica",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "SBM",
    CARR_NAME: "SkyBahamas",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "SLT",
    CARR_NAME: "Starlight Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "XLF",
    CARR_NAME: "XL Airways France",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "FZW",
    CARR_NAME: "flyafrica - Zimbabwe",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "UJX",
    CARR_NAME: "AtlasGlobal UA",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "NLU",
    CARR_NAME: "Insel Air Aruba",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "MEG",
    CARR_NAME: "Mega Global Air Services (Maldives)",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "PVN",
    CARR_NAME: "Peruvian Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "RGE",
    CARR_NAME: "Regent Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "SXD",
    CARR_NAME: "SunExpress Deutschland GmbH",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "ESR",
    CARR_NAME: "Eastar Jet",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "AWC",
    CARR_NAME: "Titan Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "AAQ",
    CARR_NAME: "Asia Atlantic Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "KKK",
    CARR_NAME: "AtlasGlobal",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "KIS",
    CARR_NAME: "Kish Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "SQM",
    CARR_NAME: "Siam Air Transport Company Limited",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "MRJ",
    CARR_NAME: "Meraj Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "NEA",
    CARR_NAME: "New England Airlines Inc",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "PPL",
    CARR_NAME: "Air Pegasus Pvt. Ltd.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "IDX",
    CARR_NAME: "Indonesia Airasia X",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "JAA",
    CARR_NAME: "Jet Asia Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "HHK",
    CARR_NAME: "Sky Shuttle",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "FMI",
    CARR_NAME: "FMI Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "NCT",
    CARR_NAME: "NokScoot Airlines Co Ltd",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "THU",
    CARR_NAME: "Thunder Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "KDC",
    CARR_NAME: "KD Air Corporation",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "NWG",
    CARR_NAME: "Airwing",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "NTH",
    CARR_NAME: "Hokkaido Air System",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "HTK",
    CARR_NAME: "Ningxia Cargo Airlines CO., LTD.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "GUM",
    CARR_NAME: "Gum Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "SSJ",
    CARR_NAME: "Krasavia",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "LLP",
    CARR_NAME: "Small Planet Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "ALD",
    CARR_NAME: "Air Leisure",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "SNR",
    CARR_NAME: "Sunair Aviation",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "PWD",
    CARR_NAME: "PAWA Dominicana",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "SGQ",
    CARR_NAME: "Saudi Gulf Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "ORG",
    CARR_NAME: "SUE Orenburg Region Intl Airport",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "PAG",
    CARR_NAME: "Perimeter Aviation Ltd",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "BLX",
    CARR_NAME: "TUIfly Nordic AB",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "LCB",
    CARR_NAME: "LC Peru",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "LEP",
    CARR_NAME: "Air Costa",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "EPR",
    CARR_NAME: "Express Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "JON",
    CARR_NAME: "JOON",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "CTB",
    CARR_NAME: "Thomas Cook Airlines Balearics",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "FLZ",
    CARR_NAME: "Flightlink Air Charters",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "FDK",
    CARR_NAME: "Flydamas",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "MEM",
    CARR_NAME: "ICAR - International Cargo Airline",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "SLD",
    CARR_NAME: "Silver Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "MFG",
    CARR_NAME: "Fly Mid Africa",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "TCX",
    CARR_NAME: "Thomas Cook Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "XLL",
    CARR_NAME: "Air Excel",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "BYK",
    CARR_NAME: "SkyBus Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "VNE",
    CARR_NAME: "RAVSA Venezolana",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "CAT",
    CARR_NAME: "Copenhagen Air Taxi",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "SOR",
    CARR_NAME: "SonAir",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "TEZ",
    CARR_NAME: "Tez Jet Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "CPT",
    CARR_NAME: "Corporate Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "FHM",
    CARR_NAME: "Freebird Airlines Europe LTD",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "WLB",
    CARR_NAME: "Wings of Lebanon",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "EMU",
    CARR_NAME: "East Asia Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "KEA",
    CARR_NAME: "Korea Express Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "KTB",
    CARR_NAME: "Transaviabaltika",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "KAI",
    CARR_NAME: "KaiserAir",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "BGN",
    CARR_NAME: "Air Inter Transport Co. Ltd",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "CCC",
    CARR_NAME: "Air Cargo Global",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "DAV",
    CARR_NAME: "Dornier Aviation Nigeria",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "DWI",
    CARR_NAME: "Dominican Wings S.A.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "XBO",
    CARR_NAME: "Baseops International, Inc.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "CUO",
    CARR_NAME: "Aerocuahonte SA de CV",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "IFA",
    CARR_NAME: "FAI rent-a-jet Aktiengesellschaft",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "DNM",
    CARR_NAME: "Denim Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "FEI",
    CARR_NAME: "Eagle Air Iceland",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "BTZ",
    CARR_NAME: "Bristow U.S. LLC",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "EAN",
    CARR_NAME: "Skypower Express Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "PHA",
    CARR_NAME: "Phoenix Air Group, Inc",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "SUV",
    CARR_NAME: "Sundance Air Venezuela",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "RCT",
    CARR_NAME: "Skyview Airways Co dba Skyview",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "FLB",
    CARR_NAME: "Fly Art",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "NVR",
    CARR_NAME: "Nova Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "KRN",
    CARR_NAME: "Karinou Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "CNO",
    CARR_NAME: "SAS Norway",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "SWQ",
    CARR_NAME: "Swift Air L.L.C.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "ARC",
    CARR_NAME: "Air Routing International L.P.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "JCT",
    CARR_NAME: "Jet Charter, Inc",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "KZH",
    CARR_NAME: "Zhezair",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "RMK",
    CARR_NAME: "Simrik Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "MSX",
    CARR_NAME: "EgyptAir Cargo",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "JUB",
    CARR_NAME: "Jubba Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "RLY",
    CARR_NAME: "Air Loyaute",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "RRV",
    CARR_NAME: "Mombassa Air Safari",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "SBK",
    CARR_NAME: "Blue Sky Aviation",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "WAJ",
    CARR_NAME: "AirAsia Japan",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "BGT",
    CARR_NAME: "Bergen Air Transport",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "RYW",
    CARR_NAME: "Royal Wings",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "ERN",
    CARR_NAME: "Ernest Airline",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "IAX",
    CARR_NAME: "Island Express Air Inc",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "DCP",
    CARR_NAME: "Air Direct Connect Ltd",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "ANC",
    CARR_NAME: "Avianca Argentina",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "HTY",
    CARR_NAME: "Helity",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "LSJ",
    CARR_NAME: "Air Liaison",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "UGS",
    CARR_NAME: "SKA Air and Logistics (U)",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "WLM",
    CARR_NAME: "VLM Airlines D.D.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "AZM",
    CARR_NAME: "Azman Air Services",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "SLR",
    CARR_NAME: "Silverstone Air Services",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "GWR",
    CARR_NAME: "Aura Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "SKV",
    CARR_NAME: "Sky Regional",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "FLJ",
    CARR_NAME: "Surf Air Europe",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "MSB",
    CARR_NAME: "Air Stork Srl",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "BOB",
    CARR_NAME: "Powdair",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "TRH",
    CARR_NAME: "Turuhan Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "ARN",
    CARR_NAME: "Aeronexus Corporate (pty) LTD",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "AUN",
    CARR_NAME: "FlyServus",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "LKH",
    CARR_NAME: "Small Planet Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "SSV",
    CARR_NAME: "ANDA AIR LIMITED",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "DAI",
    CARR_NAME: "Dena Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "LDM",
    CARR_NAME: "LAUDAMOTION GMBH",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "AMS",
    CARR_NAME: "ASTA - South America Air Taxi",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "QCL",
    CARR_NAME: "Air Class Lineas Aereas",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "IRV",
    CARR_NAME: "SAFFAT AIR",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "AXY",
    CARR_NAME: "Air X Charter Ltd",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "JWX",
    CARR_NAME: "Jetways Airlines Limited",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "UKL",
    CARR_NAME: "Ukraine Air Alliance",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "BGA",
    CARR_NAME: "Airbus Transport International",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "MTL",
    CARR_NAME: "RAF-AVIA",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "VLM",
    CARR_NAME: "VLM Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "PNX",
    CARR_NAME: "AIS Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "SDG",
    CARR_NAME: "Star Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "PTK",
    CARR_NAME: "Petropavlovsk-Kamchatsky Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "VGV",
    CARR_NAME: "Vologda Air Enterprise",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "DYN",
    CARR_NAME: "Aerodynamics, Inc",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "NQN",
    CARR_NAME: "Grupo LASA S.R.L.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "CNT",
    CARR_NAME: "Connect Linhas Aereas",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "ONS",
    CARR_NAME: "ONE Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "PWY",
    CARR_NAME: "Yourways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "SGU",
    CARR_NAME: "Sol del Paraguay",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "TUB",
    CARR_NAME: "True Aviation Limited",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "WOL",
    CARR_NAME: "Wings Aviation Limited",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "VCY",
    CARR_NAME: "OCL Barbados",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "TXZ",
    CARR_NAME: "THAI EXPRESS",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "KGK",
    CARR_NAME: "SKY KG Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "CIG",
    CARR_NAME: "Air company Sirius-Aero Ltd.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "SUI",
    CARR_NAME: "Schweizer Luftwaffe",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "NAE",
    CARR_NAME: "National Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "GAA",
    CARR_NAME: "Global Africa Aviation",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "ACH",
    CARR_NAME: "Africa's Connection STP",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "HAI",
    CARR_NAME: "Hai Au Aviation",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "OTF",
    CARR_NAME: "Orange 2 Fly",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "CAD",
    CARR_NAME: "PT Cardig Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "CAD",
    CARR_NAME: "PT Cardig Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "MHO",
    CARR_NAME: "Mokulele Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "CST",
    CARR_NAME: "Shoreline Aviation",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "RLI",
    CARR_NAME: "Reliant Air Charter",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "TGY",
    CARR_NAME: "Trans Guyana Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "LNH",
    CARR_NAME: "Lanhsa Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "ESS",
    CARR_NAME: "Thai Eastar Jet",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "KMW",
    CARR_NAME: "Kostroma Air Enterprise",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "SKZ",
    CARR_NAME: "Skyway Enterprises Inc.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "SRR",
    CARR_NAME: "Star Air A/S",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "SEK",
    CARR_NAME: "Star East Airline S.R.L.",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "XAR",
    CARR_NAME: "Xpress Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "JTU",
    CARR_NAME: "Zhetysu",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "CON",
    CARR_NAME: "ConocoPhillips Aviation Alaska",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "AJI",
    CARR_NAME: "Ameristar Air Cargo, Inc",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "BAY",
    CARR_NAME: "Bravo Airways",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "KAM",
    CARR_NAME: "Sunkar Air LLP",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "RTU",
    CARR_NAME: "Aerotucan",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "MTN",
    CARR_NAME: "Mountain Air Cargo",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "SQS",
    CARR_NAME: "Susi air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "MKB",
    CARR_NAME: "Mack Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "WLD",
    CARR_NAME: "Wilderness Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "SDO",
    CARR_NAME: "Air Santo Domingo",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "MRR",
    CARR_NAME: "San Juan Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "SVD",
    CARR_NAME: "SVG Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "AML",
    CARR_NAME: "Air Cargo Malawi",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "AEU",
    CARR_NAME: "Atlantis Armenian Airlines",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "AMN",
    CARR_NAME: "Air Montenegro",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "CIL",
    CARR_NAME: "CIAF LEASING",
    CARGO_IND: "N"
  },
  {
    IATA_CD: "PGN",
    CARR_NAME: "Tailwind Air",
    CARGO_IND: "N"
  },
  {
    IATA_CD: ""
  }
]

module.exports = {carriers}