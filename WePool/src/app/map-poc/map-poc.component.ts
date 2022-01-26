import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { GlobalConstants } from '../common/global-constants';

@Component({
  selector: 'app-map-poc',
  templateUrl: './map-poc.component.html',
  styleUrls: ['./map-poc.component.css']
})
export class MapPOCComponent implements OnInit {

  public origin: string = "";
  public destination: string = "";
  public link: string = "";
  geocoder: google.maps.Geocoder;
  map : google.maps.Map;
  inputVal: any;

  constructor(private http : HttpClient) { }

  loader = new Loader({
    apiKey: GlobalConstants.myKey,
    version: "weekly",
    libraries: ["places"]
  });

  ngOnInit(): void {
    this.loader.load().then(() => {
      this.map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: { lat: 0, lng: 0 },
        zoom: 3,
      });
      this.geocoder = new google.maps.Geocoder();
    });
  }

  @ViewChild('search' /* #name or Type*/, {static: false}) search;

  async initRoute() {
    let origin = this.search.getVal().ori;
    let destination = this.search.getVal().dest;
    let oriEnc = encodeURIComponent(origin);
    let destEnc = encodeURIComponent(destination);
    let response = await this.getGeocode(oriEnc);
    let oriLoc = this.results;
    response = await this.getGeocode(destEnc);
    let destLoc = this.results;
    let directionsService : google.maps.DirectionsService = new google.maps.DirectionsService(),
        directionsDisplay : google.maps.DirectionsRenderer = new google.maps.DirectionsRenderer(),
        request = {
          origin : new google.maps.LatLng(oriLoc.lat, oriLoc.lng),
          destination : new google.maps.LatLng(destLoc.lat, destLoc.lng),
          travelMode: google.maps.TravelMode.DRIVING
    }
    directionsDisplay.setMap(this.map);
    directionsService.route(request, (result, status) => {
      if (status == 'OK') {
        directionsDisplay.setDirections(result);
      }
    })
    this.link = "https://www.google.com/maps/dir/?api=1&origin=" + oriEnc + "&destination=" + destEnc + "&travelmode=driving";
  }

  results : any;

  async getGeocode(location : string) {
    let _url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + location + "&key=" + GlobalConstants.myKey;
    let promise = new Promise<void>((resolve, reject) => {
      this.http.get(_url).toPromise()
        .then(
          res => { // Success
          this.results = parseJSON(res).results[0].geometry.location;
          resolve();
          },
          msg => { // Error
            console.log(msg);
            reject(msg);
          }
        );
    });    
    return promise;
  }
}

function parseJSON(data: any) {
  return JSON.parse(JSON.stringify(data));
}