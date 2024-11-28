import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componente/home/home.component';
import { ListagemFilmesComponent } from './componente/listagem-filmes/listagem-filmes.component';
import { DetalhesFilmeComponent } from './componente/detalhes-filme/detalhes-filme.component';
import { DataBrasilPipe } from './pipe/data-brasil.pipe';
import { ResumoTextoPipe } from './pipe/resumo-texto.pipe';
import { HighlightDirective } from './diretivas/highlight.directive';
import { ImageFallbackDirective } from './diretivas/image-fallback.directive';


@NgModule({
  declarations:[
    AppComponent,
    HomeComponent,
    ListagemFilmesComponent,
    DetalhesFilmeComponent,
    DataBrasilPipe,
    ResumoTextoPipe,
    HighlightDirective,
    ImageFallbackDirective,
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
