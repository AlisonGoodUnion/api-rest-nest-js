import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AtividadesModule } from './atividades/atividades.module';

@Module({
  imports: [AtividadesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
