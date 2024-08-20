import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DailyIncomeServiceBase } from "./base/dailyIncome.service.base";

@Injectable()
export class DailyIncomeService extends DailyIncomeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
