"use client";

import { useGlobalState } from "@/app/context/globalProvider";
import Image from "next/image";
import { styled } from "styled-components";
import menu from "@/app/utils/nav";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Sidebar = () => {
  const { theme } = useGlobalState();

  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (link: string) => {
    router.push(link);
  };

  return (
    <SidebarStyled theme={theme}>
      <div className="profile">
        <div className="profile-overlay"></div>
        <div className="image">
          <Image
            width={50}
            height={50}
            src={"/messi.jpg"}
            alt="profile"
            priority={true}
            className="rounded-full object-cover w-auto h-auto"
          />
        </div>
        <h1>
          <span>Galih</span>
        </h1>
      </div>
      <ul className="flex flex-col items-center justify-center gap-4">
        {menu.map((items) => (
          <li
            key={items.id}
            className={`flex ${pathname === items.link ? "active" : ""}`}
            onClick={() => handleClick(items.link)}
          >
            {items.icon}
            <Link href={items.link}>{items.title}</Link>
          </li>
        ))}
      </ul>
      <button></button>
    </SidebarStyled>
  );
};

const SidebarStyled = styled.nav`
  position: relative;
  width: ${(props) => props.theme.sidebarWidth};
  background-color: ${(props) => props.theme.colorBg2};
  border-right: 2px solid ${(props) => props.theme.borderColor2};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${(props) => props.theme.colorGrey3};

  .profile {
    margin: 1.5rem;
    padding: 1rem 0.8rem;
    position: relative;
    border-radius: 1rem;
    cursor: pointer;
    font-weight: 400;
    color: ${(props) => props.theme.colorGrey0};
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    .profile-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      backdrop-filter: blur(10px);
      z-index: 0;
      background: ${(props) => props.theme.colorBg3};
      transition: all 0.55s linear;
      border-radius: 1rem;
      opacity: 0.2;
      border: 2px solid ${(props) => props.theme.borderColor2};
    }
    h1 {
      font-size: 1.2rem;
      font-weight: bold;
    }
  }
`;

export default Sidebar;
