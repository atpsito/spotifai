import { Menu } from "@headlessui/react";
import React from "react";
import Image from "next/image";
import { signOut } from "next-auth/react";

import { ProfileProps as Props } from "./Profile.types";
import { twMerge } from "tailwind-merge";
import { useFetchMe } from "@/services/user/user.service.hooks";

const Profile: React.FC<Props> = props => {
  const { data: user } = useFetchMe();
  const [image] = user?.images ?? [];

  if (!user) return null;

  return (
    <div className="relative isolate">
      <Menu>
        <Menu.Button>
          <Image
            src={image.url}
            width={24}
            height={24}
            alt={user.display_name}
            className="rounded-full"
          />
        </Menu.Button>
        <Menu.Items className="absolute right-0 rounded p-1 bg-zinc-800 min-w-[188px]">
          <Menu.Item>
            {({ active }) => (
              <p
                className={twMerge(
                  "py-3 pl-3 pr-2 text-xs rounded",
                  active ? "bg-zinc-700" : "bg-transparent"
                )}
                onClick={() => signOut()}
              >
                Sign Out
              </p>
            )}
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </div>
  );
};

export default Profile;
