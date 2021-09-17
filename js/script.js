
function vueInit() {

  new Vue({

    el: "#app",

    data: {

      "collection": [],
      "select": "All",

      "dataBaseInfo": [
        {
          "eventType": "INSERTED",
          "entityName": "PLACEMENT",
          "entityId": 11,
          "fieldsUpdated":
          [
            "null"
          ]
        },
        {
          "eventType": "UPDATED",
          "entityName": "PLACEMENT",
          "entityId": 22,
          "fieldsUpdated":
          [
            "status",
            "hoursPerDay"
          ]
        },
        {
          "eventType": "DELETED",
          "entityName": "COMPANY",
          "entityId": 33,
          "fieldsUpdated":
          [
            "status",
            "companyUrl"
          ]
        },
        {
          "eventType": "INSERTED",
          "entityName": "PLACEMENT",
          "entityId": 44,
          "fieldsUpdated":
          [
            "null"
          ]
        },
        {
          "eventType": "UPDATED",
          "entityName": "COMPANY",
          "entityId": 55,
          "fieldsUpdated":
          [
            "status",
            "companyUrl",
            "hoursPerDay"
          ]
        },
        {
          "eventType": "DELETED",
          "entityName": "PLACEMENT",
          "entityId": 66,
          "fieldsUpdated":
          [
            "null"
          ]
        },
        {
          "eventType": "INSERTED",
          "entityName": "COMPANY",
          "entityId": 77,
          "fieldsUpdated":
          [
            "status",
            "companyUrl",
            "hoursPerDay",
            "overtimeRate"
          ]
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

document.addEventListener("DOMContentLoaded", init);
