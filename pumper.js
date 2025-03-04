
//Übungsnamen/Arten
const myPumpArray = [
    //Rücken 1
    [1, 1, "Ruecken", "Rudern vorgebeugt (Maschine)"],
    [1, 2, "Ruecken", "Rudern von oben (Maschine)"],
    [1, 3, "Ruecken", "Rudern im stehen (Maschine)"],
    [1, 4, "Ruecken", "Latzug (Maschine)"],

    //Schultern 2
    [2, 1, "Schultern", "Schulterpresse enger Griff (Maschine)"],
    [2, 2, "Schultern", "Frontheben über Kopf (Scheibe)"],
    [2, 3, "Schultern", "Frontheben (Kabelturm)"],

    //Brust 3
    [3, 1, "Brust", "Bankdrücken (Langhantel)"],
    [3, 2, "Brust", "Schrägbankdrücken (Langhantel)"],
    [3, 3, "Brust", "Fliegende (Kabelturm)"],
    [3, 4, "Brust", "Butterfly (Maschine)"],

    //Beine 4
    [4, 1, "Beine", "Beinpresse (Maschine)"],
    [4, 2, "Beine", "Beinstrecker (Maschine)"],
    [4, 3, "Beine", "Beinbeuger (Maschine)"],
    [4, 4, "Beine", "Wadenheben (Maschine)"],

    //Arme 5
    [5, 1, "Arme", "Bizepscurls (Langhantel)"],
    [5, 2, "Arme", "Trizepsdrücken (Kabelturm)"],
    [5, 3, "Arme", "Trizepsdrücken (Maschine)"],
    [5, 4, "Arme", "Bizepscurls (Kabelturm)"],

    //Bauch 6
    [6, 1, "Bauch", "Crunches (Bank)"],
    [6, 2, "Bauch", "Beinheben (Kabelturm)"],
    [6, 3, "Bauch", "Russian Twist (Kurzhantel)"],
    [6, 4, "Bauch", "Planks (Bank)"]
];

const uebungenDiv = document.getElementById('uebungen');
myPumpArray.forEach(uebung => {
    const uebungElement = document.createElement('div');
    uebungElement.textContent = `${uebung[2]}: ${uebung[3]}`;
    
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
        uebungElement.style.textDecoration = checkbox.checked ? 'underline' : 'none';
    });


    uebungElement.insertBefore(checkbox, uebungElement.firstChild);
    uebungenDiv.appendChild(uebungElement);
});


const generateButton = document.getElementById('generate');



    const daysSelect = document.getElementById('days');

generateButton.addEventListener('click', () => {
    const trainingDiv = document.getElementById('training');
    trainingDiv.innerHTML = ''; // Clear previous content

    const selectedExercises = [];
    const uebungenElements = uebungenDiv.children;
    for (let i = 0; i < uebungenElements.length; i++) {
        const checkbox = uebungenElements[i].querySelector('input[type="checkbox"]');
        if (checkbox.checked) {
            selectedExercises.push(myPumpArray[i]);
        }
    }

    const days = parseInt(daysSelect.value, 10);

    for (let i = 1; i <= days; i++) {
        const dayElement = document.createElement('div');
        dayElement.textContent = `TAG${i}`;
        console.log(`TAG${i}`);
        trainingDiv.appendChild(dayElement);
    }

    console.log(selectedExercises);

    selectedExercises.forEach(exercise => {
        const exerciseElement = document.createElement('div');
        exerciseElement.textContent = ` ◦ ${exercise[2]}: ${exercise[3]}; ___________kg`;
        trainingDiv.appendChild(exerciseElement);
    });
});

// Sortable
    $( "#training" ).sortable();



    const printButton = document.getElementById('print');
    printButton.addEventListener('click', () => {
        const printContents = document.getElementById('paper').innerHTML;
        const printWindow = window.open('', '', 'height=600,width=800');
        printWindow.document.write('<html><head><title>Print</title>');
        printWindow.document.write('</head><body>');
        printWindow.document.write(printContents);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.print();
    });

  

    const nameInput = document.getElementById('namenachname');
    const nameDiv = document.getElementById('name');

    nameInput.addEventListener('input', () => {
        nameDiv.textContent = "Von: "+nameInput.value;
    });

    const nameInputw = document.getElementById('wiederholungen');
    const nameDivw = document.getElementById('wiederholungen_div');

    nameInputw.addEventListener('input', () => {
        nameDivw.textContent = "Wiederholungen: "+nameInputw.value;
    });


