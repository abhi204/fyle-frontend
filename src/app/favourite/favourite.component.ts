import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';


@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  favouriteBanks: Object;

  tableSettings = {
    columns: {
      ifsc: {
        title: 'IFSC',
        sort: true,
        sortDirection: 'asc'
      },
      branch: {
        title: 'Branch'
      },
      address: {
        title: 'Address'
      },
      city: {
        title: 'City'
      },
      district: {
        title: 'District'
      },
      state: {
        title: 'State',
      },
      bank_id: {
        title: 'Bank ID'
      },
    },
    pager: { display: false },
    mode: "external",
    actions: { 
      add: false, 
      edit: false, 
      delete: true,
      position: 'right'
    },
  };

  tableData = new LocalDataSource();

  constructor() {
    this.favouriteBanks = JSON.parse(localStorage.getItem('favouriteBanks') || "{}");
    this.populateTable();
  }

  populateTable(){
    this.tableData = new LocalDataSource(Object.values(this.favouriteBanks));
  }

  ngOnInit(): void {
  }

  onDelete({data}){
    var favouriteIfscList = JSON.parse(localStorage.getItem('favouriteIFSC')) || [];
    favouriteIfscList.splice(favouriteIfscList.indexOf(data.ifsc), 1);
    delete this.favouriteBanks[data.ifsc];
    localStorage.setItem('favouriteBanks', JSON.stringify(this.favouriteBanks));
    this.populateTable();
  }

}
