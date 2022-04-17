import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  country_names:Array<string>=['Spain','England','Israel','Italy','france','germany','ukraine','poland']
   teamsObject:any= {};
   isOpenBox:boolean=false;
   selectedCountry:string=''
  teamsArray:Array<Array<string>> = [['']]
  constructor(private  http:HttpClient) { }

  ngOnInit(): void {
  }

  displayAllTeams(country_name:string)
  {
    this.teamsArray=[]
    this.selectedCountry=country_name
    this.isOpenBox=false
    this.teamsObject=[]
    this.http.get(`https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?s=Soccer&c=${country_name}`)
      .pipe(map(responseData =>{
          this.teamsObject=(responseData);
        for (const key in this.teamsObject.teams){
          this.teamsArray.push([this.teamsObject.teams[key].strTeam ,this.teamsObject.teams[key].strTeamLogo])
        }
        return this.teamsArray
      }))
      .subscribe(post=> {
        console.log(this.teamsArray)
        console.log(this.teamsObject)
      })
console.log(country_name)
    this.isOpenBox=true
  }
}
