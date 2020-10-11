import {Document} from 'mongoose'

export class Atividade extends Document{
    descricao: string;
    completa: boolean;
}
