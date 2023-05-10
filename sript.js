const rv=ScrollReveal({
    distance :'80px',
    duration: 2800,
    reset: true,


})

// rv.reveal('.content, .name',{delay:300, origin:'bottom'}),

function validateForm() {
    let name = document.forms["myForm"]["fname"].value;
  
    if (document.myForm.fname.value =="") {
      alert("Name must be filled out");
      document.myForm.fname.focus();
      return false;
    }
    else if (document.forms["myForm"]["subject"].value==""){
        alert('subject is missing');
    }
    else
    if(document.forms["myForm"]["message"].value==""){
        alert('please write your message');
    }
    else{
        alert(" your message has been successfully sent.")
    }
}
