const Interview = require('../models/interview')
const CustomError = require('../customError');
const interview = require('../models/interview');

module.exports.lenCheck = (req, res, next) => {
    const {participants} = req.body;
    console.log(req.body);
    if(participants.length < 2){
        return next(new CustomError("Partipant length less than required", 400));
    }
    return next();
}

module.exports.avalCheck = async (req, res, next) => {
    const {id} = req.params;
    const {startTime, endTime, participants} = req.body;

    try {
        const overlapInterviews = await interview.find({
            $and : [
                {_id : {$ne : id}},
                {participants : {$in : participants}},
                {startTime : {$lte : endTime}},
                {endTime : {$gte : startTime}}
            ]
        })
        if(overlapInterviews.length !== 0){
            return next(new CustomError("Participant is not available for the Interview", 400));
        }
        return next();
    }
    catch (err){
        console.log(err);
        return next(err);
    }
}