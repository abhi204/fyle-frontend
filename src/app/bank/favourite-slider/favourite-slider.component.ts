import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favourite-slider',
  templateUrl: './favourite-slider.component.html',
  styleUrls: ['./favourite-slider.component.css']
})
export class FavouriteSliderComponent implements OnInit {
  isFavourite: boolean;

  @Input() value: string | number;
  @Input() rowData: any;

  constructor() { }

  ngOnInit(): void {
    this.isFavourite = this.FavouriteIfscList.includes(this.rowData.ifsc);
  }

  get FavouriteIfscList(): String[] {
    return JSON.parse(localStorage.getItem('favouriteIFSC')) || [];
  }

  set FavouriteIfscList(newIfscList: String[]){
    localStorage.setItem('favouriteIFSC', JSON.stringify(newIfscList));
  }
  
  toggleFavourite() {
    var newFavouriteIfscList = this.FavouriteIfscList;
    var FavouriteBanks = JSON.parse(localStorage.getItem('favouriteBanks') || "{}");

    if(!this.isFavourite){
      newFavouriteIfscList.push(this.rowData.ifsc);
      FavouriteBanks[this.rowData.ifsc] = this.rowData;
    }
    else {
      console.log("OLD: ", newFavouriteIfscList)
      newFavouriteIfscList.splice(newFavouriteIfscList.indexOf(this.rowData.ifsc), 1);
      console.log("NEW: ", newFavouriteIfscList)
      delete FavouriteBanks[this.rowData.ifsc];
    }
    this.FavouriteIfscList = newFavouriteIfscList;
    localStorage.setItem('favouriteBanks', JSON.stringify(FavouriteBanks));
    this.isFavourite = !this.isFavourite;
  }

}
