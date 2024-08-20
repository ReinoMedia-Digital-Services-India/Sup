import { Module } from "@nestjs/common";
import { DailyIncomeModuleBase } from "./base/dailyIncome.module.base";
import { DailyIncomeService } from "./dailyIncome.service";
import { DailyIncomeController } from "./dailyIncome.controller";
import { DailyIncomeResolver } from "./dailyIncome.resolver";

@Module({
  imports: [DailyIncomeModuleBase],
  controllers: [DailyIncomeController],
  providers: [DailyIncomeService, DailyIncomeResolver],
  exports: [DailyIncomeService],
})
export class DailyIncomeModule {}
