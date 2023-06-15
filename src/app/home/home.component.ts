import { Component, OnInit } from '@angular/core';
import { ContentService } from '../services/content.service';
import { Observable } from 'rxjs';
import * as $ from "jquery"



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit {
  //add scr tag from assets path
  myScriptElement: HTMLScriptElement | undefined;

  blogData$: Observable<any> | undefined;
  constructor(private contentFull: ContentService) { }
  
  ngOnInit(): void {
    this.blogData$ = this.contentFull.getAllEntries();


    $(document).ready(function () {
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.src = "assets/js/locomotive-scroll.js";
      $("app-home").append(s);
    });

    // $(document).ready(function () {
    //   var s = document.createElement("script");
    //   s.type = "text/javascript";
    //   s.src = "assets/js/gsap.min.js";
    //   $("app-home").append(s);
    // });

    // $(document).ready(function () {
    //   var s = document.createElement("script");
    //   s.type = "text/javascript";
    //   s.src = "assets/js/ScrollTrigger.min.js";
    //   $("app-home").append(s);
    // });


    $(document).ready(function () {
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.src = "/assets/js/code.js";
      $("app-home").append(s);
    });

    // $('html').attr('class', 'has-scroll-init has-scroll-smooth');





  }
}
