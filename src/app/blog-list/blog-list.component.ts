import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  blogs: any = [];

  constructor(private httpClient: HttpClient ) {
    this.loadBlogs();
  }

  ngOnInit() {
  }

  loadBlogs() {
    this.httpClient.get('http://demo3436895.mockable.io/blogs').subscribe(data => {
      this.blogs = data;
      console.log(this.blogs);
    });
  }
}
