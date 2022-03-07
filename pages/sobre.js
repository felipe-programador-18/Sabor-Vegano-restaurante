import React from "react"
import Link from "next/link"
import Head from "next/head"

const Sobre = () =>{
     
   return <>
     <Head>
     <title>Sobre</title>
     </Head> 
 

    <div className="mx-auto text-center bg-green-400 opacity-75">
      <Link href='/'>
      <img id="icone" src="icon.jpg.jpg"></img>
      </Link>
        <h1 className="font-bold text-center">Sabor Vegano</h1>
         
    </div> 
    
    <div className="mx-auto text-center pt-4 px-8">
      <div className="bg-blue-100 text-center">
        <p className="capitalize font-bold">O Restaurante Sabor Vegano, foi criado com a ideia de satisfazer e apaixonar o povo vegano.
         Com diversas receitas, elaboramos algumas com gosto peculiares.</p>
         <p className="capitalize  font-bold">A ideia surgiu em 2019, onde no ínicio era apenas um sonho. Hoje em 2022 Estamos realizando um sonho, Afinal demoro né? Antes tarde do que nunca haha.</p>
         <p className="capitalize font-bold" >Esperamos que vocês gostem.</p>
      </div>

                
        
    </div>
    
     <div className="mx text-center">
     <p id="super" className="text-center capitalize m-4">Super Vegano R$:35.90</p>
      <img className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..." id="prato" src="prato.jpg"></img>
      <div className="mx-auto">
      <p className="text-center inline bg-red-200 capitalize m-4">
       Ingredientes:Arroz, feixe-cru e verduras.
       </p>
      </div>
      <Link href='/pedidos'>
      <button className="bg-red-400 hover:bg-violet-700  rounded-full p-2">Fazer pedido</button>  
      </Link>

      <p id="super" className="text-center capitalize m-2 font-bold">Hamburger Vegano R$:45.90</p>
      <img className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..." id="prato" src="ham.jpg"></img>
      <div className="mx-auto">
      <p className="text-center inline bg-blue-400 capitalize m-4">
       Ingredientes: Pão integral, alface,verduras e bife vegano.
       </p>
       
      </div>
      
      <Link href='/pedidos'>
      <button className="bg-blue-500 hover:bg-violet-700  rounded-full p-2">Fazer pedido</button> 
      </Link>

      <p id="super" className="text-center capitalize m-2 font-bold">Picadinho Vegano R$:65.90 </p>
      <img className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..." id="prato" src="fran.jpg"></img>
      <div className="mx-auto">
      <p className="text-center inline bg-yellow-400 capitalize m-4">
       Ingredientes: Milho,Cebola, Pimentão e tomate.
       </p>
      </div>

      <Link href='/pedidos'>
      <button className="bg-yellow-500  hover:bg-violet-700 rounded-full p-2">Fazer pedido</button> 
      </Link>
      </div>
    

      <div className=" bg-black h-20  mx-auto text-center m-4"> 
      <footer>
      <h1 id='footer'>Desenvolvido por: Felipe Martins </h1>
       <h1 id='footer' >Github: <a href="https://github.com/felipe-programador-18">Fe-Prog-18 </a> </h1>
        <h1 id='footer' >Linkedln: <a href="https://www.linkedin.com/in/felipe-martins-programador/"> Felipe Martins</a> </h1>
       </footer>
      </div>
   </> 

}

export default Sobre