import{Injectable}from'@angular/core';
import { User } from '../models/user';

import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

import { APIService } from '../common/api.service';
import { AppConfiguration } from '../common/config/app-configuration.service';
import { AuthService } from '../common/auth.service';

@Injectable()
export class UserService extends APIService {

private users: User[] = [
    new User("","","","Alejandro","Villarraga","https://scontent.fbog2-1.fna.fbcdn.net/v/t1.0-1/p160x160/15590330_1889204337980981_7135372285958833797_n.jpg?oh=e9a8ee54c5fd489d7f73dfea9025d662&oe=5B1D4B56"),
    new User("","","",'Javier',"Silva", "https://scontent.fbog2-1.fna.fbcdn.net/v/t1.0-1/p160x160/17904011_10211686718499558_4641406048506891513_n.jpg?oh=d4fd6f460a6a82ac17381b686e970a4f&oe=5B07B65E")
  ];


  private resourceUrl: string = 'user/items';

  constructor(public config:AppConfiguration,public http:Http,public authService: AuthService ) {
    super(config, authService, http);
  }

  userByEmail(url:string){
    return this.get(url);
  }

  list(): Observable<User[]> {
    return this.get(this.resourceUrl);
  }

  create(username:string,password:string,email:string,firstname: string, lastName: string, image: string) {
    return this.post(this.resourceUrl,new User(username,password,email,firstname, lastName, image));
  }

  login(username: string, password: string) {
    return this.post('user/login', { username, password }, { credentials: false }).map(loginResponse => {
      if (loginResponse) {
        this.authService.accessToken = loginResponse.accessToken;
      }
    });
  }


}