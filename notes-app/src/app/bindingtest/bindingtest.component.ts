import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindingtest',
  templateUrl: './bindingtest.component.html',
  styleUrls: ['./bindingtest.component.scss']
})
export class BindingtestComponent implements OnInit {
  color:string = "red";
  inp:string = "";
  constructor() { }

  ngOnInit(): void {
  }
  function(){
    this.color = this.inp;
  }
}
