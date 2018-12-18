import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FastComponent } from './fast/fast.component';
import { SlowComponent } from './slow/slow.component';
import { SlowComponentResolverService } from './slow-component-resolver.service';

const routes: Routes = [
{path: '', redirectTo: 'fast', pathMatch: 'full'},
{path: 'fast', component: FastComponent},
{path: 'slow', component: SlowComponent, resolve: {response: SlowComponentResolverService}}
];


@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }
