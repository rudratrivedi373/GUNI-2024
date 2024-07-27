function checkReport() {
    const wbc = document.getElementById('wbc').value;
    const rbc = document.getElementById('rbc').value;
    const hemoglobin = document.getElementById('hemoglobin').value;
    const hematocrit = document.getElementById('hematocrit').value;
    const platelets = document.getElementById('platelets').value;

    // Average ranges
    const avgRanges = {
        wbc: [4000, 11000],
        rbc: [4.5, 5.9],
        hemoglobin: [13.8, 17.2],
        hematocrit: [40.7, 50.3],
        platelets: [150000, 450000]
    };

    // Check values
    checkValue(wbc, avgRanges.wbc, 'wbcResult');
    checkValue(rbc, avgRanges.rbc, 'rbcResult');
    checkValue(hemoglobin, avgRanges.hemoglobin, 'hemoglobinResult');
    checkValue(hematocrit, avgRanges.hematocrit, 'hematocritResult');
    checkValue(platelets, avgRanges.platelets, 'plateletsResult');

    // Display details for abnormal values
    displayDetails(wbc, rbc, hemoglobin, hematocrit, platelets, avgRanges);
}

function checkValue(value, range, resultId) {
    const resultElement = document.getElementById(resultId);
    if (value >= range[0] && value <= range[1]) {
        resultElement.className = 'average';
        resultElement.textContent = '✔'; // Check mark for average
    } else {
        resultElement.className = 'not-average';
        resultElement.textContent = '✘'; // Cross mark for not average
    }
}

function displayDetails(wbc, rbc, hemoglobin, hematocrit, platelets, avgRanges) {
    const detailsElement = document.getElementById('details');
    detailsElement.innerHTML = '';

    if (rbc < avgRanges.rbc[0]) {
        detailsElement.innerHTML += `
            <h3>Red Blood Cells (RBC) - Low</h3>
            <p class="lh"><strong>Potential Diseases:</strong> Anemia, Bone Marrow Disorders, Kidney Disease</p>
            <p class="lh"><strong>Suggestions:</strong>
                <ul>
                    <li>Increase iron intake through diet (e.g., red meat, beans, spinach)</li>
                    <li>Take vitamin B12 and folic acid supplements</li>
                    <li>Consult a healthcare provider for further diagnosis and treatment</li>
                </ul>
            </p>
        `;
    }

    if (wbc < avgRanges.wbc[0]) {
        detailsElement.innerHTML += `
            <h3>White Blood Cells (WBC) - Low</h3>
            <p class="lh"><strong>Potential Diseases:</strong> Leukopenia, Bone Marrow Disorders, Autoimmune Diseases</p>
            <p class="lh"><strong>Suggestions:</strong>
                <ul>
                    <li>Increase intake of vitamin C and E</li>
                    <li>Get adequate rest and reduce stress</li>
                    <li>Consult a healthcare provider for further diagnosis and treatment</li>
                </ul>
            </p>
        `;
    }

    if (hemoglobin < avgRanges.hemoglobin[0]) {
        detailsElement.innerHTML += `
            <h3>Hemoglobin - Low</h3>
            <p class="lh"><strong>Potential Diseases:</strong> Anemia, Nutritional Deficiencies, Chronic Diseases</p>
            <p class="lh"><strong>Suggestions:</strong>
                <ul>
                    <li>Increase iron and vitamin B12 intake through diet</li>
                    <li>Consider iron supplements</li>
                    <li>Consult a healthcare provider for further diagnosis and treatment</li>
                </ul>
            </p>
        `;
    }

    if (hematocrit < avgRanges.hematocrit[0]) {
        detailsElement.innerHTML += `
            <h3>Hematocrit - Low</h3>
            <p class="lh"><strong>Potential Diseases:</strong> Anemia, Blood Loss, Nutritional Deficiencies</p>
            <p class="lh"><strong>Suggestions:</strong>
                <ul>
                    <li>Increase iron and vitamin C intake</li>
                    <li>Consider blood tests to identify potential causes</li>
                    <li>Consult a healthcare provider for further diagnosis and treatment</li>
                </ul>
            </p>
        `;
    }

    if (platelets < avgRanges.platelets[0]) {
        detailsElement.innerHTML += `
            <h3>Platelets - Low</h3>
            <p class="lh"><strong>Potential Diseases:</strong> Thrombocytopenia, Autoimmune Disorders, Bone Marrow Disorders</p>
            <p class="lh"><strong>Suggestions:</strong>
                <ul>
                    <li>Increase intake of foods high in vitamin K</li>
                    <li>Consult a healthcare provider to investigate the cause</li>
                    <li>Follow any recommended treatments or medications</li>
                </ul>
            </p>
        `;
    }
}