import React from "react";
import ReactDOM from "react-dom";

function stringListToHTML(l){
  let htmls = []
  for(let i = 0; i < l.length; i++){
    let text = l[i];
    let html = (<p key={i}> {text} </p>);
    if(text.length > 0 && text[0] == "#"){
      html = (<h1 key={i}> {text.substring(1)} </h1>);
    }
    htmls.push(html);
  }
  return htmls;
}

export {stringListToHTML}
