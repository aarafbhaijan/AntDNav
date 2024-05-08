import React from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Dropdown, Menu, Space } from "antd";
import Link from "next/link";

export const MegaMenu = () => {
  return (
    <div className="flex flex-wrap">
      <Space direction="vertical" >
        <Menu
          items={[
            { key: "8", type: "group", label: "Navigation Two" },
            {
              key: "9",
              icon: <AppstoreOutlined />,
              label: "Navigation Two",
            },
            {
              key: "10",
              icon: <AppstoreOutlined />,
              label: "Navigation Two",
            },
            {
              key: "11",
              icon: <AppstoreOutlined />,
              label: "Navigation Two",
            },
          ]}
        />
        <Menu
          items={[
            { key: "8", type: "group", label: "Navigation Two" },
            {
              key: "9",
              icon: <AppstoreOutlined />,
              label: "Navigation Two",
            },
            {
              key: "10",
              icon: <AppstoreOutlined />,
              label: "Navigation Two",
            },
            {
              key: "11",
              icon: <AppstoreOutlined />,
              label: "Navigation Two",
            },
          ]}
        />
      </Space>
      <Space direction="vertical">
        <Menu
          items={[
            { key: "8", type: "group", label: "Navigation Two" },
            {
              key: "9",
              icon: <AppstoreOutlined />,
              label: "Navigation Two",
            },
            {
              key: "10",
              icon: <AppstoreOutlined />,
              label: "Navigation Two",
            },
            {
              key: "11",
              icon: <AppstoreOutlined />,
              label: "Navigation Two",
            },
          ]}
        />
        <Menu
          items={[
            { key: "8", type: "group", label: "Navigation Two" },
            {
              key: "9",
              icon: <AppstoreOutlined />,
              label: <Link href={"/Navigation Two"}>Navigation Two</Link>,
            },
            {
              key: "10",
              icon: <AppstoreOutlined />,
              label: "Navigation Two",
            },
            {
              key: "11",
              icon: <AppstoreOutlined />,
              label: "Navigation Two",
            },
          ]}
        />
      </Space>
      <Space direction="vertical">
        <Menu
          items={[
            { key: "8", type: "group", label: "Navigation Two" },
            {
              key: "9",
              icon: <AppstoreOutlined />,
              label: "Navigation Two",
            },
            {
              key: "10",
              icon: <AppstoreOutlined />,
              label: "Navigation Two",
            },
            {
              key: "11",
              icon: <AppstoreOutlined />,
              label: "Navigation Two",
            },
          ]}
        />
        <Menu
          items={[
            { key: "8", type: "group", label: "Navigation Two" },
            {
              key: "9",
              icon: <AppstoreOutlined />,
              label: "Navigation Two",
            },
            {
              key: "10",
              icon: <AppstoreOutlined />,
              label: "Navigation Two",
            },
            {
              key: "11",
              icon: <AppstoreOutlined />,
              label: "Navigation Two",
            },
          ]}
        />
      </Space>
    </div>
  );
};
type MenuItem = Required<MenuProps>["items"][number];
const items: MenuItem[] = [
  {
    key: "sub2",
    icon: <AppstoreOutlined />,
    label: "Navigation Two",
    children: [
      { key: "6", label: "Option 6" },
      {
        key: "sub3",
        label: "Submenu",
        children: [
          { key: "7", label: <Link href={"/opt6"}>Option 6</Link> },
          {
            key: "8",
            type: "group",
            label: <MegaMenu />,
            style: {
              height: "10rem",
            },
          },
        ],
      },
    ],
  },
];

const items2: MenuItem[] = [
  {
    key: "sub3",
    icon: <AppstoreOutlined />,
    label: "bulk Links",
    children: [
      { key: "5", label: <Link href={"/opt6"}>Option 5</Link> },
      { key: "6", label: "Option 6" },
      {
        key: "sub3",
        label: "Mega Nav",
        children: items,
      },
    ],
  },
];

const Navbar = () => {
  return (
    <div>
      <Menu
        items={[
          {
            label: "Mega Menu",
            key: "MM",
            icon: "",

            children: [
              {
                label: <MegaMenu />,
                key: "mega menu",
                style: {
                  height: "30rem",
                },
              },
            ],
          },
        ]}
      />

      <Dropdown
        menu={{ items }}
        placement="bottomLeft"
        arrow={{ pointAtCenter: true }}
      >
        <Menu items={items2}>Bulk Menu</Menu>
      </Dropdown>
    </div>
  );
};

export default Navbar;
