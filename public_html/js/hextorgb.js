function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    if (r < 0 || g< 0 || b < 0 || b > 255 || g > 255 || b > 255){
        return "Enter HEX order by 0 to 255";
    }
    else{
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }
}

function rgbinterface(){
    R = Number(document.getElementById("R").value);
    G = Number(document.getElementById("G").value);
    B = Number(document.getElementById("B").value);
    $("#rgbtohex").html(rgbToHex(R,G,B));
}

function hexToRgb(hex) {
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    return r + "," + g + "," + b;
}

function hextorgbinterface(){
    hex = document.getElementById("hex").value
    $("#hextorgb").html(hexToRgb(hex));
}



