interface LoginInput {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
  data: any;
}

interface DashboardData {
  station: Station;
  stationCount: number;
  userCount: number;
}

interface GPS {
  lat: number;
  lon: number;
}

interface PredictNextHour {
  Date: Date;
  value: number;
}

interface StationData {
  predictNextHour: PredictNextHour;
  _id: string;
  O2: number;
  Temp: number;
  Hum: number;
  Pre: number;
  PM25: number;
  PM10: number;
  PM100: number;
  AQI: number;
  createdAt: any;
}

interface Station {
  GPS: GPS;
  createdAt: Date;
  _id: string;
  data: StationData[];
  currentAQI: number;
  NameDevice: string;
  predicts: any[];
  area: string;
}

interface User {
  address: string;
  email: string;
  phone: string;
  name: string;
  role: string;
  _id: string;
}
