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
              { titulo: 'Rol - Detalle', url: '/rol/adm-rol-detalle' },
              { titulo: 'Página - Listado', url: '/pagina/adm-pagina-listado' },
              { titulo: 'Página - Detalle', url: '/pagina/adm-pagina-detalle' },
              { titulo: 'Usuario - Listado', url: '/usuario/adm-usuario-listado' },
              { titulo: 'Usuario - Detalle', url: '/usuario/adm-usuario-detalle' }
          ]
      }
  ];

  constructor() { }

}

