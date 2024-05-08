"use client";
import { addItemsToFB, fetchDataFromFirestore } from "../../firebase/config";
import { Button } from "@/components/ui/button";
export default function page() {
  return (
    <main className="container m-auto mt-10 w-full md:w-4/6">
      <h1 className="text-primary text-7xl mb-4">Bienvenido a Fontdita</h1>
      <section>
        <h2 className="text-primary text-3xl mb-2">Acerca de Nosotros</h2>
        <p>
          Bienvenido a <strong>Fontdita</strong>, tu destino definitivo para la
          última tecnología y moda vanguardista. Nos enorgullece ofrecer una
          amplia selección de productos electrónicos de vanguardia y prendas de
          vestir elegantes, todo cuidadosamente seleccionado para satisfacer tus
          necesidades y estilo de vida.
        </p>
        <p>
          En <strong>Fontdita</strong>, entendemos que la tecnología y la moda
          son más que simples objetos; son extensiones de nuestra identidad y
          expresión personal. Es por eso que nos esforzamos por ofrecerte una
          experiencia de compra excepcional, donde puedas encontrar productos de
          calidad que se adapten a tus gustos y necesidades.
        </p>
        <p>
          Desde los últimos smartphones y dispositivos inteligentes hasta las
          tendencias más actuales en ropa y accesorios, nuestra tienda está
          diseñada para mantenerte a la vanguardia de la innovación y el estilo.
          Nuestro equipo está comprometido a brindarte un servicio al cliente
          excepcional, ayudándote a encontrar el producto perfecto y
          garantizando tu satisfacción en cada compra.
        </p>
        <p>
          En <strong>Fontdita</strong>, creemos que la tecnología y la moda
          pueden inspirar, empoderar y conectar a las personas de todo el mundo.
          Únete a nosotros en nuestro viaje para descubrir lo último en
          electrónica y moda, y déjanos ser tu socio confiable en la búsqueda de
          la excelencia y el estilo.
        </p>
        <p>
          ¡Explora nuestra colección hoy y descubre un mundo de posibilidades en{" "}
          <strong>Fontdita</strong>!
        </p>
      </section>
      {/* <Button onClick={addItemsToFB}>Enviar</Button>
      <Button onClick={fetchDataFromFirestore}>Enviar ID</Button> */}
    </main>
  );
}
