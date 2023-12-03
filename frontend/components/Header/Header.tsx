'use client'

import Image from 'next/image'
import styles from './Header.module.css'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from '@nextui-org/navbar'
import {Link} from '@nextui-org/link'
import {Button} from '@nextui-org/button'
import {Input} from '@nextui-org/input'
import {DropdownItem, DropdownTrigger, Dropdown, DropdownMenu} from '@nextui-org/dropdown'

const Header = () => {
  return (
    <div className={'bg-myPrimaryLight dark:bg-myPrimaryDark h-80'}>
      <Image
        src="/image/main/spikelet.jpg"
        width={400}
        height={300}
        alt="spikelet"
        priority
        className={'absolute -top-0 left-0'}
      />
      <div className={'container mx-auto'}>
      <Navbar position="static" isBlurred={false} maxWidth={'full'} className={'bg-opacity-0'}>
        <NavbarBrand>
          {/*<AcmeLogo />*/}
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <Input
            classNames={{
              base: 'max-w-full sm:max-w-[10rem] h-10',
              mainWrapper: 'h-full',
              input: 'text-small',
              inputWrapper: 'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20'
            }}
            placeholder="Type to search..."
            size="sm"
            // startContent={<SearchIcon size={18} />}
            type="search"
          />
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                  // endContent={icons.chevron}
                  radius="sm"
                  variant="light"
                >
                  Features
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="ACME features"
              className="w-[340px]"
              itemClasses={{
                base: 'gap-4'
              }}
            >
              <DropdownItem
                key="autoscaling"
                description="ACME scales apps to meet user demand, automagically, based on load."
                // startContent={icons.scale}
              >
                Autoscaling
              </DropdownItem>
              <DropdownItem
                key="usage_metrics"
                description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                // startContent={icons.activity}
              >
                Usage Metrics
              </DropdownItem>
              <DropdownItem
                key="production_ready"
                description="ACME runs on ACME, join us and others serving requests at web scale."
                // startContent={icons.flash}
              >
                Production Ready
              </DropdownItem>
              <DropdownItem
                key="99_uptime"
                description="Applications stay on the grid with high availability and high uptime guarantees."
                // startContent={icons.server}
              >
                +99% Uptime
              </DropdownItem>
              <DropdownItem
                key="supreme_support"
                description="Overcome any challenge with a supporting team ready to respond."
                // startContent={icons.user}
              >
                +Supreme Support
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavbarItem isActive>
            <Link href="#" aria-current="page">
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Integrations
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      </div>
    </div>
  )
}

export default Header