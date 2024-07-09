import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { linkmap } from '../techmap';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  linkmap = linkmap;

  constructor(
    private spinner: NgxSpinnerService,
  ) {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
   }

  ngOnInit(): void {

    let ele = document.getElementById("about");
    ele.classList.add("active");

    let home = document.getElementById("home");
    if(home.classList.contains("active")) {
      home.classList.remove("active");
    }

    let contact = document.getElementById("contact");
    if(contact.classList.contains("active")) {
      contact.classList.remove("active");
    }
  }

  downloadResume() {
    window.navigator.vibrate(10);
    const ele = document.getElementById("resume");
    ele.classList.add("animate__animated", "animate__rubberBand");
    setTimeout(() => {
      let link = document.createElement("a");
      link.download = "Soubhagya_resume.pdf";
      link.href = "assets/resume/Soubhagya Sahoo.pdf";
      link.click();
      link.remove();
      ele.classList.remove("animate__animated", "animate__rubberBand");
    }, 1000);
  }

  tech(value) {
    window.navigator.vibrate(10);
    for(let key in this.linkmap) {
      if(value == key) {
        setTimeout(() => {
          window.open(this.linkmap[key], '_');
        }, 100);
      }
    }
  }

}
