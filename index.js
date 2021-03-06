require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001
const cors = require('cors')
const morgan = require('morgan')

const Person = require('./models/person')

app.use(express.static('build'))
app.use(cors())
app.use(express.json())

morgan.token('body', (req, res) => JSON.stringify(req.body))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))


app.get('/api/persons', (req, res, next) => {
    Person.find({})
    .then(people => {
        res.json(people)
    })
    .catch(error => next(error))
})

app.get('/api/persons/:id', (req, res) => {
    const id = req.params.id
    Person.findById(id)
    .then(person => {
        if (person) {
            res.json(person)
        } else {
            res.status(404).end()
        }
        
    })
    .catch(error => next(error))

})

app.delete('/api/persons/:id', (req, res, next) => {
    Person.findByIdAndRemove(req.params.id)
    .then(result => {
        res.status(204).end()
    })
    .catch(err => next(err))

})

app.post('/api/persons', (req, res) => {
    const person = req.body
    if (!person.name || !person.number) {
        return res.status(400).json({
            error: `The request is missing the name or number field.`
        })
    }

    const info = new Person({
        name: person.name,
        number: person.number,
    })

    info.save()
    .then(person => {
        res.json(person)
    })
    .catch(error => next(error))
})

app.put('/api/persons/:id', (req, res, error) => {
    const updatedPerson = req.body
    Person.findById(id)
    .then(person => {
        if (person) {
            res.json(person)
        } else {
            res.status(404).end()
        }
        
    })
    .catch(error => next(error))
})

app.get('/api/info', (req, res) => {
    res.send(`
    <div>
        <h1>Phonebook has info for ${persons.length} people.</h1>
        ${new Date()}
    </div>`)
})

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}
app.use(unknownEndpoint)

const errorHandler = (error, req, res, next) => {
    console.log(error.message);
    next(error)

}
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}.`);
})