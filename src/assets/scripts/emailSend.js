 let makeRequest =   (method, url, data) => {
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.onload = function () {
        if (this.status >= 200 && this.status < 300) {
         resolve(xhr.response);
        } else {
          reject({
            status: this.status,
            statusText: xhr.statusText
          });
        }
      };
      xhr.onerror = function () {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      };
      if(method=="POST" && data){
          document.body.style.overflow = "hidden";
          UIkit.notification({message: 'Het verzenden is bezig', pos: 'bottom-right', status:'primary'}, )
         xhr.setRequestHeader("Content-type", "application/json");
          xhr.send(JSON.stringify(data));
      }else{
          xhr.send();
      }
    });
  }
  


  document.querySelector("#contact-form").addEventListener("submit", (e) => {
e.preventDefault()

var data={
    "name": document.querySelector("#form-name").value,
    "subject": document.querySelector("#form-subject").value,
    "email": document.querySelector("#form-email").value,
    "phone": document.querySelector("#form-phone").value,
    "message": document.querySelector("#form-message").value,
  };
makeRequest('POST', "./assets/php/send-email.php", data).then(response => {
     const data = response;
     UIkit.notification.closeAll()
     document.body.style.overflow = "auto";
     if(response == "Complete")
     {
         document.querySelector("#contact-form").reset();
        UIkit.notification({message: 'Verzonden!', pos: 'bottom-right', status:'success'})
     }
     else
     {
        UIkit.notification({message: 'Fout opgetreden...', pos: 'bottom-right', status:'danger'}, )
     }
   
  })
  })