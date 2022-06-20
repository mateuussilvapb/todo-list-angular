import { DataBindingComponent } from './pages/data-binding/data-binding.component';
import { UserFormComponent } from './pages/users/user-form/user-form.component';
import { UserListComponent } from './pages/users/user-list/user-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// ======================================= //
const routes: Routes = [
  {
    path: '',
    component: UserListComponent,
  },
  {
    path: 'form',
    component: UserFormComponent,
  },
  {
    path: 'form/:id',
    component: UserFormComponent,
  },
  {
    path: 'data-binding',
    component: DataBindingComponent,
  },
];
// ======================================= //
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
