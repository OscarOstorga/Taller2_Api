const {model, Schema} = require("mongoose");

const familiaSchema = new Schema(
    {
        Ubicacion: {
            type: String,
            required: true
        },

        Materiales: {
            type: String,
            required: true
        },

        Riesgos: {
            type: String,
            required: true
        },

        latitude: {
            type: String,
            required: true
        },

        longitude: {
            type: String,
            required: true
        }

    }
);

module.exports = model("Familia", familiaSchema)