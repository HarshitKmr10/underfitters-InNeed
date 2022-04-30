const Refugee = require("../models/refugeeModel");

// Get all Refugees
exports.getAllRefugees = async (req, res) => {
    const refugees = await Refugee.find();
    res.status(200).json({
        success: true,
        refugees
    })
}

// Get Refugee by Id
exports.getRefugeeById = async (req, res) => {
    const { id } = req.params;
    const refugee = await Refugee.findById(id);
    if (!refugee) {
        return res.status(404).json({
            success: false,
            message: "Refugee not found"
        })
    }
    res.status(200).json({
        success: true,
        refugee
    })
}

// Create a Refugee
exports.createRefugee = async (req, res) => {
    const { password, ...body } = req.body;

    const refugee = await Refugee(body);
    refugee.password = await refugee.generateHash(password);
    await refugee.save();

    res.status(201).json({
        success: true,
        refugee
    })
}  
