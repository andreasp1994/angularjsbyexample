import {ElementRef} from 'angular2/core'
let rootElementInstance: ElementRef;
export function rootElement(root?: ElementRef) {
  if (root) {
    rootElementInstance = root;
  }
  return rootElementInstance;
}
