// var tour;

var tour = new Shepherd.Tour({
  defaults: {
    classes: 'shepherd-theme-square-dark',
    scrollTo: true
  }
});

tour.addStep('example-step', {
  title: 'Follow along as we explain the features of this website',
  text: 'Click here to submit your own photo.',
  attachTo: '#addButton',
  // classes: 'example-step-extra-class',
  buttons: [
    {
      text: 'Next',
      action: tour.next
    }
  ]
});

tour.addStep('example-step', {
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
  attachTo: '#captionButton1',
  // classes: 'example-step-extra-cass',
  buttons: [
    {
      text: 'Next',
      action: tour.next
    }
  ]
});

tour.addStep('example-step', {
  text: 'Big Jim - He is ready for a night on the town ... with you.',
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
  text: 'Mrs. Talons - Do NOT play footsy with her.',
  attachTo: '#fourth-image top',
  // classes: 'example-step-extra-class',
  buttons: [
    {
      text: 'Next',
      action: tour.next
    }
  ]
});

tour.addStep('example-step', {
  text: 'Elvis is NOT dead - But he does buy his string cheese at Walmart',
  attachTo: '#fifth-image left',
  // classes: 'example-step-extra-class',
  buttons: [
    {
      text: 'Next',
      action: tour.next
    }
  ]
});
tour.start();