import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.scss']
})
export class PdfViewerComponent implements OnInit {
  pdfSrc = "./assets/Compte_rendu_de_mi_projet_CHENE_CRONIER_TIRLEMONT.pdf";
  constructor() { }

  ngOnInit(): void {
  }
}

