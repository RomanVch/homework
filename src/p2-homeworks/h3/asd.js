function encode(string) {
    let arr = string.split("")

    for (let i=0;i<arr.length;i++) {
        if (arr[i] === "a"){
            arr[i] = 1;
        } else if (arr[i] === "e"){
            arr[i] = 2;
        } else if (arr[i] === "i"){
            arr[i] = 3
        } else if (arr[i] === "o"){
            arr[i] = 4
        } else if (arr[i] === "u"){
            arr[i] = 5
        } else if(arr[i] === "A"){
            arr[i] = 1;
        } else if (arr[i] === "E"){
            arr[i] = 2;
        } else if (arr[i] === "I"){
            arr[i] = 3
        } else if (arr[i] === "O"){
            arr[i] = 4
        } else if (arr[i] === "U"){
            arr[i] = 5
        }
        console.log(arr[i])
    }
    let arrString=arr.join("")
    return arrString
}
function decode(string) {

    let arr = string.split("")

    for (let i=0;i<arr.length;i++) {
        if (arr[i] === "1"){
            arr[i] = "a";
        } else if (arr[i] === "2"){
            arr[i] = "e";
        } else if (arr[i] === "3"){
            arr[i] = "i"
        } else if (arr[i] === "4"){
            arr[i] = "o"
        } else if (arr[i] === "5"){
            arr[i] = "u"
        }
        console.log(arr[i])
    }
    let arrString=arr.join("")
    return arrString
}