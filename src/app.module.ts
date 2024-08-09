import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from './categoria/entities/Categoria.entity';
import { categoriaModule } from './categoria/entities/Categoria.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_farma_leste',
      entities: [Categoria],
      synchronize: true,
    }),
    categoriaModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}