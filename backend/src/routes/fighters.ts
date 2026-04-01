import { Router } from 'express';

const router = Router();

// A mock database for storing fighter data
let fighters = [];

// Create a fighter
router.post('/', (req, res) => {
    const { name, weightClass, record } = req.body;
    const id = fighters.length + 1;
    const newFighter = { id, name, weightClass, record };
    fighters.push(newFighter);
    res.status(201).json(newFighter);
});

// Read all fighters
router.get('/', (req, res) => {
    res.json(fighters);
});

// Read a single fighter by id
router.get('/:id', (req, res) => {
    const fighter = fighters.find(f => f.id === parseInt(req.params.id));
    if (!fighter) return res.status(404).json({ message: 'Fighter not found' });
    res.json(fighter);
});

// Update a fighter
router.put('/:id', (req, res) => {
    const fighter = fighters.find(f => f.id === parseInt(req.params.id));
    if (!fighter) return res.status(404).json({ message: 'Fighter not found' });
    const { name, weightClass, record } = req.body;
    fighter.name = name;
    fighter.weightClass = weightClass;
    fighter.record = record;
    res.json(fighter);
});

// Delete a fighter
router.delete('/:id', (req, res) => {
    const fighterIndex = fighters.findIndex(f => f.id === parseInt(req.params.id));
    if (fighterIndex === -1) return res.status(404).json({ message: 'Fighter not found' });
    fighters.splice(fighterIndex, 1);
    res.status(204).send();
});

export default router;