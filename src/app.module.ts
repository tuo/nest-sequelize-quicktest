import { AuthGuard } from './common/auth.guard';
import { UsersModule } from './users/users.module';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import configuration from './config/configuration';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    SequelizeModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configureService: ConfigService) => ({
        dialect: 'postgres',
        host: configureService.get('DB_HOST'),
        port: configureService.get('DB_PORT'),
        username: configureService.get('DB_USER'),
        password: configureService.get('DB_PASS'),
        database: configureService.get('DB_NAME'),
        autoLoadModels: true,
        synchronize: false,
      }),
    }),
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    AppService,
  ],
})
export class AppModule {}
