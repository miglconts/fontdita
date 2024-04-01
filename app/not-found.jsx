import { AlertCircle } from "lucide-react"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
export default function NotFound() {

    return (
        <div className="container w-4/6 ">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error 404</AlertTitle>
              <AlertDescription>
                Página no encontrada
              </AlertDescription>
        </Alert>
        </div>
    )
}