import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { IPhoto, PHOTOS } from './gallery.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  @ViewChild('divImage') divImage!: ElementRef;
  images: IPhoto[] = PHOTOS;
  imageSelected: number = 1;
  private initialWidth!: number;
  private intervalPlay!: any;
  paginatorFirstImage = 1;
  paginatorLastImage = 3;

  constructor(private renderer2: Renderer2) {}

  ngAfterViewInit() {
    this.initialWidth = this.divImage.nativeElement.offsetWidth;
  }

  setSelectedImage(id: number) {
    this.imageSelected = id;
  }

  getImageSelected(): string | undefined {
    return this.images.find((image) => image.id === this.imageSelected)?.src;
  }

  next() {
    if (this.imageSelected < this.images.length) {
      this.imageSelected++;
    }
  }
  previous() {
    if (this.imageSelected > 1) {
      this.imageSelected--;
    }
  }

  zoom(type: string) {
    const _myDiv = this.divImage.nativeElement;
    this.initialWidth += type === 'in' ? 40 : -40;
    this.renderer2.setStyle(_myDiv, 'width', String(this.initialWidth) + 'px');
    this.renderer2.setStyle(_myDiv, 'height', 'auto');
  }

  play() {
    this.intervalPlay = setInterval(() => {
      this.imageSelected =
        this.imageSelected < this.images.length ? this.imageSelected + 1 : 1;
    }, 500);
  }

  stop() {
    clearInterval(this.intervalPlay);
  }

  handleChangePage(event: any) {
    this.imageSelected = this.paginatorFirstImage =
      event.pageIndex * event.pageSize + 1;
    const last = (event.pageIndex + 1) * event.pageSize;
    this.paginatorLastImage = Math.min(event.length, last);
  }
}
