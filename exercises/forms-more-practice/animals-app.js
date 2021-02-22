document.animals.addEventListener("submit", function(e){
    e.preventDefault()
    var checkedAnimals = [];
    var checkedBoxes = document.querySelectorAll("input[name=likes]:checked");
    for (var i = 0; i < checkedBoxes.length; i++) {
        checkedAnimals.push(checkedBoxes[i].value);
    }
    console.log(checkedAnimals)
});