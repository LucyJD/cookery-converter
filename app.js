/**
 * The main app object.
 *
 */

var converter = {};

converter.init = function() {

  formDisplay.init();

};

converter.init();

//Event listener to detect when 'from units' dropdown changes

const fromUnitsSelection = document.getElementById("from-select");

fromUnitsSelection.addEventListener("change", updateFormFields);

// When 'from units' dropdown changes, update quantity input fields and 'to units' dropdown

function updateFormFields() {
  updateQuantityInputFields();
  displayToUnits();
}

//Event listener to detect when 'convert' button is clicked

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
}

function convert(fromUnits, bigUnitsQuantity, smallUnitsQuantity, toUnits){
  var result = conversions[fromUnits][toUnits](bigUnitsQuantity, smallUnitsQuantity);
  pEl = document.createElement('p');
  resultOutput = document.createTextNode(result);
  pEl.appendChild(resultOutput);
  content = document.querySelector('.content')
  content.appendChild( pEl );
  console.log( pEl );
}
