import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-hotel',
  imports: [RouterLink,RouterModule],
  templateUrl: './hotel.html',
  styleUrl: './hotel.scss',
})
export class Hotel {}
