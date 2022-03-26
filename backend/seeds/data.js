const mongoose = require('mongoose');
const Participant = require('../models/participant');

const dbUrl = 'mongodb+srv://mongo:mongo@cluster0.e50uq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';


mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => console.log('Database Connected'));

const data = [
    {
        name: 'Rishabh Pathak',
        email: 'rp@outlook.com',
    },
    {
        name: 'Pranjal Yadav',
        email: 'py@outlook.com',
    },
    {
        name: 'Glen Dsouza',
        email: 'gd@outlook.com',
    },
    {
        name: 'Kalindi',
        email: 'kk@outlook.com'
    },
    {
        name: 'Shraddha',
        email: 'ss@outlook.com',
    },
    {
        name: 'Aryamaan Jain',
        email: 'aj@outlook.com',
    },
    {
        name: 'Priyanka Mahawar',
        email: 'pm@outlook.com',
        
    }
];

const seedParticipants = async () => {
    try {
        await Participant.deleteMany({});
    } catch (e) {
        console.log(e)
    }
    data.forEach(async (val) => {
        try {
            const participant = new Participant(val);
            await participant.save();
        } catch (e) {
            console.log(e);
        }
    });
}

seedParticipants().then(() => console.log('done'));
