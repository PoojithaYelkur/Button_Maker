let btn= document.getElementById("customButton");
function apply(){
    let bgc = document.getElementById("bgColorInput").value;
    let fontcol = document.getElementById("fontColorInput").value;
    let fontsize = document.getElementById("fontSizeInput").value;
    let fontwei = document.getElementById("fontWeightInput").value;
    let pad = document.getElementById("paddingInput").value;
    let borrad = document.getElementById("borderRadiusInput").value;


    btn.style.backgroundColor=bgc;
    btn.style.color=fontcol;
    btn.style.fontSize=fontsize;
    btn.style.fontWeight=fontwei;
    btn.style.padding=pad;
    btn.style.borderRadius=borrad;
}
