import * as HoverCard from "@radix-ui/react-hover-card";
import * as Popover from "@radix-ui/react-popover";
import { useMediaQuery } from "react-responsive";
import { Avatar } from "../Avatar";
import {
  HoverCardContent,
  HoverCardArrow,
  PopoverContent,
  PopoverArrow,
  UserInfo,
  UserName,
  UserEmail,
  AvatarStyled,
} from "./PersonalCard.styles";

interface PersonalCardProps {
  user: any;
}

export const PersonalCard = ({ user }: PersonalCardProps) => {
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  return (
    <>
      {isTablet ? (
        <HoverCard.Root>
          <HoverCard.Trigger asChild>
            <Avatar src={user.avatar} />
          </HoverCard.Trigger>
          <HoverCard.Portal>
            <HoverCardContent>
              <AvatarStyled src={user.avatar} />
              <UserInfo>
                <UserName>
                  {user.firstName} {user.lastName}
                </UserName>
                <UserEmail>
                  {user.firstName}
                  {user.lastName}@mail.com
                </UserEmail>
              </UserInfo>
              <HoverCardArrow />
            </HoverCardContent>
          </HoverCard.Portal>
        </HoverCard.Root>
      ) : (
        <Popover.Root>
          <Popover.Trigger asChild>
            <Avatar src={user.avatar} />
          </Popover.Trigger>
          <Popover.Portal>
            <PopoverContent>
              <AvatarStyled src={user.avatar} />
              <UserInfo>
                <UserName>
                  {user.firstName} {user.lastName}
                </UserName>
                <UserEmail>
                  {user.firstName}
                  {user.lastName}@mail.com
                </UserEmail>
              </UserInfo>
              <PopoverArrow />
            </PopoverContent>
          </Popover.Portal>
        </Popover.Root>
      )}
    </>
  );
};
