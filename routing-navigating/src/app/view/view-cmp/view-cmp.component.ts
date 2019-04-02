import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/test.service';
import { HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-view-cmp',
  templateUrl: './view-cmp.component.html',
  styleUrls: ['./view-cmp.component.css']
})
export class ViewCmpComponent implements OnInit {

  UserName:string='';
  resp:any;
  // records:any[];
  constructor( private svc:TestService, private http:HttpClient) { 
    svc.pritedoutput('hi bhargav')
  }

  ngOnInit() {
  let obs =   this.http.get ('https://www.w3schools.com/angular/customers.php')
  obs.subscribe((res)=> console.log(res))
  }  

  search (){
    this.http.get('https://www.w3schools.com/angular/customers.php'+this.UserName)
    .subscribe( (resp) => {
        this.resp = resp;
        console.log(this.resp)

    })
    
  }

}
