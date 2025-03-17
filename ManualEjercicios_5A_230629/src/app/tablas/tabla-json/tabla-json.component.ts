import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla-json',
  templateUrl: './tabla-json.component.html',
  styleUrls: ['./tabla-json.component.css'],
  imports: [CommonModule],
})
export class TablaJsonComponent {
  artists = [
    { name: 'Travis Scott', genre: 'Hip-Hop', country: 'EE.UU.', topSong: 'Sicko Mode' },
    { name: 'Bad Bunny', genre: 'Reggaetón', country: 'Puerto Rico', topSong: 'Tití Me Preguntó' },
    { name: 'Billie Eilish', genre: 'Pop Alternativo', country: 'EE.UU.', topSong: 'Bad Guy' },
    { name: 'Daft Punk', genre: 'Electrónica', country: 'Francia', topSong: 'Get Lucky' },
    { name: 'Arca', genre: 'Experimental', country: 'Venezuela', topSong: 'Nonbinary' }
  ];
}
