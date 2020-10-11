import { Module } from '@nestjs/common';
import {AtividadesController} from './atividades.controller';
import {AtividadeService} from './shared/atividade.service';
import {MongooseModule} from '@nestjs/mongoose';
import {AtividadeSchema} from './schemas/atividade.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{
            name: 'Atividade' , schema: AtividadeSchema
        }])
    ],
    controllers: [AtividadesController],
    providers: [AtividadeService]
})
export class AtividadesModule {}
