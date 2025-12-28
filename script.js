async function runAnalysis() {
    const skill = document.getElementById('skillInput').value;
    const resultsArea = document.getElementById('resultsArea');
    
    if (!skill) {
        alert("Please enter a skill to analyze.");
        return;
    }

    // Show loading state
    document.querySelector('button').innerText = "CALCULATING...";

    try {
        const response = await fetch('/analyze', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ skill: skill })
        });

        const data = await response.json();

        // Update UI
        resultsArea.classList.remove('hidden');
        document.getElementById('graphOutput').innerText = data.graph;
        document.getElementById('demandTag').innerText = `MARKET DEMAND: ${data.demand}`;
        document.getElementById('roadmapOutput').innerText = data.roadmap;

    } catch (error) {
        console.error("Error connecting to backend:", error);
    } finally {
        document.querySelector('button').innerText = "ANALYZE PATH";
    }
}
