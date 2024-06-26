const {model, Schema} = require("mongoose")


const personaSchema = new Schema(   
    {
        Dui : {type: String, required: true},
        Integrante: {type: String, required: true},
        Nombre: {type: String, required: true},
        FechaDeNacimiento: {type: String, required: true},
        GradoEscolar: {type: String, required: true},
        LeerEscribir: {type: String, required: true},
        Familia: {type: String, required: true}
    }
);

module.exports = model("Persona", personaSchema)