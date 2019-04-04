/**
 * File for managing the form display
 */


var formDisplay = {};

/**
 * Initializes the form
 *
 */

const units = {
  lbOz: {
    type: "weight",
    from: "fromLbOz",
    to: "toLbOz",
    description: "Pounds/Ounces"
  },
  kgG: {
    type: "weight",
    from: "fromKgG",
    to: "toKgG",
    description: "Kilograms/Grams"
  },
  pintsUK: {
    type: "volume",
    from: "fromPintsUK",
    to: "toPintsUK",
    description: "Pints (UK)"
  },
  fluidOzUK: {
    type: "volume",
    from: "fromFluidOzUK",
    to: "toFluidOzUK",
    description: "Fluid Ounces (UK)"
  },
  pintsUS: {
    type: "volume",
    from: "fromPintsUS",
    to: "toPintsUS",
    description: "Pints (US)"
  },
  fluidOzUS: {
    type: "volume",
    from: "fromFluidOzUS",
    to: "toFluidOzUS",
    description: "Fluid Ounces (US)"
  },
  litresMl: {
    type: "volume",
    from: "fromLitresMl",
    to: "toLitresMl",
    description: "Litres/Millilitres"
  }
};

formDisplay.init = function() {

  let fromOptionMarkup = "",
      fromUnitsSelected = "lbOz",
      fromType = "weight";
  
  for ( let unit in units ){
    fromOptionMarkup += '<option value="';
    fromOptionMarkup += units[unit].from;
    fromOptionMarkup += '" data-unit="';
    fromOptionMarkup += unit;
    fromOptionMarkup += '">';
    fromOptionMarkup += units[unit].description;
    fromOptionMarkup += '</option>';
  }
  
  document.getElementById("from-select").innerHTML = fromOptionMarkup;


  filterToUnits(fromUnitsSelected, fromType);
  
  }

function displayToUnits() {
  const fromUnits = document.querySelector('select[name="fromUnits"]');
  const fromUnitsSelected = fromUnits[fromUnits.selectedIndex].dataset.unit;
  const fromType = units[fromUnitsSelected].type;

  filterToUnits(fromUnitsSelected, fromType);
}

function filterToUnits(fromUnitsSelected, fromType) {

  let toOptionMarkup = "";
  
  for ( let unit in units ){
    if ( (fromType === units[unit].type) && (fromUnitsSelected !== unit) ) {
      toOptionMarkup += '<option value="';
      toOptionMarkup += units[unit].to;
      toOptionMarkup += '" data-unit="';
      toOptionMarkup += unit;
      toOptionMarkup += '">';
      toOptionMarkup += units[unit].description;
      toOptionMarkup += '</option>';
    }
  }
  
  document.getElementById("to-select").innerHTML = toOptionMarkup;
}

const quantityInputFields = {
    fromLbOz: {
      bigUnitsText: "Pounds(lbs):",
      bigUnitsDisplay: "block",
      smallUnitsText: "Ounces(oz):"
    },
    fromKgG: {
      bigUnitsText: "Kilograms(kg):",
      bigUnitsDisplay: "block",
      smallUnitsText: "Grams(g):"
    },
    fromPintsUK: {
      bigUnitsText: "Not used",
      bigUnitsDisplay: "none",
      smallUnitsText: "Pints (UK/Imperial):"
    },
    fromFluidOzUK: {
      bigUnitsText: "Not used",
      bigUnitsDisplay: "none",
      smallUnitsText: "Fluid Ounces(UK/Imperial):"
    },
    fromPintsUS: {
      bigUnitsText: "Not used",
      bigUnitsDisplay: "none",
      smallUnitsText: "Pints (US):"
    },
    fromFluidOzUS: {
      bigUnitsText: "Not used",
      bigUnitsDisplay: "none",
      smallUnitsText: "Fluid Ounces(US):"
    },
    fromLitresMl: {
      bigUnitsText: "Litres(l):",
      bigUnitsDisplay: "block",
      smallUnitsText: "Millilitres(ml):"
    }
  };

  function updateQuantityInputFields() {
    const fromUnits = document.querySelector('select[name="fromUnits"]').value;
    document.getElementById("big-quantity-input").firstElementChild.innerText = quantityInputFields[fromUnits].bigUnitsText;
    document.getElementById("big-quantity-input").style.display = quantityInputFields[fromUnits].bigUnitsDisplay;
    document.getElementById("small-quantity-input").firstElementChild.innerText = quantityInputFields[fromUnits].smallUnitsText;
  }