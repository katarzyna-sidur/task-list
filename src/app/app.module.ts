import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverlayComponent } from './components/overlay/overlay.component';
import { AboutContentComponent } from './components/about-content/about-content.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { ConfirmEqualValidatorDirective } from './directives/confirm-equal-validator.directive';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule, BsDatepickerModule, SortableModule } from 'ngx-bootstrap';
import { LoginModalComponent } from './modals/login-modal/login-modal.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskListResolver } from './resolvers/task-list.resolver';
import { TaskComponent } from './components/task/task.component';
import { ChangeLetterPipe } from './pipes/change-letter.pipe';
import { SortByDatePipe } from './pipes/sort-by-date.pipe';


const appRoutes: Routes = [
    { path: 'home', component: MainPageComponent },
    { path: 'registration', component: RegistrationComponent },
    { path: 'tasklist', component: TaskListComponent, resolve: {
        tasks: TaskListResolver
    } },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    OverlayComponent,
    AboutContentComponent,
    MainPageComponent,
    FooterComponent,
    RegistrationComponent,
    UserFormComponent,
    ConfirmEqualValidatorDirective,
    LoginModalComponent,
    TaskListComponent,
    TaskComponent,
    ChangeLetterPipe,
    SortByDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    SortableModule.forRoot()
  ],
    entryComponents: [
      LoginModalComponent
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
