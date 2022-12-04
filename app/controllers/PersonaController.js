const Persona = require('../models/Persona');

function listall(req, res) {
    Persona.find({})
        .then(personas => {
            if(personas.length) return res.status(200).send({personas})
            return res.status(204).send({message: 'NO CONTENT'});
        }).catch(err => res.status(500).send({err}))
}

function create(req, res) {
    let persona = new Persona(req.body);
    Persona.save()
        .then(persona => 
            res.status(201).send({persona})
        ).catch(err => res.status(500).send({err}))
    
}

function show(req, res) {
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.persona) return res.status(404).send({message: 'Not Found'});
    let personas = req.body.Personas;
    return res.status(200).send({personas});
}

function update(req, res) {
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.Personas) return res.status(404).send({message: 'Not Found'});
    let Persona = req.body.Personas[0];
    Persona = Object.assign(Persona, req.body);
    Persona.save()
        .then(Persona => res.status(200).send({message: 'Persona Updated', Persona})
    ).catch(err => res.status(500).send({err}))
}

function deleted(req, res) {
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.Personas) return res.status(404).send({message: 'Not Found'});
    req.body.Personas[0].remove()
        .then(Persona => {
            res.status(200).send({message:'Persona removed', Persona})
        }
        ).catch(err => res.status(500).send({err}));
}

function find(req, res, next){
    let query = {};
    query[req.params.key] = req.params.value
    Persona.find(query).then(Personas => {
        if(!Personas.length) return next();
        req.body.Personas = Personas;
        return next();
    }).catch(err =>{
        req.body.error = err;
        next();
    })
}

module.exports = {
    listall,
    show,
    create,
    update,
    deleted,
    find,
}