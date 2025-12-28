const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));

// Mock Database for the Hackathon
const careerDatabase = {
    "python": { role: "AI Engineer", demand: "HIGH (+45%)", roadmap: "1. Focus on PyTorch. 2. Build RAG pipelines. 3. Deploy on AWS Sagemaker." },
    "react": { role: "Frontend Architect", demand: "STABLE", roadmap: "1. Master TypeScript. 2. Learn Next.js App Router. 3. Study Framer Motion for UI." },
    "aws": { role: "Cloud Architect", demand: "CRITICAL", roadmap: "1. Get SA Professional Cert. 2. Master Terraform (IaC). 3. Learn Serverless security." }
};

app.post('/analyze', (req, res) => {
    const userSkill = req.body.skill.toLowerCase();
    const match = careerDatabase[userSkill] || { 
        role: "Specialist", 
        demand: "EVOLVING", 
        roadmap: "Our engine is currently indexing this niche. Focus on core fundamentals and vector math." 
    };

    res.json({
        graph: `[${userSkill.toUpperCase()}] ➔ [${match.role.toUpperCase()}]`,
        demand: match.demand,
        roadmap: match.roadmap
    });
});

app.listen(PORT, () => {
    console.log(`
    🚀 LUMEN PATH SYSTEM ONLINE
    🌐 URL: http://localhost:${PORT}
    -------------------------------
    Ready for the Hackathon demo!
    `);
});
