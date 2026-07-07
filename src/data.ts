/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CatalogueItem, InstagramPost } from './types';

export const GINZA_INFO = {
  name: "Ginza Limited",
  booth: "Hall 2, Booth H2-B14",
  exhibition: "Bharat Tex 2026",
  location: "Jio World Convention Centre, Mumbai, India",
  tagline: "Pioneering Next-Generation Warp Knits, Laces & Narrow Fabrics",
  phone: "+91 22 4030 1111",
  email: "exports@ginzalimited.com",
  website: "https://www.ginzalimited.com/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAb21jcAS5zGZleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAafc2s3IwyB8mg60bfPUFmfUs5VK0iAB-G8lplM0IRIx5vPYRHccLlv4JeTZnw_aem_PGS-oS4tnTxC9N_bzP8PNQ",
  instagram: "https://www.instagram.com/ginza.industries.limited?igsh=NTZsbHZjenl2YTh1",
  about: "Established in 1986, Ginza Limited is India's leading integrated manufacturer of premium warp-knitted fabrics, exquisite Raschel & embroidery laces, and high-performance narrow elastics. Catering to major global brands in intimate wear, athleisure, and technical textiles, our state-of-the-art facilities in Surat and Mumbai employ European technologies to deliver unmatched quality, precision, and sustainable innovation.",
  stats: [
    { label: "Years of Excellence", value: "40+" },
    { label: "Global Brand Partners", value: "120+" },
    { label: "Daily Production Capacity", value: "15 Tons" },
    { label: "Sustainability Certifications", value: "Oeko-Tex / GRS" }
  ],
  certifications: [
    { title: "Oeko-Tex Standard 100", issuer: "OEKO-TEX Association", desc: "Guarantees textile products are free of harmful substances and completely safe for skin contact." },
    { title: "Global Recycled Standard (GRS)", issuer: "Textile Exchange", desc: "Verifies recycled content in our eco-line polyesters and tracking materials from source to final fabric." },
    { title: "ISO 9001:2015", issuer: "TUV SUD", desc: "Certified quality management system across design, development, and manufacturing of warp knits and elastics." },
    { title: "Higg Index Verified", issuer: "Sustainable Apparel Coalition", desc: "Measures and evaluates our environmental and social sustainability performance across production cycles." }
  ]
};

export const CATEGORIES = [
  "All Products",
  "Warp Knits & Mesh",
  "Intimate Laces",
  "Narrow Elastics",
  "Eco-Sustainable",
  "Technical Spacer"
];

export const CATALOGUE_ITEMS: CatalogueItem[] = [
  {
    id: "wk-01",
    code: "GZ-TRICOT-180",
    title: "Premium 4-Way Stretch Tricot",
    category: "Warp Knits & Mesh",
    image: "https://images.unsplash.com/photo-1582142306909-195724d33ab0?w=600&auto=format&fit=crop&q=80",
    description: "Our signature high-gauge tricot fabric featuring an ultra-soft hand feel and exceptional dimensional recovery. Perfect for luxury lingerie, shapewear, and premium activewear.",
    composition: "82% Nylon Microfiber, 18% Creora Spandex",
    weight: "180 GSM",
    width: "60 Inches (152 cm)",
    features: ["Exceptional 4-way stretch", "Excellent shape retention", "Ultra-soft skin contact", "Chlorine & sunscreen resistant"]
  },
  {
    id: "wk-02",
    code: "GZ-MESH-JACQ",
    title: "Jacquard Breathable Mesh",
    category: "Warp Knits & Mesh",
    image: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=600&auto=format&fit=crop&q=80",
    description: "Engineered mesh fabric utilizing complex jacquard knitting techniques to create zonal breathability. Ideally suited for high-intensity sportswear panels and athletic shoe uppers.",
    composition: "90% Polyester, 10% Elastane",
    weight: "135 GSM",
    width: "58 Inches (147 cm)",
    features: ["Zonal mapping breathability", "Rapid moisture management", "High tear strength", "Odor control treatment"]
  },
  {
    id: "lc-01",
    code: "GZ-LACE-CHAN",
    title: "Chantilly Floral Stretch Lace",
    category: "Intimate Laces",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&auto=format&fit=crop&q=80",
    description: "Exquisite warp-knitted stretch lace with a delicate floral motif, outlined with premium corded yarn for a deep 3D texture. Perfect for couture lingerie and fashion panel inserts.",
    composition: "88% Polyamide, 12% Spandex",
    weight: "95 GSM",
    width: "7.5 Inches / 19 cm (Trim Width)",
    features: ["Delicate eyelash edge finish", "3D corded detailing", "High stretch and recovery", "Durable wash cycle rating"]
  },
  {
    id: "lc-02",
    code: "GZ-LACE-ALLOVER",
    title: "Allover Raschel Geometric Lace",
    category: "Intimate Laces",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&auto=format&fit=crop&q=80",
    description: "A continuous allover floral-geometric lace pattern manufactured on advanced Karl Mayer Raschel looms. Designed for full-body garments, nightwear overlay, and modern dresses.",
    composition: "92% Nylon, 8% Elastane",
    weight: "115 GSM",
    width: "56 Inches (142 cm)",
    features: ["Uniform allover stretch", "Inherent anti-fray design", "Flat profile for seamless layers", "Vibrant dye absorption"]
  },
  {
    id: "el-01",
    code: "GZ-EL-BRABAND",
    title: "Plush-Back Underband Elastic",
    category: "Narrow Elastics",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&auto=format&fit=crop&q=80",
    description: "Double-plush brushed back narrow elastic specifically engineered for bra underbands. Provides supreme support while preventing skin irritation and pressure marks.",
    composition: "78% Nylon, 22% Heat-Resistant Rubber",
    weight: "32mm Width",
    width: "32 mm Roll",
    features: ["Double-brushed plush back", "Hypoallergenic fibers", "Constant tension curve", "Guaranteed 100+ wash lifespan"]
  },
  {
    id: "el-02",
    code: "GZ-EL-SILICONE",
    title: "Active Gripper Elastic with Silicone",
    category: "Narrow Elastics",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop&q=80",
    description: "High-modulus narrow elastic with screen-printed medical-grade wave silicone on the reverse. Keeps cycle shorts, activewear hemlines, and shapewear firmly in place.",
    composition: "70% Polyester, 30% Spandex + Wave Silicone",
    weight: "45mm Width",
    width: "45 mm Roll",
    features: ["Wave silicone anti-slip print", "Medical-grade non-allergenic", "Stiff tension profile", "Frictionless edges"]
  },
  {
    id: "sus-01",
    code: "GZ-ECO-TRICOT",
    title: "EcoStretch GRS Recycled Tricot",
    category: "Eco-Sustainable",
    image: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=600&auto=format&fit=crop&q=80",
    description: "Our award-winning 100% recycled nylon tricot fabric, regenerated from post-consumer waste like discarded fishing nets and carpet fibers. Engineered for eco-conscious luxury.",
    composition: "80% GRS-Certified Recycled Nylon, 20% ROICA Eco-Spandex",
    weight: "190 GSM",
    width: "60 Inches (152 cm)",
    features: ["Fully GRS Certified recycled source", "Carbon footprint reduced by 55%", "Equivalent durability to virgin nylon", "Advanced UV 50+ block protection"]
  },
  {
    id: "sp-01",
    code: "GZ-SPC-3D",
    title: "3D Breathable Spacer Fabric",
    category: "Technical Spacer",
    image: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=600&auto=format&fit=crop&q=80",
    description: "A three-dimensional warp-knitted spacer mesh consisting of two outer micro-mesh skins separated by a resilient pile monofilament layer. Provides breathable thermal insulation and cushioning.",
    composition: "100% Breathable Polyester",
    weight: "280 GSM",
    width: "58 Inches (147 cm)",
    features: ["High compression resilience", "Maximum air circulation", "Shock-absorbing cushioning", "Moisture-vapor transportable"]
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: "post-1",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&auto=format&fit=crop&q=80",
    caption: "Live from #BharatTex2026! 🇮🇳 Our team is thrilled to welcome global buyers at Hall 2, Booth H2-B14. Step in to explore our latest collection of sustainable tricots and luxury stretch laces. #TextileInnovation #MakeInIndia #WarpKnitting #SustainableFashion #GinzaLimited",
    likes: 412,
    commentsCount: 24,
    date: "1 day ago"
  },
  {
    id: "post-2",
    image: "https://images.unsplash.com/photo-1582142306909-195724d33ab0?w=600&auto=format&fit=crop&q=80",
    caption: "Crafting perfection, thread by thread. Our premium high-gauge Tricots offer an incomparable buttery-soft hand feel coupled with medical-grade compression. Certified safe by OEKO-TEX Standard 100. 🌸🌿 #LingerieFabrics #ActivewearIndia #OekoTexCertified #StretchFabrics #GinzaTextiles",
    likes: 328,
    commentsCount: 15,
    date: "3 days ago"
  },
  {
    id: "post-3",
    image: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=600&auto=format&fit=crop&q=80",
    caption: "Introducing ECO-STRETCH: Our circular-economy collection engineered using 100% GRS-certified post-consumer recycled polyamide. Retains the identical strength and premium stretch profile of virgin fibers, with a drastically lower carbon footprint. ♻️🌎 #CircularFashion #GRSCertified #EcoFriendlyTextiles #GreenFashion #SuratTextiles",
    likes: 562,
    commentsCount: 38,
    date: "5 days ago"
  },
  {
    id: "post-4",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&auto=format&fit=crop&q=80",
    caption: "High-modulus narrow elastics designed for sportspersons. High tension stability, wave-applied premium medical silicone, and skin-friendly plush backs. Built to withstand over 100 industrial wash cycles. 🚴‍♂️🏃‍♀️ #ActivewearConstruction #TrimManufacturing #SiliconeGripper #NarrowFabrics #GinzaNarrowElastic",
    likes: 219,
    commentsCount: 9,
    date: "1 week ago"
  },
  {
    id: "post-5",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&auto=format&fit=crop&q=80",
    caption: "Delicacy meets strength. Our Raschel stretch laces feature intricate floral motifs outlined in heavy corded yarns for an exquisite 3D effect. Designed in collaboration with European fashion ateliers. 👗✨ #RaschelLace #StretchLace #CoutureLingerie #FashionDesignersIndia #ApparelManufacturing",
    likes: 489,
    commentsCount: 31,
    date: "1 week ago"
  },
  {
    id: "post-6",
    image: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=600&auto=format&fit=crop&q=80",
    caption: "Warp-knitting technological advancement. A look inside our Surat production unit, operating 24/7 with computerized Karl Mayer machines to deliver maximum consistency and lead-time reductions. ⚙️📐 #KarlMayer #WarpKnittingLooms #SuratIndustry #AutomatedTextiles #IndustrialWarpKnits",
    likes: 388,
    commentsCount: 19,
    date: "2 weeks ago"
  }
];
