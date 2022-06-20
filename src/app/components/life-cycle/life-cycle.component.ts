import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';

// ======================================= //
@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.scss'],
})
export class LifeCycleComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked,
    OnDestroy
{
  // ======================================= //
  constructor() {
    console.log('chamou o construtor');
  }
  // ======================================= //
  @Input() number = 10;
  // ======================================= //
  ngOnChanges(): void {
    console.log('chamou o OnChanges');
  }
  // ======================================= //
  ngDoCheck(): void {
    console.log('chamou o DoCheck');
  }
  // ======================================= //
  ngAfterContentInit(): void {
    console.log('chamou o AfterContentInit');
  }
  // ======================================= //
  ngAfterContentChecked(): void {
    console.log('chamou o AfterContentChecked');
  }
  // ======================================= //
  ngAfterViewChecked(): void {
    console.log('chamou o AfterViewChecked');
  }
  // ======================================= //
  ngOnDestroy(): void {
    console.log('chamou o OnDestroy');
  }
  // ======================================= //
  ngOnInit(): void {
    console.log('chamou o OnInit');
  }
}
