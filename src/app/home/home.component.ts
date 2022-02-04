import { Component, OnInit } from '@angular/core';
import { BrainService } from '../_brain/-brain.service';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public brainService:BrainService,
              public http:HttpClient) { }

  ngOnInit(): void {
  }

  //title = new FormControl('');
  books = new FormGroup({
    title:new FormControl(''),
    author:new FormControl(''),
    cover:new FormControl('')
  });

  //using FormData() here for now 
    formData = new FormData();

   sendData():any{
    this.formData.append('title',this.books.value.title.value);
    this.formData.append('author',this.books.value.author.value);
    return this.http.post('/api/post',this.formData);

   }
}
