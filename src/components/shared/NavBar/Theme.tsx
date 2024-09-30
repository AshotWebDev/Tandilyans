import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
  import { Theme as ThemType } from "@/context/ThemeProvider";
import useTheme from "@/hooks/useThem";
  import { cn } from "@/lib/utils";
  import { LucideComputer, LucideMoon, LucideSun } from "lucide-react";
  import { ReactNode } from "react";
  
  interface IMenuItems {
    title: string;
    mode: ThemType;
    icon: ReactNode;
  }
  
  const Theme = ({ type = "dropdown" }: { type?: string }) => {
    const { mode, setMode } = useTheme();
  
    const menuItems: IMenuItems[] = [
      {
        title: "Light",
        mode: "light",
        icon: <LucideSun className="w-6 h-6" />,
      },
      {
        title: "Dark",
        mode: "dark",
        icon: <LucideMoon className="w-6 h-6" />,
      },
      {
        title: "System",
        mode: "system",
        icon: <LucideComputer className="w-6 h-6" />,
      },
    ];
  
    return (
      <DropdownMenu>
        <DropdownMenuTrigger className="p-1">
          {mode === "light" ? (
            <LucideSun className="h-6 w-6 text-yellow-700" />
          ) : (
            <LucideMoon className="h-6 w-6 text-yellow-700" />
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent className="min-w-[120px] mr-[1rem]">
          {menuItems.map((item: IMenuItems) => {
            return (
              <DropdownMenuItem
                key={item.mode}
                onClick={() => setMode(item.mode)}
                className="flex items-center gap-4 px-2.5 py-2 hover:cursor-pointer font-bold"
              >
                {item.icon}{" "}
                <span
                  className={cn(
                    "text-zinc-800 dark:text-zinc-50",
                    mode === item.mode && " text-yellow-700 dark:text-yellow-600"
                  )}
                >
                  {item.title}
                </span>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };
  
  export default Theme;