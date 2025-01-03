// From https://learn.microsoft.com/en-us/rest/api/trafficmanager/geographic-hierarchies/get-default?view=rest-trafficmanager-2022-04-01&tabs=HTTP&tryIt=true&source=docs#code-try-0

// Countries may change but not enough to warrant pulling a whole client.

const data = {
  "id": "/providers/Microsoft.Network/trafficManagerGeographicHierarchies/default",
  "name": "default",
  "type": "Microsoft.Network/trafficManagerGeographicHierarchies",
  "properties": {
    "geographicHierarchy": {
      "code": "WORLD",
      "name": "World",
      "regions": [
        {
          "code": "GEO-EU",
          "name": "Europe",
          "regions": [
            {
              "code": "AD",
              "name": "Andorra",
              "regions": []
            },
            {
              "code": "AL",
              "name": "Albania",
              "regions": []
            },
            {
              "code": "AT",
              "name": "Austria",
              "regions": []
            },
            {
              "code": "AX",
              "name": "Åland Islands",
              "regions": []
            },
            {
              "code": "BA",
              "name": "Bosnia and Herzegovina",
              "regions": []
            },
            {
              "code": "BE",
              "name": "Belgium",
              "regions": []
            },
            {
              "code": "BG",
              "name": "Bulgaria",
              "regions": []
            },
            {
              "code": "BY",
              "name": "Belarus",
              "regions": []
            },
            {
              "code": "CH",
              "name": "Switzerland",
              "regions": []
            },
            {
              "code": "CY",
              "name": "Cyprus",
              "regions": []
            },
            {
              "code": "CZ",
              "name": "Czech Republic",
              "regions": []
            },
            {
              "code": "DE",
              "name": "Germany",
              "regions": []
            },
            {
              "code": "DK",
              "name": "Denmark",
              "regions": []
            },
            {
              "code": "EE",
              "name": "Estonia",
              "regions": []
            },
            {
              "code": "ES",
              "name": "Spain",
              "regions": []
            },
            {
              "code": "FI",
              "name": "Finland",
              "regions": []
            },
            {
              "code": "FO",
              "name": "Faroe Islands",
              "regions": []
            },
            {
              "code": "FR",
              "name": "France",
              "regions": []
            },
            {
              "code": "GB",
              "name": "United Kingdom",
              "regions": []
            },
            {
              "code": "GG",
              "name": "Guernsey",
              "regions": []
            },
            {
              "code": "GI",
              "name": "Gibraltar",
              "regions": []
            },
            {
              "code": "GR",
              "name": "Greece",
              "regions": []
            },
            {
              "code": "HR",
              "name": "Croatia",
              "regions": []
            },
            {
              "code": "HU",
              "name": "Hungary",
              "regions": []
            },
            {
              "code": "IE",
              "name": "Ireland",
              "regions": []
            },
            {
              "code": "IM",
              "name": "Isle of Man",
              "regions": []
            },
            {
              "code": "IS",
              "name": "Iceland",
              "regions": []
            },
            {
              "code": "IT",
              "name": "Italy",
              "regions": []
            },
            {
              "code": "JE",
              "name": "Jersey",
              "regions": []
            },
            {
              "code": "LI",
              "name": "Liechtenstein",
              "regions": []
            },
            {
              "code": "LT",
              "name": "Lithuania",
              "regions": []
            },
            {
              "code": "LU",
              "name": "Luxembourg",
              "regions": []
            },
            {
              "code": "LV",
              "name": "Latvia",
              "regions": []
            },
            {
              "code": "MC",
              "name": "Monaco",
              "regions": []
            },
            {
              "code": "MD",
              "name": "Moldova",
              "regions": []
            },
            {
              "code": "ME",
              "name": "Montenegro",
              "regions": []
            },
            {
              "code": "MK",
              "name": "North Macedonia",
              "regions": []
            },
            {
              "code": "MT",
              "name": "Malta",
              "regions": []
            },
            {
              "code": "NL",
              "name": "Netherlands",
              "regions": []
            },
            {
              "code": "NO",
              "name": "Norway",
              "regions": []
            },
            {
              "code": "PL",
              "name": "Poland",
              "regions": []
            },
            {
              "code": "PT",
              "name": "Portugal",
              "regions": []
            },
            {
              "code": "RO",
              "name": "Romania",
              "regions": []
            },
            {
              "code": "RS",
              "name": "Serbia",
              "regions": []
            },
            {
              "code": "RU",
              "name": "Russia",
              "regions": []
            },
            {
              "code": "SE",
              "name": "Sweden",
              "regions": []
            },
            {
              "code": "SI",
              "name": "Slovenia",
              "regions": []
            },
            {
              "code": "SJ",
              "name": "Svalbard",
              "regions": []
            },
            {
              "code": "SK",
              "name": "Slovakia",
              "regions": []
            },
            {
              "code": "SM",
              "name": "San Marino",
              "regions": []
            },
            {
              "code": "UA",
              "name": "Ukraine",
              "regions": [
                {
                  "code": "UA-CR",
                  "name": "Region of Crimea",
                  "regions": []
                }
              ]
            },
            {
              "code": "VA",
              "name": "Vatican City",
              "regions": []
            },
            {
              "code": "XJ",
              "name": "Jan Mayen",
              "regions": []
            },
            {
              "code": "XK",
              "name": "Kosovo",
              "regions": []
            }
          ]
        },
        {
          "code": "GEO-ME",
          "name": "Middle East",
          "regions": [
            {
              "code": "AE",
              "name": "United Arab Emirates",
              "regions": []
            },
            {
              "code": "BH",
              "name": "Bahrain",
              "regions": []
            },
            {
              "code": "IL",
              "name": "Israel",
              "regions": []
            },
            {
              "code": "IQ",
              "name": "Iraq",
              "regions": []
            },
            {
              "code": "IR",
              "name": "Iran",
              "regions": []
            },
            {
              "code": "JO",
              "name": "Jordan",
              "regions": []
            },
            {
              "code": "KW",
              "name": "Kuwait",
              "regions": []
            },
            {
              "code": "LB",
              "name": "Lebanon",
              "regions": []
            },
            {
              "code": "OM",
              "name": "Oman",
              "regions": []
            },
            {
              "code": "PS",
              "name": "Palestinian Authority",
              "regions": []
            },
            {
              "code": "QA",
              "name": "Qatar",
              "regions": []
            },
            {
              "code": "SY",
              "name": "Syria",
              "regions": []
            },
            {
              "code": "SA",
              "name": "Saudi Arabia",
              "regions": []
            },
            {
              "code": "TR",
              "name": "Turkey",
              "regions": []
            },
            {
              "code": "YE",
              "name": "Yemen",
              "regions": []
            }
          ]
        },
        {
          "code": "GEO-NA",
          "name": "North America / Central America / Caribbean",
          "regions": [
            {
              "code": "AG",
              "name": "Antigua and Barbuda",
              "regions": []
            },
            {
              "code": "AI",
              "name": "Anguilla",
              "regions": []
            },
            {
              "code": "AW",
              "name": "Aruba",
              "regions": []
            },
            {
              "code": "BB",
              "name": "Barbados",
              "regions": []
            },
            {
              "code": "BL",
              "name": "Saint Barthélemy",
              "regions": []
            },
            {
              "code": "BM",
              "name": "Bermuda",
              "regions": []
            },
            {
              "code": "BQ",
              "name": "Bonaire",
              "regions": []
            },
            {
              "code": "BS",
              "name": "Bahamas",
              "regions": []
            },
            {
              "code": "BZ",
              "name": "Belize",
              "regions": []
            },
            {
              "code": "CA",
              "name": "Canada",
              "regions": [
                {
                  "code": "CA-AB",
                  "name": "Alberta",
                  "regions": []
                },
                {
                  "code": "CA-BC",
                  "name": "British Columbia",
                  "regions": []
                },
                {
                  "code": "CA-MB",
                  "name": "Manitoba",
                  "regions": []
                },
                {
                  "code": "CA-NB",
                  "name": "New Brunswick",
                  "regions": []
                },
                {
                  "code": "CA-NL",
                  "name": "Newfoundland and Labrador",
                  "regions": []
                },
                {
                  "code": "CA-NS",
                  "name": "Nova Scotia",
                  "regions": []
                },
                {
                  "code": "CA-NT",
                  "name": "Northwest Territories",
                  "regions": []
                },
                {
                  "code": "CA-NU",
                  "name": "Nunavut",
                  "regions": []
                },
                {
                  "code": "CA-ON",
                  "name": "Ontario",
                  "regions": []
                },
                {
                  "code": "CA-PE",
                  "name": "Prince Edward Island",
                  "regions": []
                },
                {
                  "code": "CA-QC",
                  "name": "Québec",
                  "regions": []
                },
                {
                  "code": "CA-SK",
                  "name": "Saskatchewan",
                  "regions": []
                },
                {
                  "code": "CA-YT",
                  "name": "Yukon Territory",
                  "regions": []
                }
              ]
            },
            {
              "code": "CR",
              "name": "Costa Rica",
              "regions": []
            },
            {
              "code": "CU",
              "name": "Cuba",
              "regions": []
            },
            {
              "code": "CW",
              "name": "Curaçao",
              "regions": []
            },
            {
              "code": "DM",
              "name": "Dominica",
              "regions": []
            },
            {
              "code": "DO",
              "name": "Dominican Republic",
              "regions": []
            },
            {
              "code": "GD",
              "name": "Grenada",
              "regions": []
            },
            {
              "code": "GL",
              "name": "Greenland",
              "regions": []
            },
            {
              "code": "GP",
              "name": "Guadeloupe",
              "regions": []
            },
            {
              "code": "GT",
              "name": "Guatemala",
              "regions": []
            },
            {
              "code": "HN",
              "name": "Honduras",
              "regions": []
            },
            {
              "code": "HT",
              "name": "Haiti",
              "regions": []
            },
            {
              "code": "JM",
              "name": "Jamaica",
              "regions": []
            },
            {
              "code": "KN",
              "name": "Saint Kitts and Nevis",
              "regions": []
            },
            {
              "code": "KY",
              "name": "Cayman Islands",
              "regions": []
            },
            {
              "code": "LC",
              "name": "Saint Lucia",
              "regions": []
            },
            {
              "code": "MF",
              "name": "Saint Martin",
              "regions": []
            },
            {
              "code": "MQ",
              "name": "Martinique",
              "regions": []
            },
            {
              "code": "MS",
              "name": "Montserrat",
              "regions": []
            },
            {
              "code": "MX",
              "name": "Mexico",
              "regions": []
            },
            {
              "code": "NI",
              "name": "Nicaragua",
              "regions": []
            },
            {
              "code": "PA",
              "name": "Panama",
              "regions": []
            },
            {
              "code": "PM",
              "name": "Saint Pierre and Miquelon",
              "regions": []
            },
            {
              "code": "PR",
              "name": "Puerto Rico",
              "regions": []
            },
            {
              "code": "SV",
              "name": "El Salvador",
              "regions": []
            },
            {
              "code": "SX",
              "name": "Sint Maarten",
              "regions": []
            },
            {
              "code": "TC",
              "name": "Turks and Caicos Islands",
              "regions": []
            },
            {
              "code": "TT",
              "name": "Trinidad and Tobago",
              "regions": []
            },
            {
              "code": "UM",
              "name": "U.S. Outlying Islands",
              "regions": []
            },
            {
              "code": "US",
              "name": "United States",
              "regions": [
                {
                  "code": "US-AK",
                  "name": "Alaska",
                  "regions": []
                },
                {
                  "code": "US-AL",
                  "name": "Alabama",
                  "regions": []
                },
                {
                  "code": "US-AR",
                  "name": "Arkansas",
                  "regions": []
                },
                {
                  "code": "US-AZ",
                  "name": "Arizona",
                  "regions": []
                },
                {
                  "code": "US-CA",
                  "name": "California",
                  "regions": []
                },
                {
                  "code": "US-CO",
                  "name": "Colorado",
                  "regions": []
                },
                {
                  "code": "US-CT",
                  "name": "Connecticut",
                  "regions": []
                },
                {
                  "code": "US-DC",
                  "name": "District of Columbia",
                  "regions": []
                },
                {
                  "code": "US-DE",
                  "name": "Delaware",
                  "regions": []
                },
                {
                  "code": "US-FL",
                  "name": "Florida",
                  "regions": []
                },
                {
                  "code": "US-GA",
                  "name": "Georgia",
                  "regions": []
                },
                {
                  "code": "US-HI",
                  "name": "Hawaii",
                  "regions": []
                },
                {
                  "code": "US-IA",
                  "name": "Iowa",
                  "regions": []
                },
                {
                  "code": "US-ID",
                  "name": "Idaho",
                  "regions": []
                },
                {
                  "code": "US-IL",
                  "name": "Illinois",
                  "regions": []
                },
                {
                  "code": "US-IN",
                  "name": "Indiana",
                  "regions": []
                },
                {
                  "code": "US-KS",
                  "name": "Kansas",
                  "regions": []
                },
                {
                  "code": "US-KY",
                  "name": "Kentucky",
                  "regions": []
                },
                {
                  "code": "US-LA",
                  "name": "Louisiana",
                  "regions": []
                },
                {
                  "code": "US-MA",
                  "name": "Massachusetts",
                  "regions": []
                },
                {
                  "code": "US-MD",
                  "name": "Maryland",
                  "regions": []
                },
                {
                  "code": "US-ME",
                  "name": "Maine",
                  "regions": []
                },
                {
                  "code": "US-MI",
                  "name": "Michigan",
                  "regions": []
                },
                {
                  "code": "US-MN",
                  "name": "Minnesota",
                  "regions": []
                },
                {
                  "code": "US-MO",
                  "name": "Missouri",
                  "regions": []
                },
                {
                  "code": "US-MS",
                  "name": "Mississippi",
                  "regions": []
                },
                {
                  "code": "US-MT",
                  "name": "Montana",
                  "regions": []
                },
                {
                  "code": "US-NC",
                  "name": "North Carolina",
                  "regions": []
                },
                {
                  "code": "US-ND",
                  "name": "North Dakota",
                  "regions": []
                },
                {
                  "code": "US-NE",
                  "name": "Nebraska",
                  "regions": []
                },
                {
                  "code": "US-NH",
                  "name": "New Hampshire",
                  "regions": []
                },
                {
                  "code": "US-NJ",
                  "name": "New Jersey",
                  "regions": []
                },
                {
                  "code": "US-NM",
                  "name": "New Mexico",
                  "regions": []
                },
                {
                  "code": "US-NV",
                  "name": "Nevada",
                  "regions": []
                },
                {
                  "code": "US-NY",
                  "name": "New York",
                  "regions": []
                },
                {
                  "code": "US-OH",
                  "name": "Ohio",
                  "regions": []
                },
                {
                  "code": "US-OK",
                  "name": "Oklahoma",
                  "regions": []
                },
                {
                  "code": "US-OR",
                  "name": "Oregon",
                  "regions": []
                },
                {
                  "code": "US-PA",
                  "name": "Pennsylvania",
                  "regions": []
                },
                {
                  "code": "US-RI",
                  "name": "Rhode Island",
                  "regions": []
                },
                {
                  "code": "US-SC",
                  "name": "South Carolina",
                  "regions": []
                },
                {
                  "code": "US-SD",
                  "name": "South Dakota",
                  "regions": []
                },
                {
                  "code": "US-TN",
                  "name": "Tennessee",
                  "regions": []
                },
                {
                  "code": "US-TX",
                  "name": "Texas",
                  "regions": []
                },
                {
                  "code": "US-UT",
                  "name": "Utah",
                  "regions": []
                },
                {
                  "code": "US-VA",
                  "name": "Virginia",
                  "regions": []
                },
                {
                  "code": "US-VT",
                  "name": "Vermont",
                  "regions": []
                },
                {
                  "code": "US-WA",
                  "name": "Washington",
                  "regions": []
                },
                {
                  "code": "US-WI",
                  "name": "Wisconsin",
                  "regions": []
                },
                {
                  "code": "US-WV",
                  "name": "West Virginia",
                  "regions": []
                },
                {
                  "code": "US-WY",
                  "name": "Wyoming",
                  "regions": []
                }
              ]
            },
            {
              "code": "VC",
              "name": "Saint Vincent and the Grenadines",
              "regions": []
            },
            {
              "code": "VG",
              "name": "British Virgin Islands",
              "regions": []
            },
            {
              "code": "VI",
              "name": "U.S. Virgin Islands",
              "regions": []
            },
            {
              "code": "XE",
              "name": "Sint Eustatius",
              "regions": []
            },
            {
              "code": "XS",
              "name": "Saba",
              "regions": []
            }
          ]
        },
        {
          "code": "GEO-AS",
          "name": "Asia",
          "regions": [
            {
              "code": "AF",
              "name": "Afghanistan",
              "regions": []
            },
            {
              "code": "AM",
              "name": "Armenia",
              "regions": []
            },
            {
              "code": "AZ",
              "name": "Azerbaijan",
              "regions": []
            },
            {
              "code": "BD",
              "name": "Bangladesh",
              "regions": []
            },
            {
              "code": "BN",
              "name": "Brunei",
              "regions": []
            },
            {
              "code": "BT",
              "name": "Bhutan",
              "regions": []
            },
            {
              "code": "CC",
              "name": "Cocos (Keeling) Islands",
              "regions": []
            },
            {
              "code": "CN",
              "name": "China",
              "regions": []
            },
            {
              "code": "CX",
              "name": "Christmas Island",
              "regions": []
            },
            {
              "code": "GE",
              "name": "Georgia",
              "regions": []
            },
            {
              "code": "HK",
              "name": "Hong Kong SAR",
              "regions": []
            },
            {
              "code": "ID",
              "name": "Indonesia",
              "regions": []
            },
            {
              "code": "IN",
              "name": "India",
              "regions": []
            },
            {
              "code": "IO",
              "name": "British Indian Ocean Territory",
              "regions": []
            },
            {
              "code": "JP",
              "name": "Japan",
              "regions": []
            },
            {
              "code": "KG",
              "name": "Kyrgyzstan",
              "regions": []
            },
            {
              "code": "KH",
              "name": "Cambodia",
              "regions": []
            },
            {
              "code": "KP",
              "name": "North Korea",
              "regions": []
            },
            {
              "code": "KR",
              "name": "Korea",
              "regions": []
            },
            {
              "code": "KZ",
              "name": "Kazakhstan",
              "regions": []
            },
            {
              "code": "LA",
              "name": "Laos",
              "regions": []
            },
            {
              "code": "LK",
              "name": "Sri Lanka",
              "regions": []
            },
            {
              "code": "MM",
              "name": "Myanmar",
              "regions": []
            },
            {
              "code": "MN",
              "name": "Mongolia",
              "regions": []
            },
            {
              "code": "MO",
              "name": "Macao SAR",
              "regions": []
            },
            {
              "code": "MV",
              "name": "Maldives",
              "regions": []
            },
            {
              "code": "MY",
              "name": "Malaysia",
              "regions": []
            },
            {
              "code": "NP",
              "name": "Nepal",
              "regions": []
            },
            {
              "code": "PH",
              "name": "Philippines",
              "regions": []
            },
            {
              "code": "PK",
              "name": "Pakistan",
              "regions": []
            },
            {
              "code": "SG",
              "name": "Singapore",
              "regions": []
            },
            {
              "code": "TH",
              "name": "Thailand",
              "regions": []
            },
            {
              "code": "TJ",
              "name": "Tajikistan",
              "regions": []
            },
            {
              "code": "TL",
              "name": "Timor_Leste",
              "regions": []
            },
            {
              "code": "TM",
              "name": "Turkmenistan",
              "regions": []
            },
            {
              "code": "TW",
              "name": "Taiwan",
              "regions": []
            },
            {
              "code": "UZ",
              "name": "Uzbekistan",
              "regions": []
            },
            {
              "code": "VN",
              "name": "Vietnam",
              "regions": []
            }
          ]
        },
        {
          "code": "GEO-AF",
          "name": "Africa",
          "regions": [
            {
              "code": "AO",
              "name": "Angola",
              "regions": []
            },
            {
              "code": "BF",
              "name": "Burkina Faso",
              "regions": []
            },
            {
              "code": "BI",
              "name": "Burundi",
              "regions": []
            },
            {
              "code": "BJ",
              "name": "Benin",
              "regions": []
            },
            {
              "code": "BV",
              "name": "Bouvet Island",
              "regions": []
            },
            {
              "code": "BW",
              "name": "Botswana",
              "regions": []
            },
            {
              "code": "CD",
              "name": "Congo (DRC)",
              "regions": []
            },
            {
              "code": "CF",
              "name": "Central African Republic",
              "regions": []
            },
            {
              "code": "CG",
              "name": "Congo",
              "regions": []
            },
            {
              "code": "CI",
              "name": "Côte d’Ivoire",
              "regions": []
            },
            {
              "code": "CM",
              "name": "Cameroon",
              "regions": []
            },
            {
              "code": "CV",
              "name": "Cabo Verde",
              "regions": []
            },
            {
              "code": "DJ",
              "name": "Djibouti",
              "regions": []
            },
            {
              "code": "DZ",
              "name": "Algeria",
              "regions": []
            },
            {
              "code": "EG",
              "name": "Egypt",
              "regions": []
            },
            {
              "code": "ER",
              "name": "Eritrea",
              "regions": []
            },
            {
              "code": "ET",
              "name": "Ethiopia",
              "regions": []
            },
            {
              "code": "GA",
              "name": "Gabon",
              "regions": []
            },
            {
              "code": "GH",
              "name": "Ghana",
              "regions": []
            },
            {
              "code": "GM",
              "name": "Gambia",
              "regions": []
            },
            {
              "code": "GN",
              "name": "Guinea",
              "regions": []
            },
            {
              "code": "GQ",
              "name": "Equatorial Guinea",
              "regions": []
            },
            {
              "code": "GW",
              "name": "Guinea_Bissau",
              "regions": []
            },
            {
              "code": "KE",
              "name": "Kenya",
              "regions": []
            },
            {
              "code": "KM",
              "name": "Comoros",
              "regions": []
            },
            {
              "code": "LR",
              "name": "Liberia",
              "regions": []
            },
            {
              "code": "LS",
              "name": "Lesotho",
              "regions": []
            },
            {
              "code": "LY",
              "name": "Libya",
              "regions": []
            },
            {
              "code": "MA",
              "name": "Morocco",
              "regions": []
            },
            {
              "code": "MG",
              "name": "Madagascar",
              "regions": []
            },
            {
              "code": "ML",
              "name": "Mali",
              "regions": []
            },
            {
              "code": "MR",
              "name": "Mauritania",
              "regions": []
            },
            {
              "code": "MU",
              "name": "Mauritius",
              "regions": []
            },
            {
              "code": "MW",
              "name": "Malawi",
              "regions": []
            },
            {
              "code": "MZ",
              "name": "Mozambique",
              "regions": []
            },
            {
              "code": "NA",
              "name": "Namibia",
              "regions": []
            },
            {
              "code": "NE",
              "name": "Niger",
              "regions": []
            },
            {
              "code": "NG",
              "name": "Nigeria",
              "regions": []
            },
            {
              "code": "RE",
              "name": "Réunion",
              "regions": []
            },
            {
              "code": "RW",
              "name": "Rwanda",
              "regions": []
            },
            {
              "code": "SC",
              "name": "Seychelles",
              "regions": []
            },
            {
              "code": "SD",
              "name": "Sudan",
              "regions": []
            },
            {
              "code": "SH",
              "name": "St Helena, Ascension, Tristan da Cunha",
              "regions": []
            },
            {
              "code": "SL",
              "name": "Sierra Leone",
              "regions": []
            },
            {
              "code": "SN",
              "name": "Senegal",
              "regions": []
            },
            {
              "code": "SO",
              "name": "Somalia",
              "regions": []
            },
            {
              "code": "SS",
              "name": "South Sudan",
              "regions": []
            },
            {
              "code": "ST",
              "name": "São Tomé and Príncipe",
              "regions": []
            },
            {
              "code": "SZ",
              "name": "Swaziland",
              "regions": []
            },
            {
              "code": "TD",
              "name": "Chad",
              "regions": []
            },
            {
              "code": "TF",
              "name": "French Southern Territories",
              "regions": []
            },
            {
              "code": "TG",
              "name": "Togo",
              "regions": []
            },
            {
              "code": "TN",
              "name": "Tunisia",
              "regions": []
            },
            {
              "code": "TZ",
              "name": "Tanzania",
              "regions": []
            },
            {
              "code": "UG",
              "name": "Uganda",
              "regions": []
            },
            {
              "code": "YT",
              "name": "Mayotte",
              "regions": []
            },
            {
              "code": "ZA",
              "name": "South Africa",
              "regions": []
            },
            {
              "code": "ZM",
              "name": "Zambia",
              "regions": []
            },
            {
              "code": "ZW",
              "name": "Zimbabwe",
              "regions": []
            }
          ]
        },
        {
          "code": "GEO-AN",
          "name": "Antarctica",
          "regions": [
            {
              "code": "AQ",
              "name": "Antarctica",
              "regions": []
            }
          ]
        },
        {
          "code": "GEO-SA",
          "name": "South America",
          "regions": [
            {
              "code": "AR",
              "name": "Argentina",
              "regions": []
            },
            {
              "code": "BO",
              "name": "Bolivia",
              "regions": []
            },
            {
              "code": "BR",
              "name": "Brazil",
              "regions": []
            },
            {
              "code": "CL",
              "name": "Chile",
              "regions": []
            },
            {
              "code": "CO",
              "name": "Colombia",
              "regions": []
            },
            {
              "code": "EC",
              "name": "Ecuador",
              "regions": []
            },
            {
              "code": "FK",
              "name": "Falkland Islands",
              "regions": []
            },
            {
              "code": "GF",
              "name": "French Guiana",
              "regions": []
            },
            {
              "code": "GS",
              "name": "South Georgia and South Sandwich Islands",
              "regions": []
            },
            {
              "code": "GY",
              "name": "Guyana",
              "regions": []
            },
            {
              "code": "PE",
              "name": "Peru",
              "regions": []
            },
            {
              "code": "PY",
              "name": "Paraguay",
              "regions": []
            },
            {
              "code": "SR",
              "name": "Suriname",
              "regions": []
            },
            {
              "code": "UY",
              "name": "Uruguay",
              "regions": []
            },
            {
              "code": "VE",
              "name": "Venezuela",
              "regions": []
            }
          ]
        },
        {
          "code": "GEO-AP",
          "name": "Australia / Pacific",
          "regions": [
            {
              "code": "AS",
              "name": "American Samoa",
              "regions": []
            },
            {
              "code": "AU",
              "name": "Australia",
              "regions": [
                {
                  "code": "AU-ACT",
                  "name": "Australian Capital Territory",
                  "regions": []
                },
                {
                  "code": "AU-NSW",
                  "name": "New South Wales",
                  "regions": []
                },
                {
                  "code": "AU-NT",
                  "name": "Northern Territory",
                  "regions": []
                },
                {
                  "code": "AU-QLD",
                  "name": "Queensland",
                  "regions": []
                },
                {
                  "code": "AU-SA",
                  "name": "South Australia",
                  "regions": []
                },
                {
                  "code": "AU-TAS",
                  "name": "Tasmania",
                  "regions": []
                },
                {
                  "code": "AU-VIC",
                  "name": "Victoria",
                  "regions": []
                },
                {
                  "code": "AU-WA",
                  "name": "Western Australia",
                  "regions": []
                }
              ]
            },
            {
              "code": "CK",
              "name": "Cook Islands",
              "regions": []
            },
            {
              "code": "FJ",
              "name": "Fiji",
              "regions": []
            },
            {
              "code": "FM",
              "name": "Micronesia",
              "regions": []
            },
            {
              "code": "GU",
              "name": "Guam",
              "regions": []
            },
            {
              "code": "HM",
              "name": "Heard Island and McDonald Islands",
              "regions": []
            },
            {
              "code": "KI",
              "name": "Kiribati",
              "regions": []
            },
            {
              "code": "MH",
              "name": "Marshall Islands",
              "regions": []
            },
            {
              "code": "MP",
              "name": "Northern Mariana Islands",
              "regions": []
            },
            {
              "code": "NC",
              "name": "New Caledonia",
              "regions": []
            },
            {
              "code": "NF",
              "name": "Norfolk Island",
              "regions": []
            },
            {
              "code": "NR",
              "name": "Nauru",
              "regions": []
            },
            {
              "code": "NU",
              "name": "Niue",
              "regions": []
            },
            {
              "code": "NZ",
              "name": "New Zealand",
              "regions": []
            },
            {
              "code": "PF",
              "name": "French Polynesia",
              "regions": []
            },
            {
              "code": "PG",
              "name": "Papua New Guinea",
              "regions": []
            },
            {
              "code": "PN",
              "name": "Pitcairn Islands",
              "regions": []
            },
            {
              "code": "PW",
              "name": "Palau",
              "regions": []
            },
            {
              "code": "SB",
              "name": "Solomon Islands",
              "regions": []
            },
            {
              "code": "TK",
              "name": "Tokelau",
              "regions": []
            },
            {
              "code": "TO",
              "name": "Tonga",
              "regions": []
            },
            {
              "code": "TV",
              "name": "Tuvalu",
              "regions": []
            },
            {
              "code": "VU",
              "name": "Vanuatu",
              "regions": []
            },
            {
              "code": "WF",
              "name": "Wallis and Futuna",
              "regions": []
            },
            {
              "code": "WS",
              "name": "Samoa",
              "regions": []
            }
          ]
        }
      ]
    }
  }
} as const;

export default data;