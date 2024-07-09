const generatePara = (n)=>{
    let txt = "";
    const ualp = "ABCDEFGHIJKLMNOPQRSTUCWXYZ";
    const lalp = "abcdefghijklmnopqrstuvwxyz";

    for(let word = 0; word<n; word++){
        let len = (Math.random()*100).toFixed(0)%10;
        while(len<3){
            len = (Math.random()*100).toFixed(0)%10;
        }

        txt+=ualp[(Math.random()*100).toFixed(0)%26];
        for(let i = 0; i<len-1; i++){
            txt += lalp[(Math.random()*100).toFixed(0)%26];
        }
        txt+=" ";
    }
    return txt;
}

const getData = (e)=>{
    e.preventDefault();
    let input = document.getElementById("num");
    let place = document.getElementById("genPara");
    let remov = document.getElementById("getPara");

    let num = input.value;
    if(num<=0){
        place.style.display = "none";
        return;
    }

    if(num==null){
        place.style.display = "none";
        return;
    }
    
    place.removeChild(remov);
    
    const para = document.createElement("p");
    para.setAttribute("class","para spaceText");
    para.setAttribute("id","getPara");

    let txt = generatePara(num);

    para.innerText = txt;
    place.appendChild(para);
    place.style.display = "block";
}

let gen = document.getElementById('gen');
gen.addEventListener('click',getData);