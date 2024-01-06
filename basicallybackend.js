function myFunction() {
  var x = document.getElementById("navbar");
  if (x.className === "nav") {
    x.className += " responsive";
    console.log(x.className);
  } else {
    x.className = "nav";
  }
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

function submitForm() {

    var name = document.getElementById("name");
    var phoneno = document.getElementById("phone");
    var emailid = document.getElementById("email");

    const nameerr = document.getElementById("nameerr");
    const phoneerr = document.getElementById("phoneerr");
    const emailerr = document.getElementById("emailerr");
    const printm =document.getElementById("printm");

    nameerr.textContent = '';
    phoneerr.textContent = '';
    emailerr.textContent = '';

    let check=1;

    if (name.value.trim() === '') {
        nameerr.textContent = 'Name is required';
        check=0;
    }

    const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (emailid.value.match(validEmail)) {
        emailerr.textContent = '';

    } else {
        emailerr.textContent = 'Email ID is not valid';
        check=0;

    }

    const validPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (phoneno.value.match(validPhone)) {
        phoneerr.textContent = '';

    } else {
        phoneerr.textContent = 'Phone number is not valid';
        check=0;
    }


        var message = "Name: " + name + "\nPhone: " + phoneno + "\nEmail: " + emailid;
        
        if(check==1)
        {
            printm.textContent="Thank you for contacting me!";
        }
        else{
            printm.textContent='';
        }
    console.log("Name: ");
    console.log(name.value);
    console.log("Phone: ");
    console.log(phoneno.value);
    console.log("Email: ");
    console.log(emailid.value);

}

function resetForm(){
    nameerr.textContent = '';
    phoneerr.textContent = '';
    emailerr.textContent = '';
}
