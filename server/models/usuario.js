const mongoose = require('mongoose');

const uniqueValidator = require('mongoose-unique-validator');

let rolesValidos = {
    values: ['SI', 'NO'],
    message: '{VALUE} no es un rol válido'
};

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'En nombre es nesesario']
    },
    correo: {
        type: String,
        unique: true,
        required: [true, 'El correo es necesario']
    },
    edad: {
        type: Number,
        required: [true, 'La edad es nesesaria']
    },
    cvisual: {
        type: String,
        default: "NO",
        enum: rolesValidos
    },
    estado: {
        type: Boolean,
        default: true
    }
});
usuarioSchema.plugin(uniqueValidator, { message: '{PATH} de de ser unico' });
module.exports = mongoose.model('Usuario', usuarioSchema);