import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  constructor() { }
  @Input() element:any
  // @Input() element:{isOpenBox:boolean,teamsArray: string[][]}
  ngOnInit(): void { }
}
