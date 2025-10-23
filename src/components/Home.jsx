import React, { useState } from "react";
import location from "../assets/images/arrows.png";
import moda from "../assets/images/m_d-removebg-preview.png";
import baby from "../assets/images/baby.png";
import books from "../assets/images/book.png";
import patient from "../assets/images/patient.png";
import office from "../assets/images/office-cleaning.png";
import Booking from "./Booking";
import Steps from "./Steps";

const ukLocations = [
  {
    state: "Avon",
    lgas: [
      "Bristol",
      "Bath and North East Somerset",
      "North Somerset",
      "South Gloucestershire",
    ],
  },
  {
    state: "Bedfordshire",
    lgas: ["Bedford", "Central Bedfordshire", "Luton"],
  },
  {
    state: "Berkshire",
    lgas: [
      "Bracknell Forest",
      "Reading",
      "Slough",
      "West Berkshire",
      "Windsor and Maidenhead",
      "Wokingham",
    ],
  },
  {
    state: "Buckinghamshire",
    lgas: [
      "Aylesbury Vale",
      "Chiltern",
      "Milton Keynes",
      "South Bucks",
      "Wycombe",
    ],
  },
  {
    state: "Cambridgeshire",
    lgas: [
      "Cambridge",
      "East Cambridgeshire",
      "Fenland",
      "Huntingdonshire",
      "Peterborough",
      "South Cambridgeshire",
    ],
  },
  {
    state: "Cheshire",
    lgas: [
      "Cheshire East",
      "Cheshire West and Chester",
      "Halton",
      "Warrington",
    ],
  },
  {
    state: "Cleveland",
    lgas: [
      "Hartlepool",
      "Middlesbrough",
      "Redcar and Cleveland",
      "Stockton-on-Tees",
    ],
  },
  {
    state: "Cornwall",
    lgas: ["Cornwall", "Isles of Scilly"],
  },
  {
    state: "Cumbria",
    lgas: [
      "Allerdale",
      "Barrow-in-Furness",
      "Carlisle",
      "Copeland",
      "Eden",
      "Lake District",
      "South Lakeland",
    ],
  },
  {
    state: "Derbyshire",
    lgas: [
      "Amber Valley",
      "Bolsover",
      "Chesterfield",
      "Derbyshire Dales",
      "Erewash",
      "High Peak",
      "North East Derbyshire",
      "South Derbyshire",
    ],
  },
  {
    state: "Devon",
    lgas: [
      "East Devon",
      "Exeter",
      "Mid Devon",
      "North Devon",
      "Plymouth",
      "South Hams",
      "Teignbridge",
      "Torbay",
      "West Devon",
    ],
  },
  {
    state: "Dorset",
    lgas: [
      "Bournemouth",
      "Christchurch",
      "East Dorset",
      "North Dorset",
      "Purbeck",
      "West Dorset",
      "Weymouth and Portland",
    ],
  },
  {
    state: "Durham",
    lgas: ["County Durham", "Darlington"],
  },
  {
    state: "East Sussex",
    lgas: ["Eastbourne", "Hastings", "Lewes", "Rother", "Wealden"],
  },
  {
    state: "Essex",
    lgas: [
      "Basildon",
      "Braintree",
      "Brentwood",
      "Castle Point",
      "Chelmsford",
      "Colchester",
      "Epping Forest",
      "Harlow",
      "Maldon",
      "Rochford",
      "Southend-on-Sea",
      "Tendring",
      "Thurrock",
      "Uttlesford",
    ],
  },
  {
    state: "Gloucestershire",
    lgas: [
      "Cheltenham",
      "Cotswold",
      "Forest of Dean",
      "Gloucester",
      "Stroud",
      "Tewkesbury",
    ],
  },
  {
    state: "Hampshire",
    lgas: [
      "Basingstoke and Deane",
      "East Hampshire",
      "Eastleigh",
      "Fareham",
      "Gosport",
      "Hart",
      "Havant",
      "New Forest",
      "Portsmouth",
      "Rushmoor",
      "Southampton",
      "Test Valley",
      "Winchester",
    ],
  },
  {
    state: "Herefordshire",
    lgas: ["Herefordshire"],
  },
  {
    state: "Hertfordshire",
    lgas: [
      "Broxbourne",
      "Dacorum",
      "East Hertfordshire",
      "Hertsmere",
      "St Albans",
      "Stevenage",
      "Three Rivers",
      "Watford",
      "Welwyn Hatfield",
    ],
  },
  {
    state: "Isle of Wight",
    lgas: ["Isle of Wight"],
  },
  {
    state: "Kent",
    lgas: [
      "Ashford",
      "Canterbury",
      "Dartford",
      "Dover",
      "Gravesham",
      "Maidstone",
      "Medway",
      "Sevenoaks",
      "Shepway",
      "Swale",
      "Thanet",
      "Tonbridge and Malling",
      "Tunbridge Wells",
    ],
  },
  {
    state: "Lancashire",
    lgas: [
      "Burnley",
      "Chorley",
      "Fylde",
      "Hyndburn",
      "Lancaster",
      "Pendle",
      "Preston",
      "Ribble Valley",
      "Rossendale",
      "South Ribble",
      "West Lancashire",
      "Wyre",
    ],
  },
  {
    state: "Leicestershire",
    lgas: [
      "Blaby",
      "Charnwood",
      "Harborough",
      "Hinckley and Bosworth",
      "Leicester",
      "Melton",
      "North West Leicestershire",
      "Oadby and Wigston",
    ],
  },
  {
    state: "Lincolnshire",
    lgas: [
      "Boston",
      "East Lindsey",
      "Lincoln",
      "North Kesteven",
      "South Holland",
      "South Kesteven",
      "West Lindsey",
    ],
  },
  {
    state: "London",
    lgas: [
      "Barking and Dagenham",
      "Barnet",
      "Bexley",
      "Brent",
      "Bromley",
      "Camden",
      "Croydon",
      "Ealing",
      "Enfield",
      "Greenwich",
      "Hackney",
      "Hammersmith and Fulham",
      "Haringey",
      "Harrow",
      "Havering",
      "Hillingdon",
      "Hounslow",
      "Islington",
      "Kensington and Chelsea",
      "Kingston upon Thames",
      "Lambeth",
      "Lewisham",
      "Merton",
      "Newham",
      "Redbridge",
      "Richmond upon Thames",
      "Southwark",
      "Sutton",
      "Tower Hamlets",
      "Waltham Forest",
      "Wandsworth",
      "Westminster",
    ],
  },
  {
    state: "Merseyside",
    lgas: ["Knowsley", "Liverpool", "Sefton", "St Helens", "Wirral"],
  },
  {
    state: "Norfolk",
    lgas: [
      "Breckland",
      "Broadland",
      "Great Yarmouth",
      "King's Lynn and West Norfolk",
      "North Norfolk",
      "Norwich",
      "South Norfolk",
    ],
  },
  {
    state: "Northamptonshire",
    lgas: [
      "Corby",
      "Daventry",
      "East Northamptonshire",
      "Kettering",
      "Northampton",
      "South Northamptonshire",
    ],
  },
  {
    state: "Northumberland",
    lgas: ["Northumberland"],
  },
  {
    state: "North Yorkshire",
    lgas: [
      "Craven",
      "Hambleton",
      "Harrogate",
      "Richmondshire",
      "Ryedale",
      "Scarborough",
      "Selby",
      "York",
    ],
  },
  {
    state: "Nottinghamshire",
    lgas: [
      "Ashfield",
      "Bassetlaw",
      "Broxtowe",
      "Gedling",
      "Mansfield",
      "Newark and Sherwood",
      "Nottingham",
      "Rushcliffe",
    ],
  },
  {
    state: "Oxfordshire",
    lgas: [
      "Cherwell",
      "Oxford",
      "South Oxfordshire",
      "Vale of White Horse",
      "West Oxfordshire",
    ],
  },
  {
    state: "Rutland",
    lgas: ["Rutland"],
  },
  {
    state: "Shropshire",
    lgas: ["Shropshire", "Telford and Wrekin"],
  },
  {
    state: "Somerset",
    lgas: [
      "Mendip",
      "Sedgemoor",
      "Somerset West and Taunton",
      "South Somerset",
    ],
  },
  {
    state: "South Yorkshire",
    lgas: ["Barnsley", "Doncaster", "Rotherham", "Sheffield"],
  },
  {
    state: "Staffordshire",
    lgas: [
      "Cannock Chase",
      "East Staffordshire",
      "Lichfield",
      "Newcastle-under-Lyme",
      "South Staffordshire",
      "Stafford",
      "Staffordshire Moorlands",
      "Stoke-on-Trent",
      "Tamworth",
    ],
  },
  {
    state: "Suffolk",
    lgas: ["Babergh", "East Suffolk", "Ipswich", "Mid Suffolk", "West Suffolk"],
  },
  {
    state: "Surrey",
    lgas: [
      "Elmbridge",
      "Epsom and Ewell",
      "Guildford",
      "Mole Valley",
      "Reigate and Banstead",
      "Runnymede",
      "Spelthorne",
      "Surrey Heath",
      "Tandridge",
      "Waverley",
      "Woking",
    ],
  },
  {
    state: "Tyne and Wear",
    lgas: [
      "Gateshead",
      "Newcastle upon Tyne",
      "North Tyneside",
      "South Tyneside",
      "Sunderland",
    ],
  },
  {
    state: "Warwickshire",
    lgas: [
      "North Warwickshire",
      "Nuneaton and Bedworth",
      "Rugby",
      "Stratford-on-Avon",
      "Warwick",
    ],
  },
  {
    state: "West Midlands",
    lgas: [
      "Birmingham",
      "Coventry",
      "Dudley",
      "Sandwell",
      "Solihull",
      "Walsall",
      "Wolverhampton",
    ],
  },
  {
    state: "West Sussex",
    lgas: [
      "Adur",
      "Arun",
      "Chichester",
      "Crawley",
      "Horsham",
      "Mid Sussex",
      "Worthing",
    ],
  },
  {
    state: "West Yorkshire",
    lgas: ["Bradford", "Calderdale", "Kirklees", "Leeds", "Wakefield"],
  },
  {
    state: "Wiltshire",
    lgas: ["Wiltshire", "Swindon", "Bath and North East Somerset"],
  },
  {
    state: "Worcestershire",
    lgas: [
      "Bromsgrove",
      "Malvern Hills",
      "Wyre Forest",
      "Worcester",
      "Wychavon",
      "Rugby",
    ],
  },
  // Note: This is a partial list focused on England; expand with Wales, Scotland, NI as needed from official sources.
];

const items = [
  {
    id: 1,
    img: baby,
    tag: "Child Care",
    role: "Get the best care for your amazing little ones",
  },
  {
    id: 2,
    img: patient,
    tag: "Elderly Care",
    role: "Get the care that keeps your elderly ones comfortable and happy",
  },
  {
    id: 3,
    img: office,
    tag: "HouseKeeping",
    role: "Get housekeeping care that makes your home clean and cozy",
  },
  {
    id: 4,
    img: books,
    tag: "Tutor",
    role: "Get after school care that boosts your child's learning and confidence",
  },
];

function Home() {
  const [stateInput, setStateInput] = useState("");
  const [lgaInput, setLgaInput] = useState("");

  const handleSearch = () => {
    const trimmedState = stateInput.trim().toLowerCase();
    const trimmedLga = lgaInput.trim().toLowerCase();

    if (!trimmedState || !trimmedLga) {
      alert("Please enter both County and District.");
      return;
    }

    const stateMatch = ukLocations.find(
      (loc) => loc.state.toLowerCase() === trimmedState
    );
    if (!stateMatch) {
      alert("Incorrect County or doesn't exist.");
      return;
    }

    const lgaMatch = stateMatch.lgas.some(
      (lga) => lga.toLowerCase() === trimmedLga
    );
    if (!lgaMatch) {
      alert("Incorrect District for the selected County or doesn't exist.");
      return;
    }

    // If valid, proceed (e.g., navigate, search, etc.)
    console.log("Valid location:", stateMatch.state, trimmedLga);
    alert("Location found! Proceeding with search...");
    // Add your search logic here
  };

  return (
    <div className="bg-[#fffbfc]">
      <div className="bg-white max-w-[1200px] mx-auto mt-12 md:mt-20 p-6 md:p-12 rounded-xl shadow-lg flex flex-col md:flex-row md:items-stretch gap-6 md:gap-8">
        <div className="flex-1 flex flex-col justify-center order-2 md:order-none">
          <h1 className="text-3xl md:text-5xl font-extrabold max-w-100 tracking-wide mb-2 text-gray-800">
            Get the Best Care close to you!
          </h1>
          <span className="text-gray-600 mb-4">Get Care by Location</span>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex border rounded-xl border-gray-300 overflow-hidden flex-1">
              <input
                type="text"
                placeholder="County"
                value={stateInput}
                onChange={(e) => setStateInput(e.target.value)}
                className="px-4 py-2 focus:outline-none flex-1"
              />
              <div className="flex items-center border-l border-gray-300 min-w-[80px] md:min-w-0 flex-1">
                <input
                  type="text"
                  placeholder="District"
                  value={lgaInput}
                  onChange={(e) => setLgaInput(e.target.value)}
                  className="px-3 py-2 focus:outline-none flex-1"
                />
                <img
                  src={location}
                  alt="arrow"
                  className="w-4 h-4 md:w-5 md:h-5 ml-1 mr-1 self-center flex-shrink-0"
                />
              </div>
            </div>
            <button
              onClick={handleSearch}
              className="bg-[#f59cab] text-white px-6 py-2 rounded-xl font-medium whitespace-nowrap w-full sm:w-auto"
            >
              Search
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center md:justify-end items-center order-1 md:order-none">
          <img
            src={moda}
            alt="mother and daughter"
            className="max-h-[250px] md:max-h-[300px] w-full md:w-auto object-contain"
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6 my-20 px-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-[#fef0f2] rounded-lg flex flex-col justify-center items-center p-6 w-64 hover:shadow-lg transition-shadow"
          >
            <img src={item.img} alt="" className="w-16 h-16 mb-3" />
            <h2 className="font-bold text-lg mb-1">{item.tag}</h2>
            <span className="text-center text-gray-600 text-sm">
              {item.role}
            </span>
          </div>
        ))}
      </div>
      <Booking />
      <Steps />
    </div>
  );
}

export default Home;
