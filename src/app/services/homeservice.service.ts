import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HomeserviceService {

  constructor(private http: HttpClient) { }

  getImages() {
    return this.http.get<any>('assets/photos.json')
      .toPromise()
      .then(res => <any[]>res.data)
      .then(data => { return data; });
    }
}
