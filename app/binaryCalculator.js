function display(val) {
    document.getElementById('res').value += val;
}
function clearScreen() {
    document.getElementById('res').value = "";
}
function calculate() {
    var p = document.getElementById('res').value;
    var s="";
    for (let i=0, start=0, end=0;i<p.length;i++) {
        if (p.charAt(i)=='+' || p.charAt(i)=='-' || p.charAt(i)=='*' || p.charAt(i)=='/') {
            end=i;
            s+=parseInt(p.slice(start, end), 2);
            s+=p.charAt(i);
            start = i+1;
        }
        if (i==p.length-1) {
            end=i+1;
            s+=parseInt(p.slice(start, end), 2);
        }
    }
document.getElementById('res').value = eval(s).toString(2);
}
