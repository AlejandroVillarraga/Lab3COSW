import{Injectable}from'@angular/core';
import { User } from '../models/user';

@Injectable()
export class UserService {

private users: User[] = [
    new User("Alejandro","Villarraga","https://scontent.fbog2-1.fna.fbcdn.net/v/t1.0-1/p160x160/15590330_1889204337980981_7135372285958833797_n.jpg?oh=e9a8ee54c5fd489d7f73dfea9025d662&oe=5B1D4B56"),
    new User('Javier',"Silva", "https://scontent.fbog2-1.fna.fbcdn.net/v/t1.0-1/p160x160/17904011_10211686718499558_4641406048506891513_n.jpg?oh=d4fd6f460a6a82ac17381b686e970a4f&oe=5B07B65E")
  ];

  constructor() {

  }

  list(): User[] {
    return this.users;
  }

  create(name: string, lastName: string, image: string) {
    this.users.push(new User(name, lastName, image));
  }



}