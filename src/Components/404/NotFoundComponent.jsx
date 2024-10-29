import './NotFound.css';
import {TitleTextComponent} from "../UI/TitleTextComponent";

export function NotFoundComponent(){
    return(
        <div className='wrapper_404'>
            <TitleTextComponent title={'404 - Page not found'}/>
        </div>
    )
}