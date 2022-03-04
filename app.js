
const send = document.querySelector(".send");
const reset = document.querySelector(".reset");


send.addEventListener("click", () =>{
    

    const name = document.querySelector(".name").value;
    localStorage.setItem("name_value", name_value);
    
    const email = document.querySelector(".email").value;;
    localStorage.setItem("email_value", email_value);
    
    const message = document.querySelector("message").value;
    localStorage.setItem("message_value", message_value);
});

reset.addEventListener("click", () => {

    
    name_value = "";
    email_value= "";
    message_value= "";

});