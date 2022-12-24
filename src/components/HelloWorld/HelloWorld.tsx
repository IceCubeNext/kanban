import React from "react";
import { IHelloWorldProps } from "./types";


export const HelloWorld: React.FC<IHelloWorldProps> = (props) => {
    const { helloText } = props;
    return <div>{helloText}</div>
}
