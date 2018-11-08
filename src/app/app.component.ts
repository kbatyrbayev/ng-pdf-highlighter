import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';
import * as Popper from 'popper.js/dist/umd/popper.js';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('pdfContainer') private pdfContainer: ElementRef;

  title = 'ng-pdf-highlighter';
  comment: string = '';

  rect: Rectangle = { x1: 0, y1: 0, x2: 0, y2: 0, width: 0, height: 0 };
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

  areaInfo: AreaInfo[] = [];

  constructor() {
    this.areaInfo = [
      {
        "rectangleId":"rectangle-1",
        "pageNumber": 1,
        "rect": {
          "height": 127,
          "width": 646,
          "x1": 60.5,
          "x2": 706.5,
          "y1": 257,
          "y2": 384
        },
        "isDelete": false
      },
      {
        "rectangleId": "rectangle-2",
        "pageNumber": 3,
        "rect": {
          "height": 141,
          "width": 636,
          "x1": 66.921875,
          "x2": 702.921875,
          "y1": 226,
          "y2": 367
        },
        "isDelete": false
      }];
  }

  mouseEvent(event) {

    if (!this.showPopup) {
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
            x2: this.mousePosition.x,
            y2: this.mousePosition.y,
            width: width,
            height: height
          };
  
          if (this.element != null) {
            this.element.style.width = width + 'px';
            this.element.style.height = height + 'px';
            if (this.rect.width > 0 && this.rect.height > 0) {
              document.getElementsByClassName('to-draw-rectangle')[this.dataPageNumber - 1].appendChild(this.element);
            }
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
  
          let rectId = document.getElementsByClassName('rectangle').length + 1;
  
          this.element = document.createElement('div');
          this.element.className = 'rectangle';
          this.element.id = 'rectangle-'+rectId;
          this.element.style.position = 'absolute';
          this.element.style.border = '2px solid #0084FF';
          this.element.style.borderRadius = '3px';
          this.element.style.left = this.lastMousePosition.x + 'px';
          this.element.style.top = this.lastMousePosition.y + 'px';
        }
        
      }
  
      if (event.type === 'mouseup') {
  
        this.mouseDownFlag = false;
        if (this.rect.height > 0 && this.rect.width > 0) {
          let popper = document.querySelector('.js-popper');
          new Popper(this.element, popper, {
            placement: 'top-end'
          });
          this.showPopup = true;
        }
  
      }
    }


  }

  // added new div when pages rendered
  indexOfPage: number = 1;
  pageRendered(event) {
    let elem = document.createElement('div');
    elem.className = 'to-draw-rectangle';
    elem.style.position = 'absolute';
    elem.style.left = 0 + 'px';
    elem.style.top = 0 + 'px';
    elem.style.right = 0 + 'px';
    elem.style.bottom = 0 + 'px';
    elem.style.cursor = 'crosshair';
    // elem.style.background = 'red';
    // elem.style.opacity = '0.4';
    event.path.find(p => p.className == 'page').appendChild(elem);

    $('.textLayer').addClass('disable-textLayer');

    let rectElem = this.areaInfo.find(f => f.pageNumber === this.indexOfPage);
    if (typeof rectElem !== 'undefined') {
      let rectId = document.getElementsByClassName('rectangle').length + 1;
      let rect = document.createElement('div');
      rect.className = 'rectangle';
      rect.id = 'rectangle-' + rectId;
      rect.style.position = 'absolute';
      rect.style.border = '2px solid #0084FF';
      rect.style.borderRadius = '3px';
      rect.style.left = rectElem.rect.x1 + 'px';
      rect.style.top = rectElem.rect.y1 + 'px';
      rect.style.width = rectElem.rect.width + 'px';
      rect.style.height = rectElem.rect.height + 'px';
      //get to-draw-rectangle div and add rectangle
      event.path.find(p => p.className == 'page').children[2].appendChild(rect); 
    }
    this.indexOfPage++;
  }

  showPopup: boolean = false;
  getStyle() {
    if (this.showPopup) {
      return "block";
    } else {
      return "none";
    }
  }

  save() {
    this.areaInfo.push(
      {
        rectangleId: this.element.id,
        pageNumber: this.dataPageNumber,
        rect: this.rect,
        isDelete: false
      }
    );
    this.showPopup = false;
    // console.log(this.areaInfo);
  }

  cancel(event) {
    let rectId = this.element.getAttribute('id');
    $('#'+rectId).remove();
    this.showPopup = false;
  }

  delete(list: AreaInfo) {
    document.getElementById(list.rectangleId).remove();
    this.areaInfo.find(f => f.rectangleId === list.rectangleId).isDelete = true;
    this.areaInfo = this.areaInfo.filter(f => f.isDelete === false);
  }

  listRectangleId: string = '';
  moveTo(list: AreaInfo) {
    if (this.listRectangleId) {
      document.getElementById(this.listRectangleId).style.background = 'transparent';
      document.getElementById(this.listRectangleId).style.opacity = '1';
    }
    if (this.listRectangleId !== list.rectangleId) {
      document.getElementById(list.rectangleId).scrollIntoView({ block: 'start', behavior: 'smooth' });
      document.getElementById(list.rectangleId).style.background = 'red';
      document.getElementById(list.rectangleId).style.opacity = '0.4';
      this.listRectangleId = list.rectangleId;
    } 
  }

}

interface Position {
  x: number;
  y: number;
}


interface Rectangle {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  width: number;
  height: number;
}


interface AreaInfo {
  rectangleId: string;
  pageNumber: number;
  rect: Rectangle;
  isDelete?: boolean;
}