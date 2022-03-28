import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { GlobalConstants } from '../../../common/global-constants';

@Component({
  selector: 'AutocompleteComponent',
  templateUrl: './location-autocomplete.component.html',
  styleUrls: ['./location-autocomplete.component.css']
})
export class LocationAutocompleteComponent implements OnInit {

  oriInput = "originInput";
  destInput = "destinationInput"
  autocomplete: google.maps.places.Autocomplete;

  constructor() { }

  loader = new Loader({
    apiKey: GlobalConstants.myKey,
    version: "weekly",
    libraries: ["places"]
  });

  //Initializes each autocomplete fields on page
  ngOnInit(): void {
    this.loadFile(this.oriInput);
    this.loadFile(this.destInput);
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
    })
  }

  //Retrieves values from inputs
  getVal() {
    let ori = (<HTMLInputElement>document.getElementById(this.oriInput)).value;
    let dest = (<HTMLInputElement>document.getElementById(this.destInput)).value;
    return {ori, dest};
  }

}
