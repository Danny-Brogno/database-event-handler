
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
            myArr.pop();

            // A loop to go looking for square brackets in the string (if there are any [in each element] )
            myArr.forEach((element) => {

              let bracket1 = element.indexOf("[");
              let bracket2 = element.indexOf("]");

              // saving the content in a variable (this is the content of the square brackets)
              let contentBrackets = element.substring(bracket1, bracket2 + 1);

              // now I gotta search and delete the square brackets that are in the substring otherwise I'll see this Array [ "[status", " companyUrl]" ]
              let show1 = contentBrackets.includes("[");
              let show2 = contentBrackets.includes("]");
              let damnBrackets1 = contentBrackets.replace("[", "");
              let damnBrackets2 = contentBrackets.replace("]", "");
              let damnBracketsTogether = damnBrackets1 + damnBrackets2;
              // console.log(show1, show2, damnBracketsTogether);

              let transIntoArr = contentBrackets.split(","); //  Transform content of brackets into array

              // replace() does not change the original string; but at least we do not see them anymore
              let removeBracket = element.replace(contentBrackets, "");

              let stringIntoArr = removeBracket.split(","); // String into array.

              let recordArray = ["UPDATED",  "Placement", "12", "null", "2018-04-10 12:44:00.123"];

              let recordObj = {
                eventTyple: recordArray[0],
                entityName: recordArray[1],
                entityId: recordArray[2],
                fieldsUpdated: transIntoArr,
                timestamp: recordArray[4],
              }

              console.log(recordObj);

            }); // END of forEach()

          }; // END of reader.onload (under if)

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
