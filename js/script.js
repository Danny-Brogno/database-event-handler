
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

            const textLine = this.content.split("\n"); // JAVA language that tells the split to stop when it encounters the end of the line
            // let arrayIntoObj = ({...textLine}); // Spread syntax (...) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

            for (i = 0; i < textLine.length; i++) {
              let singleElement = textLine[i];
              console.log(singleElement.split(","));
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
