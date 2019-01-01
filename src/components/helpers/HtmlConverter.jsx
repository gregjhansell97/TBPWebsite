import React from "react";
import ReactDOM from "react-dom";

/**
 * converts an array of strings to html
 *
 * @param l ([str]): list of strings
 */
function stringListToHTML(l){
  let htmls = []
  for(let i = 0; i < l.length; i++){
    let text = l[i];
    let html = (<p key={i}> {text} </p>);
    if(text.length > 0 && text[0] == "#"){ //#prefix is a title
      html = (<h1 key={i}> {text.substring(1)} </h1>);
    }
    htmls.push(html);
  }
  return htmls;
}

export {stringListToHTML}
