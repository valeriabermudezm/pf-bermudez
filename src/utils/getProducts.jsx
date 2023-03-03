const products = [
    {
      id: 1,
      nombre: "Cardigan Ofelia ",
      imagen: "https://oombawkadesigncrochet.com/wp-content/uploads/2020/09/Weekend-Crush-Cardigan-67-768x1024.jpg",
      precio: "160000"
    },

    {
      id: 2,
      nombre: "Sweater Candy",
      imagen: "https://ae01.alicdn.com/kf/HTB1Ui5OGwmTBuNjy1Xbq6yMrVXa8/Su-ter-Vintage-de-hilo-multicolor-para-mujer-Jersey-corto-de-manga-larga-con-cuello-redondo.jpg",
      precio: "180000"
    },

    {
      id: 3,
      nombre: "Cardigan Chunky",
      imagen: "http://sc04.alicdn.com/kf/Hb80b0f066d3d4e00a3d9e632c9cc88d2Z.jpg",
      precio: "220000"
    },

    {
      id: 4,
      nombre: "Sweater Munch",
      imagen: "https://i.pinimg.com/236x/d6/b7/3f/d6b73f572b824453bc1a0f6d5cefca41.jpg",
      precio: "150000"
    },

    {
      id: 5,
      nombre: "Cardigan Alma",
      imagen: "https://ae01.alicdn.com/kf/HTB1PDZMh9rqK1RjSZK9q6xyypXaZ/Su-ter-de-manga-larga-de-linterna-para-mujer-c-rdigan-tejido-informal-c-lido.jpg_640x640.jpg",
      precio: "120000"
    },

    {
      id: 6,
      nombre: "Cardigan Margaritas",
      imagen: "https://ae01.alicdn.com/kf/Sc59429e10bb74272b57624f23b34d8d33/Women-3D-Crocheted-Flowers-Knitted-Cardigan-Contrast-Color-Floral-Hooked-Sweater-Coat-Coarse-Yarn-Knitwear-Lantern.jpg_640x640.jpg",
      precio: "200000"
    },

    {
      id: 7,
      nombre: "Gorrro Pastel",
      imagen: "https://i.pinimg.com/736x/85/ce/62/85ce627bd8b202dda8fe2f8875ddce33.jpg",
      precio: "40000"
    },

    {
      id: 8,
      nombre: "Gorrro Clásico",
      imagen: "https://lp2.hm.com/hmprod?hmver=3&set=quality%5B79%5D%2Csource%5B%2Fmodel%2F2016%2FD00+0413595+001+64+6309.jpg%5D%2Ctype%5BSTILLLIFE_FRONT%5D&call=url[file:/product/zoom]&zoom=zoom",
      precio: "30000"
    },

    {
      id: 9,
      nombre: "Gorrro Unicolor",
      imagen: "https://img2.stilo.es/47/5d/14/gorro-punto-grueso-hm-600.jpg",
      precio: "25000"
    },

    {
      id: 10,
      nombre: "Bufanda Invierno",
      imagen: "https://m.media-amazon.com/images/I/818jjFeF+7L._AC_SX569_.jpg",
      precio: "55000"
    },

    {
      id: 11,
      nombre: "Bufanda Romance",
      imagen: "https://i.pinimg.com/originals/75/72/ff/7572ff70b9c20e92246a203320086861.jpg",
      precio: "65000"
    },

    {
      id: 12,
      nombre: "Bufanda Arcoiris",
      imagen: "https://http2.mlstatic.com/D_NQ_NP_836785-MLA29988173884_042019-O.webp",
      precio: "70000"
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