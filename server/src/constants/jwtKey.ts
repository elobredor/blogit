import { ConfigModule, ConfigService } from '@nestjs/config';

ConfigModule.forRoot({
  envFilePath: `.${process.env.NODE_ENV.trim()}.env`,
});

const configService = new ConfigService();

const JWT_SECRET = configService.get<string>('JWT_SECRET');

export const jwtConstants = {
  secret: JWT_SECRET,
};
