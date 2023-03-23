const products = [
    {
      id: 1,
      nombre: "Cardigan Ofelia ",
      imagen: "https://oombawkadesigncrochet.com/wp-content/uploads/2020/09/Weekend-Crush-Cardigan-67-768x1024.jpg",
      precio: "160.000",
      categoria: "Sweaters",
      descripcion: "Un hermoso cardigan en corte clásico, tejido a crochet, sobrio, elegante, sencillo ideal para cualquier ocasión, queda perfecto con cualquier prenda, disponible en tonos tierra, blanco y negro."
    },

    {
      id: 2,
      nombre: "Sweater Candy",
      imagen: "https://ae01.alicdn.com/kf/HTB1Ui5OGwmTBuNjy1Xbq6yMrVXa8/Su-ter-Vintage-de-hilo-multicolor-para-mujer-Jersey-corto-de-manga-larga-con-cuello-redondo.jpg",
      precio: "180.000",
      categoria: "Sweaters",
      descripcion: "El sueter más único y divertido de nuestra colección. El sueter Candy combina colores, líneas, texturas y formas de la manera más armoniosa. Tejido a crochet, es la mejor alternativa para darle un toque fresco y divertido a cualquier outfit."
    },

    {
      id: 3,
      nombre: "Cardigan Chunky",
      imagen: "http://sc04.alicdn.com/kf/Hb80b0f066d3d4e00a3d9e632c9cc88d2Z.jpg",
      precio: "220.000",
      categoria: "Sweaters",
      descripcion: "Cardigan oversize combinado, hecho a crochet en punto burbuja, hermoso para combinar con cualquier outfit, muy abrigado y cómodo."
    },

    {
      id: 4,
      nombre: "Sweater Munch",
      imagen: "https://i.pinimg.com/236x/d6/b7/3f/d6b73f572b824453bc1a0f6d5cefca41.jpg",
      precio: "150.000",
      categoria: "Sweaters",
      descripcion: "Combinado al estilo de la pintura 'El grito' del artista de Edvard Munch este sueter extremadamente cómodo tejido a dos agujas es tu mejor opcion para un outfit fuera de lo común."
    },

    {
      id: 5,
      nombre: "Cardigan Alma",
      imagen: "https://ae01.alicdn.com/kf/HTB1PDZMh9rqK1RjSZK9q6xyypXaZ/Su-ter-de-manga-larga-de-linterna-para-mujer-c-rdigan-tejido-informal-c-lido.jpg_640x640.jpg",
      precio: "120.000",
      categoria: "Sweaters",
      descripcion: "El más rómantico de nuestros cardigan, con mangas en punto burbuja, tejido a crochet. Viene en diferentes colores."
    },

    {
      id: 6,
      nombre: "Cardigan Margaritas",
      imagen: "https://ae01.alicdn.com/kf/Sc59429e10bb74272b57624f23b34d8d33/Women-3D-Crocheted-Flowers-Knitted-Cardigan-Contrast-Color-Floral-Hooked-Sweater-Coat-Coarse-Yarn-Knitwear-Lantern.jpg_640x640.jpg",
      precio: "200.000",
      categoria: "Sweaters",
      descripcion: "Precioso cardigan corto con margaritas, tejido a dos agujas. La base del cardigan puede ser de cualquier color, es bastante fresco y cómodo para el día a día."
    },

    {
      id: 7,
      nombre: "Gorrro Pastel",
      imagen: "https://i.pinimg.com/736x/85/ce/62/85ce627bd8b202dda8fe2f8875ddce33.jpg",
      precio: "40.000",
      categoria: "Gorros",
      descripcion: "Perfecto para los amantes del color y las prendas divertidas, el gorro pastel es una alternativa diferente para darle un pop de alegria a nuestros looks de invierno."
    },

    {
      id: 8,
      nombre: "Gorrro Clásico",
      imagen: "https://lp2.hm.com/hmprod?hmver=3&set=quality%5B79%5D%2Csource%5B%2Fmodel%2F2016%2FD00+0413595+001+64+6309.jpg%5D%2Ctype%5BSTILLLIFE_FRONT%5D&call=url[file:/product/zoom]&zoom=zoom",
      precio: "30.000",
      categoria: "Gorros",
      descripcion: "Este gorro es perfecto para los días más fríos del año, con un corte clásico y sencillo,tejido a crochet, muy cómodo y abrigado, es tu mejor aliado contra las inclemencias del clima."
    },

    {
      id: 9,
      nombre: "Gorrro Unicolor",
      imagen: "https://img2.stilo.es/47/5d/14/gorro-punto-grueso-hm-600.jpg",
      precio: "25.000",
      categoria: "Gorros",
      descripcion: "Gorro unicolor, ideal para looks monocromáticos. Tejido a dos agujas, muy cómodo y versátil, perfecto para cualquier ocasión."
    },

    {
      id: 10,
      nombre: "Bufanda Invierno",
      imagen: "https://m.media-amazon.com/images/I/818jjFeF+7L._AC_SX569_.jpg",
      precio: "55.000",
      categoria: "Bufandas",
      descripcion: "Bufanda en múltiples colores, perfecta para la época más fría del año, es una excelente opción para lucir elegante y a la moda."
    },

    {
      id: 11,
      nombre: "Bufanda Romance",
      imagen: "https://i.pinimg.com/originals/75/72/ff/7572ff70b9c20e92246a203320086861.jpg",
      precio: "65.000",
      categoria: "Bufandas",
      descripcion: "Bufanda en múltiples combinaciones de colores, perfecta para el día a día por su material fresco y cómodo. Tejida a dos agujas, será el mejor complemento para cualquier outfit."

    },

    {
      id: 12,
      nombre: "Bufanda Arcoiris",
      imagen: "https://http2.mlstatic.com/D_NQ_NP_836785-MLA29988173884_042019-O.webp",
      precio: "70.000",
      categoria: "Bufandas",
      descripcion: "La bufanda arcoiris es el mejor complemento para darle un toque divertido a cualquier outfit por su combinación de colores, es abrigada y moderna, tejida completamente a mano en técnica de crochet."

    }
  ]

  const getList = () => {
    return new Promise ((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    })
}

export default getList