import { IMenuDT } from "@/types/menu-d-t";
import { useLocale } from "next-intl";

export const useGetMenuData =  () => {
  const locale = useLocale();

  console.log(locale);
  const baseLink = `/${locale}`;
  
  const menu_data: IMenuDT[] = [
    {
      id: 1,
      title: 'home',
      link: `${baseLink}/`,  // Prepend locale to the link
    },
    {
      id: 2,
      title: 'portofolio',
      link: `${baseLink}/portofolio/portfolio-standard`,
      home_menus: [
        { title: 'MAIN HOME', link: '/', img: '/assets/img/menu/white-version/home-1.jpg' },
        { title: 'Fashion STUDIO', link: '/home-2', img: '/assets/img/menu/white-version/home-2.jpg' },
        { title: 'CREATIVE AGENCY', link: '/home-3', img: '/assets/img/menu/white-version/home-3.jpg' },
        { title: 'Digital Agency', link: '/home-4', img: '/assets/img/menu/white-version/home-4.jpg' },
        { title: 'DESIGN STUDIO', link: '/home-5', img: '/assets/img/menu/white-version/home-5.jpg' },
        { title: 'Minimal Shop', link: '/home-6', img: '/assets/img/menu/white-version/home-6.jpg' },
        { title: 'DESIGN STUDIO', link: '/home-7', img: '/assets/img/menu/white-version/home-7.jpg' },
        { title: 'showcase carousel', link: '/home-8', img: '/assets/img/menu/white-version/home-8.jpg' },
        { title: 'INTERACTIVE LINKS', link: '/home-9', img: '/assets/img/menu/white-version/home-9.jpg' },
        { title: 'wrapper slider', link: '/home-10', img: '/assets/img/menu/white-version/home-10.jpg' },
        { title: 'showcase parallax', link: '/home-11', img: '/assets/img/menu/white-version/home-11.jpg' },
      ],
    },
    {
      id: 3,
      title: 'ourclients',
      link: `${baseLink}/brand`,
    },
    {
      id: 4,
      title: 'pricing',
      link: `${baseLink}/pricing`,
    },
    {
      id: 5,
      title: 'blog',
      link: `${baseLink}/blog`,
    },
    {
      id: 6,
      title: 'contact',
      link: `${baseLink}/contact/contact`,
    },
    {
      id: 7,
      title: "aboutus",
      link: `${baseLink}/about`,
    },
  ];

  const mobile_menu_data: {
    id: number;
    title: string;
    link: string;
    dropdown_menus: {
      title: string;
      link: string;
    }[];
  }[] = [
    {
      id: 1,
      title: 'Home',
      link: `${baseLink}/`,
      dropdown_menus: [
        { title: 'MAIN HOME', link: `${baseLink}/` },
        { title: 'Fashion STUDIO', link: `${baseLink}/home-2` },
        { title: 'CREATIVE AGENCY', link: `${baseLink}/home-3` },
        { title: 'Digital Agency', link: `${baseLink}/home-4` },
        { title: 'DESIGN STUDIO', link: `${baseLink}/home-5` },
        { title: 'Minimal Shop', link: `${baseLink}/home-6` },
        { title: 'DESIGN STUDIO', link: `${baseLink}/home-7` },
        { title: 'showcase carousel', link: `${baseLink}/home-8` },
        { title: 'INTERACTIVE LINKS', link: `${baseLink}/home-9` },
        { title: 'wrapper slider', link: `${baseLink}/home-10` },
        { title: 'showcase parallax', link: `${baseLink}/home-11` },
        { title: 'horizontal', link: `${baseLink}/home-12` },
      ],
    },
    {
      id: 2,
      title: 'Pages',
      link: '#',
      dropdown_menus: [
        { title: 'ABOUT US', link: `${baseLink}/about-us` },
        { title: 'FAQ Page', link: `${baseLink}/faq` },
        { title: 'ABOUT ME', link: `${baseLink}/about-me` },
        { title: 'Pricing', link: `${baseLink}/pricing` },
        { title: 'Team Page', link: `${baseLink}/team` },
        { title: 'OUR CLIENTS', link: `${baseLink}/brand` },
        { title: 'Team Details', link: `${baseLink}/team-details/1` },
        { title: 'Register', link: `${baseLink}/register` },
        { title: 'OUR SERVICES', link: `${baseLink}/service` },
        { title: 'LogIn', link: `${baseLink}/login` },
        { title: 'SERVICES DETAILS', link: `${baseLink}/service-details` },
        { title: 'ERROR PAGE', link: `${baseLink}/error` },
        { title: 'Shop Page', link: `${baseLink}/shop` },
        { title: 'Shop Details One', link: `${baseLink}/shop-details/1` },
        { title: 'Shop Details Two', link: `${baseLink}/shop-details-2` },
        { title: 'my account', link: `${baseLink}/account` },
        { title: 'Cart', link: `${baseLink}/cart` },
        { title: 'Checkout', link: `${baseLink}/checkout` },
        { title: 'Wishlist', link: `${baseLink}/wishlist` },
      ],
    },
    {
      id: 3,
      title: 'Portfolio',
      link: `${baseLink}/portfolio-standard`,
      dropdown_menus: [
        { title: 'Standard', link: `${baseLink}/portfolio-standard` },
        { title: 'Interactive', link: `${baseLink}/home-10` },
        { title: 'random', link: `${baseLink}/portfolio-random` },
        { title: 'showcase parallax', link: `${baseLink}/home-11` },
        { title: 'Masonry random', link: `${baseLink}/portfolio-masonry` },
        { title: 'Vertical Carousel', link: `${baseLink}/home-12` },
        { title: 'wrapper', link: `${baseLink}/portfolio-wrapper` },
        { title: 'horizontal', link: `${baseLink}/portfolio-showcase` },
        { title: 'Image Slider', link: `${baseLink}/home-7` },
        { title: 'wrapper Slider', link: `${baseLink}/home-11` },
        { title: 'parallax showcase', link: `${baseLink}/portfolio-showcase` },
        { title: 'Perspective Slider', link: `${baseLink}/home-9` },
        { title: 'two-columns', link: `${baseLink}/portfolio-grid-col-2` },
        { title: 'three-columns', link: `${baseLink}/portfolio-grid-col-3` },
        { title: 'three-columns Wide', link: `${baseLink}/portfolio-grid-col-3-fullwidth` },
        { title: 'four-columns', link: `${baseLink}/portfolio-grid-col-4` },
        { title: 'four-columns Wide', link: `${baseLink}/portfolio-grid-col-4-fullwidth` },
        { title: 'Creative', link: `${baseLink}/portfolio-showcase-details-2` },
        { title: 'images Small', link: `${baseLink}/portfolio-details-1` },
        { title: 'Sliding', link: `${baseLink}/portfolio-details-2` },
        { title: 'Image Comparison', link: `${baseLink}/portfolio-details-comparison` },
        { title: 'Video', link: `${baseLink}/portfolio-details-video` },
        { title: 'CUSTOM LIGHT', link: `${baseLink}/portfolio-custom-light` },
        { title: 'Gallery', link: `${baseLink}/portfolio-showcase-details` },
        { title: 'Mockups', link: `${baseLink}/portfolio-details-3` },
      ],
    },
    {
      id: 4,
      title: 'Blog',
      link: `${baseLink}/blog-modern`,
      dropdown_menus: [
        { title: 'Modern', link: `${baseLink}/blog-modern` },
        { title: 'Classic Sidebar', link: `${baseLink}/blog-classic` },
        { title: 'Minimal List', link: `${baseLink}/blog-list` },
        { title: 'Post Single', link: `${baseLink}/blog-details/1` },
        { title: 'Post With Sidebar', link: `${baseLink}/blog-details-2` },
      ],
    },
    {
      id: 5,
      title: 'Contact',
      link: `${baseLink}/contact`,
      dropdown_menus: [
        { title: 'Contact', link: `${baseLink}/contact` },
        { title: 'Get IN touch', link: `${baseLink}/contact-2` },
      ],
    },
  ];

  return {
    menu_data,
    mobile_menu_data,
  };
};