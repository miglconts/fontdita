"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useAuthContext } from "../../app/context/AuthContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LoginForm = () => {
  const { registerUser, loginUser, googleLogin } = useAuthContext();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <Tabs defaultValue="account" className="w-[400px] container">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Registro</TabsTrigger>
        <TabsTrigger value="password">Ingresar</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Registro</CardTitle>
            <CardDescription>
              Registra tu correo y contraseña para poder ver, editar y eliminar
              items de la tienda{" "}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="email">Correo</Label>
              <Input
                type="email"
                id="email"
                defaultValue="correo@registrado.com"
                value={values.email}
                required
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Contraseña</Label>
              <Input
                type="password"
                value={values.password}
                required
                name="password"
                onChange={handleChange}
                id="password"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={() => registerUser(values)}>Registrarme</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Ingresar</CardTitle>
            <CardDescription>
              Ingresa al panel admin con correo y contraseña
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Correo registrado</Label>
              <Input
                type="email"
                id="email"
                defaultValue="correo@registrado.com"
                value={values.email}
                required
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">Contraseña</Label>
              <Input
                type="password"
                value={values.password}
                required
                name="password"
                onChange={handleChange}
                id="password"
              />
            </div>
          </CardContent>
          <CardFooter className="container flex flex-col items-center content-center justify-center">
            <Button onClick={() => loginUser(values)} className="">
              Ingresar
            </Button>
            <Button onClick={googleLogin} className="mt-2 block " variant = "outline">
              Ingresar con Google
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default LoginForm;
