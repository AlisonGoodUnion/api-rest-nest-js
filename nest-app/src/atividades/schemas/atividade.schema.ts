import * as mongoose from 'mongoose';

export const AtividadeSchema = new mongoose.Schema({
        descricao: String,
    completa: Boolean
});
