import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils"
import { Link } from "react-router-dom";



export default function Navbar() {
  const scrolled = useScrollTop();

  return (
    <div
      className={cn(
        "fixed w-full border-b border-gray-800 bg-[#0F1115] px-4 md:px-6",
        scrolled && "border-b shadow-sm"
      )}
    >
      <div className="grid grid-cols-2 md:grid-cols-3 items-center gap-4">
        <img
          src="../src/assets/logo.png"
          alt="Logo"
          className="h-12 w-12 md:h-16 md:w-16 flex ml-4 md:ml-12"
        />
        <div className="hidden md:block justify-self-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div>
                    <ul className="grid grid-rows-4 w-64 md:w-80 lg:w-96 gap-1 h-40">
                      <div className="flex items-center hover:bg-gray-400/10 p-1 rounded-sm">
                        <div>
                          <a>RegNote</a>
                        </div>
                      </div>
                      <div className="flex items-center hover:bg-gray-400/10 p-1 rounded-sm">
                        <div>
                          <a>Calender</a>
                        </div>
                      </div>
                      <div className="flex items-center hover:bg-gray-400/10 p-1 rounded-sm">
                        <div>
                          <a>Web clipper</a>
                        </div>
                      </div>
                      <div className="flex items-center hover:bg-gray-400/10 p-1 rounded-sm">
                        <div>
                          <p className="text-gray-400 text-sm font-light">
                            RegNote is always at home right
                          </p>
                          <Link
                            to="/courses"
                            className="underline text-gray-400 text-sm font-light"
                          >
                            in your browser
                          </Link>
                        </div>
                      </div>
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Schools & Institutions</NavigationMenuTrigger>
                <NavigationMenuContent />
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Students</NavigationMenuTrigger>
                <NavigationMenuContent />
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
                <NavigationMenuContent />
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Gallery</NavigationMenuTrigger>
                <NavigationMenuContent />
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <Button
          asChild
          variant="ghost"
          size="lg"
          className="bg-[#3B82F6] text-white font-medium hover:bg-[#2563EB] hover:text-white self-center justify-self-end mr-4 md:mr-12"
        >
          <Link to="/login">Login</Link>
        </Button>
      </div>
    </div>
  )
}
