import { Component, OnInit } from '@angular/core';
import { BrainService } from '../_brain/-brain.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public brainService:BrainService) { }

  ngOnInit(): void {
  }

  //title = new FormControl('');
  books = new FormGroup({
    title: new FormControl(''),
    author: new FormControl(''),
    cover:new FormControl('')
  })
}
