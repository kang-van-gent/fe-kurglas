var app = new Vue({
    el:"#app",
    created: function () {
        console.log('Hi from Vue')
    },
    methods: {
        toasty: function() {
            // var toastHTMLElement = document.getElementById("liveToast");
            // var toast = new bootstrap.Toast(toastHTMLElement, option);
            // toast.show()
            console.log('show toast');
          }
    }
})