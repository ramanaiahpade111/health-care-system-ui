import { Component, OnInit} from '@angular/core';
import { DiagnosticCenter } from '../../models/diagnostic-center';
import { LabsService } from '../../services/labs.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent implements OnInit{
  centers: DiagnosticCenter[] = [];

  constructor(private labsService: LabsService){}

  ngOnInit(): void {
    this.getDiagnosticCenters();
  }

  getDiagnosticCenters(): void{
    this.labsService.getDiagnosticCenters().subscribe(
      (res) => {
        this.centers = res;
      }
    );
  }
}
