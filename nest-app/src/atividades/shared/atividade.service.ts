import {Injectable} from '@nestjs/common';
import {Atividade} from './atividade';
import {InjectModel} from '@nestjs/mongoose';
import {Model, Types} from 'mongoose';

@Injectable()
export class AtividadeService {

    constructor(@InjectModel('Atividade') private readonly atividadeModel: Model<Atividade>) {

    }

    async getAll() {
        return await this.atividadeModel.find().exec();
    };

    async getById(id: string) {
        return await this.atividadeModel.findById(id).exec();
    }

    async create(atividade: Atividade) {
        const atividadeCriada = new this.atividadeModel(atividade);
        return await atividadeCriada.save();
    }

    async update(id: string, atividade: Atividade) {
        await this.atividadeModel.updateOne({_id: id}, atividade).exec();
        return this.getById(id);
    }

    async delete(id: string) {
        await this.atividadeModel.deleteOne({_id: id}).exec();
    }

}

