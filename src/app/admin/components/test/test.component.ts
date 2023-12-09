import { Component, OnInit } from '@angular/core';
import { Test } from '../../models/test';
import { TestService } from '../../services/test.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent implements OnInit {

  tests: Test[] = [];

  constructor(private testService: TestService){}

  ngOnInit(): void {
    this.getTests();
  }

  getTests(): void{
    this.testService.getTests().subscribe(
      (res) => {
        this.tests = res;
      }
    );

    
  }

}
