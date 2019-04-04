// Object containing all the conversion functions.

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
    fromKgG: {
      toLbOz: (kilograms, grams) => {
        if(!grams) {
          grams = 0;
        }
        if(kilograms) {
          grams = grams + conversions.fromKilograms.toGrams(kilograms);
        }
        return conversions.fromGrams.toOunces(grams);
      }
    },
    fromKilograms: {
      toGrams: (kilograms) => {
        return kilograms * 1000;
      }
    },
    fromGrams: {
      toOunces: grams => {
        return grams * 0.035274;
      }
    },
    fromPintsUS: {
      toFluidOzUK: (unused, pintsUS) => "Not yet implemented",
      toPintsUK: (unused, pintsUS) => "Not yet implemented",
      toFluidOzUS: (unused, pintsUS) => {
        return pintsUS * 16;
      },
      toLitresMl: (unused, pintsUS) => "Not yet implemented"
    },
    fromFluidOzUS: {
      toMillilitres: fluidOzUS => {
        return fluidOzUS * 29.57353;
      },
      toFluidOzUK: (unused, fluidOzUS) => "Not yet implemented",
      toPintsUK: (unused, fluidOzUS) => "Not yet implemented",
      toPintsUS: (unused, fluidOzUS) => {
        return fluidOzUS * 0.0625;
      },
      toLitresMl: (unused, fluidOzUS) => "Not yet implemented"
    },
    fromPintsUK: {
      toFluidOzUK: (unused, pintsUK) => {
        return pintsUK * 20;
      },
      toPintsUS: (unused, pintsUK) => "Not yet implemented",
      toFluidOzUS: (unused, pintsUK) => "Not yet implemented",
      toLitresMl: (unused, pintsUK) => "Not yet implemented"
    },
    fromFluidOzUK: {
      toMillilitres: fluidOzUK => {
        return fluidOzUK * 28.41306;
      },
      toPintsUK: (unused, fluidOzUK) => {
        return fluidOzUK * 0.05;
      },
      toPintsUS: (unused, fluidOzUK) => "Not yet implemented",
      toFluidOzUS: (unused, fluidOzUK) => "Not yet implemented",
      toLitresMl: (unused, fluidOzUK) => "Not yet implemented"
    },
    fromLitresMl: {
      toPintsUK: (litres, millilitres) => "Not yet implemented",
      toFluidOzUK: (litres, millilitres) => "Not yet implemented",
      toPintsUS: (litres, millilitres) => "Not yet implemented",
      toFluidOzUS: (litres, millilitres) => "Not yet implemented"
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