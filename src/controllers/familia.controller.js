const httpError = require("http-errors")
const Familia = require("../models/familia.model")

const createFamilia = async(req, res, next) => {
    try{
        const { body } = req;
        const newFamilia = new Familia(body);
        const savedFamilia = await newFamilia.save();

        if(!savedFamilia) throw httpError(500, "Familia not Created");

        res.status(201).json({ message: "Familia Created", data: savedFamilia});

    } catch(error) {
        next(error)
    }
}

const getFamilia = async (req, res, next) => {
    try{
        const { id } = req.params;
        const familia = await Familia.findById(id);
        if(!familia) throw httpError(404, "Familia not found");
        res.status(200).json({data: Familia});
    } catch(error) {
        next(error)
    }
}

const updateFamilia = async (req, res, next) => {
    try{
        const { id } = req.params;
        const { body } = req;
        const familia = await Familia.findById(id);
        if(!familia) throw httpError(404, "Familia not found");

        const updatedFamilia =  await Familia.findByIdAndUpdate(id, body, {new: true})

        if(!updatedFamilia) throw httpError(500, "Familia not found");
        res.status(200).json({message: "Familia Updated", data: updatedFamilia});
    } catch(error) {
        next(error)
    }
}

const deleteFamilia = async(req, res, next) => {
    try{
        const { id } = req.params;
        const familia = await Familia.findById(id);

        if(!familia) throw httpError(404, "Familia not found");

        const deletedFamilia = await Familia.findByIdAndDelete(id);

        if(!deletedFamilia) throw httpError(500, "“Familia not deleted”");

        res.status(200).json({message: "Familia deleted", data: deletedFamilia});

    }catch(error){
        next(error);
    }
}

const getFamilias = async (req, res, next) => {
    try{

        const {page} = req.params || 0;
        const {limit} = req.params || 10;

        const Familias = await Familia.find()
        .skip(page*limit)
        .limit(limit);

        if(!Familias) throw httpError(404, "No users found");
        res.status(200).json({ message:"Users Found", data: Familias});

    } catch(error) {
        next(error);
    }
}

module.exports = {
    createFamilia,
    getFamilia,
    getFamilias,
    updateFamilia,
    deleteFamilia
}