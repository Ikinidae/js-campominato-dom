// Chiedere la difficoltà
const difficulty = parseInt(prompt("Scegliere la difficoltà: 1=Difficile, 2=Intermedio, 3=Facile"));

const container = document.getElementById("container");

// Funzione per creare elementi e aggiungere classe square
const createMyElement = () => {
    const node = document.createElement("div");
    node.className = "square";
    return node;
}

// Funzione per generare numeri con un range
function getRandomNumMinMax (rangeMin, rangeMax){
    let result = Math.floor(Math.random() * (rangeMax - rangeMin + 1)) + rangeMin;
    return result;
}

// Ciclo per generare quadrati, inserire numeri e aggiungere evento click
if (difficulty === 1) {
    const bomb1 = [];
    for (i=0; bomb1.length < 16; i++) {
        let num = getRandomNumMinMax(1,100);
        if (!bomb1.includes(num)) {
            bomb1.push(num);
        }
    }
    console.log(bomb1);

    for (i = 0; i < 100; i++){
        const divEl = createMyElement();
        container.append(divEl);
        let randomNum = getRandomNumMinMax(1, 100);
        divEl.append(randomNum);

        divEl.addEventListener ("click",
            function click() {
                if (!bomb1.includes(randomNum)) {
                    divEl.classList.add("backgroundlightblue");
                } else {
                    divEl.classList.add("backgroundred");
                }
            }
        )
    }
} else if (difficulty === 2) {
    const bomb2 = [];
    for (i=0; bomb2.length < 16; i++) {
        let num = getRandomNumMinMax(1,100);
        if (!bomb2.includes(num)) {
            bomb2.push(num);
        }
    }
    console.log(bomb2);

    for (i = 0; i < 81; i++){
        const divEl = createMyElement();
        container.append(divEl);
        let randomNum = getRandomNumMinMax(1, 81);
        divEl.append(randomNum);

        divEl.addEventListener ("click",
            function click() {
                if (!bomb2.includes(randomNum)) {
                    divEl.classList.add("backgroundlightblue");
                } else {
                    divEl.classList.add("backgroundred");
                }
            }
        )
    }
} else if (difficulty === 3) {
    const bomb3 = [];
    for (i=0; bomb3.length < 16; i++) {
        let num = getRandomNumMinMax(1,100);
        if (!bomb3.includes(num)) {
            bomb3.push(num);
        }
    }
    console.log(bomb3);
    
    for (i = 0; i < 49; i++){
        const divEl = createMyElement();
        container.append(divEl);
        let randomNum = getRandomNumMinMax(1, 49);
        divEl.append(randomNum);

        divEl.addEventListener ("click",
            function click() {
                if (!bomb3.includes(randomNum)) {
                    divEl.classList.add("backgroundlightblue");
                } else {
                    divEl.classList.add("backgroundred");
                }
            }
        )
    }
}