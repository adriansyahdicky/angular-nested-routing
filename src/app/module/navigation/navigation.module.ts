import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationRoutingModule } from './navigation-routing-module';
import { HomeComponent } from './components/home/home.component';

@NgModule({
    declarations: [
        NavComponent,
        DashboardComponent,
        SidebarComponent,
        FooterComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        NavigationRoutingModule
    ]
})

export class NavigationModule{}