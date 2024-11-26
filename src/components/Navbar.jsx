
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Globe } from 'lucide-react'
import { Link } from "react-router-dom"

const Navbar=()=> {
  return (
    <nav className="border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to={'/'} className="font-semibold text-xl">
            Our Metro
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link to={"/resources"} className="text-sm font-medium">
              About
            </Link>
            <Link to={"/editor"} className="text-sm font-medium">
              Report Issue
            </Link>
            <Link to={"/pricing"} className="text-sm font-medium">
              Review Issue
            </Link>
            <Link to={"/design-battle"} className="text-sm font-medium">
              Contact
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          
          <div className="hidden sm:flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button size="sm">Sign Up</Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar