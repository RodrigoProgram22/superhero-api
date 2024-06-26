import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { VersusComponent } from './components/versus/versus.component';
import { HomeComponent } from './components/home/home.component';
import { QuePrefieresComponent } from './components/que-prefieres/que-prefieres.component';
import { VerTodosComponent } from './components/ver-todos/ver-todos.component';
@NgModule({
  declarations: [AppComponent, FooterComponent, VersusComponent, HomeComponent, QuePrefieresComponent, VerTodosComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
