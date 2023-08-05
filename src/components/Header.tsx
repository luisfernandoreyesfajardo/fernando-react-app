import { MdMenu, MdOutlinePersonPin } from 'react-icons/md';

type Props = {
  mostrar: number;
  setMostrar: (mostrar: number) => void;} & {
  perfil: number;
  setPerfil: (perfil: number) => void;
};


export const Header = (props: Props) => {
  const { mostrar, setMostrar } = props;
  const { setPerfil } = props;

  return (
    <header className="flex items-center justify-between p-2 text-lg text-center text-white uppercase border-b-8 shadow-lg select-none bg-black border-cyan shadow-slate-400">
      <span
        onClick={() => setMostrar(1)}
        className="hover:cursor-pointer hover:text-rose-400 active:text-yellow-400">
        <MdMenu size={40} />
      </span>

      <div>
        <h1 className="font-bold">
          Reservaciones de eventos y compras online
        </h1>
        <p>Comercial "La econ&oacute;mica"</p>
      </div>

      <span onClick={()=> setPerfil(1)} className="hover:cursor-pointer hover:text-rose-400 active:text-yellow-400">
        <MdOutlinePersonPin size={50} />
      </span>
      <div
        onClick={() => setPerfil(0)}
        className={`${
          mostrar ? 'fixed' : 'hidden'
        } inset-0 z-20 bg-gray-500 bg-opacity-10 backdrop-blur-sm transition-all duration-500 ease-in-out`}></div>

      <div
        onClick={() => setMostrar(0)}
        className={`${
          mostrar ? 'fixed' : 'hidden'
        } inset-0 z-20 bg-gray-500 bg-opacity-10 backdrop-blur-sm transition-all duration-500 ease-in-out`}></div>
    </header>
  );
};
