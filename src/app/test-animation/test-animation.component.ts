import { Component, OnInit } from '@angular/core';
// import * as $ from "jquery"
import { ContentfulClientApi, createClient } from 'contentful';

interface Entry {
  fields: {
    title: any;
    description: any;
  };
}


@Component({
  selector: 'app-test-animation',
  templateUrl: './test-animation.component.html',
  styleUrls: ['./test-animation.component.scss']
})
export class TestAnimationComponent implements OnInit {

  // private client = createClient({
  //   space: 'YOUR_SPACE_ID',
  //   accessToken: 'YOUR_DELIVERY_ACCESS_TOKEN'
  // });

  // title: string;
  // description: string;

  // createItem() {
  //   const contentTypeId = 'YOUR_CONTENT_TYPE_ID';

  //   const entry: Entry<any> = {
  //     fields: {
  //       title: {
  //         'en-US': this.title
  //       },
  //       description: {
  //         'en-US': this.description
  //       }
  //     }
  //   };

  //   this.client.getSpace('YOUR_SPACE_ID')
  //     .then((space) => space.getEnvironment('YOUR_ENVIRONMENT_ID'))
  //     .then((environment) => environment.createEntry(contentTypeId, entry))
  //     .then((entry) => {
  //       console.log('Item created:', entry);
  //       // Handle success, e.g., show a success message, navigate to the item list, etc.
  //     })
  //     .catch((error) => {
  //       console.error('Error creating item:', error);
  //       // Handle error, e.g., show an error message to the user
  //     });
  // }

  ngOnInit(): void {

  }

}





////////
// import { Component } from '@angular/core';
// import { ContentfulClientApi, createClient } from 'contentful';

// interface Entry {
//   fields: {
//     title: string;
//     description: string;
//   };
// }

// @Component({
//   selector: 'app-item-create',
//   templateUrl: './item-create.component.html',
//   styleUrls: ['./item-create.component.css']
// })
// export class ItemCreateComponent {
//   private client: ContentfulClientApi<any>;
//   title: string;
//   description: string;

//   constructor() {
//     this.client = createClient({
//       space: 'YOUR_SPACE_ID',
//       accessToken: 'YOUR_DELIVERY_ACCESS_TOKEN'
//     });
//   }

//   createItem() {
//     const contentTypeId = 'YOUR_CONTENT_TYPE_ID';
//     const entry: Entry = {
//       fields: {
//         title: { 'en-US': this.title },
//         description: { 'en-US': this.description }
//       }
//     };

//     this.client.createEntry('YOUR_SPACE_ID', contentTypeId, entry)
//       .then((response) => {
//         console.log('Item created:', response);
//         // Handle success, e.g., show a success message, navigate to the item list, etc.
//       })
//       .catch((error) => {
//         console.error('Error creating item:', error);
//         // Handle error, e.g., show an error message to the user
//       });
//   }
// }
