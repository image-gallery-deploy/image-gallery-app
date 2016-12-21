#### TO E2E TEST USING PROTRACTOR:

1. Download and Install the JDK (webdriver needs it to work)
2. `npm i protractor -D` in project of interest
3. put in scripts for `update-webdriver` and optionally `e2e`
4. `npm run update-webdriver`
--- if all goes well, jdk install was good ---
5. Setup `protractor.conf.js`
6. Put test in place
7. `npm run e2e`


#### SAMPLE IMAGES
The following can be JSON.stringified and then manually loaded into MongoDB for test-driving purposes, or just entered one by one using the front end UI.

```javascript
  sample.images = [
    { 
      album: Bunnies
      title: 'Snuggly-wuggly', 
      url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg', 
      description: 'Aren\'t I the little dickens!' 
    },
    { 
      album: Bunnies
      title: 'Wudgy-wudgy', 
      url: 'http://cdn.wallpapersafari.com/48/78/wf3rOl.jpg', 
      description: 'Wiffle-wiffle!' 
    },
    { 
      album: Bunnies
      title: 'Ooooooh!', 
      url: 'https://media.yayomg.com/wp-content/uploads/2014/04/yayomg-tiny-bunny.png', 
      description: 'Meep!' 
    },
    { 
      album: Bunnies
      title: 'Adorable Onslaught', 
      url: 'http://static.quizur.com/i/b/56ef08924fe165.39337854hqdefault.jpg', 
      description: 'Wuv me!' 
    },
    { 
      album: Bunnies
      title: 'Woo-woo-woo!', 
      url: 'https://pbs.twimg.com/profile_images/473206451901448195/nVx4QaHn.jpeg', 
      description: 'Up!' 
    },
    { 
      album: Bunnies
      title: 'Miffy', 
      url: 'https://s-media-cache-ak0.pinimg.com/originals/d6/31/1a/d6311ab5afd4f13169ba15ecf0d16f72.jpg', 
      description: 'Sanwio thease and dethist!' 
    },
    { 
      album: Doggies
      title: 'Hear Me Arf!', 
      url: 'https://s-media-cache-ak0.pinimg.com/736x/cf/c4/b0/cfc4b0c01adf5b211a403049c033c1c9.jpg', 
      description: 'Arf! Arf! Arf!' 
    }
   { 
      album: Doggies
      title: 'Foofy', 
      url: 'http://i.zeze.com/attachment/forum/201510/02/102434zgpqo5tsgghfjmjo.jpeg', 
      description: 'Can I sleep in your pocket?' 
    }
  
  ];

```