import { Link, useHistory } from "react-router-dom";

interface IUseLinkProps {
    url: string; 
    className?: string;
    children: any;
}

export default function UseLink(props: IUseLinkProps) {
    const { url, className, children } = props;
    const history = useHistory();

    const delayRedirect = (e: any, target: any) => {
        document.body.classList.remove('page-enter');
        document.body.classList.add('page-exit');
        setTimeout( () => {
            history.push(target)
            document.body.classList.remove('page-exit');
        },500)
        setTimeout( () => {
            document.body.classList.add('page-enter');
        },500)
        e.preventDefault();
    }

    return (
        <Link to={url} className={className}  onClick={ (e) => { delayRedirect(e, url) } }>
            {children}
        </Link>
        );
}