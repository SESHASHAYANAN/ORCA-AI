async function identifyPlant(image) {
    const prompt = "Identify this plant and provide its name and important details.";
    
    try {
        const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro-vision:generateContent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${AIzaSyAxuz2fNovGjD2EDY4yVfVJjIRPgSNoluw}`
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [
                            { text: prompt },
                            { inline_data: { mime_type: "image/jpeg", data: image.split(',')[1] } }
                        ]
                    }
                ]
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        if (data.candidates && data.candidates[0] && data.candidates[0].content) {
            displayResult(data.candidates[0].content.parts[0].text);
        } else {
            throw new Error('Unexpected API response format');
        }
    } catch (error) {
        console.error('Error:', error);
        displayResult('An error occurred while identifying the plant: ' + error.message);
    }
}