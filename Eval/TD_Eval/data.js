const LOCATIONS = [
  { longitude: "13.4115", latitude: "52.5235", city: "Berlin" },
  { longitude: "2.3510", latitude: "48.8567", city: "Paris" },
  { longitude: "-0.1262", latitude: "51.5002", city: "London" },
  { longitude: "6.0658", latitude: "49.6076", city: "Luxembourg" },
  { longitude: "-3.7033", latitude: "40.4167", city: "Madrid" },
  { longitude: "16.3728", latitude: "48.2092", city: "Vienna" },
  { longitude: "4.3676", latitude: "50.8371", city: "Brussels" },
  { longitude: "37.6176", latitude: "55.7558", city: "Moscow" },
  { longitude: "23.3238", latitude: "42.7105", city: "Sofia" },
  { longitude: "12.5681", latitude: "55.6763", city: "Copenhagen" },
  { longitude: "23.7166", latitude: "37.9792", city: "Athens" },
  { longitude: "19.0408", latitude: "47.4984", city: "Budapest" },
  { longitude: "-21.8952", latitude: "64.1353", city: "Reykjavik" },
  { longitude: "-6.2675", latitude: "53.3441", city: "Dublin" },
  { longitude: "12.4823", latitude: "41.8955", city: "Rome" },
  { longitude: "4.8910", latitude: "52.3738", city: "Amsterdam" },
  { longitude: "10.7387", latitude: "59.9138", city: "Oslo" },
  { longitude: "21.0122", latitude: "52.2297", city: "Warsaw" },
  { longitude: "-9.1355", latitude: "38.7072", city: "Lisabon" },
  { longitude: "7.4481", latitude: "46.9480", city: "Bern" },
  { longitude: "30.5367", latitude: "50.4422", city: "Kiev" },
  { longitude: "18.0645", latitude: "59.3328", city: "Stockholm" },
  { longitude: "-77.0241", latitude: "38.8921", city: "Washington" },
  { longitude: "-74.01", latitude: "40.71", city: "New York" },
  { longitude: "-121.4871", latitude: "38.5737", city: "Sacramento" },
  { longitude: "-118.24", latitude: "34.05", city: "Los Angeles" },
  { longitude: "-87.65", latitude: "41.85", city: "Chicago" },
  { longitude: "-95.36", latitude: "29.76", city: "Houston" },
  { longitude: "-112.07", latitude: "33.45", city: "Phoenix" },
  { longitude: "-75.16", latitude: "39.95", city: "Philadelphia" },
  { longitude: "-123.12", latitude: "49.25", city: "Vancouver" },
  { longitude: "-75.6979", latitude: "45.4235", city: "Ottawa" },
  { longitude: "-58.4173", latitude: "-34.6118", city: "Buenos Aires" },
  { longitude: "-47.9292", latitude: "-15.7801", city: "Brasilia" },
  { longitude: "-70.6420", latitude: "-33.4691", city: "Santiago" },
  { longitude: "-74.0962", latitude: "4.6473", city: "Bogota" },
  { longitude: "-99.1276", latitude: "19.4271", city: "Ciudad de Mexico" },
  { longitude: "-57.6362", latitude: "-25.3005", city: "Asuncion" },
  { longitude: "-77.0465", latitude: "-12.0931", city: "Lima" },
  { longitude: "-56.0675", latitude: "-34.8941", city: "Montevideo" },
  { longitude: "69.1952", latitude: "34.5155", city: "Kabul" },
  { longitude: "90.3978", latitude: "23.7106", city: "Dhaka" },
  { longitude: "116.3958", latitude: "39.9056", city: "Peking" },
  { longitude: "44.7930", latitude: "41.7010", city: "Tiflis" },
  { longitude: "77.2250", latitude: "28.6353", city: "New Delhi" },
  { longitude: "106.8063", latitude: "-6.1862", city: "Jakarta" },
  { longitude: "51.4358", latitude: "35.7061", city: "Teheran" },
  { longitude: "44.3922", latitude: "33.3157", city: "Baghdad" },
  { longitude: "35.2007", latitude: "31.7857", city: "Jerusalem" },
  { longitude: "139.6823", latitude: "35.6785", city: "Tokyo" },
  { longitude: "101.7077", latitude: "3.1502", city: "Kuala Lumpur" },
  { longitude: "106.9220", latitude: "47.9138", city: "Ulan Bator" },
  { longitude: "85.3157", latitude: "27.7058", city: "Kathmandu" },
  { longitude: "103.8500", latitude: "1.2894", city: "Singapore" },
  { longitude: "126.9828", latitude: "37.5139", city: "Seoul" },
  { longitude: "32.8560", latitude: "39.9439", city: "Ankara" },
  { longitude: "54.3705", latitude: "24.4764", city: "Abu Dhabi" },
  { longitude: "3.0597", latitude: "36.7755", city: "Algiers" },
  { longitude: "13.2306", latitude: "-8.8159", city: "Luanda" },
  { longitude: "31.2272", latitude: "30.0571", city: "Cairo" },
  { longitude: "36.7965", latitude: "-1.2762", city: "Nairobi" },
  { longitude: "13.1897", latitude: "32.8830", city: "Tripoli" },
  { longitude: "17.0805", latitude: "-22.5749", city: "Windhoek" },
  { longitude: "28.1876", latitude: "-25.7463", city: "Pretoria" },
  { longitude: "149.1286", latitude: "-35.2820", city: "Canberra" },
  { longitude: "174.7762", latitude: "-41.2865", city: "Wellington" },
];

const getImagePathFromNumber = (number) => {
  return `assets/weather-icons/Weather icons-${number}.png`;
};

const getImageFromWMOCode = (code) => {
  switch (code) {
    case 0:
      return getImagePathFromNumber("02");
    case 1:
      return getImagePathFromNumber("05");
    case 2:
      return getImagePathFromNumber("03");
    case 3:
      return getImagePathFromNumber("04");
    case 45:
    case 48:
      return getImagePathFromNumber("09");
    case 51:
    case 53:
    case 55:
    case 56:
    case 57:
      return getImagePathFromNumber("08");
    case 61:
    case 63:
    case 65:
    case 66:
    case 67:
      return getImagePathFromNumber("12");
    case 71:
    case 73:
    case 75:
    case 85:
    case 86:
      return getImagePathFromNumber("10");
    case 77:
      return getImagePathFromNumber("11");
    case 80:
    case 81:
    case 82:
      return getImagePathFromNumber("12");
    case 95:
    case 96:
    case 99:
      return getImagePathFromNumber("07");
  }
};
