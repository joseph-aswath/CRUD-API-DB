import { Component, OnInit } from '@angular/core';
import { BrainService } from '../_brain/-brain.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  constructor(public brainService:BrainService) { }

  ngOnInit(): void {
  }

}
