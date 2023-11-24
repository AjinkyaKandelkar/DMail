import { Component, OnInit } from '@angular/core';
import { Venue } from '../responseObj';

@Component({
  selector: 'app-savedstar',
  templateUrl: './savedstar.component.html',
  styleUrls: ['./savedstar.component.css']
})
export class SavedstarComponent implements OnInit{
  
  all_Star_data:Venue[] =[];;
  
  
  ngOnInit(): void {
    this.all_Star_data = JSON.parse(localStorage.getItem('data')||'{}');
    
  }

  starglow(i:any,sObject:any)
  {


    for(var od of this.all_Star_data)
    {
      if(sObject.id == od.id )
      {
        
        od.isStar =false;    
        this.all_Star_data = this.all_Star_data.filter(item => item.id !== od.id); 
        localStorage.setItem('data',JSON.stringify(this.all_Star_data));
        sObject=null;
      }
      
    }
  }
}
