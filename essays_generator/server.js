const PORT = 8000;
const express = require('express')
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(express.json());
app.use(cors()); // Invoke cors as a function

const LANGUAGE_MODEL_API_KEY = process.env.LANGUAGE_MODEL_API_KEY;
const LANGUAGE_MODEL_URL = `https://generativelanguage.googleapis.com/v1beta3/models/text-bison-001:generateText?key=${LANGUAGE_MODEL_API_KEY}`;

const prompt=`Tell me whether the following sentence'\''s sentiment is positive or negative or something in between.\ninput: I would love to walk along the beach.\noutput: Somewhat positive\ninput: I love my new record player\noutput: Positive\ninput: I really hate it when my brother steals my things\noutput: Negative\ninput:`
app.get('/prompt/:text', async (req, res) => {
    const text = req.params.text;
    console.log(text)
    const payload = {
        "prompt":{"text": prompt+`${text}\noutput:`},
        "temperature":0.7,
        "top_k":40,
        "top_p":0.95,
        "candidate_count":1,
        "max_output_tokens":1024,
        "stop_sequences":[],
        "safety_settings":[{"category":"HARM_CATEGORY_DEROGATORY","threshold":1},
        {"category":"HARM_CATEGORY_TOXICITY","threshold":1},
        {"category":"HARM_CATEGORY_VIOLENCE","threshold":2},
        {"category":"HARM_CATEGORY_SEXUAL","threshold":2},
        {"category":"HARM_CATEGORY_MEDICAL","threshold":2},
        {"category":"HARM_CATEGORY_DANGEROUS","threshold":2}],
        };
    

    const response = await fetch(LANGUAGE_MODEL_URL, {
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        method: "POST",
    });

    const data = await response.json();
    res.send(data);
    prompt=prompt+text+"\n output:"+data.candidates[0].output;
});

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
});
