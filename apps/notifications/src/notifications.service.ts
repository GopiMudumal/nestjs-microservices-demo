import { Injectable } from '@nestjs/common';
import { NotifyEmailDto } from './dto/notify-email.dto';
import * as nodemailer from 'nodemailer';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class NotificationsService {
  constructor(private readonly configServices: ConfigService) {}

  private readonly transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: this.configServices.get('SMTP_USER'),
      clientId: this.configServices.get('GOOGLE_OATH_CLIENT_ID'),
      clientSecret: this.configServices.get('GOOGLE_OATH_CLIENT_SECRET'),
      refreshToken: this.configServices.get('GOOGLE_OATH_CLIENT_TOKEN'),
    },
    tls: {
      rejectUnauthorized: false, // Allow self-signed certificates
    },
  });
  async notifyEmail({ email, text }: NotifyEmailDto) {
    console.log({ email });
    await this.transporter.sendMail({
      from: this.configServices.get('SMTP_USER'),
      to: email,
      subject: 'Sleepr Notification',
      text,
    });
  }
}
