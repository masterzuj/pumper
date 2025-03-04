
//Übungsnamen/Arten

/* moved to exercises.js
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
...
];
*/
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
        dayElement.style.marginTop = '20px';
        dayElement.style.marginBottom = '20px'; 
        dayElement.style.fontSize = '27px';
        trainingDiv.appendChild(dayElement);
    }

    console.log(selectedExercises);

    selectedExercises.forEach(exercise => {
        const exerciseElement = document.createElement('div');
        exerciseElement.style.marginLeft = '20px';
        exerciseElement.textContent = ` ◦ ${exercise[2]}: ${exercise[3]}; _______kg`;
        trainingDiv.appendChild(exerciseElement);
    });
});

// Sortable
    $( "#training" ).sortable();



    const printButton = document.getElementById('print');
    printButton.addEventListener('click', () => {
        const printContents = document.getElementById('paper').innerHTML;
        const printWindow = window.open('', '', 'height=1500,width=1000');
        printWindow.document.write("<html><head><title>Training</title><style>body{font-family: 'Courier New', Courier, monospace; font-size: 18px;}</style>");
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


document.getElementById('datum').innerText = new Date().toLocaleDateString('de-DE');

$('#extra_ok').click(function() {
    const extraInputValue = $("#extra_input").val();
    if (extraInputValue) {
        myPumpArray.push([0, myPumpArray.length + 1, "Extra", extraInputValue]);
        const uebungElement = document.createElement('div');
        uebungElement.textContent = `Extra: ${extraInputValue}`;
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', () => {
            uebungElement.style.textDecoration = checkbox.checked ? 'underline' : 'none';
        });

        uebungElement.insertBefore(checkbox, uebungElement.firstChild);

        $('#uebungen').append(uebungElement);

        $('#uebungen').scrollTop($('#uebungen')[0].scrollHeight);
    }
});