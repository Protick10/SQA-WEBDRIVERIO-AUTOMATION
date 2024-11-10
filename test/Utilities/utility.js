class Utility{




    async convertTextToNumber(text){
        return parseFloat(text.replace(/[$,]/g, ""));
    }
}

module.exports = new Utility(); // Exporting the class instance