import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { GlobalConstants } from '../common/global-constants';

@Component({
  selector: 'AutocompleteComponent',
  templateUrl: './location-autocomplete.component.html',
  styleUrls: ['./location-autocomplete.component.css']
})
export class LocationAutocompleteComponent implements OnInit {

  @Output() setAddress: EventEmitter<any> = new EventEmitter();
  @Output() messageEvent = new EventEmitter<string>();
  autocomplete: google.maps.places.Autocomplete;

  value: any;

  getVal() {
    let ori = document.getElementById('autocomplete1').value;
    let dest = document.getElementById('autocomplete2').value;
    return {ori, dest};
  }

  constructor() { }

  loader = new Loader({
    apiKey: GlobalConstants.myKey,
    version: "weekly",
    libraries: ["places"]
  });

  ngOnInit(): void {
    this.loader.load().then(() => {
      this.autocomplete = new google.maps.places.Autocomplete (
        document.getElementById('autocomplete1') as HTMLInputElement,
        {
          types: ['address'],
          componentRestrictions: {'country': ['US']},
          fields: ['name']
        });
    })
    this.loader.load().then(() => {
      this.autocomplete = new google.maps.places.Autocomplete (
        document.getElementById('autocomplete2') as HTMLInputElement,
        {
          componentRestrictions: {'country': ['US']},
          fields: ['name']
        });
    })
  }

}
