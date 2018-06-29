import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ImageGalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-image-gallery',
  templateUrl: 'image-gallery.html',
})
export class ImageGalleryPage {
  imageGallery: Array<{id: number, image:string, displayOrder: number, imageTitle: string, isProfile: boolean}> = [
    {id: 1, image: 'http://www.betattw.in/dynamic/package-images/photo-big/dir_17/496510/202141.jpg', displayOrder: 0, imageTitle: '', isProfile: false},
    {id: 2, image: 'http://www.betattw.in/dynamic/package-images/photo-big/dir_17/496510/202142.jpg', displayOrder: 0, imageTitle: '', isProfile: true},
    {id: 3, image: 'http://www.betattw.in/dynamic/package-images/photo-big/dir_17/496510/202141.jpg', displayOrder: 0, imageTitle: '', isProfile: false},
    {id: 4, image: 'http://www.betattw.in/dynamic/package-images/photo-big/dir_17/496510/202142.jpg', displayOrder: 0, imageTitle: '', isProfile: false},
    {id: 5, image: 'http://www.betattw.in/dynamic/package-images/photo-big/dir_17/496510/202141.jpg', displayOrder: 0, imageTitle: '', isProfile: false},
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImageGalleryPage');
  }

}
