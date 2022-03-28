document.getElementById('submit-button').addEventListener("click",(e)=>{
  document.querySelector('input[type="password"]').focus();
  document.querySelector('input[type="text"]').value = e.type;
})

const kt = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
          return false;
      }
  }
  return true;
}

const findNearestPrime = (n) => {
  if (n < 2) {
      return 1;
  }
  for (let i = n; i >= 2; i--) {
      if (kt(i)) {
          return i;
      }
  }
  return 0;
}

console.log(findNearestPrime(14))

//tast 6
const temperatures = ['32 C', '100 F','-2 C', '-150 F']

const sortTemperatures = (temperatures) => {
    let result = [...temperatures]
    const newObj = temperatures.reduce((obj, value, index) => {
        let al = 0;
        if (value[value.length - 1] === "F") {
            let numb = value.slice(0, value.length - 2)
            al = (numb - 32) / 1.8
        }
        else {
            al = value.slice(0, value.length - 2)
        }
        return { ...obj, [index]: al }
    }, {});

    for (let i = 0; i < temperatures.length -1 ; i++) {      
        for (let j = i; j < temperatures.length; j++) {
            if(Math.abs(newObj[i] - 0 ) > Math.abs( newObj[j] - 0 )){
                const temp = result[j];
                result[j] = result[i];
                result[i]  = temp;
            }
        }
    }
    return result;
}
console.log('result',sortTemperatures(temperatures))


