// Visually:
//  from slection
//  quantity entry field for fromUnits (depends on units selected)
//  to selection (adjusts depending on fromUnits selected)
//  'Convert' button - carries out the conversion and outputs the result
//  'Clear' button - returns the form to its initial value
// Data for units
//  Units have types [weight, volume, temp]
//  Units have conversion functions
// fromUnits
// toUnits
// Event Handlers:
//   fromUnits changes - update to options and quantity input boxes, set fromUnits
//   toUnits changes - set toUnits (what do we do about further interaction with this dropdown or from dropdown?)
//   fromUnits quantity - maybe nothing until 'convert'
//   Convert button clicked - validate data entered, carry out conversion, display result
//   Clear button clicked - return form to its initial state
// Make sure interface follows accessibility guidelines

// TO DO:
// - code to update 'to units' dropdown
// - code to update labels on quantity input fields
// - complete conversion functions
// - split into separate files 
// - improve accessibility of forms
// - style layout
// - present results
// - add comments
// - add support for further units/conversions and enhancements from readme

const conversions = {
  fromLbOz: {
    toKgG: (pounds, ounces) => {
      if(!ounces) {
        ounces = 0;
      }
      if(pounds) {
        ounces = ounces + conversions.fromPounds.toOunces(pounds);
      }
      return conversions.fromOunces.toGrams(ounces);
    }
  },
  fromPounds: {
    toOunces: (pounds) => {
      return pounds * 16;
    }
  },
  fromOunces: {
    toGrams: ounces => {
      return ounces * 28.3495;
    }
  },
  fromKgG:
    {
      toGrams: (kilograms, grams) => {
        return (kilograms * 1000) + grams;
    }
  },
  fromGrams: {
    toOunces: grams => {
      return grams * 0.035274;
    }
  },
  fromPintsUS: {
    toFluidOuncesUS: pintsUS => {
      return pintsUS * 16;
    }
  },
 fromFluidOuncesUS: {
    toMillilitres: fluidOuncesUS => {
      return fluidOuncesUS * 29.57353;
    }
  },
  fromPintsUK: {
    toFluidOuncesUK: pintsUK => {
      return pintsUK * 20;
    }
  },
  fromFluidOuncesUK: {
    toMillilitres: fluidOuncesUK => {
      return fluidOuncesUK * 28.41306;
    }
  },
  fromLitres: {
    toPintsUK: litres => {
      return litres * 1.75975;
    },
    toPintsUS: litres => {
      return litres * 2.11338;
    }
  },
  fromMillilitres: {
    toFluidOuncesUK: millilitres => {
      return millilitres * 0.035195;
    }
  }
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
    bigUnitsText: "Not used:",
    bigUnitsDisplay: "none",
    smallUnitsText: "Pints (UK/Imperial)"
  },
  fromFluidOzUK: {
    bigUnitsText: "Not used:",
    bigUnitsDisplay: "none",
    smallUnitsText: "Fluid Ounces(UK/Imperial)"
  },
  fromPintsUS: {
    bigUnitsText: "Not used:",
    bigUnitsDisplay: "none",
    smallUnitsText: "Pints (US)"
  },
  fromFluidOzUS: {
    bigUnitsText: "Not used:",
    bigUnitsDisplay: "none",
    smallUnitsText: "Fluid Ounces(US)"
  },
  fromLitresMl: {
    bigUnitsText: "Litres(l):",
    bigUnitsDisplay: "block",
    smallUnitsText: "Millilitres(ml)"
  }
};

const fromUnitsSelection = document.getElementById("from-select");

fromUnitsSelection.addEventListener("change", updateFormFields);

function updateFormFields() {
  updateQuantityInputFields();
  displayToUnits();
}

function updateQuantityInputFields() {
  const fromUnits = document.querySelector('select[name="fromUnits"]').value;
  // Change label on big unit field
  document.getElementById("big-quantity-input").style.display = quantityInputFields[fromUnits].bigUnitsDisplay;
  // Change label on small unit field
  // console.log("here: " + fromUnits);
}

function displayToUnits() {
  const fromUnits = document.querySelector('select[name="fromUnits"]');
  const fromType = fromUnits[fromUnits.selectedIndex].dataset.type;

  filterToUnits(fromType);
}

function filterToUnits(fromType) {
  const toUnits = document.querySelector('select[name="toUnits"]');
  // console.log(toUnits[0]);
  let newInnerHTML = null;

  for (let unit of toUnits) {
    if (fromType === unit.dataset.type) {
      console.log(unit);
      newInnerHTML += unit;
      console.log (newInnerHTML);
    }
  }

  document.querySelector('select[name="toUnits"]').innerHTML = newInnerHTML;
}

const requestConversion = document.getElementById("convert");

requestConversion.addEventListener("click", doConversion);

function doConversion() {
  event.preventDefault();
  var fromUnitsDropdown = document.querySelector('select[name="fromUnits"]');
  var fromUnits = fromUnitsDropdown[fromUnitsDropdown.selectedIndex].value;
  var bigUnitsQuantity = parseFloat(document.getElementById("big-units-quantity").value);
  var smallUnitsQuantity = parseFloat(document.getElementById("small-units-quantity").value);
  var toUnitsDropdown = document.querySelector('select[name="toUnits"]');
  var toUnits = toUnitsDropdown[toUnitsDropdown.selectedIndex].value;

  convert(fromUnits, bigUnitsQuantity, smallUnitsQuantity, toUnits);

  console.log(fromUnits + ", " + bigUnitsQuantity + ", " + smallUnitsQuantity + ", " + toUnits);
}

function convert(fromUnits, bigUnitsQuantity, smallUnitsQuantity, toUnits){
  console.log(fromUnits + bigUnitsQuantity + smallUnitsQuantity + toUnits);
  var result = conversions[fromUnits][toUnits](bigUnitsQuantity, smallUnitsQuantity);
  console.log(result);
  pEl = document.createElement('p');
  resultOutput = document.createTextNode(result);
  pEl.appendChild(resultOutput);
  content = document.querySelector('.content')
  content.appendChild( pEl );
  console.log( pEl );
}
