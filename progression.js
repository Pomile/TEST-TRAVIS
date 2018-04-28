

function isArithmetic(list) {
  try {
    let common_difference = 0;
    let isArithmeticProgression = false;
    const arrLength = list.length - 1;
    let counter = 0;
    for (counter; counter < arrLength; counter++) {
      const difference = list[counter + 1] - list[counter];
      if (isNaN(difference)) {
        isArithmeticProgression = false;
        break;
      }
      // console.log(`difference ${list[counter + 1]}-${list[counter]} = ${difference}`);
      if (counter == 0 && common_difference !== difference) {
        // set initial common difference
        common_difference = difference;
        // console.log(`initial difference ${list[counter + 1]}-${list[counter]} = ${difference}`);
        continue;
        // console.log(`common_difference : ${common_difference}`);
      } else if (counter != 0 && common_difference == difference) {
        isArithmeticProgression = true;
        // console.log(`isArithmeticProgression : ${isArithmeticProgression}`);
      } else if (counter != 0 && common_difference !== difference) {
        isArithmeticProgression = false;
        break;
      }
    }

    return isArithmeticProgression;
  } catch (e) {
    return e.message;
  }
}

function isGeometric(list) {
  try {
    let common_ratio = 0;
    let isGeometricProgression = false;
    const arrLength = list.length - 1;
    let counter = 0;
    for (counter; counter < arrLength; counter++) {
      const ratio = list[counter + 1] / list[counter];
      if (isNaN(ratio)) {
        isGeometricProgression = false;
        break;
      }
      // console.log(`ratio ${list[counter + 1]} '/' ${list[counter]} = ${ratio}`);
      if (counter == 0 && common_ratio !== ratio) {
        // set initial ratio
        common_ratio = ratio;
        // console.log(`initial ratio ${list[counter + 1]} '/' ${list[counter]} = ${ratio}`);
        // console.log(`common_ratio : ${common_ratio}`);
      } else if (counter != 0 && common_ratio == ratio) {
        isGeometricProgression = true;
        // console.log(`isGeometricProgression : ${isGeometricProgression}`);
      } else if (counter != 0 && common_ratio != ratio) {
        isGeometricProgression = false;
        break;
      }
    }

    return isGeometricProgression;
  } catch (e) {
    return e.message;
  }
}


function arithGeo(list) {
  try {
    // validate input
    if (!Array.isArray(list)) throw "invalid input";
    if (list.length == 0) throw 0;
    if (list.length < 3) throw list.length;

    // check sequence type
    const arith = isArithmetic(list);
    const geo = isGeometric(list);


    if (arith) {
      return "arithmetic";
    } else if (geo) {
      return "geometric";
    }
    return -1;
  } catch (err) {
    return err;
  }
}

export default arithGeo;

// console.log(arithGeo([10, 40, 160, "lll"]))
