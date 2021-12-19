

const text = "(ﾉ>ω<)ﾉ雖然不知道抽到我的同學是誰，但是預祝你/妳研究所生涯能夠一帆風順！聖誕快樂！🎅(≧∀≦)ゞ";
let index = 0;

function writeText() {
    document.body.innerText = text.slice(0, index);

    index++;

    if (index > text.length) {
        index = 0;
    }
    
}

setInterval(writeText, 200);

