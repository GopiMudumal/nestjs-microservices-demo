import { Module } from '@nestjs/common';
import { NotificationsController } from './notifications.controller';
import { NotificationsService } from './notifications.service';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { LoggerModule } from '@app/common';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      // envFilePath: './apps/notifications/.env',
      validationSchema: Joi.object({
        PORT: Joi.number().required(),
        SMTP_USER: Joi.string().required(),
        GOOGLE_OATH_CLIENT_ID: Joi.string().required(),
        GOOGLE_OATH_CLIENT_SECRET: Joi.string().required(),
        GOOGLE_OATH_CLIENT_TOKEN: Joi.string().required(),
      }),
    }),
    LoggerModule,
  ],
  controllers: [NotificationsController],
  providers: [NotificationsService],
})
export class NotificationsModule {}
