import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {AtividadeService} from './shared/atividade.service';
import {Atividade} from './shared/atividade';

@Controller('atividades')
export class AtividadesController {

    constructor(
        private atividadeService: AtividadeService
    ) {
    }

    @Get()
    async getAll(): Promise<Atividade[]> {
        return this.atividadeService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: string): Promise<Atividade> {
        return this.atividadeService.getById(id);
    }

    @Post()
    async create(@Body() atividade: Atividade): Promise<Atividade> {
        return this.atividadeService.create(atividade);
    }

    @Put(':id')
    async update(@Param() id: string,
                 @Body() atividade: Atividade): Promise<Atividade> {
        return this.atividadeService.update(id, atividade);
    }

    @Delete(':id')
    async delete(@Param() id: string){
        this.atividadeService.delete(id);
    }


}
