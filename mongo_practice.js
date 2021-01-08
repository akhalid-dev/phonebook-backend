const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log(`Please provide the passwrod as the third argument, when running the application.`);
    process.exit(1)
}

const password = process.argv[2]
const url = `mongodb+srv://fullstack:${password}@cluster0.zngcy.mongodb.net/note-app?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const noteSchema = new mongoose.Schema({
    content: String,
    date: Date,
    important: Boolean
})

const Note = mongoose.model('Note', noteSchema)


Note.find({content: 'HTML is easy'})
.then(res => {
    res.forEach(note => {
        console.log(note);
    });
    mongoose.connection.close();
})


// const note = new Note({
//     content: 'GET and POST are the most important HTTP methods.',
//     date: new Date(),
//     important: true
// })


// note.save()
// .then(res => {
//     console.log(res);
//     mongoose.connection.close()
// })

