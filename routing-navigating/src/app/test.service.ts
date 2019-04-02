import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  pritedoutput(arg){
    console.log(arg)
  }

}
