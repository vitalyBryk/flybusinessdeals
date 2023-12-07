
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numericHighlight'
})
export class NumericHighlightPipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(/(\$|\,|\b\d+\b)/g, '<span class="numeric">$1</span>');
  }
}