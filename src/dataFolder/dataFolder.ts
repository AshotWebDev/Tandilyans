import bannerImg1 from '@/assets/bannerImg1.avif'
import bannerImg2 from '@/assets/bannerImg2.avif'
import bannerImg3 from '@/assets/bannerImg3.webp'
import bannerImg4 from '@/assets/bannerImg4.jpg'

export  const sliderData = [
    {
        id: '1',
        text: 'Նրբաճաշակ',
        img: bannerImg1
    },

    {
        id: '2',
        text: 'Տարբերվող',
        img: bannerImg2
    },

    {
        id: '3',
        text: 'Յուրօրինակ',
        img: bannerImg3
    },

    // {
    //     id: '4',
    //     text: 'lorem lorem lorem lorem4',
    //     img: bannerImg4
    // },
  ]



  export const productsData = [
    {
        id: '1',
        name: 'sunka1',
        price: 5000,
        desc: 'gexecik pajusak',
        img: bannerImg1
    },

    {
        id: '2',
        name: 'sunka2',
        price: 5000,
        desc: 'gexecik pajusak',
        img: bannerImg1

    },

    {
        id: '3',
        name: 'sunka3',
        price: 5000,
        desc: 'gexecik pajusak',
        img: bannerImg1

    },

    {
        id: '4',
        name: 'sunka4',
        price: 5000,
        desc: 'gexecik pajusak',
        img: bannerImg1

    },

    {
        id: '5',
        name: 'sunka5',
        price: 5000,
        desc: 'gexecik pajusak',
        img: bannerImg1

    },

    {
        id: '6',
        name: 'sunka6',
        price: 5000,
        desc: 'gexecik pajusak',
        img: bannerImg1

    },

    {
        id: '7',
        name: 'sunka7',
        price: 5000,
        desc: 'gexecik pajusak',
        img: bannerImg1

    },

    {
        id: '8',
        name: 'sunka8',
        price: 5000,
        desc: 'gexecik pajusak',
        img: bannerImg1

    },

    {
        id: '9',
        name: 'sunka9',
        price: 5000,
        desc: 'gexecik pajusak',
        img: bannerImg1

    }


  ]


  export const responsive = {
    superLargeDesktop: {
      // Breakpoint for screens larger than 4000px
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      // Breakpoint for screens larger than 1024px
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      // Breakpoint for screens larger than 768px
      breakpoint: { max: 1024, min: 768 },
      items: 2
    },
    mobile: {
      // Breakpoint for screens smaller than 768px
      breakpoint: { max: 768, min: 0 },
      items: 1
    }
  };