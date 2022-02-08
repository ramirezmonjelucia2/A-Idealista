import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class PostService {
  constructor(private httpClient: HttpClient) {}

  public RequestCasa(): Observable<any> {
    return this.httpClient.get<any>(
      'https://lucia-test1.herokuapp.com/viviendas/Casa'
    );
  }
  public RequestChalet(): Observable<any> {
    return this.httpClient.get<any>(
      'https://lucia-test1.herokuapp.com/viviendas/Chalet'
    );
  }
}
