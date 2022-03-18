import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../app.component';

@Pipe({
  name: 'filter',
  pure: false //
})
export class FilterPipe implements PipeTransform {

  transform(posts: Post[], search: string = ''): Post[] {
    const srch = search.toLocaleLowerCase();
    if (!search.trim()) {
      return posts;
    }
    return posts.filter(post => post.title.toLocaleLowerCase().includes(srch) || 
                                post.text.toLocaleLowerCase().includes(srch));
  }

}
