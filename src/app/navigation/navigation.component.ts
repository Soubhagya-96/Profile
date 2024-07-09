import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  count: number = 0;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

    let ele = document.getElementById("navbar");
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      ele.classList.remove("navbar-light");
      ele.classList.add("navbar-dark");
    }
    else {
      ele.classList.remove("navbar-dark");
      ele.classList.add("navbar-light");
    }

  }

}
