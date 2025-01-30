import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() text: string = 'Click me'; // Texto dinâmico do botão
  @Input() cssClass: string = 'btn-primary'; // Classe CSS customizável
  @Input() disabled: boolean = false; // Desabilitar botão, se necessário

  @Output() onClick: EventEmitter<void> = new EventEmitter(); // Emite eventos de clique

  handleClick(): void {
    this.onClick.emit();
  }
}
