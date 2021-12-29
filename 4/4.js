function ingExtractor(str) {
let arr=str.split("")
for (let word of arr){
 let word2=word.replace("ing", "")
  if (word2.length <= 2) {
    console.log(word2)
  }
}
  //این سوال رو تا همینجا به ذهنم رسید و بیشتر از نتونستم حل کنم

}
  ingExtractor("coming bringing Letting sing") 
  ingExtractor("going Ping, king sHrink dOing")
  ingExtractor("zing went ring, ding wing SINk") 
