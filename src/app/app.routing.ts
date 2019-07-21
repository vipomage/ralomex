import { Routes } from '@angular/router';

export const applicationRouting: Routes = [{ path: '**', redirectTo: 'home', pathMatch: 'full' }];
