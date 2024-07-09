import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  removeBody!: boolean;
  clickCount!: number;

  constructor(
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    const ele = document.getElementById("home");
    ele.classList.add("active");

    const about = document.getElementById("about");
    if(about.classList.contains("active")) {
      about.classList.remove("active");
    }

    const contact = document.getElementById("contact");
    if(contact.classList.contains("active")) {
      contact.classList.remove("active");
    }
  }

  trigger() {
    this.spinner.show();
  }

  vibrate() {
    window.navigator.vibrate(10);
  }

}
