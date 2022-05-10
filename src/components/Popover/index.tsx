import { WarningIcon } from "@chakra-ui/icons";
import { Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody } from "@chakra-ui/react";

interface PopoverProps{
  title: string;
  about?: string;
  pontinhos: string;
}

export function PopoverComponents({about, title, pontinhos}: PopoverProps) {
  return(
    <Popover>
      <PopoverTrigger>
        <WarningIcon color={"gray.400"}/>
      </PopoverTrigger>
      <PopoverContent bg='white' color='gray.600'>
        <PopoverHeader fontWeight='semibold'>{title}</PopoverHeader>
        <PopoverArrow bg='gray.500' />
        <PopoverCloseButton bg='yellow.500' />
        <PopoverBody>{about},{pontinhos}</PopoverBody>
      </PopoverContent>
    </Popover>
  )
}