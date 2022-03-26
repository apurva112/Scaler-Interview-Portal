const Interview = require('../models/interview')

module.exports.getAll = async (req, res, next) => {
    try {
        const interviewList = await Interview.find({}).populate('participants');
        return res.json({interviewList});
    }
    catch(err){
        console.log(err);
        return next(err);
    }
}

module.exports.getById = async (req, res, next) => {
    const {id} = req.params;
    try {
        const interview = await Interview.findById(id);
        return res.json(interview);
    }
    catch(err){
        console.log(err);
        return next(err);
    }
}

module.exports.createInterview = async (req, res, next) => {
    const {participants, title, startTime, endTime} = req.body;
    try {
        const newInterview = new Interview({participants, title, startTime, endTime});
        const interview = await newInterview.save();
        return res.json(interview);  
    }
    catch(err){
        console.log(err);
        return next(err);
    }
}

module.exports.editInterview = async(req, res, next) => {
    const {participants, title, startTime, endTime} = req.body;
    const {id} = req.params;
    try {
        const interview = await Interview.findByIdAndUpdate(id, {participants, title, startTime, endTime}, {new : true});
        return res.json(interview);
    }
    catch(err){
        console.log(err);
        return next(err);
    }
}



