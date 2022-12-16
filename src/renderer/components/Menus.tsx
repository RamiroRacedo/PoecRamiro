import { useState } from 'react';
import MenuModel from 'renderer/models/MenuModel';
import Menu from './Menu';

export default function Menus() {
  const menus: MenuModel[] = [
    { label: 'Edicion', options: ['Abrime', 'Nueva', 'Salite', 'Salvame'] },
    { label: 'Archivos', options: ['Cortar', 'Copy', 'Paste'] },
    { label: 'Solicitar ayuda', options: ['Views', 'Aministrator'] },
    { label: 'Herramientas', options: ['View more', 'Actualitation'] },
  ];

  const [show, setShow] = useState<number>();

  return (
    <div className="title-bar">
      <div
        className="close-menu"
        onClick={() => setShow(undefined)}
        style={{ display: show !== undefined ? 'block' : 'none' }}
      />
      {menus.map((menu, i) => (
        <Menu
          show={show === i}
          label={menu.label}
          options={menu.options}
          showMe={() => setShow(i)}
        />
      ))}
      <div className="title">Titulo</div>

      <div
        style={{
          right: 0,
          padding: 8,
          position: 'relative',
          userSelect: 'none',
          flex: 0,
          marginLeft: 'auto',
          width: 'auto',
          textAlign: 'end',
        }}
      >
        <span
          onClick={() => window.nativeFunctions.minimize()}
          style={{
            padding: 8,
          }}
        >
          _
        </span>
        <span
          style={{
            padding: 8,
          }}
        >
          x
        </span>
        <span
          style={{
            padding: 8,
          }}
        >
          x
        </span>
      </div>
    </div>
  );
}
