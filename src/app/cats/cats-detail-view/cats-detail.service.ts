import {Injectable} from "@angular/core";
import {Cat} from '../model';

@Injectable({
  providedIn: 'root'
})
export class CatsDetailService {

  getScrolledUpImagePosition(cat: Cat, position: number) {
    if (position + 1 > cat.picUrl.length - 1) {
      return position
    }
    return position + 1
  }

  getScrolledDownImagePosition(cat: Cat, position: number) {
    if (position - 1 < 0) {
      return position
    }
    return position - 1
  }
}
