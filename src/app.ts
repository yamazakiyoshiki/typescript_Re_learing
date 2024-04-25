// import { ProjectInput } from "./components/project-input";
// import { ProjectList } from "./components/project-list";

// new ProjectInput();
// new ProjectList('active');
// new ProjectList('finished');

// console.log('こんにちは');

// import "reflect-metadata";
// import { plainToInstance } from "class-transformer";
// import { Product1 } from "./product.model";
// import { validate } from "class-validator";

// const products = [
//     {title: '商品1', price: 100},
//     {title: '商品2', price: 200},
//   ];

//   const newProd = new Product1('', -100);
//   validate(newProd).then(errors => {
//     if(errors.length > 0) {
//       console.log("バリデーションエラー!");
//       console.log(errors);
//     } else {
//     console.log(newProd.getInformation());
//     }
//   })

// const p1 = new Product1('商品1', 100);

// const loadedProducts = products.map(prod => {
//   return new Product1(prod.title, prod.price)
// });

// const loadedProducts = plainToInstance(Product1, products)

// for(const prod of loadedProducts) {
//   console.log(prod.getInformation());
// }

declare var ol: any;

function searchAddressHandler(event: Event) {
  event.preventDefault();

  const coordinates = {lat: 40.41, lng: -73.99}; // Can't fetch coordinates from Google API, use dummy ones

  document.getElementById('map')!.innerHTML = ''; // clear <p> from <div id="map">
  new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([coordinates.lng, coordinates.lat]),
      zoom: 16
    })
  });
}