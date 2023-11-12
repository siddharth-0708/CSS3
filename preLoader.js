console.log("heloooooooooooooooooooooooL");

// //USING CALLBACKS
// function loadCSS(url, callback) {
//     var link = document.createElement('link');
//     link.type = 'text/css';
//     link.rel = 'stylesheet';
//     link.href = url;

//     link.onload = function() {
//         if (callback) {
//             callback();
//         }
//     };

//     document.head.appendChild(link);
// }

// function loadMultipleCSS(cssFiles, finalCallback) {
//     var loadedCount = 0;

//     function loadNext() {
//         if (loadedCount < cssFiles.length) {
//             loadCSS(cssFiles[loadedCount], function() {
//                 loadedCount++;
//                 loadNext();
//             });
//         } else {
//             if (finalCallback) {
//                 finalCallback();
//             }
//         }
//     }

//     loadNext();
// }

// // Usage:
// var cssFiles = ['basic.css', 'basic1.css', 'basic2.css'];
// loadMultipleCSS(cssFiles, function() {
//     console.log('All CSS files loaded');
//     // Perform actions after all CSS files are loaded
// });


// // USING PROMISES

// function loadCSS(url) {
//     return new Promise(function(resolve, reject) {
//         var link = document.createElement('link');
//         link.type = 'text/css';
//         link.rel = 'stylesheet';
//         link.href = url;
//         link.onload = resolve;
//         link.onerror = reject;
//         document.head.appendChild(link);
//     });
// }

// function loadMultipleCSS(cssFiles) {
//     var promises = [];
//     cssFiles.forEach(function(url) {
//         promises.push(loadCSS(url));
//     });

//     return Promise.all(promises);
// }

// // Usage:
// var cssFiles = ['basic.css', 'basic1.css', 'basic2.css'];
// loadMultipleCSS(cssFiles)
//     .then(function() {
//         console.log('All CSS files loaded');
//         // Perform actions after all CSS files are loaded
//     })
//     .catch(function(error) {
//         console.error('Error loading CSS files:', error);
//     });

function cssLoad(){
    // const css = document.createElement('link');
    // css.rel = 'stylesheet';
    // css.href = '/basic.css';

    // // Appending the link element to the DOM
    //******This is needed for loading******* */
    // document.head.appendChild(css);

    // // Assigning the onload event after appending the element
    // //In this scenario, if the CSS file is already cached or loads very quickly, the onload event 
    // //*******might fire before you've had a chance to set up the event handler****************. This might result in the event being missed and not triggering the intended actions, such as logging
    // // 'CSS loaded!' to the console.
    // css.onload = function() {
    //     console.log('CSS loaded!');
    // }

    // Creating the link element
    const css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = 'basic.css';

    // Assigning the onload event before appending the element
    //By setting the onload event before the <link> element is appended to the DOM, you ensure that your event handler is in place to capture the load event, 
    //regardless of whether the CSS file is already cached or loads quickly. This way, you can guarantee that your code is prepared to handle the event 
    //once the resource finishes loading.
    css.onload = function() {
    console.log('CSS loaded!');
    };

    // Appending the link element to the DOM
    //******This is needed for loading******* */
    document.head.appendChild(css);
};
cssLoad();