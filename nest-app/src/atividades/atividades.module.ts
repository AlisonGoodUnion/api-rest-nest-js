import { Module } from '@nestjs/common';
import {AtividadesController} from './atividades.controller';
import {AtividadeService} from './shared/atividade.service';

@Module({
    controllers: [AtividadesController],
    providers: [AtividadeService]
})
export class AtividadesModule {}
