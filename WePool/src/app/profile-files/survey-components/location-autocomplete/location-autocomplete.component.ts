import { SelectorMatcher } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Loader } from '@googlemaps/js-api-loader';
import { delay } from 'cypress/types/bluebird';
import { GlobalConstants } from '../../../common/global-constants';

@Component({
  selector: 'AutocompleteComponent',
  templateUrl: './location-autocomplete.component.html',
  styleUrls: ['./location-autocomplete.component.css']
})
export class LocationAutocompleteComponent implements OnInit {

  autocomplete: google.maps.places.Autocomplete;

  constructor() { }

  place;
  @Output() updateAddress = new EventEmitter<string>();

  loader = new Loader({
    apiKey: GlobalConstants.myKey,
    version: "weekly",
    libraries: ["places"]
  });

  //Initializes each autocomplete fields on page
  ngOnInit(): void {
    this.loadFile("search");
  }

  ngOnChanges() {
    
  }

  //Code for initializing autocomplete object
  loadFile(id : string) {
    this.loader.load().then(() => {
      this.autocomplete = new google.maps.places.Autocomplete (
        document.getElementById(id) as HTMLInputElement,
        {
          componentRestrictions: {'country': ['US']},
          fields: ['name']
        });
    }).then(() => {
      this.autocomplete.addListener('place_changed', () => {
        this.place = this.autocomplete.getPlace();
        this.updateAddress.emit(this.place);
      });
    })
  }

}
