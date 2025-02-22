import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { AdoptionData } from '../model';
import {CatsDataService} from "../cats-data.service";

@Injectable({
  providedIn: 'root'
})
export class CatsAdoptionService {

  constructor(private http: HttpClient, private catsDataService: CatsDataService) {
  }

  adopt(adoptionData: AdoptionData): void {
    console.log(`posting ${JSON.stringify(adoptionData, null, 2)}`);
    this.http.post('api/v1/adoption', adoptionData)
        .pipe(catchError(err => {
          console.log(`response: ${JSON.stringify(err, null, 2)}`);
          this.catsDataService.getCat(adoptionData.catsName).subscribe(cat => cat.reserved = true)
          return of([]);
        }))
        .subscribe((res) => {
            console.log(`response: ${JSON.stringify(res, null, 2)}`);
          }
        );
  };






}
