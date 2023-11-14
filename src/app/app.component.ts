import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

interface Jogo {
  nome: string | null
  anoLancamento: string  | null
  srcImagem: string | null
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = new FormControl('');
  anoLancamento = new FormControl('2023');
  srcImagem = new FormControl('');

  jogosSig = signal<Jogo[]>([])

  cadastrar (event: SubmitEvent) {
    event.preventDefault()
    this.jogosSig.update(jogos => {
      jogos.push({
        nome: this.nome.value,
        anoLancamento: this.anoLancamento.value,
        srcImagem: this.srcImagem.value,
      })
      return jogos
    })
  }

}
