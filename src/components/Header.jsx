import { useState } from 'react';
import {
  RiUser2Line,
  RiMessage3Line,
  RiGroupLine,
  RiContactsLine,
  RiSettings2Line,
  RiMoonClearLine,
} from 'react-icons/ri';
import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Logo from '../assets/logo.svg'

export default function Header() {
  const [activeIcon, setActiveIcon] = useState(null);
  const [datkTheme, setDarkTheme] = useState(false);

  const menuItems = [
    { id: 'user', icon: <RiUser2Line className="!w-[25px] !h-[25px]" /> },
    { id: 'message', icon: <RiMessage3Line className="!w-[25px] !h-[25px]" /> },
    { id: 'group', icon: <RiGroupLine className="!w-[25px] !h-[25px]" /> },
    { id: 'contacts', icon: <RiContactsLine className="!w-[25px] !h-[25px]" /> },
    { id: 'settings', icon: <RiSettings2Line className="!w-[25px] !h-[25px]" /> },
  ];

  return (
    <>
      {/* Mobile header */}
      <div className="block fixed bottom-0 w-full bg-white shadow-md z-50 lg:hidden">
        <Menubar className="flex flex-row justify-around items-center pt-6 pb-6">
          {menuItems.map((item) => (
            <MenubarMenu key={item.id}>
              <MenubarTrigger className="p-0">
                <Button
                  onClick={() => setActiveIcon(item.id)}
                  className={`p-0 transition-colors duration-200 ${activeIcon === item.id
                    ? 'bg-[#7269ef1a] text-[#7269ef]'
                    : 'bg-transparent text-gray-700'
                    }`}
                >
                  {item.icon}
                </Button>
              </MenubarTrigger>
            </MenubarMenu>
          ))}

          <MenubarMenu>
            <MenubarTrigger className="p-0">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </MenubarTrigger>
          </MenubarMenu>
        </Menubar>
      </div>

      {/* desktop header */}
      <div className='hidden fixed bottom-0 left-0 h-full bg-white shadow-md z-50 lg:flex flex-col place-content-between pt-4 pb-4 pl-2 pr-2'>
        <div className='h[10%] flex flex-col justify-center items-center'>
          <img src={Logo} alt='logo' className='h-[30px] w-[30px]' />
        </div>
        <Menubar className="flex flex-col justify-around items-center pt-6 pb-6 h-[60%] border-0">
          {menuItems.map((item) => (
            <MenubarMenu key={item.id}>
              <MenubarTrigger className="p-0">
                <Button
                  onClick={() => setActiveIcon(item.id)}
                  className={`p-0 transition-colors duration-200 ${activeIcon === item.id
                    ? 'bg-[#7269ef1a] text-[#7269ef]'
                    : 'bg-transparent text-gray-700'
                    }`}
                >
                  {item.icon}
                </Button>
              </MenubarTrigger>
            </MenubarMenu>
          ))}
        </Menubar>
        <Menubar className='flex flex-col justify-center items-center border-0 pb-10 gap-2'>
          <MenubarMenu>
            <MenubarTrigger className="p-0 border-0 bg-transparent">
              <Button className={`p-0 transition-colors duration-200 bg-transparent '}`}>
              <RiMoonClearLine className='!w-[24px] !h-[24px] p-0 text-gray-700' />
              </Button>
            </MenubarTrigger>
            <MenubarTrigger className="p-0">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </MenubarTrigger>
          </MenubarMenu>
        </Menubar>

      </div>
    </>
  );
}
