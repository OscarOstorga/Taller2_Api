const httpError = require('http-errors');
const Persona = require('../models/persona.model');

const createPersona = async(req, res, next) => {
    try{
        const { body } = req;
        const newPersona = new Persona(body);
        const savedPersona = await newPersona.save();

        if(!savedPersona) throw httpError(500, "Persona not Created");

        res.status(201).json({ message: "Persona Created", data: savedPersona});

    } catch(error) {
        next(error)
    }
}

const getPersona = async (req, res, next) => {
    try{
        const { id } = req.params;
        const persona = await Persona.findById(id);
        if(!persona) throw httpError(404, "Persona not found");
        res.status(200).json({data: Persona});
    } catch(error) {
        next(error)
    }
}

const updatePersona = async (req, res, next) => {
    try{
        const { id } = req.params;
        const { body } = req;
        const persona = await Persona.findById(id);
        if(!persona) throw httpError(404, "Persona not found");

        const updatedPersona =  await Persona.findByIdAndUpdate(id, body, {new: true})

        if(!updatedPersona) throw httpError(500, "Persona not found");
        res.status(200).json({message: "Persona Updated", data: updatedPersona});
    } catch(error) {
        next(error)
    }
}

const deletePersona = async(req, res, next) => {
    try{
        const { id } = req.params;
        const persona = await Persona.findById(id);

        if(!persona) throw httpError(404, "Persona not found");

        const deletedPersona = await Persona.findByIdAndDelete(id);

        if(!deletedPersona) throw httpError(500, "“Persona not deleted”");

        res.status(200).json({message: "Persona deleted", data: deletedPersona});

    }catch(error){
        next(error);
    }
}

const getPersonas = async (req, res, next) => {
    try{

        const {page} = req.params || 0;
        const {limit} = req.params || 10;

        const Personas = await Persona.find()
        .skip(page*limit)
        .limit(limit);

        if(!Personas) throw httpError(404, "No users found");
        res.status(200).json({ message:"Users Found", data: Personas});

    } catch(error) {
        next(error);
    }
}

module.exports = {
    createPersona,
    getPersona,
    getPersonas,
    updatePersona,
    deletePersona
}
