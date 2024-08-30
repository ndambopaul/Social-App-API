import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class NotificationsService {
    
    @Cron(CronExpression.EVERY_10_SECONDS)
    handleCron() {
        console.log("This is just a simple NestJs cronjob.......")
    }
}
