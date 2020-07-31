import { getGifs } from '../../helpers/getGifs';

describe('Test in getGifs helper', () => {
  test('should be return 10 elements', async () => {
    const gifs = await getGifs('One Punch');

    expect(gifs.length).toBe(10);
  });

  test('should be return 10 elements without category param', async () => {
    const gifs = await getGifs();

    console.log(gifs);
    expect(gifs.length).toBe(10);
  });
});
