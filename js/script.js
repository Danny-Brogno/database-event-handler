
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

            // transforms into array with each line as element
            let myArr = this.content.split("\n");
            console.log(myArr);

            // A loop to go looking for square brackets in the string (if there are any [in each element] )
            myArr.forEach((element) => {

              let bracket1 = element.indexOf("[");
              let bracket2 = element.indexOf("]");

              // saving the content in a variable (this is the content of the square brackets)
              let contentBrackets = element.substring(bracket1, bracket2 + 1);

              // replace() does not change the original string; but at least we do not see them anymore
              let removeBracket = contentBrackets.replace(contentBrackets, "");
              // console.log(contentBrackets);


            });

            // another loop on the array ans extracting the IESIMO element and then splitting the string every time it encounters a ","
            // for (i = 0; i < myArr.length; i++) {
            //   let singleElement = myArr[i];
            //   let commaDivision = singleElement.split(",");
            //
            //   console.log(commaDivision);
            // }


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
