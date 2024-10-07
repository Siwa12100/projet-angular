import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tests-cmpt',
  standalone: true,
  imports: [],
  templateUrl: './tests-cmpt.component.html',
  styleUrl: './tests-cmpt.component.css'
})
export class TestsCmptComponent implements OnInit {

  constructor() {}

  ngOnInit() : void {

    console.log("Passage ng on init ! ");
  }
}
