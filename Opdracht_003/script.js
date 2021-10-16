
// callbacks
function doHomework(subject, callback){
    alert (`starting my ${subject} homework.`);
    callback();
}

function alertFinished(){
    alert("Finished my homework");
}

doHomework('math', alertFinished);