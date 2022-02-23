const goal = 25;
let entries = [];
const entriesWrapper = document.querySelector("#entries");

document.querySelector("#target").innerText = goal; 

function addNewEntry(newEntry){
    //always have 7 entries: 
    entriesWrapper.removeChild(entriesWrapper.firstElementChild); //when new elem pushed remove first child

    const listItem = document.createElement("li");
    const listValue = document.createTextNode(newEntry.toFixed(1));
    listItem.appendChild(listValue);

    entriesWrapper.appendChild(listItem); //add new entry to list of unordered list
}

function reducer(total, currentValue){
    return total + currentValue;
}

function calcTotal(entries){
    const totalValue = entries.reduce(reducer).toFixed(1); //1 decimal after comma
    document.getElementById("total").innerText = totalValue;
    document.getElementById("progressTotal").innerText = totalValue;
}

function calcAverage(){
    const avg = (entries.reduce(reducer) / entries.length).toFixed(1);
    document.getElementById("average").innerText = avg; 
}

function weeklyHigh(){
    const high = Math.max(...entries);
    document.getElementById("high").innerText = high; 
}

function calcGoal(){
    const totalValue = entries.reduce(reducer).toFixed(1); //1 decimal after comma
    const completedPercent = totalValue / (goal / 100);
    const progressCircle = document.querySelector("#progressCircle");
    // if(completedPercent = 100) alert("You did it!!!");
    if(completedPercent > 100) completedPercent === 100;
    progressCircle.style.background = `conic-gradient(#70db70 ${completedPercent}%, #2d3740 ${completedPercent}% 100%)`;
}

function handleSubmit(event){
    event.preventDefault();
    const entry = Number(document.querySelector("#entry").value);   //convert String type to number
    if(!entry) return; //no value entered
    document.querySelector("form").reset();
    entries.push(entry);
    addNewEntry(entry);
    calcTotal(entries);
    calcAverage(entries);
    weeklyHigh(entries);
    calcGoal(entries);
}

const form = document
    .querySelector("form")
    .addEventListener("submit", handleSubmit);