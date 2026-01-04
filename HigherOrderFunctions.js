const pr  = new Promise((resolve , reject) => {
    let a=true;
    if(a){
        reject(a);
    }
    if(!a){
        resolve(a);
    }
});