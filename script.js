function SendMail(){
    alert("test");
    var params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value,

    }
    emailjs.send("service_os0d6pl", "template_7e92ekr",params).then(function(res) {
        alert("Success" + res.stauts)
    })
}