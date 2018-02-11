import{BrowserModule}from'@angular/platform-browser';
import {NgModule }from '@angular/core';
import {RouterModule}from '@angular/router';
import {ReactiveFormsModule}from '@angular/forms';

import {AppComponent }from './app.component';

import {HomePageComponent}from './pages/home-page/home-page.component';
import {TaskListPageComponent}from './pages/task-list-page/task-list-page.component';
import { TaskEditPageComponent}from './pages/task-edit-page/task-edit-page.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';


import {UserListPageComponent}from './pages/user-list-page/user-list-page.component';
import { UserEditPageComponent}from './pages/user-edit-page/user-edit-page.component';

import {NgbModule}from '@ng-bootstrap/ng-bootstrap';

import {TodoService}from './services/todo.service';
import {UserService}from './services/user.service';
import { FormsModule } from '@angular/forms';

const ROUTES = [
{path: '', component: HomePageComponent},
{path: 'tasks', component: TaskListPageComponent},
{path: 'users', component: UserListPageComponent},
{path: 'edit', component: TaskEditPageComponent },
{path: 'editusers', component: UserEditPageComponent },
{path: '**', component: PageNotFoundComponent}]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TaskListPageComponent,
    TaskEditPageComponent,
    PageNotFoundComponent,
    UserListPageComponent,
    UserEditPageComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [TodoService, UserService, FormsModule],
  bootstrap: [AppComponent]
})

export class AppModule { }