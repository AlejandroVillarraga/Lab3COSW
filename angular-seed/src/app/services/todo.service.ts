import { Injectable } from '@angular/core';
import { APIService } from '../common/api.service';
import { Todo } from '../models/todo';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { AuthService } from '../common/auth.service';
import { AppConfiguration } from '../common/config/app-configuration.service';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class TodoService extends APIService{

private resourceUrl: string = 'api/todo';

constructor(
        public config: AppConfiguration,
        public authService: AuthService,
        public http: Http
    ) {
        super(config,authService,http);
    }

    list(): Observable<Todo[]> {
    return this.get(this.resourceUrl);
  }

    create(description: string, priority: Number = 1, completed: boolean = false) {
    return this.post(this.resourceUrl,new Todo(description,priority,completed));


    }


}