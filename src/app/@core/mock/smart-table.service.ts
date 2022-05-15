import { Injectable } from "@angular/core";
import { SmartTableData } from "../data/smart-table";

@Injectable()
export class SmartTableService extends SmartTableData {
  data = [
    {
      id: 1,
      stationName: "Linh Trung",
      area: "Thủ Đức",
      status: false,
    },
    {
      id: 2,
      stationName: "Linh Trung",
      area: "Thủ Đức",
      status: true,
    },
    {
      id: 1,
      stationName: "Linh Trung 3",
      area: "Thủ Đức",
      status: true,
    },
    {
      id: 1,
      stationName: "Linh Trung",
      area: "Thủ Đức",
      status: true,
    },
    {
      id: 1,
      stationName: "Linh Trung",
      area: "Thủ Đức",
      status: true,
    },
    {
      id: 1,
      stationName: "Linh Trung",
      area: "Thủ Đức",
      status: true,
    },
    {
      id: 1,
      stationName: "Linh Trung",
      area: "Thủ Đức",
      status: true,
    },
    {
      id: 1,
      stationName: "Linh Trung",
      area: "Thủ Đức",
      status: true,
    },
    {
      id: 1,
      stationName: "Linh Trung",
      area: "Thủ Đức",
      status: true,
    },
  ];

  getData() {
    return this.data;
  }
}
