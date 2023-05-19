import { ConfigModule, ConfigService } from '@nestjs/config';

ConfigModule.forRoot({
  envFilePath: `.${process.env.NODE_ENV.trim()}.env`,
});

const configService = new ConfigService();

export const MONGODB_URI = configService.get<string>('MONGODB_URI');
