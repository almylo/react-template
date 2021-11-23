import './Main.scss';

interface MainLayoutProps {
  children: any;
}

export const Main = (props: MainLayoutProps) => {
  const {children} = props
  


  return (
    <main>
        {children}
    </main>
  );
}