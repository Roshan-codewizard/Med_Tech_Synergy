const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// PostgreSQL Connection
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'medtech_synergy',
    password: 'roshan@730#',
    port: 5432
});

app.use(cors());
app.use(bodyParser.json());

// API to add a patient report
app.post('/api/reports', async (req, res) => {
    try {
        const {
            treatment_date,
            device_program_name,
            night_cycle_uf,
            pre_weight,
            pre_blood_pressure,
            night_conc_2,
            last_fill_conc,
            manual_exchanges,
            flags
        } = req.body;

        const query = `
            INSERT INTO patient_reports (
                treatment_date, device_program_name, night_cycle_uf, 
                pre_weight, pre_blood_pressure, night_conc_2, 
                last_fill_conc, manual_exchanges, flags
            ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *;
        `;

        const result = await pool.query(query, [
            treatment_date, device_program_name, night_cycle_uf, 
            pre_weight, pre_blood_pressure, night_conc_2, 
            last_fill_conc, manual_exchanges, flags
        ]);

        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error inserting report:', error);
        res.status(500).json({ error: 'Database error' });
    }
});

// API to fetch patient reports
app.get('/api/reports', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM patient_reports ORDER BY id DESC;');
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching reports:', error);
        res.status(500).json({ error: 'Database error' });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
