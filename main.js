const dalerto = (range, seq) => {
  let dalerto = []
  let ran = (x) => Math.floor( Math.random() * x )
  
  for ( let i=0; i<seq; i++ ) {
    dalerto[i] = ran(range)
  }

  dalerto = dalerto.map((num, index, arr) => {
    return ((arr.indexOf(num) === index) && (num !== 0)) ? num : ran(range)
  })
  // console.log(dalerto)
  return dalerto
}

const wellitry = () => {
  console.log('come soom!')
  document.getElementById('wellitry').innerHTML += '<span>Come...</span>'
  setTimeout(() => {
    setTimeout(() => {
      document.getElementById('wellitry').innerHTML += '<span>Soom </span>'
    }, 300)
    setTimeout(() => {
      document.getElementById('wellitry').innerHTML += '<span>Soom </span>'
    }, 600)
    setTimeout(() => {
      document.getElementById('wellitry').innerHTML += '<span>Soom! </span>'
    }, 900)
    
  }, 500)
}

const fadatry = (lerto, mumArr = [], showId) => {
  let getlerto = lerto(...mumArr)
  document.getElementById(showId).innerHTML += '<div class="pr-x">'
  getlerto.forEach((item, index) => {
    document.getElementById(showId).innerHTML += '<span>'+item+' </span>'
  })
  document.getElementById(showId).innerHTML += '</div>'
  
  console.log('簽了啦~! 哪次不簽', getlerto)
}



