import { FormControl } from '@angular/forms';

export function requiredFileType(type:string) {
  return function(control: FormControl) {
    const file = control.value;
    if (file) {
      const extension: string = file.name.split('.')[1].toLowerCase();
      if (type.toLocaleLowerCase() !== extension.toLocaleLowerCase()) {
        return {
           requiredFileType: true
          };
      }
      return null;
    }
    return null;
  }
}
