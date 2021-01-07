const express = require('express');
const app = express()
const PORT = process.env.PORT || 3002;
const cors = require('cors')
const morgan = require('morgan');


let persons = [
    {
      "name": "Arto Hellas",
      "number": "040-123456",
      "id": 1
    },
    {
      "name": "Ada Lovelace",
      "number": "39-44-5323523",
      "id": 2
    },
    {
      "name": "Mary Poppendieck",
      "number": "39-23-6423122",
      "id": 3
    }
];

const getId = () => {
    return Math.max(...persons.map(p => p.id)) + 1
}
app.use(express.static('build'))
app.use(cors())
app.use(express.json())

morgan.token('body', (req, res) => JSON.stringify(req.body))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

app.use((req, res, next) => {
    console.log("Method:", req.method);
    console.log("Path:", req.path);
    console.log("Body:", req.body);
    console.log("---");
    next()
})

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const person = persons.filter(p => p.id === id)
    
    if (!person || person.length == 0) {
        return res.status(404).end()
    }
    res.json(person)


})

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(p => p.id !== id)
    res.status(204).end()
})

app.post('/api/persons', (req, res) => {
    const person = req.body
    if (!person.name || !person.number) {
        return res.status(400).json({
            error: `The request is missing the name or number field.`
        })
    }

    const doesNameExist = persons.filter(p => person.name === p.name)
    console.log(doesNameExist);
    if (doesNameExist.length !== 0) {
        return res.status(409).json({
            error: `The phonebook already contains a person with ${person.name}.`
        })
    }
    persons = persons.concat({
        name: person.name,
        number: person.number,
        id: getId()  
    })
    res.json(person)
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

app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}.`);
})