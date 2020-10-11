import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AtividadesModule } from './atividades/atividades.module';
import { MongooseModule } from '@nestjs/mongoose';



@Module({
  imports: [
      //colocar o pass do mongo
      MongooseModule.forRoot('mongodb+srv://user_mongodb:pass@cluster0.pk3hj.mongodb.net/test?retryWrites=true&w=majority'),
      AtividadesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
