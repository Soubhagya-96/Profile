import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  links = [
    {
      "key": "whatsapp",
      "value": "https://wa.me/919090031330"
    },
    {
      "key": "email",
      "value": "mailto:soubhagyasahoo065@gmail.com"
    },
    {
      "key": "skype",
      "value": "skype:soubhagya.sahoo@outlook.in?chat"
    },
    {
      "key": "linkedin",
      "value": "https://linkedin.com/in/soubhagya-sahoo1996"
    },
    {
      "key": "github",
      "value": "https://github.com/Soubhagya-96"
    }
  ];

  constructor(
    private spinner: NgxSpinnerService
  ) {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
   }

  ngOnInit(): void {


    
    let ele = document.getElementById("contact");
    ele.classList.add("active");

    let home = document.getElementById("home");
    if(home.classList.contains("active")) {
      home.classList.remove("active");
    }

    const about = document.getElementById("about");
    if(about.classList.contains("active")) {
      about.classList.remove("active");
    }
  }

  open(portal) {
    for(let item of this.links) {
      if(portal == item['key']) {
        window.open(item['value'], "_blank");
      }
    }
  }

}
