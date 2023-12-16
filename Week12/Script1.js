function processData(){
    var firstName = document.getElementById("ftname").value;
    var lastName = document.getElementById("ltname").value;

    if (firstName=="")
    {
        document.getElementById("response").innerHTML=("Enter first name");
    }
    if (lastName==""){

        document.getElementById("response").innerHTML=("Enter last name");
    }
    else
    {
        localStorage.setItem("firstName",firstName);
        localStorage.setItem("lastName",lastName);
    }

}
function showUser()
{
    document.getElementById("ftname").value=localStorage.getItem("firstName");
    document.getElementById("ltname").value=localStorage.getItem("lastName");

}
function deleteUser()
{
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
}