import { DrivingApp as TDrivingApp } from "../api/drivingApp/DrivingApp";

export const DRIVINGAPP_TITLE_FIELD = "id";

export const DrivingAppTitle = (record: TDrivingApp): string => {
  return record.id?.toString() || String(record.id);
};
