const express = require('express');
const router = express.Router();
const db = require('../database');

// Get all users
router.get('/', async (req, res) => {
    try {
        const users = await db.all('SELECT * FROM users');
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get a single user
router.get('/:id', async (req, res) => {
    try {
        const user = await db.get('SELECT * FROM users WHERE id = ?', [req.params.id]);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Create a new user
router.post('/', async (req, res) => {
    try {
        const { name, email } = req.body;
        if (!name || !email) {
            return res.status(400).json({ error: 'Name and email are required' });
        }
        
        const result = await db.run(
            'INSERT INTO users (name, email) VALUES (?, ?)',
            [name, email]
        );
        
        const user = await db.get('SELECT * FROM users WHERE id = ?', [result.id]);
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update a user
router.put('/:id', async (req, res) => {
    try {
        const { name, email } = req.body;
        if (!name || !email) {
            return res.status(400).json({ error: 'Name and email are required' });
        }

        const result = await db.run(
            'UPDATE users SET name = ?, email = ? WHERE id = ?',
            [name, email, req.params.id]
        );
        
        const user = await db.get('SELECT * FROM users WHERE id = ?', [req.params.id]);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete a user
router.delete('/:id', async (req, res) => {
    try {
        const result = await db.run('DELETE FROM users WHERE id = ?', [req.params.id]);
        res.json({ message: 'User deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
