import { Module } from "@nestjs/common";
import { DrivingAppModuleBase } from "./base/drivingApp.module.base";
import { DrivingAppService } from "./drivingApp.service";
import { DrivingAppController } from "./drivingApp.controller";
import { DrivingAppResolver } from "./drivingApp.resolver";

@Module({
  imports: [DrivingAppModuleBase],
  controllers: [DrivingAppController],
  providers: [DrivingAppService, DrivingAppResolver],
  exports: [DrivingAppService],
})
export class DrivingAppModule {}
