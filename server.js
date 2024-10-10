const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

// Initialize Express
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// PostgreSQL connection setup
const pool = new Pool({
    user: 'postgres', // your PostgreSQL username
    host: 'localhost',
    database: 'patient_reports', // your database name
    password: 'roshan@730#', // your PostgreSQL password
    port: 5432, // default PostgreSQL port
});

// API to get all patient reports
app.get('/api/reports', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM reports');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// API to add a new patient report
app.post('/api/reports', async (req, res) => {
    const { treatment_date, device_program_name, night_cycle_uf, pre_weight, pre_blood_pressure, night_conc_2, last_fill_conc, manual_exchanges, flags } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO reports (treatment_date, device_program_name, night_cycle_uf, pre_weight, pre_blood_pressure, night_conc_2, last_fill_conc, manual_exchanges, flags) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
            [treatment_date, device_program_name, night_cycle_uf, pre_weight, pre_blood_pressure, night_conc_2, last_fill_conc, manual_exchanges, flags]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// API to update an existing report
app.put('/api/reports/:id', async (req, res) => {
    const id = req.params.id;
    const { treatment_date, device_program_name, night_cycle_uf, pre_weight, pre_blood_pressure, night_conc_2, last_fill_conc, manual_exchanges, flags } = req.body;
    try {
        const result = await pool.query(
            'UPDATE reports SET treatment_date = $1, device_program_name = $2, night_cycle_uf = $3, pre_weight = $4, pre_blood_pressure = $5, night_conc_2 = $6, last_fill_conc = $7, manual_exchanges = $8, flags = $9 WHERE treatment_id = $10 RETURNING *',
            [treatment_date, device_program_name, night_cycle_uf, pre_weight, pre_blood_pressure, night_conc_2, last_fill_conc, manual_exchanges, flags, id]
        );
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// API to delete a report
app.delete('/api/reports/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await pool.query('DELETE FROM reports WHERE treatment_id = $1', [id]);
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
// API to add a new patient report
app.post('/api/reports', async (req, res) => {
    const { treatment_date, device_program_name, night_cycle_uf, pre_weight, pre_blood_pressure, night_conc_2, last_fill_conc, manual_exchanges, flags } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO reports (treatment_date, device_program_name, night_cycle_uf, pre_weight, pre_blood_pressure, night_conc_2, last_fill_conc, manual_exchanges, flags) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
            [treatment_date, device_program_name, night_cycle_uf, pre_weight, pre_blood_pressure, night_conc_2, last_fill_conc, manual_exchanges, flags]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
