class Utility{




    async convertTextToNumber(text){
        return parseFloat(text.replace(/[$,]/g, ""));
    }


    async getRandomInt(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
      }
      
}

module.exports = new Utility(); // Exporting the class instance