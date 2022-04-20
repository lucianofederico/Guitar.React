const Products = require('./Products.js')
const productos = require('../guitarList.json')
const User = require('./Users')

User.create( {    
   name: "ADMIN",    
   surname: "GR",    
   admin: true,    
   email: "admin@guitar.com",     
   password: "123",     
   phoneNumber: "0303 456",     
   direction: "Ruta 66" })

Products.bulkCreate(
   [
    {
       marca: "Fender", 
       nombre:"Jim Adkins JA-90 Telecaster Thinline Crimson Red Transparent", 
       descripcion: "Fender Jim Adkins JA-90 Telecaster Thinline Crimson Red Transparent", 
       categoria:"electrica", 
       imagen:"https://images.musicstore.de/images/0960/fender-jim-adkins-ja-90-telecaster-thinline-crimson-red-transparent_1_GIT0046063-000.jpg", 
       imagen2:"https://images.musicstore.de/images/0960/fender-jim-adkins-ja-90-telecaster-thinline-crimson-red-transparent_2_GIT0046063-000.jpg", 
       precio: 899, 
       stock: 10
       //link: "https://www.musicstore.com/en_ES/EUR/Fender-Jim-Adkins-JA-90-Telecaster-Thinline-Crimson-Red-Transparent/art-GIT0046063-000"
    },
    {
       marca: "Epiphone", 
       nombre: "Slash AFD Les Paul Special-II Outfit Appetite Amber", 
       descripcion: "Epiphone Slash AFD Les Paul Special-II Outfit Appetite Amber", 
       categoria: "electrica", 
       imagen: "https://images.musicstore.de/images/0960/epiphone-slash-afd-les-paul-special-ii-performance-pack_2_GIT0030927-000.jpg", 
       imagen2: "", 
       precio: 239, 
       stock: 10
       //link: "https://www.musicstore.com/es_ES/EUR/Epiphone-Slash-AFD-Les-Paul-Special-II-Outfit-Appetite-Amber-/art-GIT0030928-000"
    },
    {
       marca: "Fender", 
       nombre: "Kurt Cobain Jag-Stang RW Fiesta Red", 
       descripcion: "Fender Kurt Cobain Jag-Stang RW Fiesta Red", 
       categoria: "electrica", 
       imagen: "https://images.musicstore.de/images/0960/fender-kurt-cobain-jag-stang-rw-fiesta-red_1_GIT0057102-000.jpg", 
       imagen2: "https://images.musicstore.de/images/0960/fender-kurt-cobain-jag-stang-rw-fiesta-red_2_GIT0057102-000.jpg", 
       precio: 1320, 
       stock: 10
       //link: "https://www.musicstore.com/en_ES/EUR/Fender-Kurt-Cobain-Jag-Stang-RW-Fiesta-Red/art-GIT0057102-000"
    },
    {
       marca: "Gibson", 
       nombre: "Tony Iommi SG Special Vintage Cherry", 
       descripcion: "Gibson Tony Iommi SG Special Vintage Cherry", 
       categoria:"electrica", 
       imagen:"https://images.musicstore.de/images/0960/gibson-tony-iommi-sg-special-vintage-cherry_1_GIT0057262-000.jpg", 
       imagen2:"https://images.musicstore.de/images/0960/gibson-tony-iommi-sg-special-vintage-cherry_2_GIT0057262-000.jpg", 
       precio: 2541, 
       stock: 10
       //link: "https://www.musicstore.com/en_ES/EUR/Gibson-Tony-Iommi-SG-Special-Vintage-Cherry/art-GIT0057262-000"
    },
    {
       marca: "Fender", 
       nombre: "Jim Root Telecaster Flat White", 
       descripcion: "Fender Jim Root Telecaster Flat White", 
       categoria:"electrica", 
       imagen:"https://images.musicstore.de/images/0960/fender-jim-root-telecaster-flat-white_1_GIT0011377-000.jpg", 
       imagen2:"https://images.musicstore.de/images/0960/fender-jim-root-telecaster-flat-white_2_GIT0011377-000.jpg", 
       precio: 1319, 
       stock: 10
       //link: "https://www.musicstore.com/en_ES/EUR/Fender-Jim-Root-Telecaster-Flat-White/art-GIT0011377-000"
    },
    {
       marca: "Fender", 
       nombre: "Britt Daniel Tele Thinline MN Amarillo Gold", 
       descripcion: "Fender Britt Daniel Tele Thinline MN Amarillo Gold", 
       categoria:"electrica", 
       imagen:"https://images.musicstore.de/images/0960/fender-britt-daniel-tele-thinline-mn-amarillo-gold_1_GIT0050583-000.jpg", 
       imagen2:"https://images.musicstore.de/images/0960/fender-britt-daniel-tele-thinline-mn-amarillo-gold_2_GIT0050583-000.jpg", 
       precio: 2165, 
       stock: 10
       //link: "https://www.musicstore.com/en_ES/EUR/Fender-Britt-Daniel-Tele-Thinline-MN-Amarillo-Gold/art-GIT0050583-000"
    },
    {
       marca: "Fender", 
       nombre: "Richie Kotzen Telecaster MN BS Brown Sunburst", 
       descripcion: "Fender Richie Kotzen Telecaster MN BS Brown Sunburst", 
       categoria:"electrica", 
       imagen:"https://images.musicstore.de/images/0960/fender-richie-kotzen-telecaster-brown-sunburst_1_GIT0026487-000.jpg", 
       imagen2: "", 
       precio: 2222, 
       stock: 10
       //link: "https://www.musicstore.com/en_ES/EUR/Fender-Richie-Kotzen-Telecaster-MN-BS-Brown-Sunburst/art-GIT0026487-000"
    },
    {
       marca: "Fender", 
       nombre: "Eric Clapton Stratocaster Olympic White", 
       descripcion: "Fender Eric Clapton Stratocaster Olympic White", 
       categoria: "electrica", 
       imagen: "https://images.musicstore.de/images/0960/fender-eric-clapton-stratocaster-mn-olympic-white_1_GIT0038772-000.jpg", 
       imagen2: "", 
       precio: 2333, 
       stock: 10
       //link: "https://www.musicstore.com/en_ES/EUR/Fender-Eric-Clapton-Stratocaster-Olympic-White-/art-GIT0038772-000"
    },
    {
       marca: "Fender", 
       nombre: "Cory Wong Stratocaster RW Sapphire Blue Transparent", 
       descripcion: "Fender Cory Wong Stratocaster RW Sapphire Blue Transparent", 
       categoria: "electrica", 
       imagen: "https://images.musicstore.de/images/0960/fender-cory-wong-stratocaster-rw-sapphire-blue-transparent_1_GIT0057100-000.jpg", 
       imagen2: "https://images.musicstore.de/images/0960/fender-cory-wong-stratocaster-rw-sapphire-blue-transparent_2_GIT0057100-000.jpg", 
       precio: 2390, 
       stock: 10
       //link: "https://www.musicstore.com/en_ES/EUR/Fender-Cory-Wong-Stratocaster-RW-Sapphire-Blue-Transparent/art-GIT0057100-000"
    },
    {
       marca: "Fender", 
       nombre: "Stevie Ray Vaughan Stratocaster", 
       descripcion: "Fender Stevie Ray Vaughan Stratocaster", 
       categoria: "electrica", 
       imagen: "https://images.musicstore.de/images/0960/fender-stevie-ray-vaughan-stratocaster-3-tone-sunburst_1_GIT0000055-000.jpg", 
       imagen2: "", 
       precio: 2469, 
       stock: 10
       //link: "https://www.musicstore.com/en_ES/EUR/Fender-Stevie-Ray-Vaughan-Stratocaster/art-GIT0000055-000"
    },
    {
       marca: "Fender", 
       nombre: "Johnny Marr Jaguar Electric Guitar Olympic White", 
       descripcion: "Fender Johnny Marr Jaguar Electric Guitar Olympic White", 
       categoria: "electrica", 
       imagen: "https://images.musicstore.de/images/0960/fender-johnny-marr-jaguar-rw-olympic-white_1_GIT0023272-000.jpg", 
       imagen2: "", 
       precio: 2541, 
       stock: 10
       //link: "https://www.musicstore.com/en_ES/EUR/Fender-Johnny-Marr-Jaguar-Electric-Gu-itar-Olympic-White-/art-GIT0023272-000"
    },
    {
       marca: "Fender", 
       nombre: "Eric Johnson 1954 Virginia Stratocaster", 
       descripcion: "Fender Eric Johnson 1954 Virginia Stratocaster", 
       categoria: "electrica", 
       imagen: "https://images.musicstore.de/images/0960/fender-eric-johnson-1954-virginia-stratocaster_1_GIT0052291-000.jpg", 
       imagen2: "https://images.musicstore.de/images/0960/fender-eric-johnson-1954-virginia-stratocaster_2_GIT0052291-000.jpg", 
       precio: 2639, 
       stock: 10
       //link: "https://www.musicstore.com/en_ES/EUR/Fender-Eric-Johnson-1954-Virginia-Stratocaster/art-GIT0052291-000"
    },
    {
       marca: "Fender", 
       nombre: "Brad Paisley Road Worn Esquire", 
       descripcion: "Fender Brad Paisley Road Worn Esquire", 
       categoria: "electrica", 
       imagen: "https://images.musicstore.de/images/0960/fender-brad-paisley-road-worn-esquire_1_GIT0054121-000.jpg", 
       imagen2: "https://images.musicstore.de/images/0960/fender-brad-paisley-road-worn-esquire_2_GIT0054121-000.jpg", 
       precio: 1219, 
       stock: 10
       //link: "https://www.musicstore.com/en_ES/EUR/Fender-Brad-Paisley-Road-Worn-Esquire/art-GIT0054121-000"
    },
    {
       marca: "Fender", 
       nombre: "Ben Gibbard Mustang MN Natural", 
       descripcion: "Fender Ben Gibbard Mustang MN Natural", 
       categoria: "electrica", 
       imagen: "https://images.musicstore.de/images/0960/fender-ben-gibbard-mustang-mn-natural_1_GIT0055593-000.jpg", 
       imagen2: "https://images.musicstore.de/images/0960/fender-ben-gibbard-mustang-mn-natural_2_GIT0055593-000.jpg", 
       precio: 989, 
       stock: 10
       //link: "https://www.musicstore.com/en_ES/EUR/Fender-Ben-Gibbard-Mustang-MN-Natural/art-GIT0055593-000"
    },
    {
       marca: "Epiphone", 
       nombre: "B.B. King Lucille", 
       descripcion: "Epiphone B.B. King Lucille", 
       categoria: "electrica", 
       imagen: "https://images.musicstore.de/images/0960/epiphone-b-b-king-lucille_1_GIT0057274-000.jpg", 
       imagen2: "https://images.musicstore.de/images/0960/epiphone-b-b-king-lucille_2_GIT0057274-000.jpg", 
       precio: 914, 
       stock: 10
       //link: "https://www.musicstore.com/en_ES/EUR/Epiphone-B-B-King-Lucille/art-GIT0057274-000"
    },
    {
       marca: "Epiphone", 
       nombre: "Slash Les Paul Standard Anaconda Burst", 
       descripcion: "Epiphone Slash Les Paul Standard Anaconda Burst", 
       categoria: "electrica", 
       imagen: "https://images.musicstore.de/images/0960/epiphone-slash-les-paul-standard-anaconda-burst_1_GIT0056700-000.jpg", 
       imagen2: "https://images.musicstore.de/images/0960/epiphone-slash-les-paul-standard-anaconda-burst_2_GIT0056700-000.jpg", 
       precio: 849, 
       stock: 10
       //link: "https://www.musicstore.com/en_ES/EUR/Epiphone-Slash-Les-Paul-Standard-Anaconda-Burst/art-GIT0056700-000"
    },
    {
       marca: "Epiphone", 
       nombre: "Tommy Thayer Les Paul Electric Blue", 
       descripcion: "Epiphone Tommy Thayer Les Paul Electric Blue", 
       categoria: "electrica", 
       imagen: "https://images.musicstore.de/images/0960/epiphone-limited-edition-tommy-thayer-electric-blue-les-paul-outfit_1_GIT0051737-000.jpg", 
       imagen2: "https://images.musicstore.de/images/0960/epiphone-limited-edition-tommy-thayer-electric-blue-les-paul-outfit_2_GIT0051737-000.jpg", 
       precio: 799, 
       stock: 10
       //link: "https://www.musicstore.com/en_ES/EUR/Epiphone-Tommy-Thayer-Les-Paul-Electric-Blue-/art-GIT0051737-000"
    },
    {
      marca: "Epiphone", 
      nombre: "Joe Pass Emperor II Pro Vintage Sunburst", 
      descripcion: "Epiphone Joe Pass Emperor II Pro Vintage Sunburst", 
      categoria: "acustica", 
      imagen: "https://images.musicstore.de/images/0960/epiphone-joe-pass-emperor-ii-pro-vintage-sunburst_1_GIT0045462-000.jpg", 
      imagen2: "", 
      precio: 564, 
      stock: 10
      //link: "https://www.musicstore.com/en_ES/EUR/Epiphone-Joe-Pass-Emperor-II-Pro-Vintage-Sunburst-/art-GIT0045462-000"
   },
   {
      marca: "Fender", 
      nombre: "Tash Sultana Stratocaster", 
      descripcion: "Fender Tash Sultana Stratocaster", 
      categoria: "acustica", 
      imagen: "https://images.musicstore.de/images/0960/fender-tash-sultana-stratocaster_1_GIT0054119-000.jpg", 
      imagen2: "https://images.musicstore.de/images/0960/fender-tash-sultana-stratocaster_2_GIT0054119-000.jpg", 
      precio: 1249, 
      stock: 10
      //link: "https://www.musicstore.com/en_ES/EUR/Fender-Tash-Sultana-Stratocaster/art-GIT0054119-000"
   },
   {
      marca: "Gibson", 
      nombre: "Peter Frampton Phenix Inspired Les Paul Custom Ebony", 
      descripcion: "Gibson Peter Frampton Phenix Inspired Les Paul Custom Ebony", 
      categoria:"acustica", 
      imagen:"https://images.musicstore.de/images/0960/gibson-peter-frampton-phenix-inspired-les-paul-custom-ebony_1_GIT0056596-000.jpg", 
      imagen2:"https://images.musicstore.de/images/0960/gibson-peter-frampton-phenix-inspired-les-paul-custom-ebony_2_GIT0056596-000.jpg", 
      precio: 7115, 
      stock: 10
      //link: "https://www.musicstore.com/en_ES/EUR/Gibson-Peter-Frampton-Phenix-Inspired-Les-Paul-Custom-Ebony/art-GIT0056596-000"
   },
 ])
