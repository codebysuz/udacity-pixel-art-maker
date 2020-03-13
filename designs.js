let sizePicker = document.getElementById('sizePicker'); // tested in Console; this works!

let userColor = document.getElementById('colorPicker'); //allows variable to store user color.


sizePicker.addEventListener('submit', function(event) {
    event.preventDefault(); //cancels form submission
    makeGrid(); //calling make Grid function from the function definition below.

    function makeGrid() { // appends rows and cells based on user input of height and width
        let table = document.getElementById('pixelCanvas');
        const width = document.getElementById('inputWidth').value; //storing Width
        const height = document.getElementById('inputHeight').value; //storing Height
        table.innerHTML = (null);
        for (let h = 0; h < height; h += 1) { //nested loops allows number of rows to emerge with "width" number of cells.
            let newRow = table.insertRow(h);

            for (let w = 0; w < width; w += 1) { //inserts cell in each new looped row
                let newCell = newRow.insertCell(w);
            }
        }

        table.addEventListener('click', function(event) { //initiates event listener.
            if (event.target.nodeName === 'TD') //adds listener for user to change color inside cell.
                event.target.style.backgroundColor = userColor.value;
            }
        });
    }
});
