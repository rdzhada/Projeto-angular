import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmeService } from '../../servicos/filme.service';


@Component({
  selector: 'app-detalhes-filme',
  templateUrl: './detalhes-filme.component.html',
  styleUrls: ['./detalhes-filme.component.css']
})
export class DetalhesFilmeComponent implements OnInit {
  filme: any;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly filmeService: FilmeService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.filmeService.getFilmeById(id).subscribe((response: any) => {
      this.filme = response;
      
    });
  }
  
}


