import SvgComponent from "@/components/ui/shop";

export default function Nosotros() {
  return (
    <section className="flex ">
      <div className="w-1/2">
        <h2 className="text-primary text-4xl mb-2">Acerca de Nosotros</h2>
        <p className=" text-2xl">
          Desde los últimos smartphones y dispositivos inteligentes hasta las
          tendencias más actuales en ropa y accesorios, nuestra tienda está
          diseñada para mantenerte a la vanguardia de la innovación y el estilo.
          Nuestro equipo está comprometido a brindarte un servicio al cliente
          excepcional, ayudándote a encontrar el producto perfecto y
          garantizando tu satisfacción en cada compra.
        </p>
        <p className=" text-2xl">
          En <strong>Fontdita</strong>, creemos que la tecnología y la moda
          pueden inspirar, empoderar y conectar a las personas de todo el mundo.
          Únete a nosotros en nuestro viaje para descubrir lo último en
          electrónica y moda, y déjanos ser tu socio confiable en la búsqueda de
          la excelencia y el estilo.
        </p>
      </div>
      <SvgComponent className="w-1/2" />
    </section>
  );
}
