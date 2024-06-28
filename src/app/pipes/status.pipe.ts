import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(active: boolean): string {
    const INVALIDE_ACTIVE = active === null || active === undefined;

    if (INVALIDE_ACTIVE) {
      return 'Status indisponível ou inválido';
    };

    return active ? 'Ativo' : 'Inativo'
  };
};
