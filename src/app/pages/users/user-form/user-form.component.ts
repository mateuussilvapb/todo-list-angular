import { User } from 'src/app/models/user';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

// ======================================= //
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  // ======================================= //
  constructor(private fb: FormBuilder, private userService: UserService) {
    this.userForm = this.fb.group({
      id: 0,
      nome: ['', [Validators.required]],
      sobrenome: ['', [Validators.required]],
      idade: [
        18,
        [Validators.required, Validators.min(18), Validators.max(99)],
      ],
      profissao: ['', [Validators.required]],
    });
  }
  // ======================================= //
  userForm: FormGroup;
  // ======================================= //
  users: Array<User> = [];
  // ======================================= //
  ngOnInit(): void {
    this.getUsers();
  }
  // ======================================= //
  createUser() {
    this.userForm.get('id')?.patchValue(this.users.length + 1);
    let user: User;
    user = this.userForm.value;
    this.userService.postUsers(user).subscribe(
      (response) => {
        alert(`Usuário ${user.nome} cadastrado com sucesso!`);
      },
      (error) => {
        alert(`Erro ao cadastrar ${user.nome}`);
      }
    );
  }
  // ======================================= //
  getUsers() {
    this.userService.getUsers().subscribe(
      (response) => {
        this.users = response;
      },
      (error) => {}
    );
  }
}
