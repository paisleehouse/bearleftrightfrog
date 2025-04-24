function saveData() {
    const data = document
        .getElementById('emotional')
        .value;
    localStorage
        .setItem('userData', data);
    displayData();
}
function displayData() {
    const savedData = localStorage
        .getItem('userData');
    document
        .getElementById('savedData')
        .innerText = savedData;
}
displayData();