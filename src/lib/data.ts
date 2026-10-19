export type Service = {
  id: string;
  name: string;
  blurb: string;
  duration: string;
  price: string;
  category: 'Hair' | 'Beauty' | 'Grooming';
};

export const SERVICES: Service[] = [
  {
    id: 'precision-cut',
    name: 'Precision Cut & Style',
    blurb: 'A bespoke cut tailored to your face shape, texture and lifestyle — finished with a runway-ready blow-dry.',
    duration: '60 min',
    price: '₹1,200',
    category: 'Hair',
  },
  {
    id: 'color-craft',
    name: 'Color Craft & Balayage',
    blurb: 'Dimensional color, balayage and global tones mixed by hand for luminous, lived-in results.',
    duration: '150 min',
    price: '₹4,500',
    category: 'Hair',
  },
  {
    id: 'keratin-therapy',
    name: 'Keratin Smoothing Therapy',
    blurb: 'Frizz-taming keratin treatment that restores shine and manageability for up to five months.',
    duration: '180 min',
    price: '₹6,000',
    category: 'Hair',
  },
  {
    id: 'bridal-makeup',
    name: 'Bridal Makeup & Hair',
    blurb: 'A complete bridal look — flawless base, statement eyes and an enduring hairstyle for your big day.',
    duration: '180 min',
    price: '₹12,000',
    category: 'Beauty',
  },
  {
    id: 'party-glam',
    name: 'Party Glam Makeup',
    blurb: 'Camera-ready glam with HD foundation, contour and lash work that lasts through every celebration.',
    duration: '75 min',
    price: '₹2,500',
    category: 'Beauty',
  },
  {
    id: 'facial-ritual',
    name: 'Signature Facial Ritual',
    blurb: 'Deeply restorative facial combining cleansing, exfoliation and a lifting massage for radiant skin.',
    duration: '90 min',
    price: '₹3,000',
    category: 'Beauty',
  },
  {
    id: 'beard-sculpt',
    name: 'Beard Sculpt & Hot Towel',
    blurb: 'Sharp lines, hot-towel prep and precision razor finish for a beard that frames your jaw perfectly.',
    duration: '45 min',
    price: '₹700',
    category: 'Grooming',
  },
  {
    id: 'classic-shave',
    name: 'Royal Classic Shave',
    blurb: 'A traditional straight-razor shave with rich lather, soothing oils and a closing cold compress.',
    duration: '40 min',
    price: '₹600',
    category: 'Grooming',
  },
  {
    id: 'groom-package',
    name: 'The Gentleman Package',
    blurb: 'Cut, beard sculpt, classic shave and a facial cleanse — the complete refresh in one sitting.',
    duration: '120 min',
    price: '₹2,800',
    category: 'Grooming',
  },
];

export type TeamMember = {
  name: string;
  role: string;
  image: string;
  specialty: string;
};

export const TEAM: TeamMember[] = [
  {
    name: 'Aarav Mehta',
    role: 'Creative Director',
    specialty: 'Editorial cuts & color',
    image: 'https://images.pexels.com/photos/5188621/pexels-photo-5188621.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
  },
  {
    name: 'Ishita Rao',
    role: 'Senior Colorist',
    specialty: 'Balayage & lived-in color',
    image: 'https://images.pexels.com/photos/696285/pexels-photo-696285.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
  },
  {
    name: 'Kabir Singh',
    role: 'Master Barber',
    specialty: 'Beard sculpt & classic shaving',
    image: 'https://images.pexels.com/photos/20302331/pexels-photo-20302331.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
  },
  {
    name: 'Naina Kapoor',
    role: 'Lead Makeup Artist',
    specialty: 'Bridal & editorial glam',
    image: 'https://images.pexels.com/photos/7229664/pexels-photo-7229664.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  detail: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "The balayage I got here is the best I've ever had. Ishita understood exactly the tone I wanted and the salon feels like a sanctuary.",
    name: 'Priya Sharma',
    detail: 'Color & Balayage',
  },
  {
    quote: "I've been getting my beard sculpted by Kabir for over a year. The hot-towel finish is something I look forward to every single time.",
    name: 'Rohit Verma',
    detail: 'Beard Sculpt',
  },
  {
    quote: 'My bridal look was beyond what I imagined. The team made me feel calm, beautiful and completely myself on my wedding day.',
    name: 'Ananya Gupta',
    detail: 'Bridal Package',
  },
  {
    quote: 'Every visit feels like a mini retreat. The precision cut holds its shape for weeks — genuinely the best in the city.',
    name: 'Vikram Nair',
    detail: 'Precision Cut',
  },
];

export type GalleryItem = {
  src: string;
  label: string;
  tag: string;
};

export const GALLERY: GalleryItem[] = [
  {
    src: 'https://images.pexels.com/photos/7195803/pexels-photo-7195803.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
    label: 'The Lounge',
    tag: 'Interior',
  },
  {
    src: 'https://images.pexels.com/photos/23349912/pexels-photo-23349912.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
    label: 'Wet Styling',
    tag: 'Hair',
  },
  {
    src: 'https://images.pexels.com/photos/7750124/pexels-photo-7750124.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
    label: 'Mirror Hall',
    tag: 'Interior',
  },
  {
    src: 'https://images.pexels.com/photos/7229664/pexels-photo-7229664.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
    label: 'Bridal Glam',
    tag: 'Beauty',
  },
  {
    src: 'https://images.pexels.com/photos/5509059/pexels-photo-5509059.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
    label: 'Sharp Lines',
    tag: 'Grooming',
  },
  {
    src: 'https://images.pexels.com/photos/13068377/pexels-photo-13068377.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
    label: 'Monochrome Suite',
    tag: 'Interior',
  },
  {
    src: 'https://images.pexels.com/photos/11169551/pexels-photo-11169551.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
    label: 'The Chair',
    tag: 'Grooming',
  },
  {
    src: 'https://images.pexels.com/photos/27165072/pexels-photo-27165072.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
    label: 'Greenery Corner',
    tag: 'Interior',
  },
  {
    src: 'https://images.pexels.com/photos/11360229/pexels-photo-11360229.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
    label: 'Eye Detail',
    tag: 'Beauty',
  },
];

export const STATS = [
  { value: '12+', label: 'Years of Artistry' },
  { value: '25K+', label: 'Happy Clients' },
  { value: '9', label: 'Master Stylists' },
  { value: '4.9', label: 'Average Rating' },
];
