
function vueInit() {

  new Vue({

    el: "#app",

    data: {

      items: [
        {
          message: 'OK'
        },
        {
          message: 'Funziona'
        },
        {
          message: 'e'
        },
        {
          message: 'sto'
        },
        {
          message: 'abusando'
        },
        {
          message: 'di'
        },
        {
          message: 'Vue'
        }
      ]

    }, // END of DATA

    methods: {

    }// END of METHODS

  }) // END NEW VUE

} // END FUNCTION vueInit

function init () {
  vueInit();
}

document.addEventListener('DOMContentLoaded', init);
