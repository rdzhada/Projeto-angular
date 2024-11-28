import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componente/home/home.component';
import { ListagemFilmesComponent } from './componente/listagem-filmes/listagem-filmes.component';
import { DetalhesFilmeComponent } from './componente/detalhes-filme/detalhes-filme.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'filmes', component: ListagemFilmesComponent },
  { path: 'filmes/:id', component: DetalhesFilmeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

