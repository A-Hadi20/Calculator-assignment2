let string = "";
let buttons = document.getElementById('#all-button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerhtml == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else {
            console.log(e.target)
            string = string + e.target.innerhtml;
            document.querySelector('input').value = string;
        }
    })
})