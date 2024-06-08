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
        },

        longitude: {
            type: String,
        }

    }
);

module.exports = model("Familia", familiaSchema)