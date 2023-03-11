import { Component, OnInit, ViewChild } from '@angular/core';
import { FaceStudent } from './models/face-students.model';
import { MatSidenav } from '@angular/material/sidenav';
import { Router,NavigationEnd } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  content = 'content';
  @ViewChild(MatSidenav) 
  sidenav!: MatSidenav;
  myFace!: FaceStudent;
  myOtherFace1!: FaceStudent;
  myOtherFace2!: FaceStudent;
  myOtherFace3!: FaceStudent;
 
  constructor(private observer: BreakpointObserver,public router: Router) {
    this.router.events.subscribe(event => {
      // filter `NavigationEnd` events
      if (event instanceof NavigationEnd) {
        // get current route without leading slash `/`
        const eventUrl = /(?<=\/).+/.exec(event.urlAfterRedirects);
        const currentRoute = (eventUrl || []).join('');
        // set bgClass property with the value of the current route
        this.content = currentRoute;
      }
    });
  }
  
  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }
  ngOnInit() {
    this.myFace = new FaceStudent(
      'Théophile Chêne',
      'Chef de projet',
      './assets/Images/theophile.jpg',
      'Septembre 2018'
    );
    this.myOtherFace1 = new FaceStudent(
      'Adrien Tirlemont',
      'Expert en IA',
      './assets/Images/inconnu.webp',
      'Septembre 2018'
    );
    this.myOtherFace2 = new FaceStudent(
      'Clément Cronier',
      'Web designer',
      './assets/Images/clement.png',
      'Septembre 2018'
    );
    this.myOtherFace3 = new FaceStudent(
      'Autre utilisateur',
      'Utilisateur',
      './assets/Images/inconnu.webp',
      "aujourd'hui"
    );
  }
}
