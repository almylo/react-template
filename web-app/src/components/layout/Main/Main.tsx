import './Main.scss';

interface IMainProps {
  children: any;
}

export const Main = (props: IMainProps) => {
  const {children} = props
  


  return (
    <main>
        {children}
    </main>
  );
}