const Participant = require('../models/participant')

module.exports.getAll = async (req, res, next) => {
    try {
        const participantList = await Participant.find({});
        return res.json({participantList});
    }
    catch(err){
        console.log(err);
        return next(err);
    }
}