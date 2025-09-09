import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';

export const Sidebar = () => {
  return (
    <main className='flex flex-col justify-center items-center gap-4 w-full h-dvh text-center'>
      <h1 className='text-4xl text-indigo-500 uppercase font-black  px-10'>
        graphic designer
      </h1>
      <div className='bg-indigo-100 text-indigo-900 mx-5 p-4 rounded-t-4xl rounded-br-4xl '>
        <p className=''>
          Apasionada por el diseño estratégico. Doy vida a identidades de marca,
          campañas creativas y materiales gráficos que no solo se ven
          increíbles, sino que también son funcionales y alcanzan sus metas.
        </p>
      </div>
      <aside className='flex gap-4'>
        <Icon
          icon='logos:adobe-photoshop'
          width='36'
          height='30'
        />
        <Icon
          icon='logos:adobe-illustrator'
          width='36'
          height='30'
        />
        <Icon
          icon='logos:adobe-indesign'
          width='36'
          height='30'
        />
        <Icon
          icon='logos:figma'
          height='30'
        />
      </aside>
    </main>
  );
};
