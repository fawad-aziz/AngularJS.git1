angularFormsApp.factory('DataService',
    function () {
        var getEmployee = function(id) {
            if(id == 123) {
                return {
                    id: 123,
                    fullName: "Fawad Aziz",
                    email: "fawad.aziz@teradata.com",
                    notes: "Senior software engineer, working for R&D IT US.",
                    department: "Engineering",
                    dateHired: "July 14, 2014",
                    breakTime: "July 14, 2014 8:00 AM",
                    topProgrammingLanguage: "C#",
                    perkCar: false,
                    perkStock: true,
                    perkSixWeeks: false,
                    payrollType: "none"
                }
            }
            return undefined;
        }

        var insertEmployee = function (employee) {
            return true;
        }

        var updateEmployee = function (employee) {
            return true;
        }

        return {
            insertEmployee: insertEmployee,
            updateEmployee: updateEmployee,
            getEmployee: getEmployee
        };
});