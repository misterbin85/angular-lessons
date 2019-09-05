import { HttpEventType, HttpEvent, HttpResponse } from '@angular/common/http';
import { pipe } from 'rxjs';
import { map, filter } from 'rxjs/operators';

export function toResponseBody<T>() {
  return pipe(
    filter(( event: HttpEvent<T> ) => event.type === HttpEventType.Response),
    map(( res: HttpResponse<T> ) => res.body)
  );
}
