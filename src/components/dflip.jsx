/* global DFlip */

import React, { Component } from 'react';

class Flipbook extends Component {
  componentDidMount() {
    this.loadStyles();
    this.loadScripts();
    this.disableRightClick();
  }

  loadStyles() {
    // Load external CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = '/dflip/css/dflip.min.css';
    document.head.appendChild(link);
  }

  loadScripts() {
    // Load external scripts
    const script1 = document.createElement('script');
    script1.src = '/dflip/js/libs/jquery.min.js';
    script1.type = 'text/javascript';
    script1.onload = () => {
      // jQuery is loaded, now load dflip.min.js
      const script2 = document.createElement('script');
      script2.src = '/dflip/js/dflip.min.js';
      script2.type = 'text/javascript';
      script2.onload = this.initializeFlipbook; // Call initialization function once the script is loaded
      document.head.appendChild(script2);
    };
    document.head.appendChild(script1);

    const script3 = document.createElement('script');
    script3.className = 'df-shortcode-script';
    script3.type = 'text/javascript';
    script3.innerHTML = `var option_flipbook = {
        source:'/download?fileId={pdfId}',
        "overwritePDFOutline": "true",
        autoEnableOutline: "false",
        forceFit:true,
        webgl: true,
        outline:[],
        color3DCover:"#ffffff",
        hard: "none",
        shadowOpacity: 0,
        allControls: "https://riyadhholding.sharepoint.com",
        onReady: function (flipBook) {
          const prodFlipbook = document.querySelector('#prod-flipbook');
          if (prodFlipbook) {
            prodFlipbook.style.backgroundImage = "none";
          }
          const prodFlipbookDisc = document.querySelector('#prod-discrip');
          if (prodFlipbookDisc) {
            prodFlipbookDisc.style.marginTop = "-30px";
          }
        },
      };`;
    document.head.appendChild(script3);
  }

  initializeFlipbook() {
    // JavaScript code to initialize the flipbook can go here
    // Ensure the required libraries are properly loaded
    window.addEventListener('load', function () {
      const myFlipbook = new DFlip('._df_book', {
        source: 'location of pdf.pdf'
        // Additional configuration options here
      });
    });
  }

  disableRightClick() {
    document.addEventListener('contextmenu', function (event) {
      event.preventDefault();
    });
  }

  render() {
    const { source } = this.props;
    // console.log(source)

    return (
      <div>
        {/* <div className="_df_book" id="flipbook" pageMode='2' source={'/doc1.pdf'}></div> */}
        <div className="_df_book" id="flipbook" pageMode='2' source={source}></div>
      </div>
    );
  }
}

export default Flipbook;
