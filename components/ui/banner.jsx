export default function Banner() {
  return (
    <section class="bg-gradient-to-r from-orange-600 to-red-300 font-[sans-serif] p-6">
      <div class="container mx-auto flex flex-col justify-center items-center">
        <h2 class="text-white text-3xl font-bold mb-4">
          Descubre nuestra nueva colección{" "}
        </h2>
        <p class="text-white text-base text-center mb-6">
          Tu destino definitivo para la última tecnología y moda vanguardista.{" "}
        </p>
        <a
          href="javascript:void(0)"
          class="bg-white text-sm text-blue-600 font-semibold py-2 px-6 rounded hover:bg-slate-100"
        >
          Comprar Ahora
        </a>
      </div>
    </section>
  );
}
