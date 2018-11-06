import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('pdfContainer') private pdfContainer: ElementRef;

  title = 'ng-pdf-highlighter';

  rect: { x1: number, y1: number, x2: number, y2: number } = { x1: 0, y1: 0, x2: 0, y2: 0 };
  lastMousePosition: Position = { x: 0, y: 0 };
  canvasPosition: Position = { x: 0, y: 0 };
  mousePosition: Position = { x: 0, y: 0 };
  mouseDownFlag: boolean = false;

  pagePosition: Position = { x: 0, y: 0 };

  cnv;
  pdfBody;
  ctx;
  element = null;
  dataPageNumber: number;
  mouseEvent(event) {
    if (event.type === 'mousemove') {

      this.mousePosition = {
        x: event.clientX - this.pagePosition.x,
        y: event.clientY - this.pagePosition.y
      };

      if (this.mouseDownFlag) {
        let width = this.mousePosition.x - this.lastMousePosition.x;
        let height = this.mousePosition.y - this.lastMousePosition.y;
        this.rect = {
          x1: this.lastMousePosition.x,
          y1: this.lastMousePosition.y,
          x2: width,
          y2: height
        };

        if (this.element != null) {
          this.element.style.width = width + 'px';
          this.element.style.height = height + 'px';
          document.getElementsByClassName('to-draw-rectangle')[this.dataPageNumber - 1].appendChild(this.element);
        }

      }
      

    }

    if (event.type === 'mousedown') {
      this.mouseDownFlag = true;

      let eventPath = event.path.find(p => p.className == 'page');
      if (typeof eventPath !== 'undefined') {
        this.dataPageNumber = parseInt(eventPath.getAttribute('data-page-number')); // get id of page

        let toDrawRectangle = document.getElementsByClassName('to-draw-rectangle');
        let pageOffset = toDrawRectangle[this.dataPageNumber-1].getBoundingClientRect();
        this.pagePosition = { 
          x: pageOffset.left,
          y: pageOffset.top
        };
        

        this.lastMousePosition = {
          x: event.clientX - this.pagePosition.x,
          y: event.clientY - this.pagePosition.y
        }

        this.element = document.createElement('div');
        this.element.className = 'rectangle';
        this.element.style.position = 'absolute';
        this.element.style.border = '1px solid black';
        this.element.style.borderRadius = '3px';
        this.element.style.background = 'yellow';
        this.element.style.opacity = 0.4;
        this.element.style.left = this.lastMousePosition.x + 'px';
        this.element.style.top = this.lastMousePosition.y + 'px';
      }

      
      
    }

    if (event.type === 'mouseup') {
      this.mouseDownFlag = false;
    }

  }

  // added new div when pages rendered
  pageRendered(event) {
    let elem = document.createElement('div');
    elem.className = 'to-draw-rectangle';
    elem.style.position = 'absolute';
    elem.style.left = 0 + 'px';
    elem.style.top = 0 + 'px';
    elem.style.right = 0 + 'px';
    elem.style.bottom = 0 + 'px';
    elem.style.cursor = 'crosshair';
    elem.style.background = 'red';
    elem.style.opacity = '0.4';
    event.path.find(p => p.className == 'page').appendChild(elem);
  }

}

interface Position {
  x: number;
  y: number;
}
