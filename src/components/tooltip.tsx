// import * as TooltipPrimitive from "@radix-ui/react-tooltip"

// export function Tooltip({ label, children }: { label: string; children: React.ReactNode }) {
//     return (
//         <TooltipPrimitive.Provider>
//             <TooltipPrimitive.Root>
//                 <TooltipPrimitive.Trigger asChild>
//                     {children}
//                 </TooltipPrimitive.Trigger>
//                 <TooltipPrimitive.Portal>
//                     <TooltipPrimitive.Content
//                         side="bottom"
//                         align="center"
//                         className="z-[9999] rounded bg-black px-2 py-1 text-xs text-white shadow pointer-events-auto"
//                     >
//                         {label}
//                         <TooltipPrimitive.Arrow className="fill-black" />
//                     </TooltipPrimitive.Content>
//                 </TooltipPrimitive.Portal>
//             </TooltipPrimitive.Root>
//         </TooltipPrimitive.Provider>
//     )
// }

import * as TooltipPrimitive from "@radix-ui/react-tooltip"

export function Tooltip({ label, children }: { label: string; children: React.ReactNode }) {
    return (
        <TooltipPrimitive.Provider>
            <TooltipPrimitive.Root>
                <TooltipPrimitive.Trigger asChild>
                    {children}
                </TooltipPrimitive.Trigger>
                <TooltipPrimitive.Portal>
                    <TooltipPrimitive.Content
                        side="bottom"
                        align="center"
                        sideOffset={6}
                        avoidCollisions
                        collisionPadding={8}
                        className="z-[9999] max-w-xs break-words rounded bg-black px-2 py-1 text-xs text-white shadow pointer-events-auto"
                    >
                        {label}
                        <TooltipPrimitive.Arrow className="fill-black" />
                    </TooltipPrimitive.Content>
                </TooltipPrimitive.Portal>
            </TooltipPrimitive.Root>
        </TooltipPrimitive.Provider>
    )
}