const zodiac = document.getElementById("zodiac");
const present = document.getElementById('present');
const body = document.getElementById('colorBox');
const txt = document.getElementById('colorName');
console.log(00);

const colorSelect = ()=>{
    switch(zodiac.value){
        case "Aries":
            body.style.backgroundColor = "#fc0303";
            present.style.display = 'block';
            console.log("Aries");
            break;

        case "Taurus":
            body.style.backgroundColor = "#03fc6f";
            present.style.display = 'block';
            console.log("Tarus");
            break;

        case "Gemini":
            body.style.backgroundColor = "#fce514";
            present.style.display = 'block';
            console.log("Gemini");
            break;

        case "Cancer":
            body.style.backgroundColor = "#ffeceb";
            present.style.display = 'block';
            console.log("Cancer");
            break;

        case "Leo":
            body.style.backgroundColor = "#fcba03";
            present.style.display = 'block';
            console.log("Leo");
            break;

        case "Virgo":
            body.style.backgroundColor = "#40231b";
            present.style.display = 'block';
            console.log("Virgo");
            break;

        case "Libra":
            body.style.backgroundColor = "#9fd9fc";
            present.style.display = 'block';
            console.log("Libra");
            break;

        case "Scorpio":
            body.style.backgroundColor = "#1f1f1f";
            present.style.display = 'block';
            console.log("Scorpio");
            break;

        case "Sagittarius":
            body.style.backgroundColor = "#994ead";
            present.style.display = 'block';
            console.log("Sagittarius");
            break;

        case "Capricorn":
            body.style.backgroundColor = "#eb8d57";
            present.style.display = 'block';
            console.log("Capricorn");
            break;

        case "Aquarius":
            body.style.backgroundColor = "#579eeb";
            present.style.display = 'block';
            console.log("Aquarius");
            break;

        case "Pisces":
            body.style.backgroundColor = "#fc88d8";
            present.style.display = 'block';
            console.log("Pisces");
            break;

        default:
            present.style.display = 'none';
    }
}