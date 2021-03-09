import { createOfflineCompileUrlResolver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { GetstoreDto } from 'src/app/Models/GetstoreDto';
import { DataShareService } from 'src/app/_service/DataShare.service';
import { GroceryService } from 'src/app/_service/grocery.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-AllGrocerystores',
  templateUrl: './AllGrocerystores.component.html',
  styleUrls: ['./AllGrocerystores.component.scss']
})
export class AllGrocerystoresComponent implements OnInit {
  allgroceries: GetstoreDto[];
  imagepath=environment.imagepath+"StoreImages/";
  constructor(private spinner: NgxSpinnerService,private route: ActivatedRoute,private  groceryservice:GroceryService, private data: DataShareService, private router: Router) { }
 ngOnInit()
 {
  this.getstores();
 }
  getstores(){
    debugger;
    var latlng=localStorage.getItem('latlng');
    this.spinner.show();
      this.groceryservice.GetGrocerystores(latlng).subscribe((next:any) => {
        debugger;
        this.allgroceries=next.res;
        console.log(this.allgroceries)
        this.spinner.hide();
        
      }, error => {
        console.log(error);
      });
    }
    storedetail(id:number){
      debugger;

      var singlerst= this.allgroceries.find(x=>x.store.grocceryID==id);
      localStorage.setItem('grocceryID',singlerst.store.grocceryID.toString());
      localStorage.setItem('groccery_Name',singlerst.store.groccery_Name);
      localStorage.setItem('profileImagePath',singlerst.store.profileImagePath);
    
      this.data.changeMessage(singlerst);
     // this.subscription = this.data.currentMessage.subscribe(message => message = this.resturants)
          this.router.navigate(['/home/grocery/detail']);
    }
}
