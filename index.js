window.onload = function() {
  nextStep();
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(
      function(){
        resolve(true)
      },
      ms
    );
  });
}

function colorStep(sleepResponse, step) {
  if (sleepResponse) {
    return new Promise((resolve) => {
      step.classList.add("active");
      resolve();
    });
  }
}

async function nextStep() {
  var numberOfSteps = document.getElementsByClassName('progressbar')[0].getElementsByTagName('li').length;
  var steps = document.getElementsByClassName('progressbar')[0].getElementsByTagName('li');
    
  for (i = 0; i < numberOfSteps; i++) {
    let sleepResponse = await sleep(1000);
    let colorStepResponse = await colorStep(sleepResponse, steps[i]);
  }
}