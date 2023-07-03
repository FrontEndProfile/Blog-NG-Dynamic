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


  product: any;
  showUpdateForm = false;
  updatedProduct: any = {};
  editId: any
  productId: any;
  products: Observable<any[]> | undefined;

  constructor(private route: ActivatedRoute, private firestore: Firestore) { }



  scrollToNextSection() {
    const nextSectionElement = document.getElementById('next');
    if (nextSectionElement) {
      nextSectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Update btn
  openUpdateForm() {
    this.updatedProduct = {
      heroHead: this.product.heroHead,
      heroContent: this.product.heroContent,
      frameTittle: this.product.frameTittle,
      frameContent: this.product.frameContent,
      viewLastIntroTittle: this.product.viewLastIntroTittle,
      viewLastIntroContent: this.product.viewLastIntroContent,
    };
    this.showUpdateForm = true;
  }
  saveUpdate() {
    const updatedProduct = { ...this.product }; // Create a new copy of the product object
    Object.assign(updatedProduct, this.updatedProduct); // Merge the updated values from updatedProduct into the copy
    this.onUpdateClicked(updatedProduct); // Pass the updated product object to the update function
    this.product = updatedProduct; // Update the current product with the updated values
    this.showUpdateForm = false;
  }
  onUpdateClicked(updatedData: any) {
    const productDoc = doc(this.firestore, 'product', this.productId);
    // const productDoc = doc(this.firestore, 'product', 'jeA78qVrVHwaYXfLsWca');
    console.log('Update clicked');
    console.log('Product Update ID:', this.productId);

    updateDoc(productDoc, updatedData)
      .then(() => {
        console.log('Product updated successfully');
      })
      .catch((error) => {
        console.error('Error updating product:', error);
      });
  }

  cancelUpdate() {
    this.showUpdateForm = false;
  }
  

  ngOnInit(): void {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "/assets/js/view.js";
    $("body").append(s);
    $('video').prop('muted', true);

    this.route.paramMap.subscribe(async (params) => {
      // const productId = params.get('id');
      this.productId = params.get('id');
      if (this.productId) {
        const productDoc = doc(this.firestore, 'product', this.productId);
        const productSnapshot = await getDoc(productDoc);
        if (productSnapshot.exists()) {
          this.product = productSnapshot.data();
          console.log('Product:', this.product);
          console.log('Product ID:', this.productId);
          console.log(this.productId);
        } else {
          console.log('Product not found');
        }
      }
    });




  }

}

