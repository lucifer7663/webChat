const form = document.querySelector(".typing-area"),
inputField = form.querySelector(".input-field"),
sendBtn = form.querySelector("button"),
chatBox = document.querySelector(".chat-box");

form.onsubmit = (e) => {
    e.preventDefault();//preventing form from submitting
}



sendBtn.onclick = ()=>{
    //ajax
    let xhr = new XMLHttpRequest(); //creating XML object
    xhr.open("POST", "php/insert-chat.php", true);
    xhr.onload = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                inputField.value = "";
                scrollToBottom();
            }
        }
    }
    // we have to send the form data theough ajax to php

    let formData = new FormData(form); //creating new formData object
    xhr.send(formData); //sending form data to php
}

chatBox.onmouseenter = () =>{
    chatBox.classList.add("active");
}
chatBox.onmouseeleave = () =>{
    chatBox.classList.remove("active");
}

setInterval(()=>{
    let xhr = new XMLHttpRequest(); //creating XML object
    xhr.open("POST", "php/get-chat.php", true);
    xhr.onload = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                let data = xhr.response;
                chatBox.innerHTML = data;
                if(!chatBox.classList.contains("active")){
                    scrollToBottom();
                }
            }
        }
    }
     let formData = new FormData(form); //creating new formData object
    xhr.send(formData); //sending form data to php
}, 500);

function scrollToBottom(){
    chatBox.scrollTop = chatBox.scrollHeight;
}