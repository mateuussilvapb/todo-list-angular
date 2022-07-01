import { UserService } from './services/user.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UserListComponent } from './pages/users/user-list/user-list.component';
import { UserFormComponent } from './pages/users/user-form/user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataBindingComponent } from './pages/data-binding/data-binding.component';
import { ButtonComponent } from './components/button/button.component';
import { LifeCycleComponent } from './components/life-cycle/life-cycle.component';
import { TodoListComponent } from './pages/todo/todo-list/todo-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TodoItemComponent } from './pages/todo/todo-item/todo-item.component';
import { PipesExampleComponent } from './pages/pipes-example/pipes-example.component';

// ======================================= //
@NgModule({
  // ======================================= //
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    UserListComponent,
    TodoListComponent,
    TodoItemComponent,
    UserFormComponent,
    LifeCycleComponent,
    DataBindingComponent,
    PipesExampleComponent,
  ],
  // ======================================= //
  imports: [
    FormsModule,
    MatCardModule,
    MatIconModule,
    BrowserModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    AppRoutingModule,
    MatGridListModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  // ======================================= //
  providers: [UserService],
  // ======================================= //
  bootstrap: [AppComponent],
})
export class AppModule {}
