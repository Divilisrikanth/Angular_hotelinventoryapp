import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  // template: `<h1>Hello world from inline template</h1>
  // <p>Angular is Awesome</p>
  // `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'hotelinventoryapp';

  @ViewChild('name', { static: true }) name!: ElementRef;

  ngOnInit() {
    this.name.nativeElement.innerText = "Hilton Hotel";
  }
  role = 'Users';
}
