let arr = [1, 2, 3, 4, 5, 6];
// function insertAtIdx(arr, index, val){
//     if (index < 0 || index > arr.length){
//         return "Index";
//     } arr.splice(index, 0, val)
//     return arr
//  }

function  insertAtIdx(arr, index, val){
    for (let i = 0; i < arr.length; i++) {
        if (i == index) {
            arr.splice(index, 0, val)
            return arr
        }        
    }
}
    console.log(insertAtIdx(arr, 2, 10));
    let hobbies = ["codeing", "cooking", "travelling", "dancing"];
    hobbies.splice(2, 0, "singing");
    console.log(hobbies);