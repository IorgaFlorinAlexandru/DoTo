import { EventEmitter,Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoreService {


  asideMenuResized : EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  resizeAsideMenu(){
      this.asideMenuResized.emit(true);
  }
}
