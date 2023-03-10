import React from 'react';
import {PagesType} from "../../dataState/dataState";
import {useParams} from "react-router-dom";
import {Content} from "./Content";

type PagePropsType = {
    pages: Array<PagesType>
}


export const Page = (props: PagePropsType) => {
    const param = useParams()
    // console.log('params: ', Number(param.id))

    return (
        <Content heading={props.pages[Number(param.id)].heading} pages={props.pages[Number(param.id)].about}/>
        // <div>
        //     <div>
        //         {props.pages[Number(param.id)].heading}
        //     </div>
        //     <div>
        //         {props.pages[Number(param.id)].about}
        //     </div>
        // </div>
    );
};

