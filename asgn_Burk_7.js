var $ = function (id) {
    return document.getElementById(id);
}

var validateItems = function ()
{
    var firstName = $("firstname").value;
    var lastName = $("lastname").value;
    var email = $("email").value;
    var city = $("city").value;
    var donation = $("donation").value;

    var isValid = true;
    
    if (firstName == '')
    {
        $("firstnameerror").innerHTML = "Enter First Name";
        isValid = false;
    }
    else
    {
        $("firstnameerror").innerHTML = "";
    }

    if (lastName == '')
    {
        $("lastnameerror").innerHTML = "Enter Last Name";
        isValid = false;
    }
    else
    {
        $("lastnameerror").innerHTML = "";
    }

    if (email == '')
    {
        $("emailerror").innerHTML = "Enter Email";
        isValid = false;
    }
    else
    {
        $("emailerror").innerHTML = "";
    }
    
    if (city == '-')
    {
        $("cityerror").innerHTML = "Select a City from the list";
        isValid = false;
    }
    else
    {
        $("cityerror").innerHTML = "";
    }

    if (donation == '')
    {
        $("donationerror").innerHTML = "Enter Donation Amount";
        isValid = false;
    }
    else if (isNaN(donation))
    {
        $("donationerror").innerHTML = "Amount must be numeric";
        isValid = false;
    }
    else
    {
        $("donationerror").innerHTML = "";
    }

    return isValid;
}

var addPatron = function ()
{
    var isValid = validateItems();

    if (isValid == true)
    {
        $("endmessage").innerHTML = "";
        $("myform").submit();
    }
    else
    {
        $("endmessage").innerHTML = "Patron Not Added!";
    }

    return isValid;
}

var clearFields = function ()
{
    $("firstname").value = "";
    $("lastname").value = "";
    $("email").value = "";
    $("donation").value = "";

    $("city").value = "-";

    $("firstnameerror").innerHTML = "";
    $("lastnameerror").innerHTML = "";
    $("emailerror").innerHTML = "";
    $("cityerror").innerHTML = "";
    $("donationerror").innerHTML = "";
    $("endmessage").innerHTML = "";

    $("firstname").focus();
}

window.onload = function ()
{
    $("addpatron").onclick = addPatron;
    $("clearfields").onclick = clearFields;
    $("firstname").focus();
}
