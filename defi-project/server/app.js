const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());

// Mock user data
let stakedAmount = 0;
let interestEarned = 0;

// Endpoint to handle staking
app.post('/stake', (req, res) => {
    const { amount } = req.body;
    stakedAmount += parseFloat(amount);
    interestEarned += (parseFloat(amount) * 0.05); // 5% interest for simplicity
    res.json({
        stakedAmount: stakedAmount.toFixed(2),
        interestEarned: interestEarned.toFixed(2)
    });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
