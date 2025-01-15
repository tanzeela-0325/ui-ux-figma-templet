

export interface CartItem {
    id:number;
    product_name: string;
    description:string;
}

export interface Iproduct {
    id: number;          
    name?: string;         
    title?:string;           
    price?: string;       
    quantity?: number;   
    imageUrl: string;   
    description?:string;
    produc_name?:string;
    old_price?:string;

 } 

 export const products:Iproduct[] =[
    {
       id:1,
       title:"T-SHIRT WITH TAPE DETAILS",
       price:"$120",
       imageUrl:"/Frame 32.png",
    },
    {
       id:2,
       title:"SKINNY FIT JEANS",
       price:"$240",
       imageUrl:"/Frame 33.png",
       old_price:"$260"
    },
    {
       id:3,
       title:"CHECKERED SHIRT",
       price:"$120",
       imageUrl:"/Frame 34.png",
    },
    {
       id:4,
       title:"SLEEVE STRIPED T-SHIRT",
       price:"$200",
       imageUrl:"/Frame 38.png",
       old_price:"$260"
    }
]

export const product_2:Iproduct[] =[
    {
       id:1,
       title:"VERTICAL STRIPED SHIRT",
       price:"$212",
       imageUrl:"/Frame 32 (1).png",
       old_price:"$232"
    },
    {
       id:2,
       title:"COURAGE GRAPHIC T-SHIRT",
       price:"$145",
       imageUrl:"/Frame 90.png",
       
    },
    {
       id:3,
       title:"LOOSE FIT BERMUDA SHORTS",
       price:"$120",
       imageUrl:"/frem 91.png",
    },
    {
       id:4,
       title:"FADED SKINNY JEANS",
       price:"$210",
       imageUrl:"/Frame 92.png",
       
    }
]

 export const ProductData:Iproduct[]=[
    {
       id:1,
       name:"ERTICAL STRIPED SHIRT",
       price:"123",
       quantity:3546,
       imageUrl:"/Frame 33 (2).png"
    },
    {
        id:2,
        name:"ERTICAL STRIPED SHIRT",
        price:"123",
        quantity:3546,
        imageUrl:"/Frame 34(1).png"  
    },
    {
        id:3,
        name:"ERTICAL STRIPED SHIRT",
        price:"123",
        quantity:3546,
        imageUrl:"/Frame 38.(1).png"  
    },
    {
        id:4,
        name:"ERTICAL STRIPED SHIRT",
        price:"123",
        quantity:3546,
        imageUrl:"/Frame 33.png"  
    },
    {
        id:5,
        name:"ERTICAL STRIPED SHIRT",
        price:"123",
        quantity:3546,
        imageUrl:"/Frame 34.png"  
    },
    {
        id:6,
        name:"ERTICAL STRIPED SHIRT",
        price:"123",
        quantity:3546,
        imageUrl:"/Frame 38.png"  
    },
    {
        id:7,
        name:"ERTICAL STRIPED SHIRT",
        price:"123",
        quantity:3546,
        imageUrl:"/Frame 32 (1).png"  
    },
    {
        id:8,
        name:"ERTICAL STRIPED SHIRT",
        price:"123",
        quantity:3546,
        imageUrl:"/Frame 90.png"  
    },
    {
        id:9,
        name:"ERTICAL STRIPED SHIRT",
        price:"123",
        quantity:3546,
        imageUrl:"/Frame 71.png"  
    }

]
export const ProductData_2:CartItem[]=[
    {
       id:1,
       product_name:"Sarah M.",
       description:"I am blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I have bought has exceeded my expectations."
       

    },
    {
        id:2,
        product_name:"Alex K.",
        description:"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."
       
       
    },
    {
        id:3,
        product_name:"James L.",
        description:"As someone who is always on the lookout for unique fashion pieces, I am thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."
        
       
         
    },
    {
        id:4,
        product_name:"Mooen M.",
        description:"As someone who is always on the lookout for unique fashion pieces, I am thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."
    },
    

]

export const ProductData_3:CartItem[]=[
    {
       id:1,
       product_name:"Samantha D.",
       description:"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It is become my favorite go-to shirt."
       

    },
    {
        id:2,
        product_name:"Ethan R.",
        description:"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer,s touch in every aspect of this shirt."
       
       
    },
    {
        id:3,
        product_name:"Liam K.",
        description:"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."
        
       
         
    },
    {
        id:4,
        product_name:"Alex M.",
        description:"The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I am quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."
    },
    {
        id:5,
        product_name:"Olivia P.",
        description:"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It is evident that the designer poured their creativity into making this t-shirt stand out."
    },
    {
        id:6,
        product_name:"Ava H.",
        description:"I am not just wearing a t-shirt; I am wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter."
    }
    

]