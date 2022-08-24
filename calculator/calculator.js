let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let scrvalue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttontext = e.target.innerText;
        console.log('button text is ', buttontext);
        if (buttontext == 'X') {
            buttontext = '*';
            scrvalue += buttontext;
            screen.value = scrvalue;
        }
        else if (buttontext == 'C') {
            scrvalue = "";
            screen.value = scrvalue;

        }
        else if (buttontext == '=') {
            screen.value = eval(scrvalue);
        }
        else {
            scrvalue += buttontext;
            screen.value = scrvalue;
        }

    })
}

