export default function Unauthorized() {
  return (
    <div className="container">
      {" "}
      <h2 className="text-center text-8xl text-orange-700 mb-5 font-bold">
        Usuario no autorizado
      </h2>
      <p className="text-center text-xl text-orange-700">
        Por favor contacta con soporte para recibir las credenciales adecuadas
      </p>
    </div>
  );
}
