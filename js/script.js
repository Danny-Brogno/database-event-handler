
function vueInit() {

  new Vue({

    el: "#app",

    data: {

      "file": null,
      "content": null

    }, // END of DATA

    methods: {

      readFile() {
        this.file = this.$refs.doc.files[0];
        const reader = new FileReader();
        if (this.file.name.includes(".txt")) {
          reader.onload = (res) => {
            this.content = res.target.result;

            let textLine = this.content.split("\n");
            for (i = 0; i < textLine.length; i++) {
              let singleElement = textLine[i];
              let commaDivision = singleElement.split(",");
              console.log(commaDivision);
            }

          };
          reader.onerror = (err) => console.log(err);
          reader.readAsText(this.file);
        } else {
          this.content = "check the console for file output";
          reader.onload = (res) => {
            console.log(res.target.result);
          };
          reader.onerror = (err) => console.log(err);
          reader.readAsText(this.file);
        }

      } // END of readFile() function

    } // END of METHODS

  }) // END NEW VUE

} // END FUNCTION vueInit

function init () {
  vueInit();
}

document.addEventListener("DOMContentLoaded", init);
