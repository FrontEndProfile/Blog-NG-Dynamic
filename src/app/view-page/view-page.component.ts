import { Component, inject, OnInit } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, deleteDoc, doc, updateDoc, deleteField, setDoc, getDoc } from '@angular/fire/firestore'; // get data [collection , collectionData ]
import { Observable } from 'rxjs'; // data binding for used like API's

import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'jquery';
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

  test: any

  product: any;

  constructor(private route: ActivatedRoute, private firestore: Firestore) { }



  scrollToNextSection() {
    const nextSectionElement = document.getElementById('next');
    if (nextSectionElement) {
      nextSectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  ngOnInit(): void {
    // this.route.params.subscribe(
    //   params => {
    //     const id = params['id'];
    //     this.blogDataId$ = this.contentfullservice.getEntryById(id)
    //   }
    // )
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


    // this.test = this.blogDataId$

    // this.route.paramMap.subscribe(async (params) => {
    //   const productId = params.get('id');
    //   if (productId) {
    //     const productDoc = doc(this.firestore, 'product', productId);
    //     const productSnapshot = await getDoc(productDoc);
    //     if (productSnapshot.exists()) {
    //       this.product = productSnapshot.data();
    //     console.log('Document Data:', this.blogDataId$);

    //     } else {
    //       console.log('Product not found');
    //     }
    //   }
    // });

    this.route.paramMap.subscribe(async (params) => {
      const productId = params.get('id');
      if (productId) {
        const productDoc = doc(this.firestore, 'product', productId);
        const productSnapshot = await getDoc(productDoc);
        if (productSnapshot.exists()) {
          this.product = productSnapshot.data();
          console.log(this.product.heroImg);
        } else {
          console.log('Product not found');
        }
      }
    });
    $('video').prop('muted', true);


  }

}

