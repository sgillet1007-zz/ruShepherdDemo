// var tour;

var tour = new Shepherd.Tour({
  defaults: {
    classes: 'shepherd-theme-arrows',
    scrollTo: true
  }
});

tour.addStep('example-step', {
  text: 'Click here to submit your own beautiful Walmart personality.',
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
  text: 'Barney Lady - A horrifying example of government-funded gene splicing.',
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
  text: 'Big Mama - This step is attached to the bottom of THIS disturbing element.',
  attachTo: '#second-image bottom',
  // classes: 'example-step-extra-class',
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