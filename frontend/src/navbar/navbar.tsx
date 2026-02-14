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



export default function Navbar() {
  const scrolled = useScrollTop();

  return (
    <div className={cn(
      "fixed w-full border-b border-gray-800 bg-[#0F1115]",
      scrolled && "border-b shadow-sm"
    )}>
      <div className="grid grid-cols-3">
        <img src="../src/assets/logo.png" alt="Logo" className="h-20 w-20 flex ml-12" />
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div>
                  <ul className="grid w-50 gap-0.5 md:w-125 md:grid-row-4 lg:w-100 h-40">
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
                        <a
                          href="/courses"
                          className="underline text-gray-400 text-sm font-light"
                        >
                          in your browser
                        </a>
                      </div>
                    </div>
                  </ul>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Schools & Institutions</NavigationMenuTrigger>
              <NavigationMenuContent>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Students</NavigationMenuTrigger>
              <NavigationMenuContent>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
              <NavigationMenuContent>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Gallery</NavigationMenuTrigger>
              <NavigationMenuContent>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Button
          variant="ghost"
          size="lg"
          className="bg-[#3B82F6] text-white font-medium hover:bg-[#2563EB] hover:text-white self-center justify-self-end mr-12">
          Login
        </Button>
      </div>
    </div>
  )
}
