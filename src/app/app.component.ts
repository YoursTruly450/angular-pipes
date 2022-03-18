import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

export interface Post {
  title: string,
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  e: number = Math.E;

  str = 'hello world';

  date: Date = new Date();

  float: number = 0.42;

  obj = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3,
        f: 4
      }
    }
  }

  posts: Post[] = [
    {
      title: 'Beer',
      text: 'the worlds\' best beer'
    },
    {
      title: 'Bread',
      text: 'the best bread in the world'
    },
    {
      title: 'JavaScript',
      text: '... language in the world'
    }
  ];

  search = '';

  addPost() {
    this.posts.unshift({
      title: 'Angular 8',
      text: 'Mike Anglular 8 course'
    });
  }

  promise: Promise<string> = new Promise<string>(resolve => {
    setTimeout(() => {
      resolve('Promise Resolved');
    }, 4000);
  })

  date$: Observable<Date> = new Observable(obs => {
    setInterval(() => {
      obs.next(new Date());
    }, 1000);
  })

  dateObs: Date

  ngOnInit(): void {
    this.date$.subscribe(date => {
      this.dateObs = date;
    });
  }
}
