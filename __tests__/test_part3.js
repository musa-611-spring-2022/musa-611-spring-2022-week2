/* global describe, beforeAll, it, page, expect */

beforeAll(async () => {
  await page.goto('http://localhost:8000/lab/part3-abstracting-with-functions/');
});

function getFoodPlaces() {
  /* global foodMap */
  const data = [];
  foodMap.eachLayer((layer) => {
    if (layer instanceof L.Marker) {
      const center = layer.getLatLng();
      const name = layer.getTooltip().getContent();
      data.push([center.lat, center.lng, name]);
    }
  });
  return data;
}

function getPlayPlaces() {
  /* global playMap */
  const data = [];
  playMap.eachLayer((layer) => {
    if (layer instanceof L.Marker) {
      const center = layer.getLatLng();
      const name = layer.getTooltip().getContent();
      data.push([center.lat, center.lng, name]);
    }
  });
  return data;
}

describe('The food map', () => {
  it('should have at least 3 markers', async () => {
    const places = await page.evaluate(getFoodPlaces);
    expect(places.length).toBeGreaterThanOrEqual(3);
  });
});

describe('The play map', () => {
  it('should have at least 3 markers', async () => {
    const places = await page.evaluate(getPlayPlaces);
    expect(places.length).toBeGreaterThanOrEqual(3);
  });
});

describe('The addPlace function', () => {
  /* global addPlace */

  it('should add a marker to the food map when I tell it to', async () => {
    const initialPlaces = await page.evaluate(getFoodPlaces);
    await page.evaluate(() => {
      addPlace(foodMap, 1, 1, 'testing new place');
    });
    const finalPlaces = await page.evaluate(getFoodPlaces);

    expect(finalPlaces.length).toEqual(initialPlaces.length + 1);
    expect(finalPlaces).toContainEqual([1, 1, 'testing new place']);
  });

  it('should add a marker to the play map when I tell it to', async () => {
    const initialPlaces = await page.evaluate(getPlayPlaces);
    await page.evaluate(() => {
      addPlace(playMap, 1, 1, 'testing new place');
    });
    const finalPlaces = await page.evaluate(getPlayPlaces);

    expect(finalPlaces.length).toEqual(initialPlaces.length + 1);
    expect(finalPlaces).toContainEqual([1, 1, 'testing new place']);
  });
});
