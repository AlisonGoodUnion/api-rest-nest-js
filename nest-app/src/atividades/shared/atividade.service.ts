import {Injectable} from '@nestjs/common';
import {Atividade} from './atividade';
import index from '@babel/generator';

@Injectable()
export class AtividadeService {

    atividades: Atividade[] = [
        {id: 1, descricao: 'Tarefa 1', completa: false},
        {id: 2, descricao: 'Tarefa 2', completa: false},
        {id: 3, descricao: 'Tarefa 3', completa: true},
        {id: 4, descricao: 'Tarefa 4', completa: false},

    ];

    getAll() {
        return this.atividades;
    };

    getById(id: number): Atividade {
        return this.atividades.find(atividade => atividade.id = id);
    }

    create(atividade: Atividade): Atividade {

        let ultimaAtividade = this.atividades.length > 0 ?
            this.atividades[this.atividades.length - 1].id : 0;
        atividade.id = ultimaAtividade + 1;

        this.atividades.push(atividade);
        return atividade;
    }

    update(atividade: Atividade): Atividade {
        let atividadeBD = this.getById(atividade.id);
        if (atividadeBD) {
            atividadeBD.descricao = atividade.descricao;
            atividadeBD.completa = atividade.completa;
        }
        return atividadeBD;
    }

    delete(id: number) {
        console.log("Atividades:", this.atividades);

        let indice = this.atividades.findIndex(value => value.id == id);
        console.log("Removida atividade" + this.atividades[indice] + ": das" +  this.atividades);

        this.atividades.splice(indice, 1); //remove 1 a partir do indice
    }

}

