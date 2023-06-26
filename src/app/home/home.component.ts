import { Component, inject, OnInit } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, deleteDoc, doc, updateDoc, deleteField, setDoc } from '@angular/fire/firestore'; // get data [collection , collectionData ]
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { AngularFireStorage, AngularFireStorageModule, AngularFireStorageReference } from '@angular/fire/compat/storage';
import { Router } from '@angular/router';
import { Observable } from 'rxjs'; // data binding for used like API's

import * as $ from "jquery"



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit {
  //add scr tag from assets path
  myScriptElement: HTMLScriptElement | undefined;

  firestore: Firestore = inject(Firestore)
  products: Observable<any[]> | undefined;
  items$: Observable<any[]>;
  selectedFile: File | null = null;
  uploadPercent: number | undefined;

  ngUrl: any;


  constructor(private formBuilder: FormBuilder, private router: Router, private storage: AngularFireStorage) {
    // Get data From fireBase 
    const aCollection = collection(this.firestore, 'product')
    // this.items$ = collectionData(aCollection);
    this.items$ = collectionData(aCollection, { idField: 'id' });
    this.items$.subscribe((data) => {
      data.forEach((item) => {
        const itemId = item.id;
        const itemData = item;

        console.log('Document ID:', itemId);
        console.log('Document Data:', itemData);
      });
    });

  }


  ngOnInit(): void {
    // before 
    $(document).ready(function () {
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.src = "assets/js/locomotive-scroll.js";
      $("app-home").append(s);
    });
    $(document).ready(function () {
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.src = "/assets/js/code.js";
      $("app-home").append(s);
    });
    // before end
  }
}
