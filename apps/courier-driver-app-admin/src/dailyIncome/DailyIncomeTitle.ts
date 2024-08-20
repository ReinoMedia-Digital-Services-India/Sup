import { DailyIncome as TDailyIncome } from "../api/dailyIncome/DailyIncome";

export const DAILYINCOME_TITLE_FIELD = "id";

export const DailyIncomeTitle = (record: TDailyIncome): string => {
  return record.id?.toString() || String(record.id);
};
