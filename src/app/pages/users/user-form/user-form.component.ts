import { User } from 'src/app/models/user';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

// ======================================= //
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  // ======================================= //
  constructor(
    public route: Router,
    private fb: FormBuilder,
    public actRoute: ActivatedRoute,
    private userService: UserService
  ) {
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
  userId: any = '';
  // ======================================= //
  ngOnInit(): void {
    this.getUsers();
    this.actRoute.paramMap.subscribe(
      (params) => {
        this.userId = params.get('id');
        if (this.userId !== null) {
          this.userService.getUser(this.userId).subscribe(
            (response) => {
              this.userForm.patchValue({
                id: response[0].id,
                nome: response[0].nome,
                sobrenome: response[0].sobrenome,
                idade: response[0].idade,
                profissao: response[0].profissao,
              });
            },
            (error) => {}
          );
        }
      },
      (error) => {}
    );
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
      },
      () => {
        this.route.navigate(['/']);
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
  // ======================================= //
  updateUser() {
    let user: User = this.userForm.value;
    this.userService.updateUser(this.userId, user).subscribe(
      (response) => {
        alert(`Usuário ${user.nome} atualizado com sucesso!`);
      },
      (error) => {},
      () => {
        this.route.navigate(['/']);
      }
    );
  }
  // ======================================= //
  actionButton() {
    if (this.userId !== null) {
      this.updateUser();
    } else {
      this.createUser();
    }
  }
}
