
function vueInit() {

  new Vue({

    el: "#app",

    data: {

      "file": null,
      "content": null,

      // "dataBaseInfo": [
      //   {
      //     "eventType": "INSERTED",
      //     "entityName": "PLACEMENT",
      //     "entityId": 11,
      //     "fieldsUpdated":
      //     [
      //       "null"
      //     ]
      //   },
      //   {
      //     "eventType": "UPDATED",
      //     "entityName": "PLACEMENT",
      //     "entityId": 22,
      //     "fieldsUpdated":
      //     [
      //       "status",
      //       "hoursPerDay"
      //     ]
      //   },
      //   {
      //     "eventType": "DELETED",
      //     "entityName": "COMPANY",
      //     "entityId": 33,
      //     "fieldsUpdated":
      //     [
      //       "status",
      //       "companyUrl"
      //     ]
      //   },
      //   {
      //     "eventType": "INSERTED",
      //     "entityName": "PLACEMENT",
      //     "entityId": 44,
      //     "fieldsUpdated":
      //     [
      //       "null"
      //     ]
      //   },
      //   {
      //     "eventType": "UPDATED",
      //     "entityName": "COMPANY",
      //     "entityId": 55,
      //     "fieldsUpdated":
      //     [
      //       "status",
      //       "companyUrl",
      //       "hoursPerDay"
      //     ]
      //   },
      //   {
      //     "eventType": "DELETED",
      //     "entityName": "PLACEMENT",
      //     "entityId": 66,
      //     "fieldsUpdated":
      //     [
      //       "null"
      //     ]
      //   },
      //   {
      //     "eventType": "INSERTED",
      //     "entityName": "COMPANY",
      //     "entityId": 77,
      //     "fieldsUpdated":
      //     [
      //       "status",
      //       "companyUrl",
      //       "hoursPerDay",
      //       "overtimeRate"
      //     ]
      //   }
      // ] // END of databaseInfo

    }, // END of DATA

    methods: {

      readFile() {
        this.file = this.$refs.doc.files[0];
        const reader = new FileReader();
        if (this.file.name.includes(".txt")) {
          reader.onload = (res) => {
            this.content = res.target.result;

            const textLine = this.content.split("\n");
            console.log(textLine);

            // for (let i = 0; i < this.content.length; i++) {
            //   let singleElement = content[i];
            //   console.log(singleElement);
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
