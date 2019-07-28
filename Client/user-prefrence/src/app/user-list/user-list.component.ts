import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { DataService } from '../service/data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['firstName', 'lastName', 'age', 'color','id'];
  dataSource : any;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(public dataService:DataService,private router: Router) {
  }

  ngOnInit() {
    this.retriveData();
  }

  retriveData(){
    this.dataService.GetAllUsers().subscribe(res=>{
      this.dataSource = new MatTableDataSource();
      this.dataSource.data = res.data;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.dataSource.data);
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  navigate(id:number){
    this.router.navigate(['/edit/'+id])
  }

  delete(id:number){
    this.dataService.DeleteUser(id).subscribe(res=>{
      this.retriveData();
    });
  }
}
