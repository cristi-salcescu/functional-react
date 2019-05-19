import React from "react";
import { Observer } from "mobx-react";

export default function observer(Component){
    return (props) => <Observer>{() => <Component {...props} />}</Observer>;
}