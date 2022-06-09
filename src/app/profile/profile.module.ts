import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [ProfileComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  exports: [ProfileComponent],
})
export class ProfileModule {
}
