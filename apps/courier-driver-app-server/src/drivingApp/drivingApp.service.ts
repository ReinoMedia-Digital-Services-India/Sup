import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DrivingAppServiceBase } from "./base/drivingApp.service.base";

@Injectable()
export class DrivingAppService extends DrivingAppServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
