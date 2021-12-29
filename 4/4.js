function ingExtractor(str) {
    str.replace(/[^a-zA-Z ]/g, "")
    str.split(" ")
    filter((word) => {
        let temp = word.toLowerCase().replace("ing", "");
        if (temp.length === temp.replace(/[aeiou]/g, "").length) {
          return false;
        }
        if (word.toLowerCase().includes("ing")) {
          console.log(word)
        }
      });
  }
  ingExtractor("coming bringing Letting sing") 
  ingExtractor("going Ping, king sHrink dOing")
  ingExtractor("zing went ring, ding wing SINk") 