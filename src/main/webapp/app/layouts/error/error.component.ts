import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import SharedModule from 'app/shared/shared.module';

@Component({
  selector: 'jhi-error',
  templateUrl: './error.component.html',
  imports: [SharedModule],
})
export default class ErrorComponent implements OnInit {
  errorMessage = signal<string | undefined>(undefined);

  private readonly route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.route.data.subscribe(routeData => {
      if (routeData.errorMessage) {
        this.errorMessage.set(routeData.errorMessage);
      }
    });
  }
}
