// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":       // if we dont use break then whole code after it runs except Default case
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}