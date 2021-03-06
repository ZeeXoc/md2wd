import React, {Component} from "react";

import {md2tp,tp2wd} from "./md2tp";
import "./App.css";

export default class App extends Component {
    handleClick() {
        let textBox = document.getElementById("text-box");
        let text = textBox.innerText;
        md2tp.keys.forEach((mapKey)=>{
            let match;
            while (true) {
                match = text.match(mapKey.pattern);
                if (!match) break;
                console.log(text,match);
                text = text.replace(mapKey.pattern,mapKey.out(match));
            }
        })
/*        tp2wd.keys.forEach((mapKey)=>{
            text = text.replaceAll(mapKey.key,mapKey.value);
        })*/
        textBox.innerText = text;
    }

    render() {
        return (
            <>
                <button onClick={this.handleClick}>ddd</button>
                <div id={"text-box"} contentEditable={"true"}/>
            </>
        )
    }
}