var objData = {
    message: 'Vue with object!'
}

Object.freeze(objData);

new Vue({
    el: '#app',
    data: objData,
    created: function(){
        console.log("Element created " + this.message)
    }
})