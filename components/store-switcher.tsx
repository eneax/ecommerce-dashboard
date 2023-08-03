"use client"

import * as React from "react"
import { useParams, useRouter } from "next/navigation"
import { Store as StoreIcon, ChevronsUpDown, Check, PlusCircle } from "lucide-react"

import { Store } from "@prisma/client"
import { cn } from "@/lib/utils"
import { useStoreModal } from "@/hooks/use-store-modal"

import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Command, CommandList, CommandInput, CommandEmpty, CommandGroup, CommandItem, CommandSeparator } from "@/components/ui/command"

type PopoverTriggerProps = React.ComponentPropsWithoutRef<typeof PopoverTrigger>

interface StoreSwitcherProps extends PopoverTriggerProps {
  items: Store[]
}

export const StoreSwitcher = ({ className, items = [] }: StoreSwitcherProps) => {
  const params = useParams()
  const router = useRouter()
  const storeModal = useStoreModal()
  const [open, setOpen] = React.useState(false)

  const formattedItems = items.map((item) => ({
    name: item.name,
    value: item.id,
  }))

  const currentStore = formattedItems.find((item) => item.value === params.storeId)

  const handleStoreSelect = (store: { name: string, value: string }) => {
    setOpen(false)
    router.push(`/${store.value}`)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          role="combobox"
          aria-expanded={open}
          aria-label="Select a store"
          className={cn("w-[200px] justify-between", className)}
        >
          <StoreIcon className="mr-2 h-4 w-4" />
          <span>{currentStore?.name}</span>
          <ChevronsUpDown className="ml-auto h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandInput placeholder="Search store" />
            <CommandEmpty>No store found.</CommandEmpty>
            <CommandGroup heading="Stores">
              {formattedItems.map((item) => (
                <CommandItem
                  key={item.value}
                  onSelect={() => handleStoreSelect(item)}
                  className="text-sm"
                >
                  <StoreIcon className="mr-2 w-4 h-4" />
                  <span>{item.name}</span>
                  <Check className={cn("ml-auto w-4 h-4", currentStore?.value === item.value ? "opacity-100" : "opacity-0")} />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>

          <CommandSeparator />

          <CommandList>
            <CommandGroup>
              <CommandItem onSelect={() => {
                setOpen(false)
                storeModal.onOpen()
              }}>
                <PlusCircle className="mr-2 w-4 h-4" />
                <span>Create store</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
