function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function rgbinterface(){
    R = Number(document.getElementById("R").value);
    G = Number(document.getElementById("G").value);
    B = Number(document.getElementById("B").value);
    $("#rgbtohex").html(rgbToHex(R,G,B));
}



