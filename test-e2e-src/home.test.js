import HomePage from './home.page';

describe('Landing page for image app', function() {

  const home = new HomePage();

  it('should have a title', function() {
    home.get();
    expect(home.title).toEqual('Albumizer');
     
  });

  describe('navigate landing and main content pages', function() {
    it('starts at home and shows all images on "images" button click', function() {   
      expect(home.url).toBe('/');
      expect(home.stateComponent).toEqual('welcome');

      home.allImgs();

      expect(home.url).toBe('/images');
      expect(home.stateComponent).toEqual('images');

    });   
  });
});