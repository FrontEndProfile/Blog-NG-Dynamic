import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from '../services/content.service'
import { Observable } from 'rxjs';
// import * as $ from "jquery"
// import { gsap } from "gsap";


// import 'src/assets/js/code.js'

// declare function loco():any;
@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.scss']
})
export class ViewPageComponent implements OnInit {
  //add scr tag from assets path
  myScriptElement: HTMLScriptElement | undefined;
  element: any;

  blogDataId$: Observable<any> | undefined;

  test:any

  constructor(private route: ActivatedRoute, private contentfullservice: ContentService) {
  }



  scrollToNextSection() {
    const nextSectionElement = document.getElementById('next');
    if (nextSectionElement) {
      nextSectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  
  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        const id = params['id'];
        this.blogDataId$ = this.contentfullservice.getEntryById(id)
      }
    )
    // add if not reload page then first reload page this
    // if (window.location.href.indexOf('reload') == -1) {
    //   window.location.replace(window.location.href + '?reload');
    // }

    // $(document).ready(function () {
    // $(document).ready(function () {
    //   var s = document.createElement("script");
    //   s.type = "text/javascript";
    //   s.src = "assets/js/locomotive-scroll.js";
    //   $("app-home").append(s);
    // });
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "/assets/js/view.js";
    $("body").append(s);
    // });
    // $('html').removeAttr('class');


    this.test = this.blogDataId$
    
  }

}
