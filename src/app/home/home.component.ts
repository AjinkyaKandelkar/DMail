import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { RootObject, Venue } from '../responseObj';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  some?: RootObject=  new RootObject ;
  AllLocalData:Venue[]=[];
  SingleData:Venue= new Venue;
  AllData?:Venue[] =[];
  data:Venue[] =[];
  olddata:Venue[] =[];
  applyClass = true;

  starStatus:boolean=false;

  constructor( private _serv: DataService ) {

  }

  ngOnInit(): void {
    this._serv.getallData().subscribe(
      (data)=>
      {
        this.some= data;
        this.AllData =  this.some.response?.venues;
        this.checkStar(this.AllData);
      }
      );

      this.olddata= JSON.parse( localStorage.getItem('data')||'{}');
      // localStorage.clear();
  }


 starglow(i:any, sObject:any)
 {

    var star = document.getElementById(i);
    star?.classList.toggle("bi-star-fill")

    if(localStorage.getItem('data')==null)
    {
      localStorage.setItem('data','[]');
      localStorage.setItem('index','[]');
    }


    if(this.olddata == null || undefined || this.olddata.length ==0)
    {

      sObject.isStar=true;
      this.olddata.push(sObject);

      localStorage.setItem('data',JSON.stringify(this.olddata));
    }
    else{

      for(var od of this.olddata)
      {
        if(sObject.id == od.id )
        {

          od.isStar =false;
          this.olddata = this.olddata.filter(item => item.id !== od.id);
          localStorage.setItem('data',JSON.stringify(this.olddata));
          sObject=null;
        }

      }
      if( sObject!=null )
      {

        sObject.isStar=true;
        this.olddata.push(sObject);
        localStorage.setItem('data',JSON.stringify(this.olddata));

      }

    }



 }

 checkStar(Data: any)
 {

    if(this.olddata==null)
    {
      this.AllLocalData = Data;

    }
    else{

      for(var d of Data)
      {
        for(var old of this.olddata)
        {
          if(d.id == old.id)
          {
            this.SingleData=d;
            this.SingleData.isStar= true;
            this.AllLocalData.push(this.SingleData);
          }
        }
        if(!this.AllLocalData.find(x=> x.id == d.id))  
          this.AllLocalData.push(d);   
        
      }
    }

 }

}
