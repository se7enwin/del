

import SetNav from './SetNav.jsx';

export default function Nav(props) {


    return (

        <div>

            <SetNav cors={props.cors} getApi={props.getApi} />


        </div>
    )

}
