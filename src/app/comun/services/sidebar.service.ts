import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {
    menu: any = [
      {
          titulo: 'Principal',
          icono: 'mdi mdi-gauge',
          submenu: [
              { titulo: 'Dashboard', url: '/adm-dashboard' },
              { titulo: 'Rol - Listado', url: '/rol/adm-rol-listado' },
              { titulo: 'Rol - Detalle', url: '/rol/adm-rol-detalle' }
          ]
      }
  ];

  constructor() { }

}

