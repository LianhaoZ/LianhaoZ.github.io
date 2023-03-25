function dark() {
    const light = document.getElementById("mode");
    light.classList.toggle("mode-dark");
  
    const icon = document.getElementById("dark-icon");
    icon.classList.toggle("light-icon");
  
    const bod = document.body;
    bod.classList.toggle("dark-mode");
  
    const headings = document.getElementsByClassName("headings");
    for (var i = 0; i < headings.length; i++) {
      headings[i].classList.toggle("heading-mode");
    }
  
    const m = document.getElementById("m-unity");
    m.classList.toggle("m-invert");
  
    const email = document.getElementById("email");
    email.classList.toggle("email-dark");
  
    // const input = document.getElementById("userIn");
    // input.classList.toggle("user-input-dark");
  
    // const chatContain = document.getElementsByClassName("chat-contain");
    // for (var i = 0; i < chatContain.length; i++) {
    //   chatContain[i].classList.toggle("chat-contain-dark");
    // }
  
    // const chatting = document.getElementsByClassName("chat-item");
    // for (var i = 0; i < chatting.length; i++) {
    //   chatting[i].classList.toggle("chat-item-dark");
    // }
  
    const certs = document.getElementsByClassName("xp-icon");
    for (var i = 0; i < certs.length; i++) {
      certs[i].classList.toggle("xp-dark");
      certs[i].classList.toggle("xp-invert");
    }
  
    const projs = document.getElementsByClassName("p-link");
    for (var i = 0; i < projs.length; i++) {
      projs[i].classList.toggle("p-link-mode");
      projs[i].classList.toggle("p-link-mode:visited");
    }
 

    
   
  }
  