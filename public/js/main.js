// var tour;

var tour = new Shepherd.Tour({
  defaults: {
    classes: 'shepherd-theme-square-dark',
    scrollTo: true
  }
});



tour.addStep('example-step', {
  title: 'Follow along as we explain the features of this website',
  text: 'Here is a photo of a shopper.  What caption would you add?',
  attachTo: '#first-image left',
  // classes: 'example-step-extra-class',
  buttons: [
    {
      text: 'Next',
      action: tour.next
    }
  ]
});

tour.addStep('example-step', {
  text: 'Click on the button below the image to add YOUR caption',
  attachTo: '#captionButton1 bottom',
  // classes: 'example-step-extra-cass',
  buttons: [
    {
      text: 'Next',
      action: tour.next
    }
  ]
});

tour.addStep('example-step', {
  text: 'Can you think of a caption for this one?',
  attachTo: '#third-image right',
  // classes: 'example-step-extra-class',
  buttons: [
    {
      text: 'Next',
      action: tour.next
    }
  ]
});

tour.addStep('example-step', {
  text: 'Do you have a photo to add that is as thought-provoking as this one?.',
  attachTo: '#fourth-image left',
  // classes: 'example-step-extra-class',
  buttons: [
    {
      text: 'Next',
      action: tour.next
    }
  ]
});

// tour.addStep('example-step', {
//   text: 'Elvis is NOT dead - But he does buy his string cheese at Walmart',
//   attachTo: '#fifth-image left',
//   // classes: 'example-step-extra-class',
//   buttons: [
//     {
//       text: 'Next',
//       action: tour.next
//     }
//   ]
// });

tour.addStep('example-step', {
  
  text: 'Click here to submit your own photo.',
  attachTo: '#addButton',
  // classes: 'example-step-extra-class',
  buttons: [
    {
      text: 'End of Tour-- Have fun!!!',
      action: tour.next
    }
  ]
});

tour.start();