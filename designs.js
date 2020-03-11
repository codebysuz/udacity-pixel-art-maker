

let sizePicker = document.getElementById('sizePicker');  // tested in Console; this works!
//let userHeight = document.getElementById('inputHeight'); //won't update yet.
//let userWidth = document.getElementById('inputWidth'); //using HTML ID for width.
let userColor = document.getElementById('colorPicker');


sizePicker.addEventListener('submit', function(event) {
  event.preventDefault();
  makeGrid();

  function makeGrid(){
    let table = document.getElementById('pixelCanvas');
    const width = document.getElementById('inputWidth').value;
    const height = document.getElementById('inputHeight').value;
    table.innerHTML = (null);
    for (let h=0; h<height; h+=1){
      let newRow = table.insertRow(h);

      for (let w=0; w<width; w+=1){
        let newCell = newRow.insertCell(w);
      }
  }

table.addEventListener('click', function(event){
  event.target.style.backgroundColor = userColor.value;
});
}
});
