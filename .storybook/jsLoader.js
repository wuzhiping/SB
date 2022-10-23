console.dir("load js");

function loadJs(path){
    var script = document.createElement("script");
    script.src = path;
    document.body.appendChild(script);
}

loadJs('ag-grid-vue3.bundle.js');

// loadJs('vue.global.prod.js');
// setTimeout( function(){ loadJs('./ag-grid-enterprise.min.noStyle.js'); },1000);
// setTimeout( function(){ loadJs('./ag-grid-vue3.umd.min.js'); },2000);