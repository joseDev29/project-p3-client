import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'projectDescription',
})
export class ProjectDescriptionPipe implements PipeTransform {
  transform(value: string) {
    if (value.length <= 100) return value;

    return `${value.slice(0, 100)}...`;
  }
}
