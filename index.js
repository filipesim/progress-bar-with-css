// window.onload = function() {
//   nextStep();
// }

// function sleep(ms) {
//   return new Promise((resolve) => {
//     setTimeout(
//       function(){
//         resolve(true)
//       },
//       ms
//     );
//   });
// }

// function colorStep(sleepResponse, step) {
//   if (sleepResponse) {
//     return new Promise((resolve) => {
//       step.classList.add("active");
//       resolve();
//     });
//   }
// }

// async function nextStep() {
//   var numberOfSteps = document.getElementsByClassName('progressbar')[0].getElementsByTagName('li').length;
//   var steps = document.getElementsByClassName('progressbar')[0].getElementsByTagName('li');
    
//   for (i = 0; i < numberOfSteps; i++) {
//     let sleepResponse = await sleep(1000);
//     let colorStepResponse = await colorStep(sleepResponse, steps[i]);
//   }
// }

var activeStep = 1;

const executeStep = () => {
  return new Promise(async(resolve) => {
    if (activeStep == 1) {
      let stepOneResponse = await stepOne();
      resolve(stepOneResponse);
    } else if (activeStep == 2) {
      let stepTwoResponse = await stepTwo();
      resolve(stepTwoResponse);
    }
  });
}

const stepOne = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
        status = 'active';
        resolve(status);
    }, 2000);
  });
}

const stepTwo = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
        status = 'active';
        resolve(status);
    }, 5000);
  });
}

const nextStep = (status) => {
  if (status == 'active') {
    document.querySelector(`[step="${activeStep}"]`).classList.add(status);
    activeStep++;
  }

  return true;
}

$('#btn-operacional-message').click(async () => {
  let executeStepResponse = await executeStep();
  console.log(executeStepResponse);
  let nextStepResponse = await nextStep(executeStepResponse);
});