import Image from 'next/image'
// components/MyImage.tsx

const Home: React.FC = () => {
  return (  <div className="flex items-center justify-between p-4">
      <h1 className="text-3xl">Welcome to our E-commerce Website</h1>
     <p>Shop the latest collection of men's, women's, and kids' clothes.</p>
      <div className="w-1/2">
        <Image 
          src="/main-image.jpg" 
          alt="Description of image" 
          width={500} 
          height={500}
          className="object-cover"
        />
      </div>
      <div className="w-1/2 pl-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel ligula scelerisque, 
          finibus odio eu, dignissim mauris. Nam eget lacus eget lacus egestas lobortis. 
          Sed vehicula consectetur ex. Phasellus sodales, ligula non tempor auctor, 
          felis tortor volutpat libero, quis aliquam ante sapien eget arcu. 
          Nulla facilisi. Ut auctor egestas nunc, nec bibendum risus. Vestibulum ante ipsum primis in 
          faucibus orci luctus et ultrices posuere cubilia curae; Integer nec volutpat nulla.
        </p>
      </div>
    </div>
  );
}

export default  Home
//     <div>
//       <h1 className="text-3xl">Welcome to our E-commerce Website</h1>
//       <p>Shop the latest collection of men's, women's, and kids' clothes.</p>

//       <div>

//      <Image
//        src="/main-image.jpg
//        "
//        width={500}
//        height={300}
//        alt="Picture of the author"
//      />
   
//       </div> 
      
//     </div>
  
//   )
// }

// export default

