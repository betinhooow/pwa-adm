import React from 'react';
import { useEffect } from 'react';

const ReadStatusBar = () => {
  useEffect(() => {
    const postWrap = document.querySelector(".body");
    let bar = document.createElement("div");
    
    bar.style.height = "4px";
    bar.style.width = "0";
    bar.style.backgroundColor = "#7ED957";
    bar.style.position = "fixed";
    bar.style.top = "0";
    bar.style.left = "0";
    bar.style.zIndex = "9999";
    bar.style.transition = "0.2s";
    
    document.body.append(bar);
    
    function updateBar() {
      const textHeight = postWrap.clientHeight - 350;
      const pagePositionY = window.pageYOffset;
    
      const updatedBar = pagePositionY * 100 / textHeight;
    
      bar.style.width = updatedBar + "%";
    }
    
    document.addEventListener("scroll", updateBar);
    
    window.addEventListener("load", () => {
      document.addEventListener("scroll", updateBar);
    });
  }, [])

  return <div></div>
}

export default ReadStatusBar;