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
    async getById(@Param('id') id: number): Promise<Atividade> {
        console.log(id);
        return this.atividadeService.getById(id);
    }

    @Post()
    async create(@Body() atividade: Atividade): Promise<Atividade> {
        return this.atividadeService.create(atividade);
    }

    @Put(':id')
    async update(@Param() id: number,
                 @Body() atividade: Atividade): Promise<Atividade> {
        atividade.id = id;
        return this.atividadeService.update(atividade);
    }

    @Delete(':id')
    async delete(@Param() id: number){
        this.atividadeService.delete(id);
    }


}
