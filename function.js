function display(val)
{
    document.getElementById("disscreen").value+=val;
}
function calculate()
{
    var exp = document.getElementById("disscreen").value;
    var ans = eval(exp);
    document.getElementById("disscreen").value=ans;

}
function clear()
{
    document.getElementById("disscreen").value = "" ;
}
