import {Cat} from './model';

import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatsDataService {

  private readonly allCats: Cat[] = [
    {
      name: 'Puszek',
      ageMonths: 8,
      breed: 'maine coon',
      picUrl: ['puszek1.jpg', 'puszek2.jpg', 'puszek3.jpg', 'puszek4.jpg'],
      vaccinated: false,
      reserved: false,
      funFact: "Likes to catch mice"
    },
    {
      name: 'Mruczek',
      ageMonths: 36,
      breed: 'brytyjczyk',
      picUrl: ['mruczek1.jpg', 'mruczek2.jpg'],
      vaccinated: true,
      reserved: false,
      funFact: "Hates other cats"
    },
    {
      name: 'Kiciek',
      ageMonths: 52,
      breed: 'perski',
      picUrl: ['kiciek.jpg', 'kiciek1.jpg', 'kiciek2.jpg'],
      vaccinated: true,
      reserved: false,
      funFact: "Loves dogs"
    },
    {
      name: 'Kłaczek',
      ageMonths: 81,
      breed: 'brytyjczyk',
      picUrl: ['klaczek.jpg', 'klaczek1.jpg', 'klaczek2.jpg'],
      vaccinated: false,
      reserved: false,
      funFact: "Meows all the time"
    },
    {
      name: 'Pimpuś',
      ageMonths: 6,
      breed: 'dachowiec',
      picUrl: ['pimpus.jpg', 'pimpus2.jpg'],
      vaccinated: false,
      reserved: false,
      funFact: "Loves hugs"
    }
  ];

  getCatsData(): Observable<Cat[]> {
    return of(this.allCats);
  }

  getCat(name: string): Observable<Cat> {
    return of(this.allCats.find(c => c.name === name)!);
  }
}
